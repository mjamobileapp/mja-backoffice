<script setup lang="ts">
import {
  DownloadCloud,
  FileDown,
  Loader2,
  LucideTrash,
  PencilIcon,
  Trash2Icon,
  TrashIcon,
} from 'lucide-vue-next'
import { computed, onMounted, ref } from 'vue'
import AddData from './AddData.vue'
import DeleteData from './DeleteData.vue'
import DetailRap from './DetailRap.vue'
import EditData from './EditData.vue'
import { formatDate } from 'date-fns'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { formatNumber } from 'chart.js/helpers'

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase
const isLoading = ref(false)
const currentPage = ref(1)
const itemsPerPage = ref(10)
const data = ref<any>([])

// FILTER STATE ==============================
const searchQuery = ref('')
// Filter Tanggal (field: tanggal)
const filterTanggalStart = ref(null)
const filterTanggalEnd = ref(null)

// ===========================================
const filteredData = computed(() => {
  return data.value.filter(item => {
    // SEARCH (berdasarkan Nama Pekerjaan atau No RAP)
    const search = searchQuery.value.toLowerCase()
    const matchesSearch =
      item.namaPekerjaan.toLowerCase().includes(search) ||
      item.noRap.toLowerCase().includes(search) ||
      item.namaRap.toLowerCase().includes(search)

    // FILTER TANGGAL
    let matchesTanggal = true
    if (filterTanggalStart.value) {
      const start = new Date(filterTanggalStart.value)
      const itemDate = new Date(item.tanggal)
      if (!(itemDate >= start)) matchesTanggal = false
    }
    if (filterTanggalEnd.value) {
      const end = new Date(filterTanggalEnd.value)
      const itemDate = new Date(item.tanggal)
      if (!(itemDate <= end)) matchesTanggal = false
    }

    return matchesSearch && matchesTanggal
  })
})

function resetFilter() {
  searchQuery.value = ''
  filterTanggalStart.value = null
  filterTanggalEnd.value = null
}

const totalPages = computed(() => {
  return Math.ceil(filteredData.value.length / itemsPerPage.value) || 1
})

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  return filteredData.value.slice(start, start + itemsPerPage.value)
})

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

function formatTanggal(tanggal: any) {
  if (!tanggal) return '-'
  return formatDate(new Date(tanggal), 'dd/MM/yyyy')
}

// get token
const accessToken = useCookie('accessToken')
const token = accessToken.value?.token

async function fetchData() {
  isLoading.value = true
  try {
    const response = await fetch(`${baseUrl}/rap`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

    const result = await response.json()
    // Sesuai dengan controller: res.json({ data: mappedData })
    data.value = Array.isArray(result.data) ? result.data : []
  } catch (error) {
    console.error('Gagal mengambil data:', error)
    data.value = []
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchData()
})

function handleDataEdited() {
  setTimeout(() => fetchData(), 500)
}

function handleDetailRap() {
  setTimeout(() => fetchData(), 500)
}

function handleDataDeleted() {
  setTimeout(() => fetchData(), 500)
}

function formatRupiah(value: number | Ref<number>) {
  const val = typeof value === 'object' ? value.value : value
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val || 0)
}
</script>

<template>
  <Card class="w-full">
    <CardHeader>
      <CardTitle>Daftar Rencana Anggaran Proyek (RAP)</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="flex items-center gap-4 mb-4 flex-wrap">
        <Input v-model="searchQuery" placeholder="Cari No RAP / Proyek..." class="w-64" />

        <div class="flex items-center gap-2">
          <Datepicker
            v-model="filterTanggalStart"
            :format="'dd-MM-yyyy'"
            placeholder="Tanggal Mulai"
            auto-apply
          />
          <span>s/d</span>
          <Datepicker
            v-model="filterTanggalEnd"
            :format="'dd-MM-yyyy'"
            placeholder="Tanggal Akhir"
            auto-apply
          />
        </div>

        <Button @click="resetFilter" variant="outline"> Reset Filter </Button>
      </div>

      <div class="flex justify-between items-center mb-4">
        <AddData @dataAdded="fetchData" />
      </div>

      <div v-if="isLoading" class="flex justify-center items-center p-8">
        <Loader2 class="animate-spin h-8 w-8 text-primary" />
      </div>

      <div class="overflow-x-auto w-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="w-[50px]"> No </TableHead>
              <TableHead>Nama Proyek</TableHead>
              <TableHead>No RAP</TableHead>
              <TableHead>Nama RAP</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Keterangan</TableHead>
              <TableHead>Total Anggaran</TableHead>
              <TableHead class="text-center"> Action </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="(item, index) in paginatedData" :key="item.id">
              <TableCell>
                {{ (currentPage - 1) * itemsPerPage + index + 1 }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.namaPekerjaan }}
                <!-- <div class="text-xs text-muted-foreground">{{ item.noKontrak }}</div> -->
              </TableCell>
              <TableCell class="font-bold text-primary">
                {{ item.noRap }}
              </TableCell>
              <TableCell>{{ item.namaRap }}</TableCell>
              <TableCell>{{ formatTanggal(item.tanggal) }}</TableCell>
              <TableCell class="max-w-[200px] truncate">
                {{ item.keterangan || '-' }}
              </TableCell>
              <TableCell>{{ formatRupiah(item.totalAnggaran) }}</TableCell>
              <TableCell>
                <div class="flex items-center justify-center gap-2">
                  <DetailRap :id="item.id" @detailRap="handleDetailRap" />
                  <EditData :id="item.id" @dataEdited="handleDataEdited" />
                  <DeleteData :item="item" @dataDeleted="handleDataDeleted" />
                </div>
              </TableCell>
            </TableRow>
            <TableRow v-if="data.length === 0 && !isLoading">
              <TableCell colspan="8" class="text-center py-10 text-muted-foreground">
                Tidak ada data RAP ditemukan.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div class="mt-4 flex items-center justify-between">
        <div class="text-sm text-muted-foreground">
          Showing {{ paginatedData.length }} of {{ filteredData.length }} entries
        </div>
        <div class="flex items-center gap-2">
          <Button size="sm" variant="outline" @click="prevPage" :disabled="currentPage === 1">
            Previous
          </Button>
          <span class="text-sm font-medium">Page {{ currentPage }} of {{ totalPages }}</span>
          <Button
            size="sm"
            variant="outline"
            @click="nextPage"
            :disabled="currentPage === totalPages"
          >
            Next
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
