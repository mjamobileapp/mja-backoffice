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

const mitraList = ref([])
const openMitra = ref(false)

const profileFormSchema = toTypedSchema(
  z.object({
    namaMesin: z.string(),
    cabangId: z.number({ required_error: 'Pilih Cabang terlebih dahulu' }),
    idMitra: z.number({ required_error: 'Pilih Mitra terlebih dahulu' }),
    tipeMesin: z.enum(['washer', 'dryer'], {
      message: 'Tipe mesin harus Washer atau Dryer',
    }),
    kapasitas: z.string(),
    ipAddressEsp: z.string(),
    macAddress: z.string(),
    status: z.enum(['ready', 'in_use', 'error'], {
      message: 'Status harus Ready, In Use atau Error',
    }),
  })
)

const { handleSubmit, resetForm, setValues, values, setFieldValue } = useForm({
  validationSchema: profileFormSchema,
  initialValues: {
    namaMesin: '',
    cabangId: 0,
    idMitra: 0,
    tipeMesin: 'washer',
    kapasitas: '',
    ipAddressEsp: '',
    macAddress: '', // Use prop value directly as fallback
    status: 'ready', // Use prop value directly as fallback
  },
})

const isDialogOpen = ref(false)

async function fetchDataMitra() {
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/mitra`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const fetchedData = await response.json()
    mitraList.value = fetchedData.data.map(item => ({
      ...item,
      idMitra: item.idRap || item.id, // Normalisasi agar template tidak bingung
      kodeMitra: item.kodeMitra, // Normalisasi agar template tidak bingung
      namaMitra: item.namaMitra,
    }))
  } catch (error) {
    console.error('Gagal mengambil data Mitra:', error)
  }
}

async function onSelectMitra(rap: any) {
  const selectedIdMitra = rap.idMitra || rap.id

  setFieldValue('idMitra', selectedIdMitra)
  setFieldValue('cabangId', undefined) // reset cabang saat ganti mitra

  cabangList.value = []
  openMitra.value = false

  await fetchDataCabangByMitra(selectedIdMitra)
}

async function fetchData() {
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/mesin/${props.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.ok) {
      const { data } = await response.json()
      console.log(JSON.stringify(data))

      // --- 3. setValues ke VeeValidate ---
      setValues({
        namaMesin: data.namaMesin,
        cabangId: data.cabangId,
        idMitra: data.idMitra,
        tipeMesin: data.tipeMesin,
        kapasitas: data.kapasitas,
        ipAddressEsp: data.ipAddressEsp,
        macAddress: data.macAddress,
        status: data.status,
      })

      await fetchDataCabangByMitra(Number(data.idMitra))
    } else {
      console.error('Gagal mengambil data. Status:', response.status)
    }
  } catch (error) {
    console.error('Fetch error:', error.message)
    // Tampilkan notifikasi error ke user jika perlu
  }
}

const cabangList = ref([])
const openCabang = ref(false)

async function fetchDataCabangByMitra(idMitra: number) {
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/cabang/mitra/${idMitra}`, {
      headers: { Authorization: `Bearer ${token}` },
    })

    const fetchedData = await response.json()

    cabangList.value = fetchedData.data.map(item => ({
      ...item,
      cabangId: item.id,
      kodeCabang: item.kodeCabang,
      namaCabang: item.namaCabang,
    }))
  } catch (error) {
    console.error('Gagal mengambil data Cabang by Mitra:', error)
    cabangList.value = []
  }
}
function onSelectCabang(rap: any) {
  setFieldValue('cabangId', rap.cabangId || rap.id)
  openCabang.value = false
}

