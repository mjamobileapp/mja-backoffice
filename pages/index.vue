<script setup lang="ts">
import NumberFlow from '@number-flow/vue'
import {
  MapPinned,
  Trophy,
  UsersRound,
  WashingMachine,
} from 'lucide-vue-next'

const jumlahMitra = ref(0)
const jumlahMesin = ref(0)
const jumlahMesinWasher = ref(0)
const jumlahMesinDryer = ref(0)
const jumlahCabang = ref(0)

const topMitra = ref<any[]>([])

const machineOnline = computed(() => Math.max(jumlahMesin.value - 2, 0))
const machineOffline = computed(() => (jumlahMesin.value > 0 ? 1 : 0))
const machineRepair = computed(() => (jumlahMesin.value > 1 ? 1 : 0))

const machineStatusSegments = computed(() => {
  const total = Math.max(jumlahMesin.value, 1)
  const circumference = 251.2
  const gap = 3
  let offset = 0

  return [
    { label: 'On', value: machineOnline.value, color: '#22c55e' },
    { label: 'Off', value: machineOffline.value, color: '#f59e0b' },
    { label: 'Maintenance', value: machineRepair.value, color: '#ef4444' },
  ].map((segment) => {
    const length = (segment.value / total) * circumference
    const dashLength = Math.max(length - gap, 0)
    const result = {
      ...segment,
      dasharray: `${dashLength} ${circumference}`,
      dashoffset: -offset,
    }
    offset += length
    return result
  })
})

function getTransactionRecords(responseData: any) {
  if (Array.isArray(responseData))
    return responseData

  const records = responseData?.data || responseData?.items || responseData?.transactions || []

  if (Array.isArray(records))
    return records

  return records?.items || records?.transactions || records?.data || []
}

function getTransactionMitraName(transaction: any) {
  return transaction?.namaMitra
    || transaction?.mitra?.namaMitra
    || transaction?.mitra?.nama
    || transaction?.namaOwner
    || transaction?.owner?.nama
    || transaction?.owner?.name
    || 'Mitra Tanpa Nama'
}

function getTransactionCount(transaction: any) {
  const count = Number(
    transaction?.jumlahTransaksi
    ?? transaction?.totalTransaksi
    ?? transaction?.transactionCount
    ?? transaction?.count,
  )

  return Number.isFinite(count) ? count : 1
}

async function fetchTopMitra() {
  try {
    const fetchedData = await apiFetch('/api/backoffice/dashboard/gettransaksi')
    const groupedTransactions = new Map<string, number>()

    getTransactionRecords(fetchedData).forEach((transaction: any) => {
      const name = getTransactionMitraName(transaction)
      groupedTransactions.set(name, (groupedTransactions.get(name) || 0) + getTransactionCount(transaction))
    })

    const sortedMitra = [...groupedTransactions.entries()]
      .sort(([, firstCount], [, secondCount]) => secondCount - firstCount)
      .slice(0, 3)
    const maxTransactions = sortedMitra[0]?.[1] || 1

    topMitra.value = sortedMitra.map(([name, transactionCount], index) => ({
      name,
      executions: `${new Intl.NumberFormat('id-ID').format(transactionCount)}x Transaksi`,
      progress: Math.round((transactionCount / maxTransactions) * 100),
      rank: index + 1,
      rankClass: index === 0 ? 'rank-first' : index === 1 ? 'rank-second' : 'rank-third',
      barClass: index === 0 ? 'bar-primary' : 'bar-secondary',
    }))
  }
  catch (error) {
    console.error('Gagal mengambil data transaksi mitra:', error)
    topMitra.value = []
  }
}

async function fetchDataMitra() {
  try {
    const fetchedData = await apiFetch('/api/backoffice/dashboard/getmitra')
    jumlahMitra.value = fetchedData.total || 0
  }
  catch (error) {
    console.error('Gagal mengambil data Mitra terbaru:', error)
  }
}

