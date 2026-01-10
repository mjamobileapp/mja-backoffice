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
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const props = defineProps<{
  id: {
    type: Number
    required: true
  }
  disabled?: boolean
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
const currentUser = useCookie('currentUser') // diasumsikan cookie bernilaiKontrak object stringified
const username = computed(() => currentUser.value?.username || 'no-email@example.com')

const profileFormSchema = toTypedSchema(
  z.object({
    idProyek: z.number(),
    namaSubkon: z.string(),
    keterangan: z.string(),
    nilaiDp: z.number(),
    nilaiRetensi: z.number(),
    tanggal: z.date({
      required_error: 'Please select a valid date.',
      invalid_type_error: 'Please select a valid date.',
    }),
  })
)

const { handleSubmit, resetForm, setValues, values, setFieldValue } = useForm({
  validationSchema: profileFormSchema,
  initialValues: {
    idProyek: 0,
    nilaiDp: 0,
    nilaiRetensi: 0,
    namaSubkon: '',
    tanggal: '',
    keterangan: '', // Use prop value directly as fallback
  },
})

const isDialogOpen = ref(false)
const open = ref(false)

// Asumsi: dateMulai dan dateSelesai adalah ref() untuk Calendar
// Asumsi: toDate adalah fungsi untuk konversi ke objek Date JS
// Asumsi: setValues adalah fungsi dari VeeValidate useForm

const dateMulai = ref(null)

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
    const response = await fetch(`${baseUrl}/kontrakSubkon/${props.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.ok) {
      const { data } = await response.json()
      // console.log(data)

      const nilaiDpNumber = parseFloat(data.nilaiDp)
      const nilaiRetensiNumber = parseFloat(data.nilaiRetensi)
      const tanggalString = toDate(data.tanggal)
      // --- 3. setValues ke VeeValidate ---
      setValues({
        idProyek: data.idProyek,
        namaSubkon: data.namaSubkon,
        // Kirim sebagai number agar validasi Zod/VeeValidate 'number' berhasil
        nilaiDp: nilaiDpNumber,
        nilaiRetensi: nilaiRetensiNumber,
        keterangan: data.keterangan,
        // Kirim Date Object yang sudah valid atau undefined/null
        tanggal: tanggalString,
      })

      dateMulai.value = tanggalString
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
  await fetchDataProyek()
}

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
      idProyek: values.idProyek,
      namaSubkon: values.namaSubkon,
      nilaiDp: values.nilaiDp,
      nilaiRetensi: values.nilaiRetensi,
      tanggal: values.tanggal,
      keterangan: values.keterangan,
      createdBy: username.value,
      createdDate: new Date(),
    }

    console.log(JSON.stringify(dataForm))
    const response = await fetch(`${baseUrl}/kontrakSubkon/${props.id}`, {
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
            <Button @click="openDialog" size="sm" :disabled="props.disabled"
              ><PencilIcon class="w-4 h-4"
            /></Button>
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
          <DialogTitle>Edit Data Kontrak Subkon</DialogTitle>
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
          <FormField v-slot="{ componentField }" name="namaSubkon">
            <FormItem>
              <FormLabel>Nama Subkon</FormLabel>
              <FormControl>
                <Input type="text" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <!-- 🗓️ Field: Tanggal Mulai -->
          <FormField v-slot="{ field, value }" name="tanggal">
            <FormItem class="flex flex-col">
              <FormLabel>Tanggal</FormLabel>
              <Datepicker
                v-model="dateMulai"
                :enable-time-picker="false"
                :format="'dd-MM-yyyy'"
                @update:model-value="
                  val => {
                    dateMulai = val
                    field.onChange(val) // <--- ini penting
                  }
                "
              />
              <FormMessage />
            </FormItem>
            <input type="hidden" v-bind="field" />
          </FormField>

          <FormField v-slot="{ field }" name="nilaiDp">
            <FormItem>
              <FormLabel>DP</FormLabel>
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
          <FormField v-slot="{ componentField }" name="nilaiRetensi">
            <FormItem>
              <FormLabel>Retensi %</FormLabel>
              <FormControl> <Input type="number" v-bind="componentField" /> </FormControl>
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
