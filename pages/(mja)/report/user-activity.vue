<script setup lang="ts">
import {
  ChevronLeft,
  ChevronRight,
  Code2,
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

function actionClass(action: string) {
  return {
    CREATE: 'bg-emerald-100 text-emerald-700',
    UPDATE: 'bg-blue-100 text-blue-700',
    DELETE: 'bg-rose-100 text-rose-700',
    LOGIN_SUCCESS: 'bg-emerald-100 text-emerald-700',
    LOGIN_FAILED: 'bg-rose-100 text-rose-700',
    READ: 'bg-slate-100 text-slate-700',
  }[action] || 'bg-amber-100 text-amber-700'
}

function formatDate(value: string) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime()))
    return value

  const formatted = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
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
      keyword: search.value.trim(),
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

let searchTimer: ReturnType<typeof setTimeout> | null = null
watch(search, () => {
  if (searchTimer)
    clearTimeout(searchTimer)
  searchTimer = setTimeout(() => {
    page.value = 1
    fetchLogs()
  }, 400)
})

function applyFilter() {
  startDate.value = draftStartDate.value
  endDate.value = draftEndDate.value
  page.value = 1
  fetchLogs()
}

function goToPage(nextPage: number) {
  if (nextPage < 1 || nextPage > meta.value.totalPages || nextPage === page.value)
    return
  page.value = nextPage
  fetchLogs()
}

function openDetail(log: AuditLog) { selectedLog.value = log }
function closeDetail() { selectedLog.value = null }

