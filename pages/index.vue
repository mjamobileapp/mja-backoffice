<script setup lang="ts">
import NumberFlow from '@number-flow/vue'
import {
  CircleDot,
  MapPinned,
  MoreVertical,
  TrendingDown,
  TrendingUp,
  UsersRound,
  WashingMachine,
} from 'lucide-vue-next'

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const jumlahMitra = ref(0)
const jumlahMesin = ref(0)
const jumlahCabang = ref(0)

const accessToken = useCookie<{ token: string }>('accessToken')
const token = accessToken.value?.token

const activityItems = [
  'Pendaftaran Mitra Baru: PT Cahaya Mandiri',
  'Laporan Harian Cabang Selatan Diterima',
  'Laporan Harian Cabang Selatan Diterima',
  'Maintenance Mesin Dryer Cabang Timur',
]

const branchLocations = [
  'Cabang Selatan',
  'Cabang Selaras',
  'Cabang Sentra',
  'Pundak Lama',
]

const trendPoints = computed(() => {
  const mitra = Math.max(jumlahMitra.value, 1)
  const cabang = Math.max(jumlahCabang.value, 1)

  return [
    { month: 'Jan', primary: 34, secondary: 20 },
    { month: 'Feb', primary: 24 + mitra, secondary: 38 },
    { month: 'Mar', primary: 56, secondary: 30 + cabang },
    { month: 'Apr', primary: 26, secondary: 50 },
    { month: 'May', primary: 52, secondary: 36 },
    { month: 'Jun', primary: 42 + mitra, secondary: 58 },
  ]
})

const primaryTrendPath = computed(() => buildSmoothPath(trendPoints.value.map(item => item.primary)))
const secondaryTrendPath = computed(() => buildSmoothPath(trendPoints.value.map(item => item.secondary)))
const primaryAreaPath = computed(() => `${primaryTrendPath.value} L 300 150 L 0 150 Z`)
const secondaryAreaPath = computed(() => `${secondaryTrendPath.value} L 300 150 L 0 150 Z`)

const machineOnline = computed(() => Math.max(jumlahMesin.value - 2, 0))
const machineOffline = computed(() => (jumlahMesin.value > 0 ? 1 : 0))
const machineRepair = computed(() => (jumlahMesin.value > 1 ? 1 : 0))
const activePercent = computed(() => {
  if (!jumlahMesin.value) return 0
  return Math.round((machineOnline.value / jumlahMesin.value) * 100)
})

async function fetchDataMitra() {
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/dashboard/getmitra`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const fetchedData = await response.json()
    jumlahMitra.value = fetchedData.total || 0
  } catch (error) {
    console.error('Gagal mengambil data Mitra terbaru:', error)
  }
}

async function fetchDataCabang() {
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/dashboard/getcabang`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const fetchedData = await response.json()
    jumlahCabang.value = fetchedData.total || 0
  } catch (error) {
    console.error('Gagal mengambil data Cabang terbaru:', error)
  }
}

async function fetchDataMesin() {
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/dashboard/getmesin`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const fetchedData = await response.json()
    jumlahMesin.value = fetchedData.total || 0
  } catch (error) {
    console.error('Gagal mengambil data Mesin terbaru:', error)
  }
}

function buildSmoothPath(values: number[]) {
  const width = 300
  const height = 150
  const maxValue = Math.max(...values, 1)
  const gap = width / (values.length - 1)

  return values
    .map((value, index) => {
      const x = index * gap
      const y = height - (value / maxValue) * 112 - 18
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`
    })
    .join(' ')
}

onMounted(async () => {
  await Promise.all([fetchDataCabang(), fetchDataMesin(), fetchDataMitra()])
})
</script>

