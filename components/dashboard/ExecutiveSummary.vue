<script setup lang="ts">
import { ArrowDownRight, ArrowUpRight, CircleDollarSign, FileSpreadsheet, Filter, Loader2, ShoppingCart, X } from 'lucide-vue-next'
import { computed, onMounted, ref, watch } from 'vue'
import ExecutiveSummaryTooltip from './ExecutiveSummaryTooltip.vue'

interface OptionItem {
  id: string
  label: string
}

interface SummaryData {
  totalOmset: number
  totalPengeluaran: number
  pendapatanBersih: number
  jumlahOrder: number
}

interface TrendItem {
  date: string
  omset: number
}

type Period = 'today' | 'this-week' | 'this-month' | 'last-month'

const mitraOptions = ref<OptionItem[]>([])
const cabangOptions = ref<OptionItem[]>([])
const selectedMitra = ref('all')
const selectedCabang = ref('all')
const selectedPeriod = ref<Period>('today')
const appliedPeriod = ref<Period>('today')
const summary = ref<SummaryData>({
  totalOmset: 0,
  totalPengeluaran: 0,
  pendapatanBersih: 0,
  jumlahOrder: 0,
})
const trend = ref<TrendItem[]>([])
const loading = ref(true)
const refreshing = ref(false)
const errorMessage = ref('')

const periodParams: Record<Period, string> = {
  'today': 'hari_ini',
  'this-week': 'minggu_ini',
  'this-month': 'bulan_ini',
  'last-month': 'bulan_lalu',
}

function getCollection(response: any): any[] {
  if (Array.isArray(response))
    return response

  const data = response?.data ?? response?.items ?? response?.results ?? []
  if (Array.isArray(data))
    return data

  return data?.items ?? data?.results ?? data?.data ?? []
}

function getValue(item: any, keys: string[]) {
  for (const key of keys) {
    if (item?.[key] !== undefined && item?.[key] !== null && item?.[key] !== '')
      return item[key]
  }
  return ''
}

function getNumber(item: any, keys: string[]) {
  const rawValue = getValue(item, keys)
  const value = Number(String(rawValue).replace(/[^\d.-]/g, ''))
  return Number.isFinite(value) ? value : 0
}

function normalizeOption(item: any, type: 'mitra' | 'cabang'): OptionItem {
  const idKeys = type === 'mitra' ? ['id', 'idMitra', 'mitraId'] : ['id', 'idCabang', 'cabangId']
  const nameKeys = type === 'mitra' ? ['namaMitra', 'nama', 'name'] : ['namaCabang', 'nama', 'name']
  return {
    id: String(getValue(item, idKeys)),
    label: String(getValue(item, nameKeys) || `${type === 'mitra' ? 'Mitra' : 'Cabang'} tanpa nama`),
  }
}

async function fetchMitra() {
  const response = await apiFetch('/api/backoffice/mitra')
  mitraOptions.value = getCollection(response).map(item => normalizeOption(item, 'mitra')).filter(item => item.id)
}

async function fetchCabang() {
  cabangOptions.value = []
  selectedCabang.value = 'all'
  if (selectedMitra.value === 'all')
    return

  const response = await apiFetch(`/api/backoffice/cabang/mitra/${encodeURIComponent(selectedMitra.value)}`)
  cabangOptions.value = getCollection(response).map(item => normalizeOption(item, 'cabang')).filter(item => item.id)
}

function buildReportQuery() {
  const params = new URLSearchParams()

  if (selectedMitra.value !== 'all') {
    params.set('mitraId', selectedMitra.value)

    if (selectedCabang.value !== 'all')
      params.set('cabangId', selectedCabang.value)
  }

  params.set('periode', periodParams[appliedPeriod.value])
  return params.toString()
}

