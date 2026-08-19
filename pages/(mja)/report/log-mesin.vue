<script setup lang="ts">
import {
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  CircleX,
  Download,
  Filter,
  Laptop,
  Loader2,
  RefreshCw,
  Smartphone,
  User,
  UserCog,
} from 'lucide-vue-next'
import { toast } from '~/components/ui/toast'

interface LogMesinItem {
  id: number
  waktuLog: string
  mitra: { id: number, nama: string }
  cabang: { id: number, nama: string }
  mesin: { id: number, nama: string, jenis: string }
  aktor: { type: string, id: number, username: string }
  instruksi: { command: string, jenis: string }
  referensi: { invoiceNumber: string | null, keterangan: string | null }
  status: { isSuccess: boolean, message: string, errorMessage: string | null }
}

const today = new Date()
const pad = (value: number) => String(value).padStart(2, '0')
const todayStr = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`

// State filter aktif (yang diterapkan)
const mitraId = ref<number | null>(null)
const cabangId = ref<number | null>(null)
const commandType = ref('')
const tanggal = ref(todayStr)

// Draft filter (dipilih user, diterapkan lewat tombol Terapkan)
const draftMitraId = ref<number | null>(null)
const draftCabangId = ref<number | null>(null)
const draftCommandType = ref('')
const draftTanggal = ref(todayStr)

// Data dropdown filter
const listMitra = ref<any[]>([])
const listCabang = ref<any[]>([])

// Data log & pagination
const items = ref<LogMesinItem[]>([])
const loading = ref(false)
const errorMessage = ref('')
const page = ref(1)
const pageSize = 10

const totalItems = computed(() => items.value.length)
const totalPages = computed(() => Math.max(1, Math.ceil(totalItems.value / pageSize)))
const pagedItems = computed(() => items.value.slice((page.value - 1) * pageSize, page.value * pageSize))
const pageStart = computed(() => totalItems.value ? ((page.value - 1) * pageSize) + 1 : 0)
const pageEnd = computed(() => Math.min(page.value * pageSize, totalItems.value))

async function fetchAllMitra() {
  try {
    const result = await apiFetch('/api/backoffice/mitra')
    listMitra.value = result?.data || []
  }
  catch (error) {
    console.error('Gagal mengambil data mitra:', error)
    toast({ title: 'Gagal memuat mitra', description: 'Daftar mitra tidak dapat diambil.', variant: 'destructive' })
  }
}

async function onMitraChange() {
  draftCabangId.value = null
  listCabang.value = []
  if (!draftMitraId.value)
    return

  try {
    const result = await apiFetch(`/api/backoffice/cabang/mitra/${draftMitraId.value}`)
    listCabang.value = result?.data || []
  }
  catch (error) {
    console.error('Gagal mengambil data cabang:', error)
  }
}

async function fetchLogs() {
  loading.value = true
  errorMessage.value = ''
  try {
    const params = new URLSearchParams()
    if (mitraId.value)
      params.set('mitraId', String(mitraId.value))
    if (cabangId.value)
      params.set('cabangId', String(cabangId.value))
    if (commandType.value)
      params.set('commandType', commandType.value)
    if (tanggal.value)
      params.set('Date', tanggal.value)

    const queryString = params.toString()
    const response = await apiFetch<{ data?: { items?: LogMesinItem[] } }>(`/api/backoffice/history/mesin${queryString ? `?${queryString}` : ''}`)
    items.value = response.data?.items || []
  }
  catch (error: any) {
    items.value = []
    errorMessage.value = error?.data?.message || error?.message || 'Gagal mengambil data log mesin.'
  }
  finally {
    loading.value = false
  }
}

function applyFilter() {
  mitraId.value = draftMitraId.value
  cabangId.value = draftCabangId.value
  commandType.value = draftCommandType.value
  tanggal.value = draftTanggal.value
  page.value = 1
  fetchLogs()
}

function goToPage(nextPage: number) {
  if (nextPage < 1 || nextPage > totalPages.value || nextPage === page.value)
    return
  page.value = nextPage
}

function formatTime(value: string) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime()))
    return value

  return new Intl.DateTimeFormat('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(date)
}

function formatDate(value: string) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime()))
    return value

  return new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date)
}

function commandBadgeClass(command: string) {
  return command.toUpperCase() === 'ON'
    ? 'border-emerald-200 bg-emerald-100 text-emerald-700'
    : 'border-slate-300 bg-slate-200 text-slate-700'
}

function aktorIcon(type: string) {
  const label = type.toLowerCase()
  if (label === 'owner')
    return UserCog
  if (label === 'kasir')
    return Smartphone
  if (label === 'backoffice')
    return Laptop
  return User
}

function aktorIconClass(type: string) {
  const label = type.toLowerCase()
  if (label === 'owner')
    return 'bg-amber-100 text-amber-600'
  if (label === 'kasir')
    return 'bg-blue-100 text-blue-600'
  if (label === 'backoffice')
    return 'bg-slate-800 text-white'
  return 'bg-slate-100 text-slate-600'
}

function exportCsv() {
  const header = ['ID', 'Waktu', 'Perintah', 'Jenis Instruksi', 'Mesin', 'Jenis Mesin', 'Mitra', 'Cabang', 'Aktor', 'Tipe Aktor', 'Invoice', 'Keterangan', 'Status', 'Error']
  const rows = items.value.map(item => [
    item.id,
    item.waktuLog,
    item.instruksi.command,
    item.instruksi.jenis,
    item.mesin.nama,
    item.mesin.jenis,
    item.mitra.nama,
    item.cabang.nama,
    item.aktor.username,
    item.aktor.type,
    item.referensi.invoiceNumber || '',
    item.referensi.keterangan || '',
    item.status.message,
    item.status.errorMessage || '',
  ])
  const csv = [header, ...rows].map(row => row.map(value => `"${String(value).replaceAll('"', '""')}"`).join(',')).join('\n')
  const link = document.createElement('a')
  link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' }))
  link.download = `log-mesin-iot-${tanggal.value || 'semua'}.csv`
  link.click()
  URL.revokeObjectURL(link.href)
}

