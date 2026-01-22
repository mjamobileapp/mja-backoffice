<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { Loader2, Calculator, Banknote } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '~/components/ui/toast'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

import {
  Dialog,
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
import { FormField, FormItem, FormLabel, FormMessage, FormControl } from '@/components/ui/form'

/* ============================================================
   CONFIG & AUTH
============================================================ */
const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const emit = defineEmits(['dataAdded'])

const accessToken = useCookie('accessToken')
const token = accessToken.value?.token

const currentUser = useCookie('currentUser')
const username = computed(() => currentUser.value?.username || 'system')

const lastSelectedSubkonId = ref<number | null>(null)
const lastSelectedProgressId = ref<number | null>(null)

/* ============================================================
   VALIDATION
============================================================ */
const schema = toTypedSchema(
  z.object({
    idSubkon: z.number({ required_error: 'Pilih subkon' }),
    idProgress: z.number({ required_error: 'Pilih termin' }),
    tanggal: z.date({ required_error: 'Pilih tanggal' }),
    nilaiBayar: z.number().min(1, 'Minimal Rp 1'),
    keterangan: z.string().optional(),
    files: z
      .array(z.any())
      .min(1, 'Minimal 1 file harus diupload')
      .refine(files => files.every(file => file.type.startsWith('image/')), {
        message: 'File harus berupa gambar (jpg, jpeg, png, webp, dll)',
      }),
  })
)

const { handleSubmit, setFieldValue, values, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    tanggal: new Date(),
    nilaiBayar: undefined,
  },
})

/* ============================================================
   DATA FETCH
============================================================ */
const listSubkonProgress = ref<any[]>([])

