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
// console.log(props.id)
// onMounted(() => {
//   fetchData()
//   // console.log(props.item.code)
// })
const currentUser = useCookie('currentUser') // diasumsikan cookie bernilai object stringified
const username = computed(() => currentUser.value?.username || 'no-email@example.com')

const profileFormSchema = toTypedSchema(
  z.object({
    idSubkon: z.number(),
    keterangan: z.string(),
    nilai: z.number(),
    tanggal: z.string().datetime(),
  })
)

const { handleSubmit, resetForm, setValues, values, setFieldValue } = useForm({
  validationSchema: profileFormSchema,
  initialValues: {
    idSubkon: 0,
    nilai: 0,
    tanggal: '',
    keterangan: '', // Use prop value directly as fallback
  },
})

const isDialogOpen = ref(false)

// Asumsi: dateMulai dan dateSelesai adalah ref() untuk Calendar
// Asumsi: toDate adalah fungsi untuk konversi ke objek Date JS
// Asumsi: setValues adalah fungsi dari VeeValidate useForm

const dateMulai = ref<DateValue | undefined>()
const dateSelesai = ref<DateValue | undefined>()

const kontrakSubkonList = ref([])

async function fetchDatakontrakSubkon() {
  try {
    const response = await fetch(`${baseUrl}/kontrakSubkon`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const fetchedData = await response.json()
    // console.log('Data yang diterima dari server:', fetchedData.data)

    if (Array.isArray(fetchedData.data)) {
      kontrakSubkonList.value = fetchedData.data
    } else {
      console.error('Data yang diterima bukan array:', fetchedData)
      kontrakSubkonList.value = []
    }
  } catch (error) {
    console.error('Gagal mengambil data:', error)
    kontrakSubkonList.value = []
  }
}

async function fetchData() {
  try {
    const response = await fetch(`${baseUrl}/pembayaranSubkon/${props.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.ok) {
      const { data } = await response.json()
      console.log(data)

      // --- 1. Penanganan Nilai Kontrak (String ke Number) ---
      // Konversi string nilai menjadi float.
      const nilaiNumber = parseFloat(data.nilai)

      // --- 2. Penanganan Tanggal (Invalid Time Value) ---
      // Pastikan tglSelesai ada. Jika tidak, beri nilai default (misalnya null/undefined).
      const tanggalString = data.tanggal

      // Inisialisasi Date Objects
      const dateObj = tanggalString ? toDate(tanggalString) : undefined

      // Cek apakah toDate berhasil mengonversi. Jika tidak, nilai akan menjadi Invalid Date.
      if (dateObj && isNaN(dateObj.getTime())) {
        throw new Error('Invalid dateMulai value received from API.')
      }
      // Tambahkan pengecekan serupa untuk dateSelesaiObj jika diperlukan

      // --- 3. setValues ke VeeValidate ---
      setValues({
        idSubkon: data.idSubkon,
        // Kirim sebagai number agar validasi Zod/VeeValidate 'number' berhasil
        nilai: nilaiNumber,
        keterangan: data.keterangan,
        // Kirim Date Object yang sudah valid atau undefined/null
        tanggal: dateObj ? dateObj.toISOString() : undefined,
      })

      // --- 4. Set Nilai untuk Kalender (hanya jika objek Date valid) ---
      if (dateObj) {
        dateMulai.value = new CalendarDate(
          dateObj.getFullYear(),
          dateObj.getMonth() + 1, // Month + 1 karena CalendarDate berbasis 1
          dateObj.getDate()
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
  await fetchDatakontrakSubkon()
}

const open = ref(false)

function closeDialog() {
  isDialogOpen.value = false
  open.value = false
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
      idSubkon: values.idSubkon,
      nilai: values.nilai,
      tanggal: values.tanggal,
      keterangan: values.keterangan,
      createdBy: username.value,
      createdDate: new Date(),
    }

    // console.log(JSON.stringify(dataForm))
    const response = await fetch(`${baseUrl}/pembayaranSubkon/${props.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataForm),
    })

    if (response.ok) {
      emit('dataEdited') // Send updated data
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
          <DialogTitle>Edit Data Pembayaran Subkon</DialogTitle>
        </DialogHeader>

        <div class="max-h-[60vh] overflow-y-auto pr-2 space-y-6">
          <!-- 🧱 Field: kontrakSubkon -->
          <FormField v-slot="{ value }" name="idSubkon">
            <FormItem class="flex flex-col">
              <FormLabel>Pilih Subkon</FormLabel>

              <Popover v-model:open="open">
                <PopoverTrigger as-child>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      :aria-expanded="open"
                      :class="cn('justify-between', !value && 'text-muted-foreground')"
                    >
                      {{
                        value
                          ? kontrakSubkonList.find(item => item.id === value)?.namaSubkon
                          : 'Select kontrakSubkon...'
                      }}

                      <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent class="p-0">
                  <Command>
                    <CommandInput placeholder="Search kontrakSubkon..." />
                    <CommandEmpty>No Kontrak Subkon found.</CommandEmpty>
                    <CommandList>
                      <CommandGroup>
                        <CommandItem
                          v-for="item in kontrakSubkonList"
                          :key="item.id"
                          :value="item.namaSubkon"
                          @select="
                            () => {
                              setFieldValue('idSubkon', item.id)
                              open = false
                            }
                          "
                        >
                          <Check
                            :class="
                              cn('mr-2 h-4 w-4', value === item.id ? 'opacity-100' : 'opacity-0')
                            "
                          />
                          {{ item.namaSubkon }}
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          </FormField>
          <!-- 🗓️ Field: Tanggal Mulai -->
          <FormField v-slot="{ field, value }" name="tanggal">
            <FormItem class="flex flex-col">
              <FormLabel>Tanggal</FormLabel>
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
                    calendar-label="Tanggal"
                    initial-focus
                    @update:model-value="
                      v => {
                        if (v) {
                          dateMulai = v
                          setFieldValue('tanggal', toDate(v).toISOString())
                        } else {
                          dateMulai = undefined
                          setFieldValue('tanggal', undefined)
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

          <FormField v-slot="{ componentField }" name="nilai">
            <FormItem>
              <FormLabel>Nilai / Jumlah Pembayaran</FormLabel>
              <FormControl>
                <Input type="number" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="keterangan">
            <FormItem>
              <FormLabel>Keterangan</FormLabel>
              <FormControl>
                <Textarea type="text" v-bind="componentField"></Textarea>
              </FormControl>
              <FormMessage />
            </FormItem>
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
