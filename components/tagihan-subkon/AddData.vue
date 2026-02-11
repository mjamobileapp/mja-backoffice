<script setup lang="ts">
import { ref, onMounted, watch, computed, h } from 'vue'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { FieldArray, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { Loader2 } from 'lucide-vue-next'
import { toast } from '@/components/ui/toast'
// Import komponen yang mungkin dibutuhkan (pastikan sudah ada di project Anda)
import { Input } from '@/components/ui/input'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const emit = defineEmits(['dataAdded'])

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const currentUser = useCookie('currentUser')
const username = computed(() => currentUser.value?.username || 'no-user')

// get token====================
const accessToken = useCookie('accessToken')
const token = accessToken.value.token

// 🔥 1. Schema Form
const progressSchema = toTypedSchema(
  z.object({
    idSubkon: z.number().nullable().optional(), // Tambah nullable/optional untuk inisiasi
    keterangan: z.string(), // Tambah nullable/optional untuk inisiasi
    tglPenagihan: z.date({
      required_error: 'Please select a valid date.',
      invalid_type_error: 'Please select a valid date.',
    }),
    items: z.array(
      z.object({
        idDetail: z.number(),
        volumeProgress: z.union([z.number(), z.string()]).optional(),
        bobotProgress: z.union([z.number(), z.string()]).optional(),
      })
    ),
  })
)

// 🔥 2. Form Controller
const { handleSubmit, setFieldValue, values, resetForm, setFieldError } = useForm({
  validationSchema: progressSchema,
  initialValues: {
    idSubkon: undefined,
    items: [],
  },
})

const isDialogOpen = ref(false)
const isSubmitting = ref(false)
const loadingKontrak = ref(false)
const kontrakList = ref<any[]>([])
const detailList = ref<any[]>([])
const tglPenagihan = ref<Date | null>(null)

const openKontrak = ref(false)
const selectedKontrakLabel = computed(() => {
  const found = kontrakList.value.find(k => k.idSubkon === Number(values.idSubkon))
  return found ? `${found.namaSubkon} - ${found.namaPekerjaan}` : ''
})
/* =========================
   LOAD KONTRAK
========================= */
const loadKontrak = async () => {
  loadingKontrak.value = true
  try {
    const res: any = await $fetch(`${baseUrl}/kontrakSubkon/lock`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    kontrakList.value = res.data || []
  } finally {
    loadingKontrak.value = false
  }
}

// onMounted(loadKontrak)

/* =========================
   LOAD DETAIL SUBKON
========================= */
watch(
  () => values.idSubkon,
  async id => {
    detailList.value = []
    setFieldValue('items', [])

    if (!id) return

    const res: any = await $fetch(`${baseUrl}/getSisaProgress?idSubkon=${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })

    detailList.value = res.data || []

    setFieldValue(
      'items',
      detailList.value.map((d: any) => ({
        idDetail: d.id,
        volumeProgress: 0,
        bobotProgress: 0,
      }))
    )
  }
)

/* =========================
   HITUNG BOBOT PROGRESS
========================= */
function hitungBobotProgress(idx: number, val: any) {
  const volumeProgress = Number(val) || 0
  const detail = detailList.value[idx]
  if (!detail) return

  const volumeKontrak = Number(detail.volume || 0)
  const volumeSisa = Number(detail.volumeSisa || 0)
  const bobotItem = Number(detail.bobot || 0)

  // 1️⃣ Validasi terhadap SISA VOLUME
  if (volumeProgress > volumeSisa) {
    setFieldError(
      `items[${idx}].volumeProgress`,
      `Maksimal sisa ${volumeSisa.toLocaleString('id-ID')}`
    )
    setFieldValue(`items[${idx}].volumeProgress`, volumeSisa)

    const bobotProgress = volumeKontrak > 0 ? (volumeSisa / volumeKontrak) * bobotItem : 0

    setFieldValue(`items[${idx}].bobotProgress`, Number(bobotProgress.toFixed(4)))
    return
  }

  // 2️⃣ Hitung bobot normal (TERHADAP KONTRAK)
  setFieldError(`items[${idx}].volumeProgress`, undefined)

  const bobotProgress = volumeKontrak > 0 ? (volumeProgress / volumeKontrak) * bobotItem : 0

  setFieldValue(`items[${idx}].bobotProgress`, Number(bobotProgress.toFixed(4)))
}

/* =========================
   VALIDASI SUBMIT
========================= */
// Mengecek apakah ada setidaknya satu progress yang diisi (> 0)
const hasAnyProgress = computed(() =>
  values.items?.some((i: any) => {
    const volume = Number(i.volumeProgress)
    return volume > 0
  })
)

/**
 * Cek apakah kontrak subkon masih punya progress Draft
 */
const hasDraftProgress = (kontrak: any) => {
  if (!kontrak?.statusProgressTerakhir) return false
  return String(kontrak.statusProgressTerakhir).toUpperCase() === 'DRAFT'
}

/* =========================
   SUBMIT (PERBAIKAN FUNGSI BLOCKING)
========================= */
const onSubmit = handleSubmit(async form => {
  isSubmitting.value = true

  if (!hasAnyProgress.value) {
    toast({
      title: 'Validasi Gagal',
      description: 'Anda harus memasukkan Volume Progress untuk minimal satu item.',
      variant: 'destructive',
    })
    isSubmitting.value = false
    return
  }

  try {
    const payload = {
      ...form,
      totalProgress: total.value, // 👈 KIRIM TOTAL
      createdBy: username.value,
    }

    console.log(JSON.stringify(payload))
    const response = await fetch(`${baseUrl}/progressSubkon`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })

    if (response.ok) {
      toast({ title: 'Success', description: 'Progress berhasil disimpan' })
      emit('dataAdded')
      resetForm()
      isDialogOpen.value = false
    } else {
      const errorData = await response.json()
      toast({
        title: 'Error',
        description: errorData.message || 'Gagal menyimpan progress',
        variant: 'destructive',
      })
    }
  } finally {
    isSubmitting.value = false
  }
})

function formatRupiah(value: number | Ref<number>) {
  const val = typeof value === 'object' ? value.value : value
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val || 0)
}

// ===================
// Perhitungan
// ===================
const totalKontrak = computed(() =>
  detailList.value.reduce((sum, row) => sum + Number(row.total || 0), 0)
)

const totalBobotProgress = computed(
  () =>
    values.items?.reduce((sum: number, item: any) => {
      return sum + Number(item.bobotProgress || 0)
    }, 0) || 0
)

const total = computed(() => {
  return (totalKontrak.value * totalBobotProgress.value) / 100
})

function openDialog() {
  isDialogOpen.value = true
  loadKontrak()
  resetForm()
}

function closeDialog() {
  isDialogOpen.value = false
  resetForm()
}

const dateMulai = ref(null)
</script>

<template>
  <Dialog :open="isDialogOpen" @openChange="isDialogOpen = $event">
    <DialogTrigger as-child>
      <Button @click="openDialog">Add Progress</Button>
    </DialogTrigger>

    <DialogContent class="sm:max-w-[1200px] [&>button]:hidden">
      <form class="space-y-8" @submit.prevent="onSubmit">
        <DialogHeader>
          <DialogTitle>Tambah Progress Pekerjaan Subkon</DialogTitle>
        </DialogHeader>

        <div class="max-h-[65vh] overflow-y-auto pr-4 space-y-6">
          <!-- <FormField name="idSubkon" v-slot="{ componentField }">
            <FormItem>
              <FormLabel>Pilih Kontrak Subkon</FormLabel>
              <FormControl>
                <Select v-bind="componentField">
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih kontrak..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem v-if="loadingKontrak" value="loading" disabled>
                      Memuat data...
                    </SelectItem>
                    <SelectItem
                      v-for="k in kontrakList"
                      :key="k.idSubkon"
                      :value="k.idSubkon"
                      :disabled="hasDraftProgress(k)"
                    >
                      {{ k.namaSubkon }} - {{ k.namaPekerjaan }}
                      <span v-if="hasDraftProgress(k)" class="ml-2 text-xs text-red-500 italic">
                        (Masih Draft)
                      </span>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField> -->
          <FormField name="idSubkon" v-slot="{ value }">
            <FormItem class="flex flex-col">
              <FormLabel>Pilih Kontrak Subkon</FormLabel>

              <Popover v-model:open="openKontrak">
                <PopoverTrigger as-child>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      :class="cn('justify-between', !value && 'text-muted-foreground')"
                    >
                      {{ value ? selectedKontrakLabel : 'Pilih kontrak...' }}
                      <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>

                <PopoverContent class="w-[var(--radix-popover-trigger-width)] p-0">
                  <Command>
                    <CommandInput placeholder="Cari subkon / pekerjaan..." />
                    <CommandList>
                      <CommandEmpty>Kontrak tidak ditemukan.</CommandEmpty>

                      <CommandGroup>
                        <CommandItem
                          v-for="k in kontrakList"
                          :key="k.idSubkon"
                          :value="`${k.namaSubkon} ${k.namaPekerjaan}`.toLowerCase()"
                          :disabled="hasDraftProgress(k)"
                          @select="
                            () => {
                              setFieldValue('idSubkon', k.idSubkon)
                              openKontrak = false
                            }
                          "
                        >
                          <Check
                            :class="
                              cn('mr-2 h-4 w-4', value === k.idSubkon ? 'opacity-100' : 'opacity-0')
                            "
                          />
                          {{ k.namaSubkon }} - {{ k.namaPekerjaan }}

                          <span v-if="hasDraftProgress(k)" class="ml-2 text-xs text-red-500 italic">
                            (Masih Draft)
                          </span>
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ field, value }" name="tglPenagihan">
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
          <FormField v-slot="{ componentField }" name="keterangan">
            <FormItem>
              <FormLabel>Keterangan</FormLabel>
              <FormControl>
                <Textarea type="text" v-bind="componentField"></Textarea>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FieldArray name="items" v-slot="{ fields }">
            <div v-if="fields.length > 0" class="border rounded-xl overflow-hidden shadow-sm">
              <table class="w-full text-sm table-auto">
                <thead class="bg-gray-50 border-b">
                  <tr>
                    <th class="p-3 text-left font-semibold w-[5%]">No</th>
                    <th class="p-3 text-left font-semibold w-[25%]">Item Pekerjaan</th>
                    <th class="p-3 text-left font-semibold w-[10%]">Satuan</th>
                    <th class="p-3 text-left font-semibold w-[10%]">Vol. Kontrak</th>
                    <th class="p-3 text-left font-semibold w-[10%]">Vol. Sisa</th>
                    <th class="p-3 text-center font-semibold w-[8%]">Vol. Progress</th>
                    <th class="p-3 text-center font-semibold w-[7%]">Bobot Progress %</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(field, idx) in fields"
                    :key="field.key"
                    class="border-b hover:bg-gray-50 transition-colors"
                  >
                    <td class="p-3 text-center">{{ idx + 1 }}</td>
                    <td class="p-3 font-medium">
                      {{ detailList[idx]?.item }}
                    </td>
                    <td class="p-3">{{ detailList[idx]?.satuan }}</td>
                    <td class="p-3">
                      {{ detailList[idx]?.volume?.toLocaleString('id-ID') }}
                    </td>
                    <td class="p-3">
                      {{ detailList[idx]?.volumeSisa?.toLocaleString('id-ID') }}
                    </td>

                    <td class="p-1">
                      <FormField :name="`items[${idx}].volumeProgress`" v-slot="{ componentField }">
                        <FormItem class="space-y-0">
                          <FormControl>
                            <Input
                              type="number"
                              v-bind="componentField"
                              @input="e => hitungBobotProgress(idx, e.target.value)"
                            />
                          </FormControl>
                          <FormMessage class="absolute -bottom-5 text-xs" />
                        </FormItem>
                      </FormField>
                    </td>

                    <td class="p-1">
                      <FormField :name="`items[${idx}].bobotProgress`" v-slot="{ componentField }">
                        <FormItem class="space-y-0">
                          <FormControl>
                            <Input
                              type="number"
                              disabled
                              v-bind="componentField"
                              class="text-right h-8"
                            />
                          </FormControl>
                          <FormMessage class="absolute -bottom-5 text-xs" />
                        </FormItem>
                      </FormField>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- Ringkasan Total -->
              <div class="flex flex-col items-end p-4 bg-gray-50 border-t text-sm">
                <div class="flex justify-between w-64 border-t pt-2 mt-1">
                  <span>Total</span>
                  <span class="font-bold text-green-600">{{ formatRupiah(total) }}</span>
                </div>
              </div>
            </div>

            <p
              v-else-if="values.idSubkon && detailList.length === 0 && !loadingKontrak"
              class="text-center text-gray-500 p-4"
            >
              Tidak ada detail pekerjaan untuk kontrak ini.
            </p>
            <p v-else class="text-center text-gray-400 p-4">
              Silakan pilih **Kontrak Subkon** terlebih dahulu.
            </p>
          </FieldArray>
        </div>

        <DialogFooter>
          <DialogClose as-child>
            <Button type="button" variant="secondary" @click="closeDialog">Tutup</Button>
          </DialogClose>

          <span v-if="isSubmitting">
            <Button disabled> <Loader2 class="w-4 h-4 mr-2 animate-spin" /> Menyimpan... </Button>
          </span>

          <Button type="submit" v-else :disabled="!values.idSubkon || !hasAnyProgress"
            >Simpan</Button
          >
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