<template>
  <div class="dashboard-shell mx-auto max-w-[1440px]">
    <h1 class="mb-4 text-3xl font-bold tracking-tight text-[#111827]">Dashboard</h1>

    <section class="grid gap-5 xl:grid-cols-3 md:grid-cols-2">
      <Card class="dashboard-card metric-card">
        <CardHeader class="flex flex-row items-start justify-between space-y-0 pb-2">
          <div>
            <CardTitle class="text-lg font-semibold text-[#1f2937]">Jumlah Mitra</CardTitle>
            <div class="mt-3 text-3xl font-bold text-[#111827]">
              <NumberFlow :value="jumlahMitra" />
            </div>
          </div>
          <UsersRound class="h-8 w-8 text-[#64748b]" />
        </CardHeader>
        <CardContent class="flex items-end justify-between gap-4">
          <p class="flex items-center gap-1 text-sm font-medium text-[#10b981]">
            <TrendingUp class="h-4 w-4" />
            +5.2% dari bulan lalu
          </p>
          <svg class="h-16 w-28" viewBox="0 0 112 64" aria-hidden="true">
            <path d="M4 54 C18 36 28 58 40 42 S58 12 70 34 86 18 108 10" fill="none" stroke="#4aa3d8" stroke-width="3" />
          </svg>
        </CardContent>
      </Card>

      <Card class="dashboard-card metric-card">
        <CardHeader class="flex flex-row items-start justify-between space-y-0 pb-2">
          <div>
            <CardTitle class="text-lg font-semibold text-[#1f2937]">Jumlah Cabang</CardTitle>
            <div class="mt-3 text-3xl font-bold text-[#111827]">
              <NumberFlow :value="jumlahCabang" />
            </div>
          </div>
          <MapPinned class="h-8 w-8 text-[#64748b]" />
        </CardHeader>
        <CardContent>
          <p class="text-sm text-[#6b7280]">0.0% bulan ini</p>
        </CardContent>
      </Card>

      <Card class="dashboard-card metric-card md:col-span-2 xl:col-span-1">
        <CardHeader class="flex flex-row items-start justify-between space-y-0 pb-2">
          <div>
            <CardTitle class="text-lg font-semibold text-[#1f2937]">Jumlah Mesin</CardTitle>
            <div class="mt-3 text-3xl font-bold text-[#111827]">
              <NumberFlow :value="jumlahMesin" />
            </div>
          </div>
          <WashingMachine class="h-8 w-8 text-[#64748b]" />
        </CardHeader>
        <CardContent>
          <div class="mb-2 flex items-center justify-between text-sm">
            <p class="flex items-center gap-1 font-medium text-[#ef4444]">
              <TrendingDown class="h-4 w-4" />
              -1.1% dari bulan lalu
            </p>
            <span class="font-semibold text-[#4b5563]">{{ activePercent }}% active</span>
          </div>
          <div class="h-2 rounded-full bg-[#dbe1e8]">
            <div class="h-2 rounded-full bg-[#3498db]" :style="{ width: `${activePercent}%` }" />
          </div>
        </CardContent>
      </Card>
    </section>

    <section class="mt-5 grid gap-5 xl:grid-cols-[1.5fr_0.8fr_1fr]">
      <Card class="dashboard-card xl:row-span-2">
        <CardHeader class="pb-3">
          <CardTitle class="text-lg font-semibold text-[#1f2937]">
            Tren Transaksi Mitra (6 Bulan Terakhir)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div class="mb-4 flex justify-center gap-5 text-xs text-[#4b5563]">
            <span class="flex items-center gap-2"><CircleDot class="h-3 w-3 fill-[#4aa3d8] text-[#4aa3d8]" />Tren Transaksi Mitra</span>
            <span class="flex items-center gap-2"><CircleDot class="h-3 w-3 fill-[#35c48f] text-[#35c48f]" />Bulan Terakhir</span>
          </div>
          <div class="h-[250px]">
            <svg class="h-full w-full" viewBox="0 0 340 190" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="primaryTrend" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stop-color="#4aa3d8" stop-opacity="0.55" />
                  <stop offset="100%" stop-color="#4aa3d8" stop-opacity="0.05" />
                </linearGradient>
                <linearGradient id="secondaryTrend" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stop-color="#35c48f" stop-opacity="0.45" />
                  <stop offset="100%" stop-color="#35c48f" stop-opacity="0.04" />
                </linearGradient>
              </defs>
              <g transform="translate(20 12)">
                <line v-for="x in [0, 60, 120, 180, 240, 300]" :key="x" :x1="x" y1="0" :x2="x" y2="150" stroke="#e5e9ef" stroke-width="1" />
                <path :d="secondaryAreaPath" fill="url(#secondaryTrend)" />
                <path :d="primaryAreaPath" fill="url(#primaryTrend)" />
                <path :d="secondaryTrendPath" fill="none" stroke="#35c48f" stroke-width="2.5" />
                <path :d="primaryTrendPath" fill="none" stroke="#2f95cf" stroke-width="2.5" />
              </g>
            </svg>
            <div class="grid grid-cols-6 px-4 text-center text-xs text-[#4b5563]">
              <span v-for="point in trendPoints" :key="point.month">{{ point.month }}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card class="dashboard-card">
        <CardHeader class="pb-2">
          <CardTitle class="text-lg font-semibold text-[#1f2937]">Status Operasional Mesin</CardTitle>
        </CardHeader>
        <CardContent class="flex flex-col items-center">
          <div class="relative h-44 w-44">
            <svg viewBox="0 0 120 120" class="h-full w-full -rotate-90" aria-hidden="true">
              <circle cx="60" cy="60" r="42" fill="none" stroke="#f59e0b" stroke-width="20" stroke-dasharray="18 246" stroke-dashoffset="-8" />
              <circle cx="60" cy="60" r="42" fill="none" stroke="#ef4444" stroke-width="20" stroke-dasharray="18 246" stroke-dashoffset="-34" />
              <circle cx="60" cy="60" r="42" fill="none" stroke="#22c55e" stroke-width="20" stroke-dasharray="190 246" stroke-dashoffset="-60" />
            </svg>
            <div class="absolute inset-0 flex items-center justify-center text-4xl font-bold text-[#111827]">
              {{ jumlahMesin }}
            </div>
          </div>
          <div class="mt-2 flex flex-wrap justify-center gap-3 text-xs text-[#4b5563]">
            <span class="flex items-center gap-1"><span class="h-2 w-2 rounded-full bg-[#22c55e]" />Online</span>
            <span class="flex items-center gap-1"><span class="h-2 w-2 rounded-full bg-[#f59e0b]" />Offline</span>
            <span class="flex items-center gap-1"><span class="h-2 w-2 rounded-full bg-[#ef4444]" />Perbaikan</span>
          </div>
        </CardContent>
      </Card>

      <Card class="dashboard-card min-h-[235px]">
        <CardHeader class="flex flex-row items-center justify-between pb-2">
          <CardTitle class="text-lg font-semibold text-[#1f2937]">Aktivitas Terbaru</CardTitle>
          <span class="text-xl text-[#4b5563] leading-none">-</span>
        </CardHeader>
        <CardContent class="max-h-[170px] overflow-y-auto pr-2">
          <div v-for="item in activityItems" :key="item" class="border-b border-[#edf0f4] py-3 last:border-0">
            <p class="text-sm font-medium text-[#374151]">{{ item }}</p>
            <p class="mt-1 text-xs text-[#6b7280]">(1 jam yang lalu)</p>
          </div>
        </CardContent>
      </Card>
    </section>
  </div>
</template>

<style scoped>
.dashboard-card {
  border-color: #dfe4eb;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.12);
}

.metric-card {
  min-height: 150px;
}

.map-grid {
  background-image:
    linear-gradient(35deg, transparent 0 44%, rgba(255, 255, 255, 0.75) 45% 48%, transparent 49%),
    linear-gradient(145deg, transparent 0 42%, rgba(255, 255, 255, 0.75) 43% 46%, transparent 47%),
    linear-gradient(90deg, rgba(203, 213, 225, 0.7) 1px, transparent 1px),
    linear-gradient(0deg, rgba(203, 213, 225, 0.7) 1px, transparent 1px);
  background-size: 80px 80px, 90px 90px, 36px 36px, 36px 36px;
}
</style>
