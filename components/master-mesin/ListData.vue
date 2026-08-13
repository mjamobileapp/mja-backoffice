<script setup lang="ts">
import { formatDate } from 'date-fns'
import { DownloadCloud, PencilIcon, Trash2Icon } from 'lucide-vue-next'
import { computed, onMounted, ref, watch } from 'vue'
import AddData from './AddData.vue'
import DeleteData from './DeleteData.vue'
import EditData from './EditData.vue'

const filter = ref({
  keyword: '',
  namaMitra: 'all',
  namaCabang: 'all',
})

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase
const isLoading = ref(false)
// console.log(baseUrl)
const currentPage = ref(1)
const itemsPerPage = ref(10)
const data = ref<any[]>([]) // Define the type for fetched data

const mitraOptions = computed(() => {
  return [...new Set(data.value.map((item: any) => item.namaMitra).filter(Boolean))] as string[]
})

const cabangOptions = computed(() => {
  const sourceData = filter.value.namaMitra === 'all'
    ? data.value
    : data.value.filter((item: any) => item.namaMitra === filter.value.namaMitra)

  return [...new Set(sourceData.map((item: any) => item.namaCabang).filter(Boolean))] as string[]
})

watch(() => filter.value.namaMitra, () => {
  filter.value.namaCabang = 'all'
  currentPage.value = 1
})

const filteredData = computed(() => {
  return data.value.filter((item: any) => {
    const keyword = filter.value.keyword.toLowerCase()

    const matchKeyword
      = item.namaGroupMesin?.toLowerCase().includes(keyword)
      // item.tipeMesin?.toLowerCase().includes(keyword) ||
      // item.kapasitas?.toLowerCase().includes(keyword) ||
        || item.espId?.toLowerCase().includes(keyword)
      // item.macAddress?.toLowerCase().includes(keyword) ||
        || item.status?.toLowerCase().includes(keyword)
        || item.namaMitra?.toLowerCase().includes(keyword)
        || item.namaCabang?.toLowerCase().includes(keyword)

    const matchMitra = filter.value.namaMitra === 'all' || item.namaMitra === filter.value.namaMitra

    const matchCabang
      = filter.value.namaCabang === 'all' || item.namaCabang === filter.value.namaCabang

    return matchKeyword && matchMitra && matchCabang
  })
})

function resetFilter() {
  filter.value = {
    keyword: '',
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

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

function formatTanggal(tanggal: any) {
  return formatDate(tanggal, 'dd/M/yyyy')
}

async function fetchData() {
  isLoading.value = true
  try {
    const fetchedData = await apiFetch('/api/backoffice/mesin/master')
    data.value = Array.isArray(fetchedData?.data) ? fetchedData.data : []
  }
  catch (error) {
    console.error('Gagal mengambil data mesin:', error)
    data.value = []
  }
  finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchData()
})

const editItem = ref(null)
function handleDataEdited() {
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

function handleDataDeleted(deletedItemId: any) {
  data.value = data.value.filter((item: any) => item.id !== deletedItemId)
}
</script>

<template>
  <Card class="w-full">
    <CardHeader>
      <CardTitle>Data Mesin</CardTitle>

      <div class="mt-4 flex flex-col gap-3 md:flex-row">
        <Input
          v-model="filter.keyword"
          placeholder="Cari mesin, ESP ID, mitra, cabang..."
          class="flex-1"
        />

        <Button variant="outline" @click="resetFilter">
          Reset
        </Button>
      </div>

      <div class="grid grid-cols-1 mt-3 gap-3 md:grid-cols-2">
        <Select v-model="filter.namaMitra">
          <SelectTrigger>
            <SelectValue placeholder="Filter Mitra" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">
              Semua Mitra
            </SelectItem>
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
            <SelectItem value="all">
              Semua Cabang
            </SelectItem>
            <SelectItem v-for="item in cabangOptions" :key="item" :value="item">
              {{ item }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div class="mt-3 text-sm text-muted-foreground">
        Menampilkan {{ filteredData.length }} dari {{ data.length }} data mesin
      </div>
    </CardHeader>
    <CardContent>
      <AddData @data-added="fetchData" />
      <div v-if="isLoading" class="flex items-center justify-center p-8">
        <div
          class="h-8 w-8 animate-spin border-2 border-primary border-t-transparent rounded-full"
        />
      </div>
      <div class="min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="w-[50px]">
                No
              </TableHead>
              <TableHead>Nama Mesin</TableHead>
              <TableHead>ESP ID</TableHead>
              <TableHead>Nama Mitra</TableHead>
              <TableHead>Nama Cabang</TableHead>
              <TableHead class="text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="(item, index) in paginatedData" :key="item.id">
              <TableCell>
                {{ (currentPage - 1) * itemsPerPage + index + 1 }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.namaGroupMesin }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.espId }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.namaMitra }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.namaCabang }}
              </TableCell>
              <TableCell class="text-right">
                <div class="flex items-center justify-center gap-2">
                  <EditData :esp-id="item.espId" @data-edited="handleDataEdited" />
                  <DeleteData :item="item" @data-deleted="handleDataDeleted" />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div class="mt-4 flex items-center justify-end gap-2">
        <Button :disabled="currentPage === 1" @click="prevPage">
          Previous
        </Button>

        <span> Page {{ currentPage }} of {{ totalPages }} </span>

        <Button :disabled="currentPage === totalPages" @click="nextPage">
          Next
        </Button>
      </div>
    </CardContent>
  </Card>
</template>

<style scoped></style>
