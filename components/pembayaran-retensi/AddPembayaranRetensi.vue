<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { Loader2, Calculator, ShieldCheck } from 'lucide-vue-next'
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

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase
const emit = defineEmits(['dataAdded'])
const accessToken = useCookie('accessToken')
const token = accessToken.value?.token
const currentUser = useCookie('currentUser')
const username = computed(() => currentUser.value?.username || 'system')

/* ============================================================
   VALIDATION SCHEMA
============================================================ */
const schema = toTypedSchema(
  z.object({
    idSubkon: z.number({ required_error: 'Pilih subkon' }),
    tanggal: z.date({ required_error: 'Pilih tanggal' }),
    nilaiBayar: z
      .number({ required_error: 'Nominal wajib diisi' })
      .positive('Nominal harus > 0')
      .refine(val => val <= sisaSaldoRetensi.value, {
        message: 'Nominal melebihi sisa saldo retensi',
      }),
    keterangan: z.string().optional(),
    files: z.array(z.any()).min(1, 'Minimal 1 bukti transfer harus diupload'),
  })
)

const { handleSubmit, setFieldValue, values, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    idSubkon: undefined,
    tanggal: new Date(),
    nilaiBayar: undefined,
  },
})

/* ============================================================
   DATA FETCHING
============================================================ */
const listSubkonRetensi = ref<any[]>([])