async function fetchDataCabang() {
  try {
    const fetchedData = await apiFetch('/api/backoffice/dashboard/getcabang')
    jumlahCabang.value = fetchedData.total || 0
  }
  catch (error) {
    console.error('Gagal mengambil data Cabang terbaru:', error)
  }
}

async function fetchDataMesin() {
  try {
    const fetchedData = await apiFetch('/api/backoffice/dashboard/getmesin')
    jumlahMesin.value = fetchedData.total || 0
    const mesinData = fetchedData.data || fetchedData.mesin || []
    jumlahMesinWasher.value = getMachineCountFromResponse(fetchedData, mesinData, 'washer')
    jumlahMesinDryer.value = getMachineCountFromResponse(fetchedData, mesinData, 'dryer')
  }
  catch (error) {
    console.error('Gagal mengambil data Mesin terbaru:', error)
  }
}

function getMachineCountFromResponse(responseData: any, mesinData: any[], type: 'washer' | 'dryer') {
  const keys = type === 'washer'
    ? ['totalWasher', 'jumlahWasher', 'washer']
    : ['totalDryer', 'jumlahDryer', 'dryer']

  for (const key of keys) {
    const value = Number(responseData?.[key])

    if (!Number.isNaN(value))
      return value
  }

  return countMachineByType(mesinData, type)
}

function countMachineByType(data: any[], type: 'washer' | 'dryer') {
  if (!Array.isArray(data))
    return 0

  return data.filter((item) => {
    const flagValue = item?.[type]
    const typeText = `${item?.tipeMesin || item?.jenisMesin || item?.namaMesin || item?.namaGroupMesin || ''}`.toLowerCase()

    return flagValue === true || flagValue === 1 || flagValue === '1' || typeText.includes(type)
  }).length
}

onMounted(async () => {
  await Promise.all([fetchDataCabang(), fetchDataMesin(), fetchDataMitra(), fetchTopMitra()])
})
</script>

