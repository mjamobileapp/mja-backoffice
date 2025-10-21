<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import {
  CalendarDate,
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
  today,
} from '@internationalized/date'
import { toDate } from 'date-fns'
import * as z from 'zod'
import { toast } from '@/components/ui/toast'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { PencilIcon } from 'lucide-vue-next'

const open = ref(false)
const props = defineProps<{
  id: {
    type: Number
    required: true
  }
}>()

const emit = defineEmits<{
  (e: 'dataEdited'): void
}>()

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const dateValueSurat = ref<DateValue | undefined>()
const dateValueRups = ref<DateValue | undefined>()

const isDialogOpen = ref(false)

const formSchema = toTypedSchema(
  z.object({
    tglSurat: z.string().datetime(),
    tglRups: z.string().datetime(),
    perihal: z.string(),
  })
)

const { handleSubmit, resetForm, setValues, setFieldValue } = useForm({
  validationSchema: formSchema,
  initialValues: {
    tglSurat: '',
    tglRups: '',
    perihal: '',
  },
})

async function openDialog() {
  isDialogOpen.value = true
  await fetchData()
}

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

// get token====================
const accessToken = useCookie('accessToken')
const token = accessToken.value.token

async function fetchData() {
  try {
    const response = await fetch(`${baseUrl}/sirkulerRups/${props.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.ok) {
      const { data } = await response.json()
      console.log(data)
      const dateRups = toDate(data.tglRups)
      const dateSurat = toDate(data.tglSurat)
      setValues({
        perihal: data.perihal,
        tglSurat: dateSurat.toISOString(),
        tglRups: dateRups.toISOString(),
      })
      // set nilai dateValue dari tglAcara untuk menampilkan di calendar
      dateValueRups.value = new CalendarDate(
        dateRups.getFullYear(),
        dateRups.getMonth() + 1,
        dateRups.getDate()
      )
      dateValueSurat.value = new CalendarDate(
        dateSurat.getFullYear(),
        dateSurat.getMonth() + 1,
        dateSurat.getDate()
      )
    } else {
      console.error('Gagal mengambil data')
    }
  } catch (error) {
    console.error('Fetch error:', error)
  }
}

// async function getDataMasterCode() {
//   try {
//     const response = await fetch(`${baseUrl}/masterCode`, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     const json = await response.json()
//     codes.value = json.data
//   } catch (err) {
//     console.error('Gagal mengambil kode:', err)
//   }
// }

// onMounted(() => {
//   getDataMasterCode()
//   // console.log('id:' + props.id)
// })

watch(isDialogOpen, async open => {
  // if (open) {
  //   await getDataMasterCode()
  // } else {
  resetForm()
  // }
})

const currentUser = useCookie('currentUser')
const email = computed(() => currentUser.value?.email || 'no-email@example.com')

const isSubmitting = ref(false)

const onSubmit = handleSubmit(async values => {
  isSubmitting.value = true
  try {
    const dataToSend = {
      ...values,
      createdBy: email.value,
      createdDate: new Date(),
    }
    // console.log(dataToSend)
    const response = await fetch(`${baseUrl}/sirkulerRups/${props.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(dataToSend),
    })

    if (!response.ok) throw new Error('Gagal menyimpan data')

    toast({
      title: 'Success',
      description: 'Data berhasil disimpan',
    })
    setTimeout(() => {
      emit('dataEdited')
      resetForm()
      isDialogOpen.value = false
    }, 300)
  } catch (error) {
    console.log(error)
    toast({
      title: 'Error',
      description: 'Terjadi kesalahan saat menyimpan data',
      variant: 'destructive',
    })
  } finally {
    isSubmitting.value = false
  }
})
</script>

<template>
  <Dialog :open="isDialogOpen" @openChange="isDialogOpen = $event">
    <DialogTrigger as-child>
      <Button class="mr-2" @click="openDialog"
        ><PencilIcon class="w-4 h-4 mr-2" /> Edit Data</Button
      >
    </DialogTrigger>
    <DialogContent class="sm:max-w-[800px] [&>button]:hidden">
      <DialogHeader>
        <DialogTitle>Edit Sirkuler RUPS</DialogTitle>
      </DialogHeader>
      <form class="space-y-4" @submit="onSubmit">
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
                      value ? df.format(toDate(dateValueSurat, getLocalTimeZone())) : 'Pick a date'
                    }}</span>
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent class="p-0">
                <Calendar
                  v-model:placeholder="placeholder"
                  v-model="dateValueSurat"
                  calendar-label="Tanggal Surat"
                  initial-focus
                  @update:model-value="
                    v => {
                      if (v) {
                        dateValueSurat = v
                        setFieldValue('tglSurat', toDate(v).toISOString())
                      } else {
                        dateValueSurat = undefined
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
                      value ? df.format(toDate(dateValueRups, getLocalTimeZone())) : 'Pick a date'
                    }}</span>
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent class="p-0">
                <Calendar
                  v-model:placeholder="placeholder"
                  v-model="dateValueRups"
                  calendar-label="Tanggal Rups"
                  initial-focus
                  @update:model-value="
                    v => {
                      if (v) {
                        dateValueRups = v
                        setFieldValue('tglRups', toDate(v).toISOString())
                      } else {
                        dateValueRups = undefined
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
        <DialogFooter>
          <DialogClose as-child>
            <Button type="button" variant="secondary" @click="isDialogOpen = false">Close</Button>
          </DialogClose>
          <Button type="submit" :disabled="isSubmitting">
            <Loader2 v-if="isSubmitting" class="w-4 h-4 mr-2 animate-spin" />
            {{ isSubmitting ? 'Updating..' : 'Update' }}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
