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
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { toTypedSchema } from '@vee-validate/zod'
import { ChevronsUpDown, Loader2, Check } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { ref, computed } from 'vue'
import * as z from 'zod'
import { toast } from '~/components/ui/toast'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const emit = defineEmits(['dataAdded'])
const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const currentUser = useCookie('currentUser')
const username = computed(() => currentUser.value?.username || 'no-username@example.com')
const accessToken = useCookie('accessToken')
const token = accessToken.value?.token

// 🔹 List untuk menampung data RAP
const rapList = ref([])
const openRap = ref(false)

// 🔹 SCHEMA: Menambahkan idRap dan tetap menjaga idProyek (auto-filled)
const profileFormSchema = toTypedSchema(
  z
    .object({
      idRap: z.number({ required_error: 'Pilih RAP terlebih dahulu' }),
      idProyek: z.number(),
      tujuanPo: z.string().min(1, 'Tujuan PO wajib diisi'),
      noTelepon: z.string().min(1, 'No Telepon wajib diisi'),
      alamat: z.string().min(1, 'Alamat wajib diisi'),
      penerima: z.string().min(1, 'Penerima wajib diisi'),
      ppn: z.number().default(11),
      tanggal: z.date({ required_error: 'Tanggal PO wajib diisi' }),
      tglPengiriman: z.date({ required_error: 'Tanggal pengiriman wajib diisi' }),
      jenisPayment: z.string().min(1, 'Pilih jenis pembayaran'),
      tglJatuhTempo: z.date().optional().nullable(),
    })
    .refine(data => data.jenisPayment !== 'Tempo' || !!data.tglJatuhTempo, {
      path: ['tglJatuhTempo'],
      message: 'Tanggal jatuh tempo harus diisi untuk jenis payment Tempo.',
    })
)

const { handleSubmit, resetForm, setFieldValue, values } = useForm({
  validationSchema: profileFormSchema,
  initialValues: {
    ppn: 11,
    jenisPayment: 'Cash',
  },
})

const isSubmitting = ref(false)
const isDialogOpen = ref(false)
const datePo = ref(new Date())
const dateDelivery = ref(null)
const dateJatuhTempo = ref(null)