function exportCsv() {
  const header = ['Waktu', 'Username', 'Role', 'Aksi', 'Modul', 'Entity ID', 'IP Address', 'User Agent']
  const rows = items.value.map(item => [item.createdAt, item.username, item.role, item.actionType, item.entityName, item.entityId || '', item.ipAddress, item.userAgent])
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
  <div>
    <div class="mx-auto max-w-7xl w-full flex flex-col gap-6">
      <div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 class="text-2xl text-slate-900 font-bold tracking-tight">
            Log Aktivitas User
          </h1>
          <p class="mt-1 text-sm text-slate-500">
            Laporan jejak aktivitas pengguna dan perubahan master data (Backoffice).
          </p>
        </div>
        <button class="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm text-white font-semibold shadow-sm transition hover:bg-slate-700" @click="exportCsv">
          <FileSpreadsheet class="h-4 w-4 text-emerald-400" /> Export ke Excel
        </button>
      </div>

      <div class="flex flex-col items-end gap-4 border border-slate-200 rounded-xl bg-white p-4 shadow-sm lg:flex-row">
        <label class="w-full lg:flex-1"><span class="mb-1 block text-xs text-slate-500 font-semibold">Cari User / Modul</span><span class="relative block"><Search class="absolute left-3 top-2.5 h-4 w-4 text-slate-400" /><input v-model="search" type="text" placeholder="Ketik kata kunci..." class="w-full border border-slate-300 rounded-lg py-2 pl-9 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"></span></label>
        <div class="w-full flex gap-2 lg:w-72">
          <label class="min-w-0 w-1/2"><span class="mb-1 block text-xs text-slate-500 font-semibold">Tanggal Mulai</span><input v-model="draftStartDate" type="date" class="w-full border border-slate-300 rounded-lg px-2 py-2 text-sm text-slate-600 outline-none focus:border-blue-500"></label><label class="min-w-0 w-1/2"><span class="mb-1 block text-xs text-slate-500 font-semibold">Tanggal Akhir</span><input v-model="draftEndDate" type="date" class="w-full border border-slate-300 rounded-lg px-2 py-2 text-sm text-slate-600 outline-none focus:border-blue-500"></label>
        </div>
        <button class="w-full border border-blue-200 rounded-lg bg-blue-50 px-4 py-2 text-sm text-blue-700 font-semibold transition lg:w-auto hover:bg-blue-100" @click="applyFilter">
          Filter
        </button>
      </div>

      <div class="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm">
        <div v-if="errorMessage" class="m-4 flex items-center justify-between border border-rose-200 rounded-lg bg-rose-50 p-3 text-sm text-rose-700">
          <span>{{ errorMessage }}</span><button class="inline-flex items-center gap-1 font-semibold" @click="fetchLogs">
            <RefreshCw class="h-4 w-4" /> Coba lagi
          </button>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-[850px] w-full border-collapse text-left">
            <thead>
              <tr class="border-b border-slate-200 bg-slate-50 text-xs text-slate-500 tracking-wider uppercase">
                <th class="whitespace-nowrap p-4 font-semibold">
                  Waktu & IP
                </th><th class="p-4 font-semibold">
                  User
                </th><th class="p-4 font-semibold">
                  Aksi & Modul
                </th><th class="whitespace-nowrap p-4 text-center font-semibold">
                  Perubahan Data
                </th>
              </tr>
            </thead>
            <tbody class="text-sm divide-y divide-slate-100">
              <tr v-if="loading">
                <td colspan="4" class="p-12 text-center text-slate-500">
                  <Loader2 class="mx-auto mb-2 h-6 w-6 animate-spin text-blue-600" />Memuat audit trail...
                </td>
              </tr>
              <tr v-else-if="!items.length">
                <td colspan="4" class="p-12 text-center text-slate-500">
                  Tidak ada data log aktivitas pada filter yang dipilih.
                </td>
              </tr>
              <tr v-for="item in items" v-else :key="item.id" class="transition-colors hover:bg-slate-50">
                <td class="whitespace-nowrap p-4">
                  <div class="text-slate-700 font-semibold">
                    {{ formatDate(item.createdAt) }} WIB
                  </div><div class="mt-1 text-xs text-slate-400">
                    <Globe2 class="mr-1 inline h-3 w-3 text-slate-300" />{{ item.ipAddress }}
                  </div>
                </td>
                <td class="p-4">
                  <div class="text-slate-800 font-bold">
                    {{ item.username || 'Unknown' }}
                  </div><div class="mt-0.5 text-xs text-slate-500">
                    Role: <span class="text-slate-700 font-medium">{{ item.role || 'unknown' }}</span>
                  </div>
                </td>
                <td class="p-4">
                  <div class="mb-1 flex items-center gap-2">
                    <span class="rounded px-2 py-0.5 text-[10px] font-bold tracking-wide" :class="actionClass(item.actionType)">{{ item.actionType }}</span><span class="text-xs text-slate-500 font-mono">{{ item.entityName }}<template v-if="item.entityId"> #{{ item.entityId }}</template></span>
                  </div><div class="max-w-xl truncate text-xs text-slate-600" :title="item.userAgent">
                    {{ item.userAgent }}
                  </div>
                </td>
                <td class="p-4 text-center">
                  <button class="mx-auto inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition" :class="item.actionType === 'DELETE' ? 'bg-rose-50 text-rose-600 hover:bg-rose-100' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'" @click="openDetail(item)">
                    <Trash2 v-if="item.actionType === 'DELETE'" class="h-3.5 w-3.5" /><Code2 v-else class="h-3.5 w-3.5" /> {{ item.actionType === 'DELETE' ? 'Data Dihapus' : 'Lihat Detail' }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex flex-col items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 sm:flex-row">
          <div>Menampilkan {{ meta.totalItems ? ((meta.currentPage - 1) * meta.itemsPerPage) + 1 : 0 }} - {{ Math.min(meta.currentPage * meta.itemsPerPage, meta.totalItems) }} dari {{ meta.totalItems.toLocaleString('id-ID') }} log</div><div class="flex items-center gap-1">
            <button :disabled="page <= 1 || loading || !meta.totalPages" class="border border-slate-300 rounded bg-white px-3 py-1 disabled:cursor-not-allowed hover:bg-slate-100 disabled:opacity-40" @click="goToPage(page - 1)">
              <ChevronLeft class="h-4 w-4" />
            </button><span class="px-3 py-1 font-medium">Halaman {{ meta.currentPage }} / {{ meta.totalPages || 1 }}</span><button :disabled="page >= meta.totalPages || loading || !meta.totalPages" class="border border-slate-300 rounded bg-white px-3 py-1 disabled:cursor-not-allowed hover:bg-slate-100 disabled:opacity-40" @click="goToPage(page + 1)">
              <ChevronRight class="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedLog" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm" @click.self="closeDetail">
      <div class="max-h-[90vh] max-w-5xl w-full flex flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div class="flex items-center justify-between border-b border-slate-200 bg-slate-50 p-5">
          <div>
            <h2 class="text-lg text-slate-800 font-bold">
              Detail Perubahan Data (Payload)
            </h2><p class="mt-1 text-xs text-slate-500">
              Modul: <span class="text-blue-600 font-bold font-mono">{{ selectedLog.entityName }}</span> · ID: {{ selectedLog.entityId || '-' }}
            </p>
          </div><button class="rounded-full bg-slate-200 p-2 text-slate-600 hover:bg-rose-100 hover:text-rose-600" @click="closeDetail">
            <X class="h-4 w-4" />
          </button>
        </div><div class="flex flex-1 flex-col gap-4 overflow-y-auto bg-slate-100 p-6 md:flex-row">
          <div class="min-h-64 w-full flex flex-col overflow-hidden border border-slate-700 rounded-xl bg-slate-900 shadow-inner md:w-1/2">
            <div class="border-b border-slate-700 bg-slate-800 px-4 py-2 text-xs text-rose-400 font-bold tracking-wider uppercase">
              Sebelum (oldValues)
            </div><pre class="json-scroll overflow-auto p-4 text-[13px] text-slate-300 leading-relaxed">{{ jsonText(selectedLog.oldValues) }}</pre>
          </div><div class="min-h-64 w-full flex flex-col overflow-hidden border border-slate-700 rounded-xl bg-slate-900 shadow-inner md:w-1/2">
            <div class="border-b border-slate-700 bg-slate-800 px-4 py-2 text-xs text-emerald-400 font-bold tracking-wider uppercase">
              Sesudah (newValues)
            </div><pre class="json-scroll overflow-auto p-4 text-[13px] text-slate-300 leading-relaxed">{{ jsonText(selectedLog.newValues) }}</pre>
          </div>
        </div><div class="flex justify-end border-t border-slate-200 bg-white p-4">
          <button class="rounded-lg bg-slate-800 px-5 py-2 text-sm text-white font-semibold hover:bg-slate-700" @click="closeDetail">
            Tutup
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.json-scroll::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.json-scroll::-webkit-scrollbar-track {
  background: #1e293b;
  border-radius: 4px;
}
.json-scroll::-webkit-scrollbar-thumb {
  background: #475569;
  border-radius: 4px;
}
</style>
