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
import { Loader2, Notebook } from 'lucide-vue-next'
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

const emit = defineEmits(['dataAdded'])

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const currentUser = useCookie('currentUser') // diasumsikan cookie bernilaiKontrak object stringified
const username = computed(() => currentUser.value?.username || 'no-username@example.com')

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const proyekList = ref([])

const profileFormSchema = toTypedSchema(
  z.object({
    idProyek: z.number(),
    keterangan: z.string(),
    nilaiKontrak: z.number(),
    tanggal: z.string().datetime(),
  })
)

const displaynilaiKontrakKontrak = ref('')

// Gunakan NumberFormat sekali, bukan setiap ketik
const formatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
})

function onInputnilaiKontrakKontrak(event: Event, field: any) {
  const input = event.target as HTMLInputElement
  let val = input.value

  // Hapus semua karakter selain angka & titik
  val = val.replace(/[^\d.]/g, '')

  // Jika kosong, reset
  if (!val) {
    displaynilaiKontrakKontrak.value = ''
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
  displaynilaiKontrakKontrak.value = formatted

  // Simpan nilaiKontrak mentah (tanpa koma) ke field form
  field.onChange(val)
}

const isSubmitting = ref(false)

const { handleSubmit, resetForm, setFieldValue } = useForm({
  validationSchema: profileFormSchema,
  // initialValues: {
  //   idProyek: 0,
  //   noKontrak: '',
  //   nilaiKontrakKontrak: 0,
  //   tglMulai: '',
  //   tglSelesai: '',
  // },
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

const onSubmit = handleSubmit(async (values: any) => {
  isSubmitting.value = true
  const dataForm = {
    idProyek: values.idProyek,
    keterangan: values.keterangan,
    nilaiKontrak: values.nilaiKontrak,
    tanggal: values.tanggal,
    createdBy: username.value,
    createdDate: new Date(),
  }
  isDialogOpen.value = false
  console.log(JSON.stringify(dataForm))
  try {
    const response = await fetch(`${baseUrl}/kontrakSubkon`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataForm),
    })

    console.log(await response.json())

    if (response.ok) {
      toast({
        title: 'Success',
        description: 'Data berhasil disimpan.',
      })

      console.log('[AddData] Emitting dataAdded...')
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
          <DialogTitle>Add Data Kontrak Subkon</DialogTitle>
        </DialogHeader>

        <div class="max-h-[60vh] overflow-y-auto pr-2 space-y-6">
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

          <FormField v-slot="{ componentField }" name="nilaiKontrak">
            <FormItem>
              <FormLabel>Nilai Kontrak</FormLabel>
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