async function fetchDataProgressSummary() {
  const res = await fetch(`${baseUrl}/getSubkonProgressSummary`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  const json = await res.json()
  listSubkonProgress.value = json.data.map(subkon => ({
    ...subkon,
    termin: subkon.termin.map(t => ({
      ...t,
      nilaiProgress: Number(t.nilaiProgress),
      totalDibayar: Number(t.totalDibayar),
    })),
  }))
}

onMounted(fetchDataProgressSummary)

/* ============================================================
   COMPUTED CORE
============================================================ */
const selectedSubkon = computed(() => listSubkonProgress.value.find(s => s.id === values.idSubkon))

const terminList = computed(() => selectedSubkon.value?.termin || [])

const selectedTermin = computed(() =>
  terminList.value.find(t => t.idProgress === values.idProgress)
)

watch(selectedTermin, val => {
  console.log('DEBUG TERMIN:', val)
})

/**
 * FLAG: pembayaran pertama termin?
 */
const isFirstPaymentOfTermin = computed(() => {
  if (!selectedTermin.value) return false
  return Number(selectedTermin.value.totalDibayar) === 0
})

/**
 * Potongan DP (HANYA SEKALI)
 */
const potonganDP = computed(() => {
  if (
    !selectedTermin.value ||
    !isFirstPaymentOfTermin.value ||
    selectedTermin.value.noTermin !== 'Termin-01'
  )
    return 0

  return selectedSubkon.value?.nilaiDP || 0
})

/**
 * Retensi (HANYA SEKALI)
 */
const potonganRetensi = computed(() => {
  if (
    !selectedTermin.value ||
    !selectedSubkon.value ||
    !isFirstPaymentOfTermin.value ||
    selectedTermin.value.noTermin !== 'Termin-01'
  )
    return 0

  return selectedTermin.value.nilaiProgress * (selectedSubkon.value.persenRetensi / 100)
})

/**
 * Netto termin
 */
const nilaiNetto = computed(() => {
  if (!selectedTermin.value) return 0
  return selectedTermin.value.nilaiProgress - potonganDP.value - potonganRetensi.value
})

/**
 * SISA BAYAR (PER TERMIN, BUKAN KUMULATIF)
 */
const sisaBayar = computed(() => {
  if (!selectedTermin.value) return 0
  return Math.max(nilaiNetto.value - selectedTermin.value.totalDibayar, 0)
})

/* ============================================================
   HELPERS
============================================================ */
const formatRupiah = (val: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(val || 0)

/* ============================================================
   UI STATE
============================================================ */
const isDialogOpen = ref(false)
const isSubmitting = ref(false)

// 📁 handle file
function handleFileChange(e: Event) {
  const target = e.target as HTMLInputElement
  if (target.files) {
    const arrFiles = Array.from(target.files)
    setFieldValue('files', arrFiles)
  }
}

const closeDialog = () => {
  isDialogOpen.value = false
  resetForm()
}

/**
 * Input nominal aman
 */
const handleNilaiBayar = (raw: string) => {
  const cleaned = raw.replace(/\D/g, '')
  if (!cleaned) {
    setFieldValue('nilaiBayar', undefined)
    return
  }

  let val = parseInt(cleaned)
  if (val > sisaBayar.value) val = sisaBayar.value
  setFieldValue('nilaiBayar', val)
}

/* ============================================================
   SUBMIT
============================================================ */
const onSubmit = handleSubmit(async form => {
  isSubmitting.value = true
  lastSelectedSubkonId.value = values.idSubkon
  lastSelectedProgressId.value = values.idProgress

  try {
    const payload = {
      ...form,
      potonganDP: potonganDP.value,
      retensi: potonganRetensi.value,
      createdBy: username.value,
    }

    console.log(JSON.stringify(payload))
    const response = await fetch(`${baseUrl}/pembayaranSubkon`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })

    // Cek jika HTTP status bukan 2xx
    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || 'Gagal menyimpan pembayaran')
    }

    // 2. Parsing JSON untuk mendapatkan ID yang baru dibuat
    const result = await response.json()
    console.log(result)
    const newId = result.data?.id // Pastikan controller Anda mengembalikan { data: { id: ... } }

    toast({
      title: 'Success',
      description: 'Data berhasil disimpan.',
    })

    // 3. Upload File (hanya jika ada file dan ID pembayaran valid)
    if (newId && form.files?.length > 0) {
      const formDataFile = new FormData()
      formDataFile.append('createdBy', username.value)
      formDataFile.append('idPembayaran', newId)

      form.files.forEach(file => {
        formDataFile.append('files', file)
      })

      await $fetch(`${baseUrl}/uploadBuktiBayarSubkon`, {
        method: 'POST',
        body: formDataFile,
        headers: {
          Authorization: `Bearer ${token}`,
          // Note: Jangan set Content-Type manual untuk FormData
        },
      })
    }

    // 🔄 REFRESH DATA TERMIN
    await fetchDataProgressSummary()

    // 🔁 Restore pilihan subkon
    if (lastSelectedSubkonId.value) {
      setFieldValue('idSubkon', lastSelectedSubkonId.value)
    }

    // 🔍 Cek apakah termin masih punya sisa
    const refreshedSubkon = listSubkonProgress.value.find(s => s.id === lastSelectedSubkonId.value)

    const refreshedTermin = refreshedSubkon?.termin.find(
      t => t.idProgress === lastSelectedProgressId.value
    )

    if (refreshedTermin && refreshedTermin.nilaiProgress - refreshedTermin.totalDibayar > 0) {
      // ⏳ masih bisa dibayar
      setFieldValue('idProgress', refreshedTermin.idProgress)
    } else {
      // ✅ termin lunas → reset pilihan termin
      setFieldValue('idProgress', undefined)
    }

    setFieldValue('nilaiBayar', undefined)

    emit('dataAdded')
    closeDialog()
  } catch {
    toast({
      title: 'Error',
      description: 'Gagal menyimpan pembayaran',
      variant: 'destructive',
    })
  } finally {
    isSubmitting.value = false
  }
})
</script>

