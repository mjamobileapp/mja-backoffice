<script setup lang="ts">
import { Loader2, FileDown } from 'lucide-vue-next'
import { computed, onMounted, ref, watch } from 'vue'
import AddData from './AddData.vue'
import DeleteData from './DeleteData.vue'
import DetailRap from './DetailRap.vue'
import EditData from './EditData.vue'
import LockData from './LockData.vue'
import { formatDate } from 'date-fns'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

// ================= CONFIG =================
const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

// ================= STATE =================
const isLoading = ref(false)
const currentPage = ref(1)
const itemsPerPage = ref(10)
const data = ref<any[]>([])

// ================= FILTER =================
const searchQuery = ref('')
const filterTanggalStart = ref<Date | null>(null)
const filterTanggalEnd = ref<Date | null>(null)
const selectedProyek = ref<string>('all')

// ================= COMPUTED =================
const proyekOptions = computed(() => {
  const set = new Set(data.value.map(item => item.namaPekerjaan))
  return Array.from(set)
})

const filteredData = computed(() => {
  return data.value.filter(item => {
    // filter proyek
    const matchesProyek =
      selectedProyek.value === 'all' || item.namaPekerjaan === selectedProyek.value

    // search
    const search = searchQuery.value.toLowerCase()
    const matchesSearch =
      item.namaPekerjaan.toLowerCase().includes(search) ||
      item.noRap.toLowerCase().includes(search) ||
      item.namaRap.toLowerCase().includes(search)

    // tanggal
    let matchesTanggal = true
    if (filterTanggalStart.value && new Date(item.tanggal) < filterTanggalStart.value) {
      matchesTanggal = false
    }
    if (filterTanggalEnd.value && new Date(item.tanggal) > filterTanggalEnd.value) {
      matchesTanggal = false
    }

    return matchesProyek && matchesSearch && matchesTanggal
  })
})

const totalPages = computed(() => Math.ceil(filteredData.value.length / itemsPerPage.value) || 1)

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  return filteredData.value.slice(start, start + itemsPerPage.value)
})

const grandTotalAnggaran = computed(() => {
  return filteredData.value.reduce((total, item) => {
    const anggaran = Number(item.totalAnggaran)
    return total + (isNaN(anggaran) ? 0 : anggaran)
  }, 0)
})

// ================= WATCH =================
watch([searchQuery, filterTanggalStart, filterTanggalEnd, selectedProyek], () => {
  currentPage.value = 1
})

// ================= METHODS =================
function resetFilter() {
  searchQuery.value = ''
  filterTanggalStart.value = null
  filterTanggalEnd.value = null
  selectedProyek.value = 'all'
}

function formatTanggal(tanggal: any) {
  return tanggal ? formatDate(new Date(tanggal), 'dd/MM/yyyy') : '-'
}

function formatRupiah(value: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value || 0)
}

// ================= API =================
const accessToken = useCookie('accessToken')
const token = accessToken.value?.token

