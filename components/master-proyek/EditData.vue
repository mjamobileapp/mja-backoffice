<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toTypedSchema } from '@vee-validate/zod'
import { PencilIcon } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { ref, onMounted } from 'vue'
import { toast } from 'vue-sonner'
import * as z from 'zod'

import {
  CalendarDate,
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
  today,
} from '@internationalized/date'
import { toDate } from 'date-fns'

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const props = defineProps<{
  id: {
    type: Number
    required: true
  }
}>()
const emit = defineEmits<{
  (e: 'dataEdited'): void
}>()
const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

// const editedItem = ref({ ...props.item })
console.log(props.id)
// onMounted(() => {
//   fetchData()
//   // console.log(props.item.code)
// })
const currentUser = useCookie('currentUser') // diasumsikan cookie bernilai object stringified
const username = computed(() => currentUser.value?.username || 'no-email@example.com')

const profileFormSchema = toTypedSchema(
  z.object({
    namaPekerjaan: z.string(),
    noKontrak: z.string(),
    nilaiKontrak: z.number(),
    lokasi: z.string(),
    tglMulai: z.string().datetime(),
    tglSelesai: z.string().datetime(),
  })
)

const { handleSubmit, resetForm, setValues, values, setFieldValue } = useForm({
  validationSchema: profileFormSchema,
  initialValues: {
    namaPekerjaan: '',
    noKontrak: '',
    nilaiKontrak: 0,
    lokasi: '',
    tglMulai: '',
    tglSelesai: '', // Use prop value directly as fallback
  },
})

const isDialogOpen = ref(false)

// Asumsi: dateMulai dan dateSelesai adalah ref() untuk Calendar
// Asumsi: toDate adalah fungsi untuk konversi ke objek Date JS
// Asumsi: setValues adalah fungsi dari VeeValidate useForm

const dateMulai = ref<DateValue | undefined>()
const dateSelesai = ref<DateValue | undefined>()

async function fetchData() {
  try {
    const response = await fetch(`${baseUrl}/proyek/${props.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.ok) {
      const { data } = await response.json()
      console.log(data)

      // --- 1. Penanganan Nilai Kontrak (String ke Number) ---
      // Konversi string nilaiKontrak menjadi float.
      const nilaiKontrakNumber = parseFloat(data.nilaiKontrak)

      // --- 2. Penanganan Tanggal (Invalid Time Value) ---
      // Pastikan tglSelesai ada. Jika tidak, beri nilai default (misalnya null/undefined).
      const tglMulaiString = data.tglMulai
      const tglSelesaiString = data.tglSelesai // tglSelesai tidak ada di API return Anda

      // Inisialisasi Date Objects
      const dateMulaiObj = tglMulaiString ? toDate(tglMulaiString) : undefined

      // Jika tglSelesai tidak ada di API, gunakan tglMulai sebagai fallback atau null
      // Jika tglSelesai seharusnya ada tapi null, gunakan operator ||
      const dateSelesaiObj = tglSelesaiString ? toDate(tglSelesaiString) : undefined

      // Cek apakah toDate berhasil mengonversi. Jika tidak, nilai akan menjadi Invalid Date.
      if (dateMulaiObj && isNaN(dateMulaiObj.getTime())) {
        throw new Error('Invalid dateMulai value received from API.')
      }
      // Tambahkan pengecekan serupa untuk dateSelesaiObj jika diperlukan

      // --- 3. setValues ke VeeValidate ---
      setValues({
        namaPekerjaan: data.namaPekerjaan,
        noKontrak: data.noKontrak,
        // Kirim sebagai number agar validasi Zod/VeeValidate 'number' berhasil
        nilaiKontrak: nilaiKontrakNumber,
        lokasi: data.lokasi,
        // Kirim Date Object yang sudah valid atau undefined/null
        tglMulai: dateMulaiObj ? dateMulaiObj.toISOString() : undefined,
        tglSelesai: dateSelesaiObj ? dateSelesaiObj.toISOString() : undefined,
      })

      // --- 4. Set Nilai untuk Kalender (hanya jika objek Date valid) ---
      if (dateMulaiObj) {
        dateMulai.value = new CalendarDate(
          dateMulaiObj.getFullYear(),
          dateMulaiObj.getMonth() + 1, // Month + 1 karena CalendarDate berbasis 1
          dateMulaiObj.getDate()
        )
      }

      // Lakukan hal yang sama untuk dateSelesai, tapi hanya jika datanya valid
      if (dateSelesaiObj) {
        dateSelesai.value = new CalendarDate(
          dateSelesaiObj.getFullYear(),
          dateSelesaiObj.getMonth() + 1,
          dateSelesaiObj.getDate()
        )
      }
    } else {
      console.error('Gagal mengambil data. Status:', response.status)
    }
  } catch (error) {
    console.error('Fetch error:', error.message)
    // Tampilkan notifikasi error ke user jika perlu
  }
}

async function openDialog() {
  isDialogOpen.value = true
  await fetchData()
}

function closeDialog() {
  isDialogOpen.value = false
  resetForm()
}

const isSubmitting = ref(false)
// get token====================
const accessToken = useCookie('accessToken')
const token = accessToken.value.token

const onSubmit = handleSubmit(async () => {
  isSubmitting.value = true
  try {
    const dataForm = {
      namaPekerjaan: values.namaPekerjaan,
      noKontrak: values.noKontrak,
      nilaiKontrak: values.nilaiKontrak,
      lokasi: values.lokasi,
      tglMulai: values.tglMulai,
      tglSelesai: values.tglSelesai,
      createdBy: username.value,
      createdDate: new Date(),
    }

    const response = await fetch(`${baseUrl}/proyek/${props.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataForm),
    })

    if (response.ok) {
      emit('dataEdited')
      toast.success('Data Berhasil Di Update')
      closeDialog()
      resetForm()
    } else {
      console.error('Gagal mengedit data')
    }
  } catch (error) {
    console.error('Error:', error)
  } finally {
    isSubmitting.value = false
  }
})
</script>

