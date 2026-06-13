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
import { h, ref } from 'vue'
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
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const emit = defineEmits(['dataAdded'])

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const currentUser = useCookie('currentUser') // diasumsikan cookie bernilai object stringified
const username = computed(() => currentUser.value?.username || 'no-username@example.com')

// get token====================
const accessToken = useCookie('accessToken')
const token = accessToken.value.token

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

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

const isSubmitting = ref(false)

const { handleSubmit, resetForm, setFieldValue } = useForm({
  validationSchema: profileFormSchema,
})

const mitraList = ref([])
const openMitra = ref(false)

const isDialogOpen = ref(false)

async function openDialog() {
  isDialogOpen.value = true

  await fetchDataMitra()
}

function closeDialog() {
  isDialogOpen.value = false
  resetForm()
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

// 🔹 Logic saat Mitra dipilih
async function onSelectMitra(rap: any) {
  const selectedIdMitra = rap.idMitra || rap.id

  setFieldValue('idMitra', selectedIdMitra)
  setFieldValue('cabangId', undefined) // reset cabang saat ganti mitra

  cabangList.value = []
  openMitra.value = false

  await fetchDataCabangByMitra(selectedIdMitra)
}

function onSelectCabang(rap: any) {
  setFieldValue('cabangId', rap.cabangId || rap.id)
  openCabang.value = false
}

const onSubmit = handleSubmit(async (values: any) => {
  isSubmitting.value = true
  const dataForm = {
    cabangId: values.cabangId,
    idMitra: values.idMitra,
    namaMesin: values.namaMesin,
    tipeMesin: values.tipeMesin,
    kapasitas: values.kapasitas,
    ipAddressEsp: values.ipAddressEsp,
    macAddress: values.macAddress,
    status: values.status,
    createdBy: username.value,
    createdDate: new Date(),
  }
  isDialogOpen.value = false
  console.log(JSON.stringify(dataForm))
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/mesin`, {
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
          <DialogTitle>Add Data Mesin</DialogTitle>
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
              Saving..
            </Button>
          </span>
          <Button type="submit" v-else>Save </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