async function fetchData() {
  isLoading.value = true
  try {
    const res = await fetch(`${baseUrl}/rap`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const result = await res.json()
    data.value = Array.isArray(result.data) ? result.data : []
  } catch (err) {
    console.error(err)
    data.value = []
  } finally {
    isLoading.value = false
  }
}

onMounted(fetchData)

const downloadingId = ref<number | null>(null)
const isDownloading = ref(false)
const downloadPdf = async item => {
  console.log(item.id)
  try {
    downloadingId.value = item.id
    // console.log(downloadingId.value)
    isDownloading.value = true
    const res = await fetch(`${baseUrl}/rap/generateRap/${item.id}/pdf`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!res.ok) throw new Error('Gagal mengunduh file')

    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `RAP_${item.noRap}.pdf`
    a.click()
    URL.revokeObjectURL(url)
  } catch (err) {
    console.error('Download gagal:', err)
    alert('Gagal mengunduh file PO!')
  } finally {
    downloadingId.value = null
    isDownloading.value = false
  }
}

// ================= HANDLER =================
const refresh = () => setTimeout(fetchData, 500)
</script>

<template>
  <Card class="w-full">
    <CardHeader>
      <CardTitle>Daftar Rencana Anggaran Proyek (RAP)</CardTitle>
    </CardHeader>

    <CardContent>
      <!-- ================= FILTER SECTION ================= -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <Input v-model="searchQuery" placeholder="Cari No RAP / Proyek..." />

        <Select v-model="selectedProyek">
          <SelectTrigger>
            <SelectValue placeholder="Pilih Proyek" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Proyek</SelectItem>
            <SelectItem v-for="p in proyekOptions" :key="p" :value="p">
              {{ p }}
            </SelectItem>
          </SelectContent>
        </Select>

        <Datepicker v-model="filterTanggalStart" placeholder="Tanggal Mulai" auto-apply />

        <Datepicker v-model="filterTanggalEnd" placeholder="Tanggal Akhir" auto-apply />
      </div>

      <div class="flex justify-between items-center mb-4">
        <Button variant="outline" @click="resetFilter"> Reset Filter </Button>

        <AddData @dataAdded="fetchData" />
      </div>

      <!-- ================= LOADING ================= -->
      <div v-if="isLoading" class="flex justify-center p-8">
        <Loader2 class="animate-spin w-8 h-8 text-primary" />
      </div>

      <!-- ================= TABLE ================= -->
      <div v-else class="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="w-[50px]">No</TableHead>
              <TableHead>Nama Proyek</TableHead>
              <TableHead>No RAP</TableHead>
              <TableHead>Nama RAP</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Total Anggaran</TableHead>
              <TableHead>Status</TableHead>
              <TableHead class="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow v-for="(item, index) in paginatedData" :key="item.id">
              <TableCell>
                {{ (currentPage - 1) * itemsPerPage + index + 1 }}
              </TableCell>
              <TableCell>{{ item.namaPekerjaan }}</TableCell>
              <TableCell>{{ item.noRap }}</TableCell>
              <TableCell>{{ item.namaRap }}</TableCell>
              <TableCell>{{ formatTanggal(item.tanggal) }}</TableCell>
              <TableCell>{{ formatRupiah(item.totalAnggaran) }}</TableCell>
              <TableCell>{{ item.status }}</TableCell>
              <TableCell>
                <div class="flex justify-center gap-2">
                  <LockData :item="item" @dataLocked="refresh" />
                  <DetailRap :item="item" @detailRap="refresh" />
                  <EditData
                    :id="item.id"
                    :disabled="item.status === 'locked'"
                    @dataEdited="refresh"
                  />
                  <DeleteData
                    :item="item"
                    :disabled="item.status === 'locked'"
                    @dataDeleted="refresh"
                  />
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger as-child>
                        <Button
                          :disabled="Number(item.grandTotal) === 0 || downloadingId === item.id"
                          @click="downloadPdf(item)"
                          size="sm"
                        >
                          <template v-if="downloadingId === item.id">
                            <Loader2 class="w-4 h-4 animate-spin" />
                          </template>
                          <template v-else>
                            <FileDown class="w-4 h-4" />
                          </template>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <span v-if="isDownloading">Mengunduh...</span>
                        <span v-else>Download PDF</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableCell>
            </TableRow>

            <TableRow v-if="filteredData.length === 0">
              <TableCell colspan="8" class="text-center py-10 text-muted-foreground">
                Tidak ada data RAP ditemukan.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <!-- ================= PAGINATION ================= -->
      <div class="mt-4 flex items-center justify-between">
        <div class="text-sm text-muted-foreground">
          Showing {{ paginatedData.length }} of {{ filteredData.length }} entries
        </div>

        <div class="flex items-center gap-2">
          <Button size="sm" variant="outline" @click="currentPage--" :disabled="currentPage === 1">
            Previous
          </Button>

          <span class="text-sm font-medium"> Page {{ currentPage }} of {{ totalPages }} </span>

          <Button
            size="sm"
            variant="outline"
            @click="currentPage++"
            :disabled="currentPage === totalPages"
          >
            Next
          </Button>
        </div>
      </div>

      <!-- ================= GRAND TOTAL ================= -->
      <div class="mt-6 flex justify-end">
        <div class="bg-muted px-6 py-4 rounded-lg text-right">
          <p class="text-sm text-muted-foreground">Grand Total Anggaran</p>
          <p class="text-xl font-bold text-primary">
            {{ formatRupiah(grandTotalAnggaran) }}
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