async function fetchReportData() {
  const query = buildReportQuery()
  const [summaryResponse, trendResponse] = await Promise.all([
    apiFetch<{ data?: { summary?: Partial<SummaryData> } }>(`/api/backoffice/report/summary?${query}`),
    apiFetch<{ data?: { trend?: any[] } }>(`/api/backoffice/report/trend?${query}`),
  ])

  const summaryData = summaryResponse?.data?.summary ?? {}
  summary.value = {
    totalOmset: getNumber(summaryData, ['totalOmset']),
    totalPengeluaran: getNumber(summaryData, ['totalPengeluaran']),
    pendapatanBersih: getNumber(summaryData, ['pendapatanBersih']),
    jumlahOrder: getNumber(summaryData, ['jumlahOrder']),
  }

  trend.value = Array.isArray(trendResponse?.data?.trend)
    ? trendResponse.data.trend.map(item => ({
        date: String(getValue(item, ['date', 'tanggal'])),
        omset: getNumber(item, ['omset', 'omzet']),
      }))
    : []
}

async function loadReport() {
  loading.value = true
  errorMessage.value = ''
  try {
    const [mitraResult, reportResult] = await Promise.allSettled([fetchMitra(), fetchReportData()])

    if (mitraResult.status === 'rejected')
      console.error('Gagal mengambil daftar mitra:', mitraResult.reason)

    if (reportResult.status === 'rejected') {
      console.error('Gagal mengambil data executive summary:', reportResult.reason)
      errorMessage.value = 'Data report belum dapat dimuat. Silakan coba lagi.'
    }
    else {
      errorMessage.value = ''
    }
  }
  finally {
    loading.value = false
  }
}

async function refreshReport() {
  refreshing.value = true
  appliedPeriod.value = selectedPeriod.value
  try {
    await fetchReportData()
    errorMessage.value = ''
  }
  catch (error) {
    console.error('Gagal memperbarui executive summary:', error)
    errorMessage.value = 'Data report belum dapat diperbarui.'
  }
  finally {
    refreshing.value = false
  }
}

function closeErrorMessage() {
  errorMessage.value = ''
}

watch(selectedMitra, () => {
  fetchCabang().catch((error) => {
    console.error('Gagal mengambil data cabang:', error)
    errorMessage.value = 'Daftar cabang belum dapat dimuat.'
  })
})

const formatCurrency = (value: number) => `Rp ${new Intl.NumberFormat('id-ID').format(Math.round(value))}`
const formatNumber = (value: number) => new Intl.NumberFormat('id-ID').format(Math.round(value))
const periodLabel = computed(() => ({
  'today': 'Omset hari ini',
  'yesterday': 'Omset kemarin',
  'this-week': 'Omset minggu ini',
  'this-month': 'Omset bulan ini',
  'last-month': 'Omset bulan lalu',
}[appliedPeriod.value]))

function formatTrendDate(value: string) {
  const [year, month, day] = value.split('-')
  if (!year || !month || !day)
    return value

  const date = new Date(Number(year), Number(month) - 1, Number(day))
  return Number.isNaN(date.getTime())
    ? value
    : new Intl.DateTimeFormat('en-US', { day: '2-digit', month: 'short' }).format(date)
}

const visibleTrendData = computed(() => trend.value.map(item => ({
  label: formatTrendDate(item.date),
  omset: item.omset,
})))
const hasTrendData = computed(() => trend.value.length > 0)

function formatTrendAxis(value: number | Date) {
  if (typeof value !== 'number')
    return ''

  const index = Math.round(value)
  const isDataPosition = Math.abs(value - index) < 0.001
  return isDataPosition ? visibleTrendData.value[index]?.label ?? '' : ''
}

function exportCsv() {
  const header = ['Tanggal', 'Omset']
  const rows = trend.value.map(item => [item.date, item.omset])
  const csv = [header, ...rows]
    .map(row => row.map(value => `"${String(value).replaceAll('"', '""')}"`).join(','))
    .join('\n')
  const link = document.createElement('a')
  link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' }))
  link.download = `executive-summary-${appliedPeriod.value}.csv`
  link.click()
  URL.revokeObjectURL(link.href)
}

onMounted(loadReport)
</script>