<template>
  <Dialog :open="isDialogOpen" @update:open="val => !val && closeDialog()">
    <DialogTrigger as-child>
      <Button @click="isDialogOpen = true" class="gap-2">
        <Banknote class="w-4 h-4" /> Input Pembayaran
      </Button>
    </DialogTrigger>

    <DialogContent class="sm:max-w-[600px]">
      <form @submit.prevent="onSubmit" class="space-y-5">
        <DialogHeader>
          <DialogTitle>Form Pembayaran Subkon</DialogTitle>
        </DialogHeader>

        <div class="grid gap-4 max-h-[65vh] overflow-y-auto pr-2">
          <FormField name="idSubkon" v-slot="{ value }">
            <FormItem>
              <FormLabel>Sub Kontraktor</FormLabel>
              <Select
                :model-value="value?.toString()"
                @update:model-value="
                  v => {
                    setFieldValue('idSubkon', Number(v))
                    setFieldValue('idProgress', undefined)
                    setFieldValue('nilaiBayar', undefined)
                  }
                "
              >
                <FormControl>
                  <SelectTrigger><SelectValue placeholder="Pilih Subkon" /></SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem v-for="s in listSubkonProgress" :key="s.id" :value="s.id.toString()">
                    {{ s.namaSubkon }} - {{ s.namaPekerjaan }}
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField name="idProgress" v-slot="{ value }" v-if="terminList.length">
            <FormItem>
              <FormLabel>Termin Pembayaran</FormLabel>
              <Select
                :model-value="value?.toString()"
                @update:model-value="
                  v => {
                    setFieldValue('idProgress', Number(v))
                    setFieldValue('nilaiBayar', undefined)
                  }
                "
              >
                <FormControl>
                  <SelectTrigger><SelectValue placeholder="Pilih Termin" /></SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem
                    v-for="t in terminList"
                    :key="t.idProgress"
                    :value="t.idProgress.toString()"
                    :disabled="t.nilaiProgress - t.totalDibayar <= 0"
                  >
                    {{ t.noTermin }} - {{ formatRupiah(t.nilaiProgress) }}
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          </FormField>

          <div
            v-if="selectedTermin"
            class="rounded-xl border bg-slate-50 p-4 text-sm space-y-2.5 shadow-sm"
          >
            <div class="flex items-center gap-2 font-bold text-slate-800 border-b pb-2 mb-2">
              <Calculator class="w-4 h-4" /> Rincian Kewajiban
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">Nilai Progress</span>
              <span class="font-medium text-slate-900">{{
                formatRupiah(selectedTermin.nilaiProgress)
              }}</span>
            </div>

            <div v-if="potonganDP > 0" class="flex justify-between text-rose-600 italic">
              <span>Potongan DP (Termin 1)</span> <span>- {{ formatRupiah(potonganDP) }}</span>
            </div>
            <div v-if="potonganRetensi > 0" class="flex justify-between text-rose-600 italic">
              <span>Retensi ({{ selectedSubkon?.persenRetensi }}%)</span>
              <span>- {{ formatRupiah(potonganRetensi) }}</span>
            </div>
            <div class="flex justify-between font-bold border-t pt-2 text-slate-900">
              <span>Total Netto</span> <span>{{ formatRupiah(nilaiNetto) }}</span>
            </div>
            <div class="flex justify-between text-blue-600">
              <span>Sudah Terbayar</span>
              <span>{{ formatRupiah(selectedTermin.totalDibayar) }}</span>
            </div>
            <div
              class="flex justify-between font-bold text-base text-emerald-700 border-t-2 border-dashed pt-2"
            >
              <span>Sisa Maks. Bayar (Kumulatif)</span> <span>{{ formatRupiah(sisaBayar) }}</span>
            </div>
            <div v-if="!isFirstPaymentOfTermin" class="text-xs italic text-slate-400 pt-2">
              * Potongan DP & retensi sudah diterapkan pada pembayaran sebelumnya
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <FormField name="tanggal" v-slot="{ field }">
              <FormItem>
                <FormLabel>Tanggal Transaksi</FormLabel>
                <Datepicker
                  v-model="field.value"
                  :enable-time-picker="false"
                  auto-apply
                  @update:model-value="val => setFieldValue('tanggal', val)"
                />
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField name="nilaiBayar" v-slot="{ field }">
              <FormItem>
                <FormLabel>Nominal Pembayaran</FormLabel>
                <FormControl>
                  <div class="relative">
                    <Input
                      type="text"
                      placeholder="Contoh: 5.000.000"
                      :model-value="field.value"
                      @input="e => handleNilaiBayar(e.target.value)"
                      :disabled="!selectedTermin || sisaBayar <= 0"
                      class="pr-4"
                    />
                  </div>
                </FormControl>
                <div class="flex justify-between mt-1.5">
                  <p class="text-[11px] font-bold text-emerald-600 truncate">
                    {{ formatRupiah(field.value || 0) }}
                  </p>
                </div>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <FormField name="files">
            <FormItem>
              <FormLabel>Upload Bukti Bayar</FormLabel>
              <FormControl>
                <Input type="file" @change="handleFileChange" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField name="keterangan" v-slot="{ field }">
            <FormItem>
              <FormLabel>Keterangan / Catatan</FormLabel>
              <FormControl>
                <Textarea v-bind="field" placeholder="Tambahkan catatan jika perlu..." rows="2" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>

        <DialogFooter class="border-t pt-4">
          <Button variant="ghost" type="button" @click="closeDialog">Batal</Button>
          <Button
            type="submit"
            :disabled="isSubmitting || !selectedTermin || sisaBayar <= 0"
            class="min-w-[140px]"
          >
            <Loader2 v-if="isSubmitting" class="mr-2 h-4 w-4 animate-spin" />
            Simpan Data
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
