<script setup lang="ts">
import { DownloadCloud, FileDown, Loader2, PencilIcon, Trash2Icon } from 'lucide-vue-next'
import { computed, onMounted, ref } from 'vue'
import AddData from './AddData.vue'
import DeleteData from './DeleteData.vue'
import EditData from './EditData.vue'
import DetailPo from './DetailPo.vue'
import { formatDate } from 'date-fns'

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase
const isLoading = ref(false)
// console.log(baseUrl)
const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = ref(10)
const data = ref<any>([]) // Define the type for fetched data

const filteredData = computed(() => {
  return data.value.filter(
    item =>
      item.namaPekerjaan.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.noPo.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

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
    const timestamp = new Date().getTime()
    const response = await fetch(`${baseUrl}/po`, {
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
function handleDataEdited() {
  console.log('Event dataEdited diterima, menunggu 500ms sebelum refresh data...')

  setTimeout(() => {
    console.log('Melakukan fetch data setelah edit...')
    fetchData()
  }, 500)
}
function handleDetailPo() {
  console.log('Event detailPo diterima, menunggu 500ms sebelum refresh data...')

  setTimeout(() => {
    console.log('Melakukan fetch data setelah DetilPo...')
    fetchData()
  }, 500)
}

function formatRupiah(value: number | Ref<number>) {
  const val = typeof value === 'object' ? value.value : value
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val || 0)
}

function handleDataDeleted() {
  setTimeout(() => {
    console.log('Melakukan fetch data setelah delete...')
    fetchData()
  }, 500)
}

const downloadingId = ref<number | null>(null)
const downloadPdf = async item => {
  try {
    downloadingId.value = item.id

    const res = await fetch(`${baseUrl}/po/generatePO/${item.id}/pdf`, {
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
    a.download = `PO_${item.noPo}.pdf`
    a.click()
    URL.revokeObjectURL(url)
  } catch (err) {
    console.error('Download gagal:', err)
    alert('Gagal mengunduh file PO!')
  } finally {
    downloadingId.value = null
  }
}
</script>
<template>
  <Card class="w-full">
    <CardHeader>
      <CardTitle>
        <Input type="text" v-model="searchQuery" placeholder="Search..." />
      </CardTitle>
    </CardHeader>
    <CardContent>
      <AddData @dataAdded="fetchData" />
      <div v-if="isLoading" class="flex justify-center items-center p-8">
        <div
          class="animate-spin h-8 w-8 border-2 border-primary rounded-full border-t-transparent"
        ></div>
      </div>
      <div class="min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="w-[100px]"> No </TableHead>
              <TableHead>Nama Proyek</TableHead>
              <TableHead>No PO</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Tujuan PO</TableHead>
              <!-- <TableHead>No Telepon</TableHead> -->
              <TableHead>Tanggal Pengiriman</TableHead>
              <TableHead>PPN %</TableHead>
              <TableHead>Grand Total</TableHead>
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
              </TableCell>
              <TableCell class="font-medium">
                {{ item.noPo }}
              </TableCell>
              <TableCell>{{ formatTanggal(item.tanggal) }}</TableCell>
              <TableCell class="font-medium">
                {{ item.tujuanPo }}
              </TableCell>

              <!-- <TableCell class="font-medium">
                {{ item.noTelepon }}
              </TableCell> -->
              <TableCell>{{ formatTanggal(item.tglPengiriman) }}</TableCell>
              <TableCell class="font-medium">
                {{ item.ppn }}
              </TableCell>
              <TableCell class="font-medium">
                {{ formatRupiah(item.grandTotal ?? 0) }}
              </TableCell>
              <TableCell class="text-right">
                <div class="flex items-center justify-center gap-2">
                  <DetailPo :id="item.id" @detailPo="handleDetailPo" />
                  <EditData :id="item.id" @dataEdited="handleDataEdited" />
                  <DeleteData :item="item" @dataDeleted="handleDataDeleted" />
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger as-child>
                        <Button
                          :disabled="downloadingId === item.id"
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
          </TableBody>
        </Table>
      </div>
    </CardContent>
  </Card>
  <div>
    <div class="mt-4 flex float-right">
      <Button class="mr-2" @click="prevPage" :disabled="currentPage === 1">Previous </Button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <Button class="ml-2" @click="nextPage" :disabled="currentPage === totalPages">Next </Button>
    </div>
  </div>
</template>
<style scoped></style>