<template>
  <div class="mx-auto max-w-[1440px] space-y-5">
    <div class="flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <h1 class="text-2xl text-slate-900 font-bold tracking-tight md:text-3xl">Ringkasan Finansial & Analitik</h1>
        <p class="mt-1 text-sm text-slate-500">Laporan ringkasan performa bisnis berdasarkan mitra, cabang, dan periode.</p>
      </div>
      <!-- <button class="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm text-white font-semibold shadow-sm transition hover:bg-slate-700" @click="exportCsv">
        <FileSpreadsheet class="h-4 w-4 text-emerald-400" /> Export ke Excel
      </button> -->
    </div>

    <div class="flex flex-wrap items-end justify-start gap-3">
      <div class="flex flex-wrap items-end gap-3">
        <div class="min-w-[190px] flex flex-col gap-1.5">
          <label class="text-[11px] text-slate-500 font-bold tracking-wide uppercase">Pilih Mitra</label>
          <select v-model="selectedMitra" class="h-10 border border-slate-200 rounded-lg bg-white px-3 text-sm shadow-sm outline-none focus:border-blue-500">
            <option value="all">Semua Mitra</option>
            <option v-for="item in mitraOptions" :key="item.id" :value="item.id">{{ item.label }}</option>
          </select>
        </div>
        <div class="min-w-[190px] flex flex-col gap-1.5">
          <label class="text-[11px] text-slate-500 font-bold tracking-wide uppercase">Pilih Cabang</label>
          <select v-model="selectedCabang" :disabled="selectedMitra === 'all' || !cabangOptions.length" class="h-10 border border-slate-200 rounded-lg bg-white px-3 text-sm shadow-sm outline-none focus:border-blue-500 disabled:cursor-not-allowed disabled:bg-slate-50">
            <option value="all">{{ selectedMitra === 'all' ? 'Pilih Mitra dahulu' : 'Semua Cabang' }}</option>
            <option v-for="item in cabangOptions" :key="item.id" :value="item.id">{{ item.label }}</option>
          </select>
        </div>
        <div class="min-w-[170px] flex flex-col gap-1.5">
          <label class="text-[11px] text-slate-500 font-bold tracking-wide uppercase">Pilih Periode</label>
          <select v-model="selectedPeriod" class="h-10 border border-slate-200 rounded-lg bg-white px-3 text-sm shadow-sm outline-none focus:border-blue-500">
            <option value="today">Hari ini</option>
            <option value="yesterday">Kemarin</option>
            <option value="this-week">Minggu ini</option>
            <option value="this-month">Bulan ini</option>
            <option value="last-month">Bulan lalu</option>
          </select>
        </div>
        <Button variant="outline" class="h-10 gap-2" :disabled="refreshing" @click="refreshReport">
          <Filter class="h-4 w-4" :class="refreshing ? 'animate-pulse' : ''" /> Filter
        </Button>
      </div>
    </div>

    <div v-if="errorMessage" class="flex items-center justify-between rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
      <span>{{ errorMessage }}</span>
      <button
        type="button"
        class="ml-4 rounded-md p-1 text-amber-700 transition hover:bg-amber-100"
        aria-label="Tutup pesan error"
        title="Tutup"
        @click="closeErrorMessage"
      >
        <X class="h-4 w-4" />
      </button>
    </div>

    <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <Card class="dashboard-card metric-card metric-card-green">
        <div class="metric-corner"><div class="metric-icon text-[#d97706]"><ArrowUpRight class="h-5 w-5" /></div></div>
        <CardHeader class="relative z-10 h-full flex flex-col items-start p-5 space-y-0">
          <CardTitle class="text-sm text-[#64748b] font-semibold">Total Omset Kotor</CardTitle>
          <div class="mt-1 text-2xl text-[#1e293b] font-extrabold">{{ formatCurrency(summary.totalOmset) }}</div>
          <p class="mt-2 text-xs text-[#059669] font-medium">Berdasarkan periode terpilih</p>
        </CardHeader>
      </Card>

      <Card class="dashboard-card metric-card metric-card-red">
        <div class="metric-corner"><div class="metric-icon text-[#db2777]"><ArrowDownRight class="h-5 w-5" /></div></div>
        <CardHeader class="relative z-10 h-full flex flex-col items-start p-5 space-y-0">
          <CardTitle class="text-sm text-[#64748b] font-semibold">Total Pengeluaran</CardTitle>
          <div class="mt-1 text-2xl text-[#1e293b] font-extrabold">{{ formatCurrency(summary.totalPengeluaran) }}</div>
          <p class="mt-2 text-xs text-[#e11d48] font-medium">Biaya operasional tercatat</p>
        </CardHeader>
      </Card>

      <Card class="dashboard-card metric-card metric-card-blue">
        <div class="metric-corner"><div class="metric-icon text-[#2563eb]"><CircleDollarSign class="h-5 w-5" /></div></div>
        <CardHeader class="relative z-10 h-full flex flex-col items-start p-5 space-y-0">
          <CardTitle class="text-sm text-[#2563eb] font-semibold">Pendapatan Bersih</CardTitle>
          <div class="mt-1 text-2xl text-[#2453cf] font-extrabold">{{ formatCurrency(summary.pendapatanBersih) }}</div>
          <p class="mt-2 text-xs text-[#2563eb] font-medium">Omset dikurangi pengeluaran</p>
        </CardHeader>
      </Card>

      <Card class="dashboard-card metric-card metric-card-amber">
        <div class="metric-corner"><div class="metric-icon text-[#78716c]"><ShoppingCart class="h-5 w-5" /></div></div>
        <CardHeader class="relative z-10 h-full flex flex-col items-start p-5 space-y-0">
          <CardTitle class="text-sm text-[#64748b] font-semibold">Jumlah Order</CardTitle>
          <div class="mt-1 text-2xl text-[#1e293b] font-extrabold">{{ formatNumber(summary.jumlahOrder) }}</div>
          <p class="mt-2 text-xs text-[#d97706] font-medium">Total order pada periode terpilih</p>
        </CardHeader>
      </Card>
    </div>

    <div v-if="loading" class="flex min-h-[320px] flex-col items-center justify-center gap-3 rounded-xl border bg-white text-sm text-slate-500">
      <Loader2 class="h-7 w-7 animate-spin text-blue-600" /> Memuat ringkasan executive...
    </div>
    <template v-else>
      <div class="grid gap-5">
        <Card class="border-slate-200 shadow-sm">
          <CardHeader class="border-b pb-4">
            <CardTitle class="text-lg">Tren Pendapatan</CardTitle>
            <CardDescription>{{ periodLabel }}</CardDescription>
          </CardHeader>
          <CardContent class="pt-4">
            <LineChart
              v-if="hasTrendData"
              :data="visibleTrendData"
              :categories="['omset']"
              index="label"
              :colors="['#2563eb']"
              :custom-tooltip="ExecutiveSummaryTooltip"
              :x-formatter="value => formatTrendAxis(value)"
              :show-legend="false"
              :y-formatter="value => formatCurrency(Number(value))"
              class="h-[300px]"
            />
            <div v-else class="h-[300px] flex items-center justify-center border border-dashed border-slate-200 rounded-lg bg-slate-50 text-sm text-slate-500">
              Data tren transaksi belum tersedia untuk periode dan filter yang dipilih.
            </div>
          </CardContent>
        </Card>
      </div>
    </template>
  </div>
