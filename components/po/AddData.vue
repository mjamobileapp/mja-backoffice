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

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { toTypedSchema } from '@vee-validate/zod'
import { ChevronsUpDown, Loader2, Notebook } from 'lucide-vue-next'
import { FieldArray, useForm } from 'vee-validate'
import { h, ref, onMounted } from 'vue'
import * as z from 'zod'
import { toast } from '~/components/ui/toast'
import {
  CalendarDate,
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
  today,
} from '@internationalized/date'
import { toDate } from 'date-fns'
import Combobox from '../ui/combobox/Combobox.vue'
import { ComboboxAnchor, ComboboxInput, ComboboxTrigger } from 'radix-vue'

const emit = defineEmits(['dataAdded'])

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const currentUser = useCookie('currentUser') // diasumsikan cookie bernilai object stringified
const username = computed(() => currentUser.value?.username || 'no-username@example.com')

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const proyekList = ref([])

const profileFormSchema = toTypedSchema(
  z.object({
    idProyek: z.number(),
    tujuanPo: z.string(),
    noTelepon: z.string(),
    alamat: z.string(),
    penerima: z.string(),
    ppn: z.number(),
    tanggal: z.string().datetime(),
    tglPengiriman: z.string().datetime(),
    jenisPayment: z.string().min(1, 'Jenis Payment harus dipilih.'),
  })
)

const displayNilaiKontrak = ref('')

// Gunakan NumberFormat sekali, bukan setiap ketik
const formatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
})

function onInputNilaiKontrak(event: Event, field: any) {
  const input = event.target as HTMLInputElement
  let val = input.value

  // Hapus semua karakter selain angka & titik
  val = val.replace(/[^\d.]/g, '')

  // Jika kosong, reset
  if (!val) {
    displayNilaiKontrak.value = ''
    field.onChange('')
    return
  }

  // Pisahkan integer dan desimal
  const [intPart, decPart] = val.split('.')
  const num = Number(intPart)

  // Format bagian integer dengan Intl (lebih cepat dari regex)
  let formatted = formatter.format(num)

  // Tambahkan kembali bagian desimal jika ada
  if (decPart !== undefined) {
    formatted += '.' + decPart.slice(0, 2) // batasi 2 digit desimal
  }

  // Set tampilan formatted
  displayNilaiKontrak.value = formatted

  // Simpan nilai mentah (tanpa koma) ke field form
  field.onChange(val)
}

const isSubmitting = ref(false)

const { handleSubmit, resetForm, setFieldValue } = useForm({
  validationSchema: profileFormSchema,
})

const isDialogOpen = ref(false)

async function openDialog() {
  isDialogOpen.value = true
  // await fetchData()
}

onMounted(() => {
  fetchData()
})
function closeDialog() {
  isDialogOpen.value = false
  resetForm()
}

// get token====================
const accessToken = useCookie('accessToken')
const token = accessToken.value.token

async function fetchData() {
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

const listJenisPayment = [{ nama: 'Cash' }, { nama: 'Tempo' }]

const onSubmit = handleSubmit(async (values: any) => {
  isSubmitting.value = true
  const dataForm = {
    ...values,
    createdBy: username.value,
    createdDate: new Date(),
  }
  isDialogOpen.value = false
  // console.log(JSON.stringify(dataForm))
  try {
    const response = await fetch(`${baseUrl}/po`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataForm),
    })

    // console.log(await response.json())

    if (response.ok) {
      toast({
        title: 'Success',
        description: 'Data berhasil disimpan.',
      })

      // console.log('[AddData] Emitting dataAdded...')
      emit('dataAdded') // kirim emit dulu
      resetForm() // reset form
      isDialogOpen.value = false // baru tutup dialog
    } else {
      toast({
        title: 'Error',
        description: 'Gagal menyimpan data. Silakan coba lagi.',
      })
    }
  } catch (error) {
    console.error('Error submitting data:', error)
    toast({
      title: 'Error',
      description: 'Terjadi kesalahan saat mengirim data.',
    })
  } finally {
    isSubmitting.value = false
  }
})
</script>

<template>
  <Dialog :open="isDialogOpen" @openChange="isDialogOpen = $event">
    <DialogTrigger as-child>
      <Button @click="openDialog">Add Data</Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[800px] [&>button]:hidden">
      <form class="space-y-8" @submit.prevent="onSubmit">
        <DialogHeader>
          <DialogTitle>Add Data Purchase Order (PO)</DialogTitle>
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
                <Popover>
                  <PopoverTrigger as-child>
                    <FormControl>
                      <Button
                        variant="outline"
                        :class="
                          cn(
                            'justify-start text-left font-normal',
                            !value && 'text-muted-foreground'
                          )
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
                  <Popover>
                    <PopoverTrigger as-child>
                      <Button
                        variant="outline"
                        :class="
                          cn(
                            'justify-start text-left font-normal w-full',
                            !value && 'text-muted-foreground'
                          )
                        "
                      >
                        <RadixIconsCalendar class="mr-2 h-4 w-4 opacity-50" />
                        <span>
                          {{
                            value
                              ? df.format(toDate(datePengiriman, getLocalTimeZone()))
                              : 'Pick a date'
                          }}
                        </span>
                      </Button>
                    </PopoverTrigger>

                    <PopoverContent class="p-0">
                      <Calendar
                        v-model:placeholder="placeholder"
                        v-model="datePengiriman"
                        calendar-label="tglPengiriman"
                        initial-focus
                        @update:model-value="
                          v => {
                            if (v) {
                              datePengiriman = v
                              setFieldValue('tglPengiriman', toDate(v).toISOString())
                            } else {
                              datePengiriman = undefined
                              setFieldValue('tglPengiriman', undefined)
                            }
                          }
                        "
                      />
                    </PopoverContent>
                  </Popover>
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

        <DialogFooter class="flex justify-between items-center pt-4">
          <DialogClose as-child>
            <Button type="button" variant="secondary" @click="closeDialog">Close</Button>
          </DialogClose>

          <Button v-if="isSubmitting" disabled>
            <Loader2 class="w-4 h-4 mr-2 animate-spin" />
            Saving..
          </Button>
          <Button v-else type="submit">Save</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