onMounted(() => {
  fetchAllMitra()
  fetchLogs()
})
</script>

<template>
  <div>
    <div class="mx-auto max-w-7xl w-full flex flex-col gap-6">
      <!-- Header -->
      <div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 class="flex items-center gap-3 text-2xl text-slate-900 font-bold tracking-tight">
            Audit Log Mesin Laundry (IoT)
          </h1>
          <p class="mt-1 text-sm text-slate-500">
            Riwayat perintah eksekusi mesin laundry (IoT).
          </p>
        </div>
        <div class="flex items-center gap-2 border border-slate-200 rounded-lg bg-white px-4 py-2 shadow-sm">
          <span class="relative h-2.5 w-2.5 flex">
            <span class="absolute h-full w-full inline-flex animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span class="relative h-2.5 w-2.5 inline-flex rounded-full bg-emerald-500" />
          </span>
          <span class="text-sm text-slate-700 font-semibold">
            Log Eksekusi Mesin
          </span>
        </div>
      </div>

      <!-- Filter Card -->
      <div class="grid grid-cols-1 items-end gap-4 border border-slate-200 rounded-xl bg-white p-4 shadow-sm lg:grid-cols-5 md:grid-cols-2">
        <div>
          <label class="mb-1 block text-xs text-slate-500 font-semibold">Pilih Mitra</label>
          <select v-model="draftMitraId" class="w-full border border-slate-300 rounded-lg bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500" @change="onMitraChange">
            <option :value="null">
              Semua Mitra
            </option>
            <option v-for="mitra in listMitra" :key="mitra.id" :value="mitra.id">
              {{ mitra.namaMitra }}
            </option>
          </select>
        </div>

        <div>
          <label class="mb-1 block text-xs text-slate-500 font-semibold">Pilih Cabang</label>
          <select v-model="draftCabangId" :disabled="!draftMitraId || listCabang.length === 0" class="w-full border border-slate-300 rounded-lg bg-white px-3 py-2 text-sm outline-none disabled:bg-slate-100 focus:ring-2 focus:ring-blue-500">
            <option :value="null">
              {{ !draftMitraId ? 'Pilih Mitra dahulu' : 'Semua Cabang' }}
            </option>
            <option v-for="cabang in listCabang" :key="cabang.id" :value="cabang.id">
              {{ cabang.namaCabang }}
            </option>
          </select>
        </div>

        <div>
          <label class="mb-1 block text-xs text-slate-500 font-semibold">Tipe Perintah</label>
          <select v-model="draftCommandType" class="w-full border border-slate-300 rounded-lg bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">
              Semua Instruksi
            </option>
            <option value="On">
              ON
            </option>
            <option value="Off">
              OFF
            </option>
          </select>
        </div>

        <div>
          <label class="mb-1 block text-xs text-slate-500 font-semibold">Tanggal Eksekusi</label>
          <input v-model="draftTanggal" type="date" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-600 outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <div class="flex gap-2">
          <button class="w-full flex items-center justify-center gap-2 border border-blue-200 rounded-lg bg-blue-50 px-4 py-2 text-sm text-blue-700 font-semibold transition-colors hover:bg-blue-100" @click="applyFilter">
            <Filter class="h-4 w-4" /> Filter
          </button>
          <button class="border border-slate-300 rounded-lg bg-white px-4 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50" title="Export Log ke CSV" @click="exportCsv">
            <Download class="h-4 w-4" />
          </button>
        </div>
      </div>

      <!-- Log Table -->
      <div class="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm">
        <div class="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-3">
          <div class="font-code text-xs text-slate-400">
            Menampilkan {{ totalItems.toLocaleString('id-ID') }} log · Perintah {{ commandType ? (commandType === 'On' ? 'ON' : 'OFF') : 'Semua' }} · {{ tanggal }}
          </div>
          <button class="flex items-center gap-1.5 text-xs text-blue-600 font-semibold hover:text-blue-800" :disabled="loading" @click="fetchLogs">
            <RefreshCw class="h-3.5 w-3.5" :class="{ 'animate-spin': loading }" /> Muat Ulang
          </button>
        </div>

        <div v-if="errorMessage" class="m-4 flex items-center justify-between border border-rose-200 rounded-lg bg-rose-50 p-3 text-sm text-rose-700">
          <span>{{ errorMessage }}</span>
          <button class="flex items-center gap-1 font-semibold" @click="fetchLogs">
            <RefreshCw class="h-4 w-4" /> Coba lagi
          </button>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full border-collapse text-left">
            <thead>
              <tr class="border-b border-slate-100 bg-white text-[11px] text-slate-500 font-semibold tracking-wider uppercase">
                <th class="w-48 whitespace-nowrap p-4">
                  Waktu
                </th>
                <th class="whitespace-nowrap p-4">
                  Instruksi & Target
                </th>
                <th class="whitespace-nowrap p-4">
                  Lokasi
                </th>
                <th class="whitespace-nowrap p-4">
                  Aktor
                </th>
                <th class="w-48 whitespace-nowrap p-4">
                  Referensi Order
                </th>
                <th class="whitespace-nowrap p-4 text-center">
                  Status
                </th>
              </tr>
            </thead>
            <tbody class="text-sm divide-y divide-slate-50">
              <tr v-if="loading">
                <td colspan="6" class="p-12 text-center text-slate-500">
                  <Loader2 class="mx-auto mb-2 h-6 w-6 animate-spin text-blue-600" />Memuat log eksekusi mesin...
                </td>
              </tr>
              <tr v-else-if="!items.length">
                <td colspan="6" class="p-12 text-center text-slate-500">
                  Tidak ada data log mesin pada filter yang dipilih.
                </td>
              </tr>
              <template v-for="item in pagedItems" v-else :key="item.id">
                <tr class="transition-colors hover:bg-slate-50" :class="{ 'bg-rose-50/30': !item.status.isSuccess }">
                  <td class="w-48 whitespace-nowrap p-4 align-top">
                    <div class="font-code text-slate-700 font-medium">
                      {{ formatTime(item.waktuLog) }} WIB
                    </div>
                    <div class="mt-0.5 text-xs text-slate-400">
                      {{ formatDate(item.waktuLog) }}
                    </div>
                  </td>
                  <td class="p-4 align-top">
                    <div class="mb-1.5 flex items-center gap-2">
                      <span class="border rounded px-2 py-0.5 text-[10px] font-bold tracking-wide" :class="commandBadgeClass(item.instruksi.command)">
                        {{ item.instruksi.command }}
                      </span>
                      <span class="text-[10px] text-slate-400 font-medium">via {{ item.instruksi.jenis }}</span>
                    </div>
                    <div class="flex flex-col gap-1 text-[11px] text-slate-500">
                      <span>{{ item.mesin.nama }} - <span class="font-code border border-slate-200 rounded bg-slate-100 px-1 py-0.5">{{ item.mesin.jenis }}</span></span>
                    </div>
                  </td>
                  <td class="p-4 align-top">
                    <div class="text-sm text-slate-800 font-semibold">
                      {{ item.mitra.nama }}
                    </div>
                    <div class="mt-0.5 text-[11px] text-slate-500 font-semibold tracking-wider uppercase">
                      {{ item.cabang.nama }}
                    </div>
                  </td>
                  <td class="p-4 align-top">
                    <div class="flex items-start gap-2">
                      <div class="mt-0.5 h-7 w-7 flex shrink-0 items-center justify-center rounded" :class="aktorIconClass(item.aktor.type)">
                        <component :is="aktorIcon(item.aktor.type)" class="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div class="text-sm text-slate-800 font-semibold">
                          {{ item.aktor.username }}
                        </div>
                        <div class="mt-0.5 text-[11px] text-slate-500 font-semibold tracking-wider uppercase">
                          {{ item.aktor.type }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="w-48 p-4 align-top">
                    <template v-if="item.referensi.invoiceNumber">
                      <div class="font-code text-sm text-blue-600 font-bold">
                        {{ item.referensi.invoiceNumber }}
                      </div>
                      <span class="mt-1 block text-[11px] text-slate-400">{{ item.referensi.keterangan }}</span>
                    </template>
                    <template v-else>
                      <div class="font-code text-sm text-slate-400 font-medium italic">
                        NULL
                      </div>
                      <span class="mt-1 block text-[11px] text-rose-500">Tanpa Transaksi POS</span>
                    </template>
                  </td>
                  <td class="p-4 text-center align-top">
                    <span class="inline-flex items-center gap-1.5 border rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm" :class="item.status.isSuccess ? 'border-emerald-100 bg-emerald-50 text-emerald-600' : 'border-rose-100 bg-rose-50 text-rose-600'">
                      <CircleCheck v-if="item.status.isSuccess" class="h-3.5 w-3.5" />
                      <CircleX v-else class="h-3.5 w-3.5" />
                      {{ item.status.message }}
                    </span>
                    <div v-if="item.status.errorMessage" class="mt-1.5 text-[10px] text-rose-600 font-medium leading-tight">
                      {{ item.status.errorMessage }}
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="flex flex-col items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 sm:flex-row">
          <div>Menampilkan {{ pageStart }} - {{ pageEnd }} dari {{ totalItems.toLocaleString('id-ID') }} log</div>
          <div class="flex items-center gap-1">
            <button :disabled="page <= 1 || loading || !totalItems" class="border border-slate-300 rounded bg-white px-3 py-1 disabled:cursor-not-allowed hover:bg-slate-100 disabled:opacity-40" @click="goToPage(page - 1)">
              <ChevronLeft class="h-4 w-4" />
            </button>
            <span class="px-3 py-1 font-medium">Halaman {{ page }} / {{ totalPages }}</span>
            <button :disabled="page >= totalPages || loading || !totalItems" class="border border-slate-300 rounded bg-white px-3 py-1 disabled:cursor-not-allowed hover:bg-slate-100 disabled:opacity-40" @click="goToPage(page + 1)">
              <ChevronRight class="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <!-- Info Box -->
      <!-- <div class="flex gap-3 border border-blue-200 rounded-xl bg-blue-50 p-4 text-sm text-blue-800">
        <Info class="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
        <div>
          <strong>Cara membaca log:</strong> Setiap kali tombol mesin ditekan (baik dari Mobile Kasir maupun Web Backoffice), sistem NodeJS mencatatnya di sini sebelum mengirim sinyal MQTT ke modul ESP di lokasi. Jika kolom "Referensi Order" bernilai <span class="font-code rounded bg-white px-1 py-0.5 text-rose-500">NULL</span>, berarti mesin dipaksa menyala tanpa ada transaksi (indikasi <em>bypass</em> teknisi atau <em>fraud</em>).
        </div>
      </div> -->
    </div>
  </div>
</template>
