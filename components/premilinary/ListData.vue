<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next'
import { computed, onMounted, ref } from 'vue'
import AddData from './AddData.vue'
import DeleteData from './DeleteData.vue'
import DetailPremilinary from './DetailPremilinary.vue'
import EditData from './EditData.vue'
import { formatDate } from 'date-fns'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase
const isLoading = ref(false)
const currentPage = ref(1)
const itemsPerPage = ref(10)
const data = ref<any[]>([])

/* ===============================
   FILTER STATE
================================ */
const searchQuery = ref('')
const filterTanggalStart = ref<Date | null>(null)
const filterTanggalEnd = ref<Date | null>(null)

/* ===============================
   FILTERED DATA
================================ */
const filteredData = computed(() => {
  return data.value.filter(item => {
    const search = searchQuery.value.toLowerCase()

    const matchesSearch =
      item.namaPekerjaan?.toLowerCase().includes(search) ||
      item.noKontrak?.toLowerCase().includes(search) ||
      item.ygMengajukan?.toLowerCase().includes(search)

    let matchesTanggal = true
    if (filterTanggalStart.value) {
      matchesTanggal = new Date(item.tanggal) >= new Date(filterTanggalStart.value)
    }
    if (filterTanggalEnd.value) {
      matchesTanggal = new Date(item.tanggal) <= new Date(filterTanggalEnd.value)
    }

    return matchesSearch && matchesTanggal
  })
})

function resetFilter() {
  searchQuery.value = ''
  filterTanggalStart.value = null
  filterTanggalEnd.value = null
}

/* ===============================
   PAGINATION
================================ */
const totalPages = computed(() => Math.ceil(filteredData.value.length / itemsPerPage.value) || 1)

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

/* ===============================
   FORMATTER
================================ */
function formatTanggal(tanggal: any) {
  if (!tanggal) return '-'
  return formatDate(new Date(tanggal), 'dd/MM/yyyy')
}

function formatRupiah(value: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value || 0)
}

/* ===============================
   FETCH DATA
================================ */
const accessToken = useCookie('accessToken')
const token = accessToken.value?.token

async function fetchData() {
  isLoading.value = true
  try {
    const response = await fetch(`${baseUrl}/premilinary`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) throw new Error('Gagal fetch data')

    const result = await response.json()
    data.value = Array.isArray(result.data) ? result.data : []
  } catch (error) {
    console.error('Gagal mengambil data:', error)
    data.value = []
  } finally {
    isLoading.value = false
  }
}

onMounted(fetchData)

function handleReload() {
  setTimeout(fetchData, 500)
}
</script>

<template>
  <Card class="w-full">
    <CardHeader>
      <CardTitle>Daftar Premilinary Proyek</CardTitle>
    </CardHeader>

    <CardContent>
      <!-- FILTER -->
      <div class="flex items-center gap-4 mb-4 flex-wrap">
        <Input
          v-model="searchQuery"
          placeholder="Cari Proyek / Kontrak / Pengaju..."
          class="w-64"
        />

        <div class="flex items-center gap-2">
          <Datepicker v-model="filterTanggalStart" placeholder="Tanggal Mulai" auto-apply />
          <span>s/d</span>
          <Datepicker v-model="filterTanggalEnd" placeholder="Tanggal Akhir" auto-apply />
        </div>

        <Button @click="resetFilter" variant="outline">Reset Filter</Button>
      </div>

      <!-- ACTION -->
      <div class="flex justify-between items-center mb-4">
        <AddData @dataAdded="handleReload" />
      </div>

      <!-- LOADING -->
      <div v-if="isLoading" class="flex justify-center p-8">
        <Loader2 class="animate-spin h-8 w-8 text-primary" />
      </div>

      <!-- TABLE -->
      <div class="overflow-x-auto w-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Nama Proyek</TableHead>
              <TableHead>No Kontrak</TableHead>
              <TableHead>Yang Mengajukan</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Tujuan</TableHead>
              <TableHead>Total</TableHead>
              <TableHead class="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow v-for="(item, index) in paginatedData" :key="item.id">
              <TableCell>
                {{ (currentPage - 1) * itemsPerPage + index + 1 }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.namaPekerjaan }}
              </TableCell>
              <TableCell>{{ item.noKontrak }}</TableCell>
              <TableCell>{{ item.ygMengajukan }}</TableCell>
              <TableCell>{{ formatTanggal(item.tanggal) }}</TableCell>
              <TableCell class="max-w-[200px] truncate">
                {{ item.tujuan || '-' }}
              </TableCell>
              <TableCell>
                {{ formatRupiah(item.totalPremilinary) }}
              </TableCell>
              <TableCell>
                <div class="flex justify-center gap-2">
                  <DetailPremilinary :id="item.id" @updated="handleReload" />
                  <EditData :id="item.id" @dataEdited="handleReload" />
                  <DeleteData :item="item" @dataDeleted="handleReload" />
                </div>
              </TableCell>
            </TableRow>

            <TableRow v-if="data.length === 0 && !isLoading">
              <TableCell colspan="8" class="text-center py-10 text-muted-foreground">
                Tidak ada data Premilinary ditemukan.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <!-- PAGINATION -->
      <div class="mt-4 flex items-center justify-between">
        <div class="text-sm text-muted-foreground">
          Showing {{ paginatedData.length }} of {{ filteredData.length }} entries
        </div>
        <div class="flex items-center gap-2">
          <Button size="sm" variant="outline" @click="prevPage" :disabled="currentPage === 1">
            Previous
          </Button>
          <span class="text-sm font-medium"> Page {{ currentPage }} of {{ totalPages }} </span>
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