<template>
  <div class="dashboard-shell mx-auto max-w-[1440px] xl:h-[calc(100svh-104px)] xl:flex xl:flex-col xl:overflow-hidden">
    <div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
      <div>
        <h1 class="text-2xl text-slate-900 font-bold tracking-tight">
          Dashboard
        </h1>
        <p class="mt-1 text-sm text-slate-500">
          Pantau performa mitra, cabang, dan operasional mesin secara ringkas.
        </p>
      </div>
    </div>

    <section class="grid mt-4 shrink-0 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <Card class="dashboard-card metric-card metric-card-green">
        <div class="metric-corner">
          <div class="metric-icon text-[#d97706]">
            <UsersRound class="h-5 w-5" />
          </div>
        </div>
        <CardHeader class="relative z-10 h-full flex flex-col items-start p-5 space-y-0">
          <CardTitle class="text-sm text-[#64748b] font-semibold">
            Total Mitra
          </CardTitle>
          <div class="mt-1 text-2xl text-[#1e293b] font-extrabold">
            <NumberFlow :value="jumlahMitra" />
          </div>
          <p class="mt-2 text-xs text-[#059669] font-medium">
            ↗ Terdaftar dalam sistem
          </p>
        </CardHeader>
      </Card>

      <Card class="dashboard-card metric-card metric-card-red">
        <div class="metric-corner">
          <div class="metric-icon text-[#db2777]">
            <MapPinned class="h-5 w-5" />
          </div>
        </div>
        <CardHeader class="relative z-10 h-full flex flex-col items-start p-5 space-y-0">
          <CardTitle class="text-sm text-[#64748b] font-semibold">
            Total Cabang
          </CardTitle>
          <div class="mt-1 text-2xl text-[#1e293b] font-extrabold">
            <NumberFlow :value="jumlahCabang" />
          </div>
          <p class="mt-2 text-xs text-[#e11d48] font-medium">
            Cabang aktif terdaftar
          </p>
        </CardHeader>
      </Card>

      <Card class="dashboard-card metric-card metric-card-blue">
        <div class="metric-corner">
          <div class="metric-icon text-[#2563eb]">
            <WashingMachine class="h-5 w-5" />
          </div>
        </div>
        <CardHeader class="relative z-10 h-full flex flex-col items-start p-5 space-y-0">
          <CardTitle class="text-sm text-[#2563eb] font-semibold">
            Total Mesin Washer
          </CardTitle>
          <div class="mt-1 text-2xl text-[#2453cf] font-extrabold">
            <NumberFlow :value="jumlahMesinWasher" />
          </div>
          <p class="mt-2 text-xs text-[#2563eb] font-medium">
            Mesin cuci terdaftar
          </p>
        </CardHeader>
      </Card>

      <Card class="dashboard-card metric-card metric-card-amber">
        <div class="metric-corner">
          <div class="metric-icon text-[#78716c]">
            <WashingMachine class="h-5 w-5" />
          </div>
        </div>
        <CardHeader class="relative z-10 h-full flex flex-col items-start p-5 space-y-0">
          <CardTitle class="text-sm text-[#64748b] font-semibold">
            Total Mesin Dryer
          </CardTitle>
          <div class="mt-1 text-2xl text-[#1e293b] font-extrabold">
            <NumberFlow :value="jumlahMesinDryer" />
          </div>
          <p class="mt-2 text-xs text-[#d97706] font-medium">
            Mesin pengering terdaftar
          </p>
        </CardHeader>
      </Card>
    </section>

    <section class="grid mt-5 gap-5 xl:grid-cols-[1.65fr_1fr] xl:min-h-0 xl:flex-1">
      <Card class="dashboard-card bottom-card">
        <CardHeader class="flex shrink-0 flex-row items-center justify-between border-b border-slate-100 p-5 pb-4 space-y-0">
          <div>
            <CardTitle class="text-lg text-slate-900 font-bold">
              Top 3 Mitra Teraktif
            </CardTitle>
            <p class="mt-0.5 text-xs text-slate-500">
              Berdasarkan jumlah transaksi (Bulan ini)
            </p>
          </div>
          <div class="h-10 w-10 flex items-center justify-center border border-blue-100 rounded-full bg-blue-50 text-blue-600 shadow-sm">
            <Trophy class="h-5 w-5" />
          </div>
        </CardHeader>
        <CardContent class="flex-1 overflow-hidden p-5 space-y-3">
          <div v-if="!topMitra.length" class="flex flex-1 items-center justify-center text-sm text-slate-500">
            Data transaksi mitra belum tersedia.
          </div>
          <div v-for="mitra in topMitra" v-else :key="mitra.rank" class="group flex cursor-default items-center gap-4">
            <div class="rank-badge" :class="mitra.rankClass">
              {{ mitra.rank }}
            </div>
            <div class="min-w-0 flex-1">
              <div class="mb-2 flex items-center justify-between gap-3">
                <span class="truncate text-sm text-slate-800 font-bold transition-colors group-hover:text-blue-600">{{ mitra.name }}</span>
                <span class="shrink-0 border border-slate-200 rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-700 font-bold">{{ mitra.executions }}</span>
              </div>
              <div class="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div class="progress-bar h-full rounded-full" :class="mitra.barClass" :style="{ width: `${mitra.progress}%` }" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card class="dashboard-card bottom-card">
        <CardHeader class="shrink-0 p-4 pb-1">
          <CardTitle class="text-lg text-slate-900 font-bold">
            Status Operasional Mesin
          </CardTitle>
        </CardHeader>
        <CardContent class="flex flex-1 flex-col items-center justify-center px-4 pb-3 pt-1">
          <div v-if="!jumlahMesin" class="flex flex-1 items-center justify-center">
            <p class="border border-slate-200 rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-500 font-medium">
              Data mesin belum tersedia.
            </p>
          </div>
          <div v-else class="relative h-36 w-36 drop-shadow-md">
            <svg viewBox="0 0 100 100" class="h-full w-full" aria-hidden="true">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#f1f5f9" stroke-width="12" />
              <circle
                v-for="segment in machineStatusSegments"
                :key="segment.label"
                class="donut-segment"
                cx="50"
                cy="50"
                r="40"
                fill="none"
                :stroke="segment.color"
                stroke-linecap="round"
                stroke-width="12"
                :stroke-dasharray="segment.dasharray"
                :stroke-dashoffset="segment.dashoffset"
              />
            </svg>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <div class="text-4xl text-slate-900 font-extrabold">
                <NumberFlow :value="jumlahMesin" />
              </div>
              <div class="mt-0.5 text-[10px] text-slate-500 font-semibold tracking-wider uppercase">
                Total Mesin
              </div>
            </div>
          </div>
          <div v-if="jumlahMesin" class="grid grid-cols-3 mt-1.5 w-full gap-1 border border-slate-100 rounded-xl bg-slate-50 py-1 text-center text-[11px] text-[#4b5563]">
            <div v-for="(segment, index) in machineStatusSegments" :key="segment.label" class="grid justify-items-center gap-0" :class="{ 'border-r border-slate-200': index < 2 }">
              <span class="h-2 w-2 rounded-full shadow-sm" :style="{ backgroundColor: segment.color }" />
              <strong class="text-sm text-slate-800">{{ segment.value }}</strong>
              <span class="text-[10px] text-slate-500 font-bold">{{ segment.label }}</span>
            </div>
          </div>
          <!-- <p class="mt-1 border border-slate-200 rounded-full bg-white px-3 py-0.5 text-xs text-slate-500 font-semibold shadow-sm">
            {{ activePercent }}% mesin aktif beroperasi
          </p> -->
        </CardContent>
      </Card>
    </section>
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

