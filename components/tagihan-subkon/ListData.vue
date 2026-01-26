<script setup lang="ts">
import { DownloadCloud, PencilIcon, Trash2Icon, Loader2, FileDown } from 'lucide-vue-next'
import { computed, onMounted, ref } from 'vue'
import AddData from './AddData.vue'
import DeleteData from './DeleteData.vue'
import EditData from './EditData.vue'
import LockData from './LockData.vue'
import DetailProgressSubkon from './DetailProgressSubkon.vue'
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
  return data.value.filter(item =>
    item.namaSubkon.toLowerCase().includes(searchQuery.value.toLowerCase())
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
    const response = await fetch(`${baseUrl}/progressSubkon`, {
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

const downloadingId = ref<number | null>(null)
const isDownloading = ref(false)
const downloadPdf = async item => {
  console.log(item)
  try {
    downloadingId.value = item.idProgress
    // console.log(downloadingId.value)
    isDownloading.value = true
    const res = await fetch(`${baseUrl}/progressSubkon/${item.idProgress}/pdf`, {
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
    a.download = `PrgressSubkon_${item.noPenagihan}.pdf`
    a.click()
    URL.revokeObjectURL(url)
  } catch (err) {
    console.error('Download gagal:', err)
    alert('Gagal mengunduh file Progress Subkon!')
  } finally {
    downloadingId.value = null
    isDownloading.value = false
  }
}

const editItem = ref(null)
function handleDataEdited(editedItem) {
  console.log(editItem)
  const index = data.value.findIndex(item => item.id === editedItem.id)
  if (index !== -1) {
    data.value[index] = editedItem
  }
  editItem.value = null
}

function handleDataDeleted(deletedItemId) {
  data.value = data.value.filter(item => item.id !== deletedItemId)
}

function formatRupiah(value: number | Ref<number>) {
  const val = typeof value === 'object' ? value.value : value
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val || 0)
}

const refresh = () => setTimeout(fetchData, 500)

const openEdit = ref(false)
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
              <TableHead>No. Penagihan</TableHead>
              <TableHead>Nama Subkon</TableHead>
              <TableHead>Tanggal Penagihan</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total Progress</TableHead>
              <TableHead class="text-center"> Action </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="(item, index) in paginatedData" :key="item.id">
              <TableCell>
                {{ (currentPage - 1) * itemsPerPage + index + 1 }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.noPenagihan }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.namaSubkon }}
              </TableCell>
              <TableCell class="font-medium">
                {{ formatTanggal(item.tglPenagihan) }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.statusProgress }}
              </TableCell>
              <TableCell class="font-medium">
                {{ formatRupiah(item.totalProgress) }}
              </TableCell>
              <TableCell class="text-right">
                <div class="flex items-center justify-center gap-2">
                  <LockData
                    :item="item"
                    @dataLocked="refresh"
                    :disabled="item.statusProgress === 'Locked'"
                  />
                  <EditData
                    :idProgress="item.idProgress"
                    @dataUpdated="fetchData"
                    :disabled="item.statusProgress !== 'Draft'"
                  />
                  <DetailProgressSubkon :id="item.idProgress" />
                  <DeleteData
                    :item="item"
                    @dataDeleted="fetchData"
                    :disabled="item.statusProgress !== 'Draft'"
                  />
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger as-child>
                        <Button
                          :disabled="
                            Number(item.totalProgress) === 0 || downloadingId === item.idProgress
                          "
                          @click="downloadPdf(item)"
                          size="sm"
                        >
                          <template v-if="downloadingId === item.idProgress">
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