// 🔹 Fetch RAP instead of Projects
async function fetchDataRAP() {
  try {
    const response = await fetch(`${baseUrl}/rap/forPo`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const fetchedData = await response.json()
    rapList.value = fetchedData.data.map(item => ({
      ...item,
      idRap: item.idRap || item.id, // Normalisasi agar template tidak bingung
      noRap: item.noRap,
      namaRap: item.namaRap,
      namaProyek: item.namaPekerjaan,
    }))
  } catch (error) {
    console.error('Gagal mengambil data RAP:', error)
  }
}

async function openDialog() {
  isDialogOpen.value = true
  await fetchDataRAP()
}

function closeDialog() {
  isDialogOpen.value = false
  resetForm()
  datePo.value = new Date()
  dateDelivery.value = null
  dateJatuhTempo.value = null
}

// 🔹 Logic saat RAP dipilih
function onSelectRAP(rap: any) {
  setFieldValue('idRap', rap.idRap || rap.id)
  setFieldValue('idProyek', rap.idProyek) // Auto-fill Proyek dari RAP
  openRap.value = false
}

const onSubmit = handleSubmit(async formValues => {
  isSubmitting.value = true
  const dataForm = {
    ...formValues,
    createdBy: username.value,
  }

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

    if (response.ok) {
      toast({ title: 'Success', description: 'PO Berhasil dibuat.' })
      emit('dataAdded')
      closeDialog()
    } else {
      toast({ title: 'Error', description: 'Gagal menyimpan PO.', variant: 'destructive' })
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
      <Button @click="openDialog">Add PO from RAP</Button>
    </DialogTrigger>

    <DialogContent class="sm:max-w-[800px] [&>button]:hidden">
      <form class="space-y-6" @submit.prevent="onSubmit">
        <DialogHeader>
          <DialogTitle>Create Purchase Order (PO)</DialogTitle>
          <p class="text-sm text-muted-foreground">
            PO ini akan dibuat berdasarkan referensi plafon anggaran dari RAP.
          </p>
        </DialogHeader>

        <div class="max-h-[60vh] overflow-y-auto px-1">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField v-slot="{ value }" name="idRap">
              <FormItem class="flex flex-col">
                <FormLabel>Pilih Referensi RAP</FormLabel>
                <Popover v-model:open="openRap">
                  <PopoverTrigger as-child>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        :class="cn('justify-between', !value && 'text-muted-foreground')"
                      >
                        {{
                          value
                            ? rapList.find(r => (r.idRap || r.id) === value)?.noRap
                            : 'Pilih No. RAP...'
                        }}
                        <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent class="w-[var(--radix-popover-trigger-width)] p-0">
                    <Command>
                      <CommandInput placeholder="Cari By Nama RAP..." />
                      <CommandList>
                        <CommandEmpty>RAP tidak ditemukan.</CommandEmpty>
                        <CommandGroup>
                          <CommandItem
                            v-for="item in rapList"
                            :key="item.id"
                            :value="String(item.namaRap)"
                            @select="onSelectRAP(item)"
                          >
                            <Check
                              :class="
                                cn(
                                  'mr-2 h-4 w-4',
                                  value === (item.idRap || item.id) ? 'opacity-100' : 'opacity-0'
                                )
                              "
                            />
                            {{ item.noRap }} - {{ item.namaRap }} - {{ item.namaProyek }}
                          </CommandItem>
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ field }" name="tanggal">
              <FormItem class="flex flex-col">
                <FormLabel>Tanggal PO</FormLabel>
                <Datepicker
                  v-model="datePo"
                  :enable-time-picker="false"
                  :format="'dd-MM-yyyy'"
                  auto-apply
                  @update:model-value="val => field.onChange(val)"
                />
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="ppn">
              <FormItem>
                <FormLabel>PPN (%)</FormLabel>
                <FormControl> <Input type="number" v-bind="componentField" /> </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="penerima">
              <FormItem>
                <FormLabel>Nama Penerima / Vendor</FormLabel>
                <FormControl>
                  <Input v-bind="componentField" placeholder="PT. Supplier Jaya" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="noTelepon">
              <FormItem>
                <FormLabel>No. Telepon</FormLabel>
                <FormControl> <Input v-bind="componentField" /> </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ field }" name="tglPengiriman">
              <FormItem class="flex flex-col">
                <FormLabel>Rencana Pengiriman</FormLabel>
                <Datepicker
                  v-model="dateDelivery"
                  :enable-time-picker="false"
                  :format="'dd-MM-yyyy'"
                  auto-apply
                  @update:model-value="val => field.onChange(val)"
                />
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="tujuanPo">
              <FormItem>
                <FormLabel>Tujuan PO</FormLabel>
                <FormControl> <Textarea v-bind="componentField" rows="2" /> </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="alamat">
              <FormItem>
                <FormLabel>Alamat Pengiriman</FormLabel>
                <FormControl> <Textarea v-bind="componentField" rows="2" /> </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField name="jenisPayment">
              <FormItem>
                <FormLabel>Jenis Payment</FormLabel>
                <div class="flex gap-4 mt-2">
                  <Button
                    type="button"
                    :variant="values.jenisPayment === 'Cash' ? 'default' : 'outline'"
                    @click="setFieldValue('jenisPayment', 'Cash')"
                    >Cash</Button
                  >
                  <Button
                    type="button"
                    :variant="values.jenisPayment === 'Tempo' ? 'default' : 'outline'"
                    @click="setFieldValue('jenisPayment', 'Tempo')"
                    >Tempo</Button
                  >
                </div>
              </FormItem>
            </FormField>

            <FormField
              v-if="values.jenisPayment === 'Tempo'"
              v-slot="{ field }"
              name="tglJatuhTempo"
            >
              <FormItem class="flex flex-col">
                <FormLabel>Jatuh Tempo</FormLabel>
                <Datepicker
                  v-model="dateJatuhTempo"
                  :enable-time-picker="false"
                  :format="'dd-MM-yyyy'"
                  auto-apply
                  @update:model-value="val => field.onChange(val)"
                />
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
        </div>

        <DialogFooter>
          <Button type="button" variant="secondary" @click="closeDialog">Batal</Button>
          <Button type="submit" :disabled="isSubmitting">
            <Loader2 v-if="isSubmitting" class="w-4 h-4 mr-2 animate-spin" />
            Buat Header PO
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
