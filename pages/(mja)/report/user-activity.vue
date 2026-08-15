<script setup lang="ts">
import {
  ChevronLeft,
  ChevronRight,
  Code2,
  Eye,
  FileSpreadsheet,
  Globe2,
  Loader2,
  RefreshCw,
  Search,
  Trash2,
  X,
} from 'lucide-vue-next'

interface AuditLog {
  id: number
  userId: number | null
  username: string
  role: string
  actionType: string
  entityName: string
  entityId: string | null
  oldValues: Record<string, unknown> | null
  newValues: Record<string, unknown> | null
  ipAddress: string
  userAgent: string
  createdAt: string
}

interface AuditMeta {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  totalPages: number
}

const today = new Date()
const pad = (value: number) => String(value).padStart(2, '0')
const monthStart = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-01`
const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0)

const startDate = ref(monthStart)
const endDate = ref(`${monthEnd.getFullYear()}-${pad(monthEnd.getMonth() + 1)}-${pad(monthEnd.getDate())}`)
const draftStartDate = ref(startDate.value)
const draftEndDate = ref(endDate.value)
const search = ref('')
const page = ref(1)
const limit = ref(10)
const items = ref<AuditLog[]>([])
const meta = ref<AuditMeta>({ totalItems: 0, itemsPerPage: 10, currentPage: 1, totalPages: 0 })
const loading = ref(false)
const errorMessage = ref('')
const selectedLog = ref<AuditLog | null>(null)

const filteredItems = computed(() => {
  const keyword = search.value.trim().toLowerCase()
  return items.value.filter((item) => {
    const matchesSearch = !keyword || [item.username, item.role, item.entityName, item.ipAddress]
      .some(value => String(value || '').toLowerCase().includes(keyword))
    return matchesSearch
  })
})

const displayTotalItems = computed(() => filteredItems.value.length ? meta.value.totalItems : 0)
const displayTotalPages = computed(() => filteredItems.value.length ? meta.value.totalPages : 0)
const displayCurrentPage = computed(() => filteredItems.value.length ? meta.value.currentPage : 1)

const actionClass = (action: string) => ({
  CREATE: 'bg-emerald-100 text-emerald-700',
  UPDATE: 'bg-blue-100 text-blue-700',
  DELETE: 'bg-rose-100 text-rose-700',
  LOGIN_SUCCESS: 'bg-emerald-100 text-emerald-700',
  LOGIN_FAILED: 'bg-rose-100 text-rose-700',
  READ: 'bg-slate-100 text-slate-700',
}[action] || 'bg-amber-100 text-amber-700')

const formatDate = (value: string) => {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value

  const formatted = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'UTC',
  }).format(date)

  return formatted.replace(/(\d{2}):(\d{2})$/, '$1.$2')
}

const jsonText = (value: Record<string, unknown> | null) => value ? JSON.stringify(value, null, 2) : 'null / kosong (Tidak ada data)'

async function fetchLogs() {
  loading.value = true
  errorMessage.value = ''
  try {
    const query = new URLSearchParams({
      page: String(page.value),
      limit: String(limit.value),
      startDate: startDate.value,
      endDate: endDate.value,
    })
    const response = await apiFetch<{ data?: { items?: AuditLog[], meta?: AuditMeta } }>(`/api/backoffice/report/audit-logs?${query.toString()}`)
    items.value = response.data?.items || []
    meta.value = response.data?.meta || { totalItems: 0, itemsPerPage: limit.value, currentPage: page.value, totalPages: 0 }
  }
  catch (error: any) {
    items.value = []
    errorMessage.value = error?.data?.message || error?.message || 'Gagal mengambil data log aktivitas.'
  }
  finally {
    loading.value = false
  }
}

function applyFilter() {
  startDate.value = draftStartDate.value
  endDate.value = draftEndDate.value
  page.value = 1
  fetchLogs()
}

function goToPage(nextPage: number) {
  if (nextPage < 1 || nextPage > displayTotalPages.value || nextPage === page.value) return
  page.value = nextPage
  fetchLogs()
}

function openDetail(log: AuditLog) { selectedLog.value = log }
function closeDetail() { selectedLog.value = null }

function exportCsv() {
  const header = ['Waktu', 'Username', 'Role', 'Aksi', 'Modul', 'Entity ID', 'IP Address', 'User Agent']
  const rows = filteredItems.value.map(item => [item.createdAt, item.username, item.role, item.actionType, item.entityName, item.entityId || '', item.ipAddress, item.userAgent])
  const csv = [header, ...rows].map(row => row.map(value => `"${String(value).replaceAll('"', '""')}"`).join(',')).join('\n')
  const link = document.createElement('a')
  link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' }))
  link.download = `log-aktivitas-user-${startDate.value}-${endDate.value}.csv`
  link.click()
  URL.revokeObjectURL(link.href)
}