</template>

<style scoped>
.dashboard-card {
  border-color: #e2e8f0;
  border-radius: 12px;
  background: #ffffff;
  box-shadow:
    0 1px 3px rgba(15, 23, 42, 0.08),
    0 1px 2px rgba(15, 23, 42, 0.04);
  transition:
    box-shadow 180ms ease,
    transform 180ms ease;
}

.dashboard-card:hover {
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.1);
  transform: translateY(-1px);
}

.metric-card {
  position: relative;
  min-height: 132px;
  overflow: hidden;
}

.metric-icon {
  display: flex;
  height: 42px;
  width: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.metric-corner {
  position: absolute;
  right: -1px;
  top: -1px;
  display: flex;
  height: 64px;
  width: 64px;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 64px;
}

.metric-corner .metric-icon {
  height: auto;
  width: auto;
  background: transparent;
  font-size: 1.25rem;
}

.metric-card-green .metric-corner {
  background: #eff6ff;
}

.metric-card-red .metric-corner {
  background: #fff1f2;
}

.metric-card-blue {
  border-color: #3b82f6;
  box-shadow: 0 3px 8px rgba(37, 99, 235, 0.18);
}

.metric-card-blue .metric-corner {
  background: #eff6ff;
}

.metric-card-amber .metric-corner {
  background: #fffbeb;
}
</style>
