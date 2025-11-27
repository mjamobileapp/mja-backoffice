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
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
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
    idProyek: z.number(),
    tujuanPo: z.string(),
    noTelepon: z.string(),
    alamat: z.string(),
    penerima: z.string(),
    ppn: z.number(),
    tanggal: z.date({
      required_error: 'Please select a valid date.',
      invalid_type_error: 'Please select a valid date.',
    }),
    tglPengiriman: z.date({
      required_error: 'Please select a valid date.',
      invalid_type_error: 'Please select a valid date.',
    }),
    jenisPayment: z.string().min(1, 'Jenis Payment harus dipilih.'),
  })
)

const { handleSubmit, resetForm, setValues, values, setFieldValue } = useForm({
  validationSchema: profileFormSchema,
  initialValues: {
    idProyek: 0,
    tujuanPo: '',
    jenisPayment: '',
    noTelepon: '',
    alamat: '',
    penerima: '',
    ppn: 0,
    tanggal: '',
    tglPengiriman: '', // Use prop value directly as fallback
  },
})

const isDialogOpen = ref(false)

// Asumsi: dateMulai dan datePengiriman adalah ref() untuk Calendar
// Asumsi: toDate adalah fungsi untuk konversi ke objek Date JS
// Asumsi: setValues adalah fungsi dari VeeValidate useForm

const datePo = ref(null)
const dateDelivery = ref(null)

const proyekList = ref([])

