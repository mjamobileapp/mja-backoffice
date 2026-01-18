<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
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
import { toast } from '~/components/ui/toast'
import { PlusSquareIcon } from 'lucide-vue-next'
import { format as formatDate } from 'date-fns'

/* ================= PROPS ================= */
const props = defineProps<{ id: number; statusPo: string }>()
const emit = defineEmits(['detailPo'])

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

/* ================= STATE ================= */
const isDialogOpen = ref(false)
const isLoading = ref(false)

const headerPo = reactive({
  idPo: 0,
  idRap: 0,
  noPo: '',
  noRap: '',
  tanggal: '',
  ppn: 0,
})

const dataDetail = ref<any[]>([])

/* ================= AUTH ================= */
const accessToken = useCookie('accessToken')
const token = accessToken.value?.token
const currentUser = useCookie('currentUser')
const username = computed(() => currentUser.value?.username || 'admin')

/* ================= UTILS ================= */
function formatRupiah(val: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(val || 0)
}

function normalizeNumber(val: any) {
  return Number(String(val).replace(',', '.')) || 0
}

const isHidden = ref(false)
/* ================= OPEN ================= */
async function openDialog() {
  isDialogOpen.value = true
  await loadHeader()
  await loadDetailPoOrRap()
  if (props.statusPo === 'Lunas') {
    isHidden.value = true
    // console.log('1')
  } else {
    // console.log('2')
    isHidden.value = false
  }
  // console.log(props.statusPo)
}