async function fetchRetensiSummary() {
  // Anggap endpoint ini mengembalikan list subkon dengan saldo retensi yang belum dibayar
  const res = await fetch(`${baseUrl}/pembayaranRetensi/getSummaryRetensi`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  const json = await res.json()
  listSubkonRetensi.value = json.data // Harus berisi: { id, namaSubkon, totalRetensi, sudahDibayarRetensi }
  console.log(json.data)
}

onMounted(fetchRetensiSummary)

/* ============================================================
   COMPUTED LOGIC
============================================================ */
// const selectedSubkon = computed(() => listSubkonRetensi.value.find(s => s.id === values.idSubkon))
const selectedSubkon = computed(() => {
  if (!values.idSubkon) return null
  return listSubkonRetensi.value.find(s => s.idSubkon === values.idSubkon)
})

// Sisa saldo retensi yang bisa dicairkan
const sisaSaldoRetensi = computed(() => {
  if (!selectedSubkon.value) return 0
  const total = Number(selectedSubkon.value.totalRetensiTersedia || 0)
  const dibayar = Number(selectedSubkon.value.sudahDibayarRetensi || 0)
  return Math.max(total - dibayar, 0)
})

/* ============================================================
   HANDLERS
============================================================ */
const formatRupiah = (val: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(val || 0)

const isDialogOpen = ref(false)
const isSubmitting = ref(false)
const handleNilaiBayar = (raw: string) => {
  if (!selectedSubkon.value) return

  const cleaned = raw.replace(/\D/g, '')
  let inputVal = Number(cleaned || 0)

  if (inputVal > sisaSaldoRetensi.value) {
    inputVal = sisaSaldoRetensi.value
  }

  setFieldValue('nilaiBayar', inputVal)
}

function handleFileChange(e: Event) {
  const target = e.target as HTMLInputElement
  if (target.files) setFieldValue('files', Array.from(target.files))
}

const closeDialog = () => {
  isDialogOpen.value = false
  resetForm()
}

const sisaSetelahBayar = computed(() => {
  return Math.max(sisaSaldoRetensi.value - (values.nilaiBayar || 0), 0)
})
const onSubmit = handleSubmit(async form => {
  isSubmitting.value = true

  // if (form.nilaiBayar !== sisaSaldoRetensi.value) {
  //   setFieldValue('nilaiBayar', sisaSaldoRetensi.value)
  // }

  try {
    const payload = {
      ...form,
      isRetensiPayment: true, // Flag untuk backend bahwa ini pembayaran retensi
      createdBy: username.value,
    }

    // console.log(JSON.stringify(payload))
    const response = await fetch(`${baseUrl}/pembayaranRetensi`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(payload),
    })

    if (!response.ok) throw new Error('Gagal simpan pembayaran retensi')

    const result = await response.json()
    // console.log(result.data?.id)
    const newId = result.data?.id

    // Upload Files
    if (newId && form.files?.length > 0) {
      const fd = new FormData()
      fd.append('idPembayaran', newId)
      fd.append('createdBy', username.value)
      form.files.forEach(f => fd.append('files', f))
      await $fetch(`${baseUrl}/uploadBuktiBayarRetensi`, {
        method: 'POST',
        body: fd,
        headers: { Authorization: `Bearer ${token}` },
      })
    }

    toast({ title: 'Success', description: 'Pembayaran retensi berhasil dicatat.' })
    await fetchRetensiSummary()
    emit('dataAdded')
    closeDialog()
  } catch (err: any) {
    toast({ title: 'Error', description: err.message, variant: 'destructive' })
  } finally {
    isSubmitting.value = false
  }
})

// watch(
//   () => values.idSubkon,
//   () => {
//     if (sisaSaldoRetensi.value > 0) {
//       setFieldValue('nilaiBayar', sisaSaldoRetensi.value)
//     }
//   }
// )
watch(
  () => values.idSubkon,
  () => {
    setFieldValue('nilaiBayar', 0)
  }
)
</script>

<template>
  <Dialog :open="isDialogOpen" @update:open="val => !val && closeDialog()">
    <DialogTrigger as-child>
      <Button
        @click="isDialogOpen = true"
        variant="outline"
        class="ml-2 gap-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
      >
        <ShieldCheck class="w-4 h-4" /> Bayar Retensi
      </Button>
    </DialogTrigger>

    <DialogContent class="sm:max-w-[500px]">
      <form @submit.prevent="onSubmit" class="space-y-5">
        <DialogHeader>
          <DialogTitle>Pelunasan Saldo Retensi Subkon</DialogTitle>
        </DialogHeader>

        <div class="grid gap-4">
          <FormField name="idSubkon" v-slot="{ value }">
            <FormItem>
              <FormLabel>Pilih Sub Kontraktor</FormLabel>
              <Select
                :model-value="value?.toString()"
                @update:model-value="v => setFieldValue('idSubkon', Number(v))"
              >
                <FormControl
                  ><SelectTrigger><SelectValue placeholder="Pilih Subkon" /></SelectTrigger
                ></FormControl>
                <SelectContent>
                  <SelectItem
                    v-for="s in listSubkonRetensi"
                    :key="s.idSubkon"
                    :value="s.idSubkon.toString()"
                  >
                    {{ s.namaSubkon }} - {{ s.keterangan }} (Saldo:
                    {{ formatRupiah(s.totalRetensiTersedia - s.sudahDibayarRetensi) }})
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          </FormField>

          <div
            v-if="selectedSubkon"
            class="rounded-xl border bg-emerald-50 p-4 text-sm space-y-2 shadow-sm border-emerald-200"
          >
            <div
              class="flex items-center gap-2 font-bold text-emerald-800 border-b border-emerald-200 pb-2 mb-2"
            >
              <Calculator class="w-4 h-4" /> Akumulasi Saldo Retensi
            </div>

            <div class="flex justify-between">
              <span class="text-emerald-700">Total Retensi (Semua Termin)</span>
              <span class="font-medium">
                {{ formatRupiah(selectedSubkon.totalRetensiTersedia) }}
              </span>
            </div>

            <div class="flex justify-between text-rose-600">
              <span>Sudah Dicairkan Sebelumnya</span>
              <span>- {{ formatRupiah(selectedSubkon.sudahDibayarRetensi) }}</span>
            </div>

            <div class="flex justify-between font-bold text-base text-emerald-900 border-t pt-2">
              <span>Sisa Retensi Tersedia</span>
              <span>{{ formatRupiah(sisaSaldoRetensi) }}</span>
            </div>

            <div class="flex justify-between text-indigo-700 font-semibold">
              <span>Sisa Setelah Pembayaran Ini</span>
              <span>{{ formatRupiah(sisaSetelahBayar) }}</span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <FormField name="tanggal" v-slot="{ field }">
              <FormItem>
                <FormLabel>Tanggal Cair</FormLabel>
                <Datepicker v-model="field.value" :enable-time-picker="false" auto-apply />
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField name="nilaiBayar" v-slot="{ field }">
              <FormItem>
                <FormLabel>Nominal Pencairan</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    :model-value="formatRupiah(field.value || 0)"
                    @input="e => handleNilaiBayar(e.target.value)"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>

          <FormField name="files"
            ><FormItem
              ><FormLabel>Bukti Transfer Retensi</FormLabel
              ><FormControl><Input type="file" @change="handleFileChange" /></FormControl
              ><FormMessage /></FormItem
          ></FormField>
          <FormField name="keterangan" v-slot="{ field }"
            ><FormItem
              ><FormLabel>Catatan</FormLabel
              ><FormControl><Textarea v-bind="field" rows="2" /></FormControl
              ><FormMessage /></FormItem
          ></FormField>
        </div>

        <DialogFooter>
          <Button variant="ghost" type="button" @click="closeDialog">Batal</Button>
          <Button
            type="submit"
            :disabled="isSubmitting || sisaSaldoRetensi <= 0"
            class="bg-emerald-600 hover:bg-emerald-700"
          >
            <Loader2 v-if="isSubmitting" class="mr-2 h-4 w-4 animate-spin" /> Bayar Retensi
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
