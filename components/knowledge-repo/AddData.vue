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

const direksis = [
  { nama: 'DIREKTUR UTAMA', direksi: 'DIREKTUR UTAMA' },
  {
    nama: 'DIREKTUR KEUANGAN DAN MANAJEMEN RISIKO',
    direksi: 'DIREKTUR KEUANGAN DAN MANAJEMEN RISIKO',
  },
  { nama: 'DIREKTUR OPERASI PEMBANGKIT BATUBARA', direksi: 'DIREKTUR OPERASI PEMBANGKIT BATASARA' },
  { nama: 'DIREKTUR OPERASI PEMBANGKIT GAS', direksi: 'DIREKTUR OPERASI PEMBANGKIT GAS' },
  {
    nama: 'DIREKTUR MANAJEMEN HUMAN CAPITAL DAN ADMINISTRASI',
    direksi: 'DIREKTUR MANAJEMEN HUMAN CAPITAL DAN ADMINISTRASI',
  },
  {
    nama: 'DIREKTUR PENGEMBANGAN BISNIS DAN NIAGA',
    direksi: 'DIREKTUR PENGEMBANGAN BISNIS DAN NIAGA',
  },
] as const

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const codes = ref<{ id: string; code: string }[]>([])
const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const formSchema = toTypedSchema(
  z.object({
    acara: z.string(),
    folderCode: z.string(),
    idCode: z.string(),
    tglAcara: z
      .string()
      .datetime()
      .optional()
      .refine(date => date !== undefined, 'Please select a valid date.'),
    direksi: z.string().min(1, 'Please select a direksi.'),
    files: z.array(z.any()).optional(),
  })
)

const { handleSubmit, resetForm, setFieldValue, values } = useForm({
  validationSchema: formSchema,
  initialValues: {
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

async function getDataMasterCode() {
  try {
    const response = await fetch(`${baseUrl}/masterCode`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const fetchedData = await response.json()
    codes.value = fetchedData.data
  } catch (error) {
    console.error('Gagal mengambil data:', error)
  }
}

onMounted(() => {
  getDataMasterCode()
})

const currentUser = useCookie('currentUser') // diasumsikan cookie bernilai object stringified
const email = computed(() => currentUser.value?.email || 'no-email@example.com')

const isSubmitting = ref(false)

async function onSubmit(values: any) {
  // console.log('Values on submit:', values)
  isSubmitting.value = true
  const dataForm: any = {
    acara: values.acara,
    idCode: values.idCode,
    tglAcara: values.tglAcara,
    direksi: values.direksi,
    folderCode: values.folderCode,
    createdBy: email.value,
    createdDate: new Date(),
  }
  isDialogOpen.value = false

  try {
    const response = await fetch(`${baseUrl}/knowledgeRepo`, {
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
      formDataFile.append('idKnowledgeRepo', responseData.data.id) // Tambahkan ID di luar loop
      values.files.forEach(file => {
        formDataFile.append('files', file)
      })
      // console.log('FormData File:', formDataFile)

      try {
        const responseUpload = await $fetch(`${baseUrl}/uploadFileRepo`, {
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
      <Form
        class="space-y-8"
        v-slot="{ setFieldValue }"
        :validation-schema="formSchema"
        @submit="onSubmit"
      >
        <DialogHeader>
          <DialogTitle>Add Data Materi Presentasi</DialogTitle>
        </DialogHeader>
        <FormField v-slot="{ componentField }" name="acara">
          <FormItem>
            <FormLabel>Acara</FormLabel>
            <FormControl>
              <Input type="text" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ field, value }" name="tglAcara">
          <FormItem class="flex flex-col">
            <FormLabel>Tanggal Acara</FormLabel>
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
                  calendar-label="Date of birth"
                  initial-focus
                  @update:model-value="
                    v => {
                      if (v) {
                        dateValue = v
                        setFieldValue('tglAcara', toDate(v).toISOString())
                      } else {
                        dateValue = undefined
                        setFieldValue('tglAcara', undefined)
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
        <FormField v-slot="{ value }" name="idCode">
          <FormItem class="flex flex-col">
            <FormLabel>Code</FormLabel>

            <Popover v-model:open="open">
              <PopoverTrigger as-child>
                <FormControl>
                  <Button
                    variant="outline"
                    role="combobox"
                    :aria-expanded="open"
                    :class="cn('justify-between', !value && 'text-muted-foreground')"
                  >
                    {{ value ? codes.find(item => item.id === value)?.code : 'Select Code...' }}

                    <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent class="p-0">
                <Command>
                  <CommandInput placeholder="Search Code..." />
                  <CommandEmpty>No Code found.</CommandEmpty>
                  <CommandList>
                    <CommandGroup>
                      <CommandItem
                        v-for="item in codes"
                        :key="item.id"
                        :value="item.code"
                        @select="
                          () => {
                            setFieldValue('idCode', item.id)
                            open = false
                          }
                        "
                      >
                        <Check
                          :class="
                            cn('mr-2 h-4 w-4', value === item.id ? 'opacity-100' : 'opacity-0')
                          "
                        />
                        {{ item.code }}
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="direksi">
          <FormItem>
            <FormLabel>Direksi</FormLabel>
            <Select v-bind="componentField">
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Direksi" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem v-for="item in direksis" :key="item.nama" :value="String(item.nama)">
                    {{ item.nama }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="folderCode">
          <FormItem>
            <FormLabel>Folder Code</FormLabel>
            <FormControl>
              <Input type="text" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
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
    </DialogContent>
  </Dialog>
</template>
