<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { toTypedSchema } from '@vee-validate/zod'
import { FieldArray, useForm } from 'vee-validate' // Import Field
import {
  CalendarDate,
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
  today,
} from '@internationalized/date'
import { toDate } from 'date-fns'
import * as z from 'zod'
import { toast } from '~/components/ui/toast'

const open = ref(false)

const emit = defineEmits(['dataAdded'])

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const formSchema = toTypedSchema(
  z.object({
    tglSurat: z.string().datetime(),
    tglRups: z.string().datetime(),
    perihal: z.string(),
    files: z.array(z.any()),
  })
)

const { handleSubmit, resetForm, setFieldValue } = useForm({
  validationSchema: formSchema,
  initialValues: {
    tglSurat: '',
    tglRups: '',
    perihal: '',
    files: [],
  },
})

const isDialogOpen = ref(false)

function openDialog() {
  isDialogOpen.value = true
}

function closeDialog() {
  isDialogOpen.value = false
  resetForm()
}

// get token====================
const accessToken = useCookie('accessToken')
const token = accessToken.value.token

const currentUser = useCookie('currentUser') // diasumsikan cookie bernilai object stringified
const email = computed(() => currentUser.value?.email || 'no-email@example.com')

const isSubmitting = ref(false)

async function onSubmit(values: any) {
  // console.log('Values on submit:', values)
  isSubmitting.value = true
  const dataForm: any = {
    tglSurat: values.tglSurat,
    perihal: values.perihal,
    tglRups: values.tglRups,
    createdBy: email.value,
    createdDate: new Date(),
  }
  isDialogOpen.value = false

  try {
    const response = await fetch(`${baseUrl}/sirkulerRups`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForm),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Error submitting data:', errorData)
      toast({
        title: 'Error',
        description: errorData?.message || 'Gagal menyimpan data. Silakan coba lagi.',
        variant: 'destructive',
      })
      return
    }

    const responseData = await response.json()
    // console.log('Response Data ID:', responseData?.data?.id)

    // Upload File ================
    if (responseData?.data?.id && Array.isArray(values.files) && values.files.length > 0) {
      const formDataFile = new FormData()
      formDataFile.append('createdBy', dataForm.createdBy)
      formDataFile.append('idSirkulerRups', responseData.data.id) // Tambahkan ID di luar loop
      values.files.forEach(file => {
        formDataFile.append('files', file)
      })
      // console.log('FormData File:', formDataFile)

      try {
        const responseUpload = await $fetch(`${baseUrl}/uploadFileSirkulerRups`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formDataFile,
        })
        // console.log('Upload successful:', responseUpload)
        toast({
          title: 'Success',
          description: 'File upload successful',
        })
      } catch (error) {
        console.error('Upload failed:', error)
        toast({
          title: 'Error',
          description: 'File upload failed',
          variant: 'destructive',
        })
      }
    } else if (Array.isArray(values.files) && values.files.length > 0 && !responseData?.data?.id) {
      toast({
        title: 'Warning',
        description:
          'Data berhasil disimpan, tetapi ID Knowledge Repo tidak diterima. File tidak diunggah.',
        variant: 'warning',
      })
    }
    // =====================================

    toast({
      title: 'Success',
      description: 'Data berhasil disimpan.',
    })
    setTimeout(() => {
      emit('dataAdded')
      isDialogOpen.value = false
      resetForm()
    }, 300)
  } catch (error) {
    console.error('Error submitting data:', error)
    toast({
      title: 'Error',
      description: 'Terjadi kesalahan saat mengirim data.',
      variant: 'destructive',
    })
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <Dialog :open="isDialogOpen" @openChange="isDialogOpen = $event">
    <DialogTrigger as-child>
      <Button @click="openDialog">Add Data</Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[800px] [&>button]:hidden">
      <div class="max-h-[60vh] overflow-y-auto">
        <Form
          class="space-y-8"
          v-slot="{ setFieldValue }"
          :validation-schema="formSchema"
          @submit="onSubmit"
        >
          <DialogHeader>
            <DialogTitle>Add Data Sirkuler RUPS</DialogTitle>
          </DialogHeader>
          <FormField v-slot="{ field, value }" name="tglSurat">
            <FormItem class="flex flex-col">
              <FormLabel>Tanggal Surat</FormLabel>
              <Popover>
                <PopoverTrigger as-child>
                  <FormControl>
                    <Button
                      variant="outline"
                      :class="
                        cn('justify-start text-left font-normal', !value && 'text-muted-foreground')
                      "
                    >
                      <RadixIconsCalendar class="mr-2 h-4 w-4 opacity-50" />
                      <span>{{
                        value ? df.format(toDate(dateSurat, getLocalTimeZone())) : 'Pick a date'
                      }}</span>
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent class="p-0">
                  <Calendar
                    v-model:placeholder="placeholder"
                    v-model="dateSurat"
                    calendar-label="Tanggal Surat"
                    initial-focus
                    @update:model-value="
                      v => {
                        if (v) {
                          dateSurat = v
                          setFieldValue('tglSurat', toDate(v).toISOString())
                        } else {
                          dateSurat = undefined
                          setFieldValue('tglSurat', undefined)
                        }
                      }
                    "
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
            <input type="hidden" v-bind="field" />
          </FormField>
          <FormField v-slot="{ componentField }" name="perihal">
            <FormItem>
              <FormLabel>Perihal</FormLabel>
              <FormControl>
                <Input type="text" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ field, value }" name="tglRups">
            <FormItem class="flex flex-col">
              <FormLabel>Tanggal Rups</FormLabel>
              <Popover>
                <PopoverTrigger as-child>
                  <FormControl>
                    <Button
                      variant="outline"
                      :class="
                        cn('justify-start text-left font-normal', !value && 'text-muted-foreground')
                      "
                    >
                      <RadixIconsCalendar class="mr-2 h-4 w-4 opacity-50" />
                      <span>{{
                        value ? df.format(toDate(dateValue, getLocalTimeZone())) : 'Pick a date'
                      }}</span>
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent class="p-0">
                  <Calendar
                    v-model:placeholder="placeholder"
                    v-model="dateValue"
                    calendar-label="Tanggal Rups"
                    initial-focus
                    @update:model-value="
                      v => {
                        if (v) {
                          dateValue = v
                          setFieldValue('tglRups', toDate(v).toISOString())
                        } else {
                          dateValue = undefined
                          setFieldValue('tglRups', undefined)
                        }
                      }
                    "
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
            <input type="hidden" v-bind="field" />
          </FormField>
          <FormField name="files">
            <FormItem>
              <FormLabel>Upload Files</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  multiple
                  @input="(event) => {
                  const target = event.target as HTMLInputElement;
                  if (target.files) {
                    setFieldValue('files', Array.from(target.files));
                  }
                }"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <DialogFooter>
            <DialogClose as-child>
              <Button type="button" variant="secondary" @click="isDialogOpen = false">Close</Button>
            </DialogClose>
            <Button type="submit" :disabled="isSubmitting">
              <Loader2 v-if="isSubmitting" class="w-4 h-4 mr-2 animate-spin" />
              {{ isSubmitting ? 'Saving..' : 'Save' }}
            </Button>
          </DialogFooter>
        </Form>
      </div>
    </DialogContent>
  </Dialog>
</template>
