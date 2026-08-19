<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import AddData from './AddData.vue'
import SetMaintenance from './SetMaintenance.vue'
import SetReady from './SetReady.vue'

const filter = ref({
  keyword: '',
  tipeMesin: 'all',
  status: 'all',
  namaMitra: 'all',
  namaCabang: 'all',
})

const isLoading = ref(false)
const data = ref<any[]>([]) // Define the type for fetched data

const tipeMesinOptions = computed(() => {
  return [...new Set(data.value.map((item: any) => item.tipeMesin).filter(Boolean))] as string[]
})

const statusOptions = computed(() => {
  return [...new Set(data.value.map((item: any) => item.status).filter(Boolean))] as string[]
})

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
})

const filteredBySelect = computed(() => {
  return data.value.filter((item: any) => {
    const matchTipe = filter.value.tipeMesin === 'all' || item.tipeMesin === filter.value.tipeMesin

    const matchStatus = filter.value.status === 'all' || item.status === filter.value.status

    const matchMitra = filter.value.namaMitra === 'all' || item.namaMitra === filter.value.namaMitra

    const matchCabang
      = filter.value.namaCabang === 'all' || item.namaCabang === filter.value.namaCabang

    return matchTipe && matchStatus && matchMitra && matchCabang
  })
})

const {
  paginatedData,
  totalPages,
  currentPage,
  itemsPerPage,
  filteredData,
  nextPage,
  prevPage,
} = usePagination({
  data: filteredBySelect,
  searchQuery: computed(() => filter.value.keyword),
  searchFields: ['namaMesin', 'tipeMesin', 'espId', 'status', 'namaMitra', 'namaCabang'],
})

function resetFilter() {
  filter.value = {
    keyword: '',
    tipeMesin: 'all',
    status: 'all',
    namaMitra: 'all',
    namaCabang: 'all',
  }
}

async function fetchData() {
  isLoading.value = true
  try {
    const fetched = await apiFetch('/api/backoffice/mesin')
    data.value = Array.isArray(fetched?.data) ? fetched.data : []
  }
  catch (error) {
    console.error('Gagal mengambil data:', error)
    data.value = []
  }
  finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchData()
})

function handleDataMaintenance(_deletedItemId: any) {
  setTimeout(() => {
    // console.log('Melakukan fetch data setelah edit...')
    fetchData()
  }, 500)
}

function handleDataReady() {
  setTimeout(() => {
    fetchData()
  }, 500)
}

function isMachineStatus(item: any, status: string) {
  return item.status?.trim().toUpperCase() === status
}
</script>

<template>
  <Card class="w-full">
    <CardHeader>
      <CardTitle>Data Detail Mesin</CardTitle>

      <div class="grid grid-cols-1 mt-4 gap-3 md:grid-cols-5">
        <Input
          v-model="filter.keyword"
          placeholder="Cari mesin, ESP ID, mitra, cabang..."
          class="md:col-span-2"
        />

        <Select v-model="filter.tipeMesin">
          <SelectTrigger>
            <SelectValue placeholder="Tipe Mesin" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">
              Semua Tipe
            </SelectItem>
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
            <SelectItem value="all">
              Semua Status
            </SelectItem>
            <SelectItem v-for="item in statusOptions" :key="item" :value="item">
              {{ item }}
            </SelectItem>
          </SelectContent>
        </Select>

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
      <div
        class="min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px space-y-4"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="w-[50px]">
                No
              </TableHead>
              <TableHead>Nama Mesin</TableHead>
              <TableHead>Tipe Mesin</TableHead>
              <TableHead>ESP ID</TableHead>
              <TableHead>Status</TableHead>
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
                  <SetMaintenance
                    v-if="isMachineStatus(item, 'READY')"
                    :item="item"
                    @data-maintenance="handleDataMaintenance"
                  />
                  <SetReady
                    v-if="isMachineStatus(item, 'OFFLINE')"
                    :item="item"
                    @data-ready="handleDataReady"
                  />
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
    <div class="mt-4 flex items-center justify-end gap-2">
      <Button class="mr-2" :disabled="currentPage === 1" @click="prevPage">
        Previous
      </Button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <Button class="ml-2" :disabled="currentPage === totalPages" @click="nextPage">
        Next
      </Button>
    </div>
  </div>
</template>

<style scoped></style>