async function fetchDataProyek() {
  try {
    const response = await fetch(`${baseUrl}/proyek`, {
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
      proyekList.value = fetchedData.data
    } else {
      console.error('Data yang diterima bukan array:', fetchedData)
      proyekList.value = []
    }
  } catch (error) {
    console.error('Gagal mengambil data:', error)
    proyekList.value = []
  }
}

async function fetchData() {
  try {
    const response = await fetch(`${baseUrl}/po/${props.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.ok) {
      const { data } = await response.json()

      // --- 1. Penanganan Nilai Kontrak (String ke Number) ---
      // Konversi string nilai menjadi float.
      const nilaiNumber = parseFloat(data.ppn)

      // --- 2. Penanganan Tanggal (Invalid Time Value) ---
      // Pastikan tglSelesai ada. Jika tidak, beri nilai default (misalnya null/undefined).
      const tanggalString = toDate(data.tanggal)
      const tglPengirimanString = toDate(data.tglPengiriman)

      // --- 3. setValues ke VeeValidate ---
      setValues({
        idProyek: data.idProyek,
        tujuanPo: data.tujuanPo,
        noTelepon: data.noTelepon,
        ppn: nilaiNumber,
        alamat: data.alamat,
        penerima: data.penerima,
        jenisPayment: data.jenisPayment,
        tanggal: tanggalString,
        tglPengiriman: tglPengirimanString,
      })

      datePo.value = tanggalString
      dateDelivery.value = tglPengirimanString
    } else {
      console.error('Gagal mengambil data. Status:', response.status)
    }
  } catch (error) {
    console.error('Fetch error:', error.message)
    // Tampilkan notifikasi error ke user jika perlu
  }
}

const listJenisPayment = [{ nama: 'Cash' }, { nama: 'Tempo' }]

async function openDialog() {
  isDialogOpen.value = true
  await fetchData()
  await fetchDataProyek()
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
      ...values,
      createdBy: username.value,
      createdDate: new Date(),
    }

    console.log(JSON.stringify(dataForm))
    const response = await fetch(`${baseUrl}/po/${props.id}`, {
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
          <DialogTitle>Edit Data PO</DialogTitle>
        </DialogHeader>

        <div class="max-h-[60vh] overflow-y-auto pr-2">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 🧱 Field: Proyek -->
            <FormField v-slot="{ value }" name="idProyek">
              <FormItem class="flex flex-col">
                <FormLabel>Pilih Proyek</FormLabel>
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
                            ? proyekList.find(item => item.id === value)?.namaPekerjaan
                            : 'Select Proyek...'
                        }}
                        <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent class="p-0">
                    <Command>
                      <CommandInput placeholder="Search Proyek..." />
                      <CommandEmpty>No Proyek found.</CommandEmpty>
                      <CommandList>
                        <CommandGroup>
                          <CommandItem
                            v-for="item in proyekList"
                            :key="item.id"
                            :value="item.namaPekerjaan"
                            @select="
                              () => {
                                setFieldValue('idProyek', item.id)
                                open = false
                              }
                            "
                          >
                            <Check
                              :class="
                                cn('mr-2 h-4 w-4', value === item.id ? 'opacity-100' : 'opacity-0')
                              "
                            />
                            {{ item.namaPekerjaan }}
                          </CommandItem>
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            </FormField>

            <!-- 🗓️ Field: Tanggal -->
            <FormField v-slot="{ field, value }" name="tanggal">
              <FormItem class="flex flex-col">
                <FormLabel>Tanggal</FormLabel>
                <Datepicker
                  v-model="datePo"
                  :enable-time-picker="false"
                  :format="'dd-MM-yyyy'"
                  @update:model-value="
                    val => {
                      datePo = val
                      field.onChange(val) // <--- ini penting
                    }
                  "
                />
                <FormMessage />
              </FormItem>
              <input type="hidden" v-bind="field" />
            </FormField>

            <!-- 💰 PPN -->
            <FormField v-slot="{ componentField }" name="ppn">
              <FormItem>
                <FormLabel>PPN %</FormLabel>
                <FormControl> <Input type="number" v-bind="componentField" /> </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <!-- 👤 Penerima -->
            <FormField v-slot="{ componentField }" name="penerima">
              <FormItem>
                <FormLabel>Penerima</FormLabel>
                <FormControl>
                  <Input type="text" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <!-- ☎️ No. Telepon -->
            <FormField v-slot="{ componentField }" name="noTelepon">
              <FormItem class="flex flex-col h-full">
                <FormLabel>No. Telepon</FormLabel>
                <FormControl class="flex-1">
                  <Input type="text" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <!-- 🚚 Tanggal Pengiriman -->
            <FormField v-slot="{ field, value }" name="tglPengiriman">
              <FormItem class="flex flex-col h-full">
                <FormLabel>Tanggal Pengiriman</FormLabel>
                <FormControl class="flex-1">
                  <Datepicker
                    v-model="dateDelivery"
                    :enable-time-picker="false"
                    :format="'dd-MM-yyyy'"
                    @update:model-value="
                      val => {
                        dateDelivery = val
                        field.onChange(val) // <--- ini penting
                      }
                    "
                  />
                </FormControl>

                <!-- taruh hidden input di INSIDE FormItem supaya struktur konsisten -->
                <input type="hidden" v-bind="field" />
                <FormMessage />
              </FormItem>
            </FormField>

            <!-- 📦 Tujuan PO (kiri bawah) -->
            <FormField v-slot="{ componentField }" name="tujuanPo" class="md:col-span-1">
              <FormItem>
                <FormLabel>Tujuan PO</FormLabel>
                <FormControl>
                  <Textarea v-bind="componentField" rows="3"></Textarea>
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <!-- 🏠 Alamat (kanan bawah) -->
            <FormField v-slot="{ componentField }" name="alamat" class="md:col-span-1">
              <FormItem>
                <FormLabel>Alamat</FormLabel>
                <FormControl>
                  <Textarea v-bind="componentField" rows="3"></Textarea>
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ value }" name="jenisPayment">
              <FormItem class="flex flex-col">
                <FormLabel>Jenis Payment</FormLabel>
                <Popover v-model:open="openPayment">
                  <PopoverTrigger as-child>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        :aria-expanded="openPayment"
                        :class="cn('justify-between', !value && 'text-muted-foreground')"
                      >
                        {{
                          value
                            ? listJenisPayment.find(item => item.nama === value)?.nama
                            : 'Select Payment...'
                        }}
                        <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent class="p-0">
                    <Command>
                      <CommandInput placeholder="Search payment..." />
                      <CommandEmpty>No payment found.</CommandEmpty>
                      <CommandList>
                        <CommandGroup>
                          <CommandItem
                            v-for="item in listJenisPayment"
                            :key="item.nama"
                            :value="item.nama"
                            @select="
                              () => {
                                setFieldValue('jenisPayment', item.nama)
                                openPayment = false
                              }
                            "
                          >
                            <Check
                              :class="
                                cn(
                                  'mr-2 h-4 w-4',
                                  value === item.nama ? 'opacity-100' : 'opacity-0'
                                )
                              "
                            />
                            {{ item.nama }}
                          </CommandItem>
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
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