<template>
  <Dialog :open="isDialogOpen" @openChange="isDialogOpen = $event">
    <DialogTrigger as-child>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button @click="openDialog" size="sm"><PencilIcon class="w-4 h-4" /></Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit Data</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[800px] [&>button]:hidden">
      <form class="space-y-8" @submit.prevent="onSubmit">
        <DialogHeader>
          <DialogTitle>Edit Data Proyek</DialogTitle>
        </DialogHeader>

        <div class="max-h-[60vh] overflow-y-auto pr-4 space-y-6">
          <!-- 🧱 Field: Nama Pekerjaan -->
          <FormField v-slot="{ componentField }" name="namaPekerjaan">
            <FormItem>
              <FormLabel>Nama Pekerjaan</FormLabel>
              <FormControl>
                <Input type="text" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <!-- 🧱 Field: Nomor Kontrak -->
          <FormField v-slot="{ componentField }" name="noKontrak">
            <FormItem>
              <FormLabel>Nomor Kontrak</FormLabel>
              <FormControl>
                <Input type="text" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <!-- 🧱 Field: Nilai Kontrak -->
          <FormField v-slot="{ field }" name="nilaiKontrak">
            <FormItem>
              <FormLabel>Nilai Kontrak</FormLabel>
              <FormControl>
                <div class="space-y-1">
                  <Input class="mb-4" type="number" v-bind="field" />

                  <!-- ✅ Tampilan dalam format Rupiah -->
                  <p class="text-sm text-muted-foreground">
                    {{
                      field.value
                        ? 'Rp ' + new Intl.NumberFormat('id-ID').format(Number(field.value))
                        : 'Rp 0'
                    }}
                  </p>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <!-- 🧱 Field: Lokasi -->
          <FormField v-slot="{ componentField }" name="lokasi">
            <FormItem>
              <FormLabel>Lokasi</FormLabel>
              <FormControl>
                <Textarea v-bind="componentField"></Textarea>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <!-- 🗓️ Field: Tanggal Mulai -->
          <FormField v-slot="{ field, value }" name="tglMulai">
            <FormItem class="flex flex-col">
              <FormLabel>Tanggal Mulai</FormLabel>
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
                      <span>
                        {{
                          value ? df.format(toDate(dateMulai, getLocalTimeZone())) : 'Pick a date'
                        }}
                      </span>
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent class="p-0">
                  <Calendar
                    v-model:placeholder="placeholder"
                    v-model="dateMulai"
                    calendar-label="Tanggal Mulai"
                    initial-focus
                    @update:model-value="
                      v => {
                        if (v) {
                          dateMulai = v
                          setFieldValue('tglMulai', toDate(v).toISOString())
                        } else {
                          dateMulai = undefined
                          setFieldValue('tglMulai', undefined)
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

          <!-- 🗓️ Field: Tanggal Selesai -->
          <FormField v-slot="{ field, value }" name="tglSelesai">
            <FormItem class="flex flex-col">
              <FormLabel>Tanggal Selesai</FormLabel>
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
                      <span>
                        {{
                          value ? df.format(toDate(dateSelesai, getLocalTimeZone())) : 'Pick a date'
                        }}
                      </span>
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent class="p-0">
                  <Calendar
                    v-model:placeholder="placeholder"
                    v-model="dateSelesai"
                    calendar-label="Tanggal Selesai"
                    initial-focus
                    @update:model-value="
                      v => {
                        if (v) {
                          dateSelesai = v
                          setFieldValue('tglSelesai', toDate(v).toISOString())
                        } else {
                          dateSelesai = undefined
                          setFieldValue('tglSelesai', undefined)
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
        </div>

        <DialogFooter>
          <DialogClose as-child>
            <Button type="button" variant="secondary" @click="closeDialog"> Close </Button>
          </DialogClose>
          <span v-if="isSubmitting">
            <Button disabled>
              <Loader2 class="w-4 h-4 mr-2 animate-spin" />
              Updating..
            </Button>
          </span>
          <Button type="submit" v-else>Update </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
