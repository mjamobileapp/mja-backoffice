<script setup lang="ts">
import { DownloadCloud, PencilIcon, Trash2Icon } from 'lucide-vue-next'
import { computed, onMounted, ref } from 'vue'
import AddData from './AddData.vue'
import DeleteData from './DeleteData.vue'
import EditData from './EditData.vue'
import { formatDate } from 'date-fns'
import SetMaintenance from './SetMaintenance.vue'

const filter = ref({
  keyword: '',
  tipeMesin: 'all',
  status: 'all',
  namaMitra: 'all',
  namaCabang: 'all',
})

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase
const isLoading = ref(false)
// console.log(baseUrl)
const currentPage = ref(1)
const itemsPerPage = ref(10)
const data = ref<any>([]) // Define the type for fetched data

const tipeMesinOptions = computed(() => {
  return [...new Set(data.value.map(item => item.tipeMesin).filter(Boolean))]
})

const statusOptions = computed(() => {
  return [...new Set(data.value.map(item => item.status).filter(Boolean))]
})

const mitraOptions = computed(() => {
  return [...new Set(data.value.map(item => item.namaMitra).filter(Boolean))]
})

const cabangOptions = computed(() => {
  return [...new Set(data.value.map(item => item.namaCabang).filter(Boolean))]
})

const filteredData = computed(() => {
  return data.value.filter(item => {
    const keyword = filter.value.keyword.toLowerCase()

    const matchKeyword =
      item.namaMesin?.toLowerCase().includes(keyword) ||
      item.tipeMesin?.toLowerCase().includes(keyword) ||
      item.kapasitas?.toLowerCase().includes(keyword) ||
      item.ipAddressEsp?.toLowerCase().includes(keyword) ||
      item.macAddress?.toLowerCase().includes(keyword) ||
      item.status?.toLowerCase().includes(keyword) ||
      item.namaMitra?.toLowerCase().includes(keyword) ||
      item.namaCabang?.toLowerCase().includes(keyword)

    const matchTipe = filter.value.tipeMesin === 'all' || item.tipeMesin === filter.value.tipeMesin

    const matchStatus = filter.value.status === 'all' || item.status === filter.value.status

    const matchMitra = filter.value.namaMitra === 'all' || item.namaMitra === filter.value.namaMitra

    const matchCabang =
      filter.value.namaCabang === 'all' || item.namaCabang === filter.value.namaCabang

    return matchKeyword && matchTipe && matchStatus && matchMitra && matchCabang
  })
})

function resetFilter() {
  filter.value = {
    keyword: '',
    tipeMesin: 'all',
    status: 'all',
    namaMitra: 'all',
    namaCabang: 'all',
  }

  currentPage.value = 1
}
const totalPages = computed(() => {
  return Math.ceil(filteredData.value.length / itemsPerPage.value)
})

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  return filteredData.value.slice(start, start + itemsPerPage.value)
})

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

function formatTanggal(tanggal: any) {
  return formatDate(tanggal, 'dd/M/yyyy')
}

// get token=====
const accessToken = useCookie('accessToken')
const token = accessToken.value.token

async function fetchData() {
  isLoading.value = true
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/mesin`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const fetchedData = await response.json()
    console.log('Data yang diterima dari server:', fetchedData)

    if (Array.isArray(fetchedData.data)) {
      data.value = fetchedData.data
    } else {
      console.error('Data yang diterima bukan array:', fetchedData)
      data.value = []
    }
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

const editItem = ref(null)
function handleDataEdited(editedItem) {
  console.log('Event dataEdited diterima, menunggu 500ms sebelum refresh data...')

  setTimeout(() => {
    console.log('Melakukan fetch data setelah edit...')
    fetchData()
  }, 500)
}

function formatRupiah(value: number | Ref<number>) {
  const val = typeof value === 'object' ? value.value : value
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val || 0)
}

function handleDataDeleted(deletedItemId) {
  data.value = data.value.filter(item => item.id !== deletedItemId)
}
function handleDataMaintenance(deletedItemId) {
  setTimeout(() => {
    // console.log('Melakukan fetch data setelah edit...')
    fetchData()
  }, 500)
}
</script>
<template>
  <Card class="w-full">
    <CardHeader>
      <CardTitle>Data Detail Mesin</CardTitle>

      <div class="grid grid-cols-1 md:grid-cols-5 gap-3 mt-4">
        <Input
          v-model="filter.keyword"
          placeholder="Cari mesin, IP, MAC, mitra, cabang..."
          class="md:col-span-2"
        />

        <Select v-model="filter.tipeMesin">
          <SelectTrigger>
            <SelectValue placeholder="Tipe Mesin" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Tipe</SelectItem>
            <SelectItem v-for="item in tipeMesinOptions" :key="item" :value="item">
              {{ item }}
            </SelectItem>
          </SelectContent>
        </Select>

        <Select v-model="filter.status">
          <SelectTrigger>
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Status</SelectItem>
            <SelectItem v-for="item in statusOptions" :key="item" :value="item">
              {{ item }}
            </SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" @click="resetFilter"> Reset </Button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
        <Select v-model="filter.namaMitra">
          <SelectTrigger>
            <SelectValue placeholder="Filter Mitra" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Mitra</SelectItem>
            <SelectItem v-for="item in mitraOptions" :key="item" :value="item">
              {{ item }}
            </SelectItem>
          </SelectContent>
        </Select>

        <Select v-model="filter.namaCabang">
          <SelectTrigger>
            <SelectValue placeholder="Filter Cabang" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Cabang</SelectItem>
            <SelectItem v-for="item in cabangOptions" :key="item" :value="item">
              {{ item }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div class="text-sm text-muted-foreground mt-3">
        Menampilkan {{ filteredData.length }} dari {{ data.length }} data mesin
      </div>
    </CardHeader>
    <CardContent>
      <AddData @dataAdded="fetchData" />
      <div v-if="isLoading" class="flex justify-center items-center p-8">
        <div
          class="animate-spin h-8 w-8 border-2 border-primary rounded-full border-t-transparent"
        ></div>
      </div>
      <div
        class="min-h-100px w-full flex items-center justify-center space-y-4 gap-4 md:min-h-200px"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="w-[100px]"> No </TableHead>
              <TableHead>Nama Mesin</TableHead>
              <TableHead>Tipe Mesin</TableHead>
              <TableHead>ESP ID</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Nama Mitra</TableHead>
              <TableHead>Nama Cabang</TableHead>
              <TableHead class="text-center"> Action </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="(item, index) in paginatedData" :key="item.id">
              <TableCell>
                {{ (currentPage - 1) * itemsPerPage + index + 1 }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.namaMesin }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.tipeMesin }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.espId }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.status }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.namaMitra }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.namaCabang }}
              </TableCell>
              <TableCell class="text-right">
                <div class="flex items-center justify-center gap-2">
                  <!-- <EditData :espId="item.espId" @dataEdited="handleDataEdited" />
                  <DeleteData :item="item" @dataDeleted="handleDataDeleted" /> -->
                  <SetMaintenance :item="item" @dataMaintenance="handleDataMaintenance" />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </CardContent>
  </Card>
  <div>
    <!-- <div class="mt-4 flex float-right"> -->
    <div class="mt-4 flex justify-end items-center gap-2">
      <Button class="mr-2" @click="prevPage" :disabled="currentPage === 1">Previous </Button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <Button class="ml-2" @click="nextPage" :disabled="currentPage === totalPages">Next </Button>
    </div>
  </div>
</template>
<style scoped></style>