/* ================= LOAD HEADER ================= */
async function loadHeader() {
  const res = await fetch(`${baseUrl}/po/${props.id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  const po = (await res.json()).data

  Object.assign(headerPo, {
    idPo: po.id,
    idRap: po.idRap,
    noPo: po.noPo,
    noRap: po.noRap,
    tanggal: po.tanggal ? formatDate(new Date(po.tanggal), 'yyyy-MM-dd') : '',
    ppn: po.ppn || 0,
  })
}

/* ================= LOAD DETAIL ================= */
async function loadDetailPoOrRap() {
  // 1️⃣ Coba ambil detail PO
  const resPo = await fetch(`${baseUrl}/detailPo?idPo=${headerPo.idPo}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  const poDetails = (await resPo.json()).data || []

  if (poDetails.length > 0) {
    // PO SUDAH ADA
    dataDetail.value = poDetails.map((d: any) => ({
      idDetailRap: d.idDetailRap,
      item: d.item,
      ukuran: d.ukuran,
      satuan: d.satuan,

      qtyRap: Number(d.qtyRap),
      qtyPo: Number(d.qtyPo),

      hargaRap: Number(d.hargaRap),
      hargaPo: Number(d.hargaPo),

      total: Number(d.qtyPo) * Number(d.hargaPo),
    }))
    return
  }

  // 2️⃣ PO BARU → AMBIL DARI RAP (SISA QTY)
  const resRap = await fetch(`${baseUrl}/detailPo/available-items-rap/${headerPo.idRap}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  const rapItems = (await resRap.json()).data || []

  dataDetail.value = rapItems.map((r: any) => ({
    idDetailRap: r.idDetailRap,
    item: r.item,
    ukuran: r.ukuran,
    satuan: r.satuan,

    qtyRap: Number(r.qtyRap), // SISA RAP (DISPLAY)
    qtyPo: 0, // INPUT USER

    hargaRap: Number(r.hargaRap),
    hargaPo: Number(r.hargaRap),

    total: 0,
  }))
}

/* ================= QTY CHANGE ================= */
function handleQtyChange(index: number) {
  const row = dataDetail.value[index]

  if (row.qtyPo > row.qtyRap) {
    toast({
      title: 'Qty PO melebihi sisa RAP',
      description: `Maksimal ${row.qtyRap}`,
      variant: 'destructive',
    })
    row.qtyPo = row.qtyRap
  }

  if (row.qtyPo < 0) row.qtyPo = 0

  row.total = row.qtyPo * row.hargaPo
}

/* ================= HARGA CHANGE ================= */
function handleHargaChange(index: number, val: any) {
  const row = dataDetail.value[index]
  const harga = normalizeNumber(val)

  if (harga > row.hargaRap) {
    toast({
      title: 'Harga PO melebihi Harga RAP',
      description: `Maksimal ${formatRupiah(row.hargaRap)}`,
      variant: 'destructive',
    })
    row.hargaPo = row.hargaRap
  } else {
    row.hargaPo = harga
  }

  row.total = row.qtyPo * row.hargaPo
}

/* ================= TOTAL ================= */
const subtotal = computed(() => dataDetail.value.reduce((s, r) => s + r.total, 0))
const totalPpn = computed(() => (subtotal.value * headerPo.ppn) / 100)
const grandTotal = computed(() => subtotal.value + totalPpn.value)

const isValid = computed(
  () =>
    dataDetail.value.some(d => d.qtyPo > 0) &&
    dataDetail.value.every(
      d => d.qtyPo >= 0 && d.qtyPo <= d.qtyRap && d.hargaPo > 0 && d.hargaPo <= d.hargaRap
    )
)

/* ================= SUBMIT ================= */
async function handleSubmit() {
  if (!isValid.value) return
  isLoading.value = true

  const payload = {
    idPo: headerPo.idPo,
    createdBy: username.value,
    ppn: headerPo.ppn,
    dataDetail: dataDetail.value
      .filter(d => d.qtyPo > 0)
      .map(d => ({
        idDetailRap: d.idDetailRap,
        qty: d.qtyPo,
        harga: d.hargaPo,
      })),
  }

  console.log(JSON.stringify(payload))
  try {
    const res = await fetch(`${baseUrl}/detailPo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })
    if (!res.ok) throw new Error()

    toast({ title: 'Berhasil', description: 'Detail PO tersimpan' })
    emit('detailPo')
    isDialogOpen.value = false
  } catch {
    toast({
      title: 'Gagal',
      description: 'Gagal menyimpan Detail PO',
      variant: 'destructive',
    })
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <Dialog :open="isDialogOpen" @update:open="isDialogOpen = $event">
    <DialogTrigger as-child>
      <Button size="sm" @click="openDialog">
        <PlusSquareIcon class="w-4 h-4" />
      </Button>
    </DialogTrigger>

    <DialogContent class="sm:max-w-[95vw] max-h-[95vh] flex flex-col p-0">
      <DialogHeader class="p-6 border-b">
        <DialogTitle>Detail Purchase Order – Ref: {{ headerPo.noRap }}</DialogTitle>
      </DialogHeader>

      <div class="flex-1 overflow-y-auto p-6 space-y-6">
        <!-- HEADER -->
        <div class="grid grid-cols-4 gap-4 bg-slate-50 p-4 rounded border">
          <div>
            <p class="text-xs text-gray-500">No PO</p>
            <p class="font-medium">{{ headerPo.noPo }}</p>
          </div>
          <div>
            <p class="text-xs text-gray-500">RAP</p>
            <p class="font-medium text-blue-600">{{ headerPo.noRap }}</p>
          </div>
          <div>
            <p class="text-xs text-gray-500">Tanggal</p>
            <p class="font-medium">{{ headerPo.tanggal }}</p>
          </div>
          <div>
            <p class="text-xs text-gray-500">PPN</p>
            <p class="font-medium">{{ headerPo.ppn }}%</p>
          </div>
        </div>

        <!-- TABLE -->
        <table class="w-full text-sm border rounded">
          <thead class="bg-slate-100 border-b">
            <tr>
              <th>No</th>
              <th class="text-left">Item</th>
              <th>Ukuran</th>
              <th>Qty RAP</th>
              <th>Qty PO</th>
              <th>Harga RAP</th>
              <th>Harga PO</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(row, i) in dataDetail" :key="row.idDetailRap" class="border-b">
              <td class="text-center">{{ i + 1 }}</td>
              <td>{{ row.item }}</td>
              <td>{{ row.ukuran }}</td>

              <td class="text-center font-bold">{{ row.qtyRap }}</td>

              <td>
                <Input
                  type="number"
                  min="0"
                  :max="row.qtyRap"
                  v-model.number="row.qtyPo"
                  @input="() => handleQtyChange(i)"
                  class="text-center"
                />
              </td>

              <td class="text-right text-gray-500">
                {{ formatRupiah(row.hargaRap) }}
              </td>

              <td>
                <Input
                  type="number"
                  class="text-right"
                  v-model="row.hargaPo"
                  @input="e => handleHargaChange(i, (e.target as HTMLInputElement).value)"
                />
              </td>

              <td class="text-right font-bold">
                {{ formatRupiah(row.total) }}
              </td>
            </tr>
          </tbody>
        </table>

        <!-- TOTAL -->
        <div class="w-80 ml-auto border p-4 rounded bg-slate-50 space-y-2">
          <div class="flex justify-between">
            <span>Subtotal</span>
            <span class="font-bold">{{ formatRupiah(subtotal) }}</span>
          </div>
          <div class="flex justify-between">
            <span>PPN</span>
            <span class="font-bold text-orange-600"> + {{ formatRupiah(totalPpn) }} </span>
          </div>
          <div class="flex justify-between border-t pt-2 text-lg">
            <span class="font-black">TOTAL</span>
            <span class="font-black text-green-700">
              {{ formatRupiah(grandTotal) }}
            </span>
          </div>
        </div>
      </div>

      <DialogFooter class="p-6 border-t bg-slate-50">
        <DialogClose as-child>
          <Button variant="secondary">Batal</Button>
        </DialogClose>
        <div :hidden="isHidden">
          <Button :disabled="isLoading || !isValid" @click="handleSubmit">
            {{ isLoading ? 'Menyimpan...' : 'Simpan Detail PO' }}
          </Button>
        </div>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