onMounted(fetchLogs)
</script>

<template>
  <div class="mx-auto flex w-full max-w-7xl flex-col gap-6">
    <div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
      <div>
        <h1 class="text-2xl font-bold tracking-tight text-slate-900">Log Aktivitas User</h1>
        <p class="mt-1 text-sm text-slate-500">Laporan jejak aktivitas pengguna dan perubahan master data (Backoffice).</p>
      </div>
      <button class="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700" @click="exportCsv">
        <FileSpreadsheet class="h-4 w-4 text-emerald-400" /> Export ke Excel
      </button>
    </div>

    <div class="flex flex-col items-end gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:flex-row">
      <label class="w-full lg:flex-1"><span class="mb-1 block text-xs font-semibold text-slate-500">Cari User / Modul</span><span class="relative block"><Search class="absolute left-3 top-2.5 h-4 w-4 text-slate-400" /><input v-model="search" type="text" placeholder="Ketik kata kunci..." class="w-full rounded-lg border border-slate-300 py-2 pl-9 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"></span></label>
      <div class="flex w-full gap-2 lg:w-72"><label class="min-w-0 w-1/2"><span class="mb-1 block text-xs font-semibold text-slate-500">Tanggal Mulai</span><input v-model="draftStartDate" type="date" class="w-full rounded-lg border border-slate-300 px-2 py-2 text-sm text-slate-600 outline-none focus:border-blue-500"></label><label class="min-w-0 w-1/2"><span class="mb-1 block text-xs font-semibold text-slate-500">Tanggal Akhir</span><input v-model="draftEndDate" type="date" class="w-full rounded-lg border border-slate-300 px-2 py-2 text-sm text-slate-600 outline-none focus:border-blue-500"></label></div>
      <button class="w-full rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100 lg:w-auto" @click="applyFilter">Filter</button>
    </div>

    <div class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div v-if="errorMessage" class="m-4 flex items-center justify-between rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700"><span>{{ errorMessage }}</span><button class="inline-flex items-center gap-1 font-semibold" @click="fetchLogs"><RefreshCw class="h-4 w-4" /> Coba lagi</button></div>
      <div class="overflow-x-auto">
        <table class="w-full min-w-[850px] border-collapse text-left">
          <thead><tr class="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wider text-slate-500"><th class="whitespace-nowrap p-4 font-semibold">Waktu & IP</th><th class="p-4 font-semibold">User</th><th class="p-4 font-semibold">Aksi & Modul</th><th class="whitespace-nowrap p-4 text-center font-semibold">Perubahan Data</th></tr></thead>
          <tbody class="divide-y divide-slate-100 text-sm">
            <tr v-if="loading"><td colspan="4" class="p-12 text-center text-slate-500"><Loader2 class="mx-auto mb-2 h-6 w-6 animate-spin text-blue-600" />Memuat audit trail...</td></tr>
            <tr v-else-if="!filteredItems.length"><td colspan="4" class="p-12 text-center text-slate-500">Tidak ada data log aktivitas pada filter yang dipilih.</td></tr>
            <tr v-for="item in filteredItems" v-else :key="item.id" class="transition-colors hover:bg-slate-50">
              <td class="whitespace-nowrap p-4"><div class="font-semibold text-slate-700">{{ formatDate(item.createdAt) }} WIB</div><div class="mt-1 text-xs text-slate-400"><Globe2 class="mr-1 inline h-3 w-3 text-slate-300" />{{ item.ipAddress }}</div></td>
              <td class="p-4"><div class="font-bold text-slate-800">{{ item.username || 'Unknown' }}</div><div class="mt-0.5 text-xs text-slate-500">Role: <span class="font-medium text-slate-700">{{ item.role || 'unknown' }}</span></div></td>
              <td class="p-4"><div class="mb-1 flex items-center gap-2"><span class="rounded px-2 py-0.5 text-[10px] font-bold tracking-wide" :class="actionClass(item.actionType)">{{ item.actionType }}</span><span class="font-mono text-xs text-slate-500">{{ item.entityName }}<template v-if="item.entityId"> #{{ item.entityId }}</template></span></div><div class="max-w-xl truncate text-xs text-slate-600" :title="item.userAgent">{{ item.userAgent }}</div></td>
              <td class="p-4 text-center"><button class="mx-auto inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition" :class="item.actionType === 'DELETE' ? 'bg-rose-50 text-rose-600 hover:bg-rose-100' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'" @click="openDetail(item)"><Trash2 v-if="item.actionType === 'DELETE'" class="h-3.5 w-3.5" /><Code2 v-else class="h-3.5 w-3.5" /> {{ item.actionType === 'DELETE' ? 'Data Dihapus' : 'Lihat Detail' }}</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex flex-col items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 sm:flex-row"><div>Menampilkan {{ displayTotalItems ? ((displayCurrentPage - 1) * meta.itemsPerPage) + 1 : 0 }} - {{ Math.min(displayCurrentPage * meta.itemsPerPage, displayTotalItems) }} dari {{ displayTotalItems.toLocaleString('id-ID') }} log</div><div class="flex items-center gap-1"><button :disabled="page <= 1 || loading || !displayTotalPages" class="rounded border border-slate-300 bg-white px-3 py-1 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40" @click="goToPage(page - 1)"><ChevronLeft class="h-4 w-4" /></button><span class="px-3 py-1 font-medium">Halaman {{ displayCurrentPage }} / {{ displayTotalPages || 1 }}</span><button :disabled="page >= displayTotalPages || loading || !displayTotalPages" class="rounded border border-slate-300 bg-white px-3 py-1 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40" @click="goToPage(page + 1)"><ChevronRight class="h-4 w-4" /></button></div></div>
    </div>
  </div>

  <div v-if="selectedLog" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm" @click.self="closeDetail">
    <div class="flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"><div class="flex items-center justify-between border-b border-slate-200 bg-slate-50 p-5"><div><h2 class="text-lg font-bold text-slate-800">Detail Perubahan Data (Payload)</h2><p class="mt-1 text-xs text-slate-500">Modul: <span class="font-mono font-bold text-blue-600">{{ selectedLog.entityName }}</span> · ID: {{ selectedLog.entityId || '-' }}</p></div><button class="rounded-full bg-slate-200 p-2 text-slate-600 hover:bg-rose-100 hover:text-rose-600" @click="closeDetail"><X class="h-4 w-4" /></button></div><div class="flex flex-1 flex-col gap-4 overflow-y-auto bg-slate-100 p-6 md:flex-row"><div class="flex min-h-64 w-full flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-inner md:w-1/2"><div class="border-b border-slate-700 bg-slate-800 px-4 py-2 text-xs font-bold uppercase tracking-wider text-rose-400">Sebelum (oldValues)</div><pre class="json-scroll overflow-auto p-4 text-[13px] leading-relaxed text-slate-300">{{ jsonText(selectedLog.oldValues) }}</pre></div><div class="flex min-h-64 w-full flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-inner md:w-1/2"><div class="border-b border-slate-700 bg-slate-800 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-400">Sesudah (newValues)</div><pre class="json-scroll overflow-auto p-4 text-[13px] leading-relaxed text-slate-300">{{ jsonText(selectedLog.newValues) }}</pre></div></div><div class="flex justify-end border-t border-slate-200 bg-white p-4"><button class="rounded-lg bg-slate-800 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-700" @click="closeDetail">Tutup</button></div></div>
  </div>
</template>

<style scoped>
.json-scroll::-webkit-scrollbar { width: 6px; height: 6px; }
.json-scroll::-webkit-scrollbar-track { background: #1e293b; border-radius: 4px; }
.json-scroll::-webkit-scrollbar-thumb { background: #475569; border-radius: 4px; }
</style>