.dashboard-shell {
  font-family: 'Plus Jakarta Sans', sans-serif;
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

.metric-card-green .metric-corner .metric-icon,
.metric-card-red .metric-corner .metric-icon,
.metric-card-blue .metric-corner .metric-icon {
  font-size: 0;
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

.metric-card-amber .metric-corner .metric-icon {
  font-size: 0;
}

.metric-card-amber .metric-corner {
  background: #fffbeb;
}

.bottom-card {
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.rank-badge {
  display: flex;
  height: 32px;
  width: 32px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 800;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.08);
}

.rank-first {
  border: 1px solid #fcd34d;
  background: #fef3c7;
  color: #d97706;
}

.rank-second {
  border: 1px solid #cbd5e1;
  background: #e2e8f0;
  color: #64748b;
}

.rank-third {
  border: 1px solid #fed7aa;
  background: #ffedd5;
  color: #ea580c;
}

.rank-default {
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  color: #94a3b8;
}

.progress-bar {
  transition: width 300ms ease;
}

.bar-primary {
  background: #3b82f6;
}

.bar-secondary {
  background: #60a5fa;
}

.bar-muted {
  background: #94a3b8;
}

.donut-segment {
  transform-origin: center;
  transform: rotate(-90deg);
  transition: stroke-dashoffset 1s ease-out;
}

.status-stat {
  display: grid;
  justify-items: center;
  gap: 3px;
}

.status-stat strong {
  color: #0f172a;
  font-size: 1rem;
}

.status-dot {
  height: 8px;
  width: 8px;
  border-radius: 9999px;
}

@media (min-width: 1280px) {
  .bottom-card {
    height: 100%;
  }
}

.map-grid {
  background-image:
    linear-gradient(35deg, transparent 0 44%, rgba(255, 255, 255, 0.75) 45% 48%, transparent 49%),
    linear-gradient(145deg, transparent 0 42%, rgba(255, 255, 255, 0.75) 43% 46%, transparent 47%),
    linear-gradient(90deg, rgba(203, 213, 225, 0.7) 1px, transparent 1px),
    linear-gradient(0deg, rgba(203, 213, 225, 0.7) 1px, transparent 1px);
  background-size:
    80px 80px,
    90px 90px,
    36px 36px,
    36px 36px;
}
</style>