async function openDialog() {
  isDialogOpen.value = true
  await fetchData()
  await fetchDataMitra()
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
      cabangId: values.cabangId,
      idMitra: values.idMitra,
      namaMesin: values.namaMesin,
      tipeMesin: values.tipeMesin,
      kapasitas: values.kapasitas,
      ipAddressEsp: values.ipAddressEsp,
      macAddress: values.macAddress,
      status: values.status,
      updatedBy: username.value,
    }

    const response = await fetch(`${baseUrl}/api/backoffice/mesin/${props.id}`, {
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
          <FormField v-slot="{ value }" name="idMitra">
            <FormItem class="flex flex-col">
              <FormLabel>Pilih Mitra</FormLabel>
              <Popover v-model:open="openMitra">
                <PopoverTrigger as-child>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      :class="cn('justify-between', !value && 'text-muted-foreground')"
                    >
                      {{
                        value
                          ? mitraList.find(r => (r.idMitra || r.id) === value)?.namaMitra
                          : 'Pilih Mitra...'
                      }}
                      <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent class="w-[var(--radix-popover-trigger-width)] p-0">
                  <Command>
                    <CommandInput placeholder="Cari..." />
                    <CommandList>
                      <CommandEmpty>Mitra tidak ditemukan.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem
                          v-for="item in mitraList"
                          :key="item.id"
                          :value="`${item.namaMitra}`"
                          @select="onSelectMitra(item)"
                        >
                          <Check
                            :class="
                              cn(
                                'mr-2 h-4 w-4',
                                value === (item.idMitra || item.id) ? 'opacity-100' : 'opacity-0'
                              )
                            "
                          />
                          {{ item.kodeMitra }} - {{ item.namaMitra }}
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ value }" name="cabangId">
            <FormItem class="flex flex-col">
              <FormLabel>Pilih Cabang</FormLabel>
              <Popover v-model:open="openCabang">
                <PopoverTrigger as-child>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      :class="cn('justify-between', !value && 'text-muted-foreground')"
                    >
                      {{
                        value
                          ? cabangList.find(r => (r.cabangId || r.id) === value)?.namaCabang
                          : 'Pilih Cabang...'
                      }}
                      <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent class="w-[var(--radix-popover-trigger-width)] p-0">
                  <Command>
                    <CommandInput placeholder="Cari..." />
                    <CommandList>
                      <CommandEmpty>Cabang tidak ditemukan.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem
                          v-for="item in cabangList"
                          :key="item.id"
                          :value="`${item.namaCabang}`"
                          @select="onSelectCabang(item)"
                        >
                          <Check
                            :class="
                              cn(
                                'mr-2 h-4 w-4',
                                value === (item.cabangId || item.id) ? 'opacity-100' : 'opacity-0'
                              )
                            "
                          />
                          {{ item.kodeCabang }} - {{ item.namaCabang }}
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="namaMesin">
            <FormItem>
              <FormLabel>Nama Mesin</FormLabel>
              <FormControl>
                <Input type="text" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="tipeMesin">
            <FormItem>
              <FormLabel>Tipe Mesin</FormLabel>

              <Select
                :model-value="componentField.modelValue"
                @update:model-value="componentField['onUpdate:modelValue']"
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih Tipe Mesin" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  <SelectItem value="washer"> Washer </SelectItem>
                  <SelectItem value="dryer"> Dryer </SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="kapasitas">
            <FormItem>
              <FormLabel>Kapasitas</FormLabel>
              <FormControl>
                <Input v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="ipAddressEsp">
            <FormItem>
              <FormLabel>IP Address ESP</FormLabel>
              <FormControl>
                <Input v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="macAddress">
            <FormItem>
              <FormLabel>Mac Address</FormLabel>
              <FormControl>
                <Input v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="status">
            <FormItem>
              <FormLabel>Status</FormLabel>

              <Select
                :model-value="componentField.modelValue"
                @update:model-value="componentField['onUpdate:modelValue']"
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih Status" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  <SelectItem value="ready"> Ready </SelectItem>
                  <SelectItem value="in_use"> In Use </SelectItem>
                  <SelectItem value="error"> Error </SelectItem>
                </SelectContent>
              </Select>

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
