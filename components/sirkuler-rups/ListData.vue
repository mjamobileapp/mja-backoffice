<script setup lang="ts">
import { DownloadCloud, PencilIcon, Trash2Icon, SheetIcon } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import AddData from './AddData.vue'
import DeleteData from './DeleteData.vue'
import EditData from './EditData.vue'
import UploadData from './UploadFile.vue'
import ListDownload from './ListFile.vue'
import { formatDate } from 'date-fns'

interface SirkulerRupsItem {
  id: number | string
  tglAcara: string
  tglRups: string
  perihal: string
  [key: string]: any
}

function formatTanggal(tanggal: any) {
  return formatDate(tanggal, 'dd/M/yyyy')
}
const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = ref(10)
const data = ref<SirkulerRupsItem[]>([])

function safeIncludes(value: any, query: string) {
  let stringValue = ''

  if (typeof value === 'string' && !isNaN(Date.parse(value))) {
    const date = new Date(value)
    stringValue = date.toLocaleDateString('id-ID') // atau gunakan format lain
    // console.log(stringValue)
  } else {
    stringValue = String(value ?? '')
    // console.log(stringValue)
  }

  return stringValue.toLowerCase().includes(query)
}

const filteredData = computed(() => {
  const query = searchQuery.value.toLowerCase()

  let result = data.value.filter(
    item =>
      safeIncludes(item.tglAcara, query) ||
      safeIncludes(item.tglRups, query) ||
      safeIncludes(item.perihal, query) ||
      safeIncludes(item.createdDate, query)
  )

  // Sort jika diset
  if (sortColumn.value && sortDirection.value) {
    result = result.slice().sort((a, b) => {
      const column = sortColumn.value

      // Khusus tanggal
      if (['tglSurat', 'tglRups', 'createdDate', 'perihal'].includes(column)) {
        const dateA = new Date(a[column])
        const dateB = new Date(b[column])
        return sortDirection.value === 'asc'
          ? dateA.getTime() - dateB.getTime()
          : dateB.getTime() - dateA.getTime()
      }

      // Umum (string)
      const valA = String(a[column] ?? '').toLowerCase()
      const valB = String(b[column] ?? '').toLowerCase()

      if (valA < valB) return sortDirection.value === 'asc' ? -1 : 1
      if (valA > valB) return sortDirection.value === 'asc' ? 1 : -1
      return 0
    })
  }

  return result
})

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

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase
const isLoading = ref(false)

const currentUser = useCookie('currentUser') // diasumsikan cookie bernilai object stringified
const email = computed(() => currentUser.value?.email || 'no-email@example.com')

// get token=====
const accessToken = useCookie('accessToken')
const token = accessToken.value.token
// console.log(token.token)
async function fetchData() {
  isLoading.value = true
  try {
    const timestamp = new Date().getTime()
    const response = await fetch(`${baseUrl}/sirkulerRups?username=${email.value}&t=${timestamp}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const fetchedData = await response.json()

    if (Array.isArray(fetchedData.data)) {
      data.value = fetchedData.data
      // console.log(data.value)
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

const roleUser = ref(null)
const showActionButtons = ref(false)
async function fetchDataAkses() {
  try {
    const response = await fetch(`${baseUrl}/getAksesUser/${email.value}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const fetchedData = await response.json()
    // console.log(fetchedData)
    roleUser.value = fetchedData.namaRole
    showActionButtons.value = roleUser.value !== 'User'
  } catch (error) {
    console.error('Gagal mengambil data:', error)
  }
}

onMounted(() => {
  fetchData()
  fetchDataAkses()
})

function handleDataDeleted(deletedItemId: any) {
  fetchData()
}

async function handleDataFiles() {
  await new Promise(resolve => setTimeout(resolve, 500))
  await fetchData()
}
function handleDataEdited() {
  console.log('Event dataEdited diterima, menunggu 500ms sebelum refresh data...')

  setTimeout(() => {
    console.log('Melakukan fetch data setelah edit...')
    fetchData()
  }, 500)
}

async function handleUploadFiles() {
  await new Promise(resolve => setTimeout(resolve, 500))
  await fetchData()
}

const sortColumn = ref('')
const sortDirection = ref<'asc' | 'desc' | ''>('') // Tambahkan '' untuk reset

function sortBy(column: string) {
  if (sortColumn.value !== column) {
    sortColumn.value = column
    sortDirection.value = 'asc'
  } else {
    if (sortDirection.value === 'asc') {
      sortDirection.value = 'desc'
    } else if (sortDirection.value === 'desc') {
      sortDirection.value = ''
      sortColumn.value = ''
    } else {
      sortDirection.value = 'asc'
    }
  }
}

function exportExcel() {
  fetch(`${baseUrl}/sirkulerRups/exportExcel`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`, // kalau pakai JWT
    },
  })
    .then(res => res.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'Data-RUPS.xlsx'
      document.body.appendChild(a)
      a.click()
      a.remove()
    })
    .catch(err => console.error('Export gagal:', err))
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
      <div class="flex justify-between items-center mb-4">
        <!-- kiri -->
        <AddData @dataAdded="fetchData" />

        <!-- kanan -->
        <Button @click="exportExcel">
          <SheetIcon class="w-4 h-4 mr-2"></SheetIcon> Export Excel
        </Button>
      </div>

      <div v-if="isLoading" class="flex justify-center items-center p-8">
        <div
          class="animate-spin h-8 w-8 border-2 border-primary rounded-full border-t-transparent"
        ></div>
      </div>
      <div v-else class="min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px">
        <Table v-if="data.length > 0">
          <TableHeader>
            <TableRow>
              <TableHead class="w-[100px]"> No </TableHead>
              <TableHead
                @click="sortBy('tglSurat')"
                class="cursor-pointer hover:text-primary transition-colors duration-150"
              >
                Tanggal Surat
                <Icon
                  v-if="sortColumn === 'tglSurat'"
                  :name="
                    sortDirection === 'asc'
                      ? 'i-lucide-chevron-up'
                      : sortDirection === 'desc'
                      ? 'i-lucide-chevron-down'
                      : ''
                  "
                  class="inline-block w-4 h-4 ml-1"
                />
              </TableHead>
              <TableHead
                @click="sortBy('perihal')"
                class="cursor-pointer hover:text-primary transition-colors duration-150"
              >
                Perihal
                <Icon
                  v-if="sortColumn === 'perihal'"
                  :name="
                    sortDirection === 'asc'
                      ? 'i-lucide-chevron-up'
                      : sortDirection === 'desc'
                      ? 'i-lucide-chevron-down'
                      : ''
                  "
                  class="inline-block w-4 h-4 ml-1"
                />
              </TableHead>
              <TableHead
                @click="sortBy('tglRups')"
                class="cursor-pointer hover:text-primary transition-colors duration-150"
              >
                Tanggal RUPS
                <Icon
                  v-if="sortColumn === 'tglRups'"
                  :name="
                    sortDirection === 'asc'
                      ? 'i-lucide-chevron-up'
                      : sortDirection === 'desc'
                      ? 'i-lucide-chevron-down'
                      : ''
                  "
                  class="inline-block w-4 h-4 ml-1"
                />
              </TableHead>

              <TableHead>Download File</TableHead>
              <TableHead
                @click="sortBy('createdDate')"
                class="cursor-pointer hover:text-primary transition-colors duration-150"
              >
                Created Date
                <Icon
                  v-if="sortColumn === 'createdDate'"
                  :name="
                    sortDirection === 'asc'
                      ? 'i-lucide-chevron-up'
                      : sortDirection === 'desc'
                      ? 'i-lucide-chevron-down'
                      : ''
                  "
                  class="inline-block w-4 h-4 ml-1"
                />
              </TableHead>
              <TableHead class="text-center w-[300px]"> Action </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="(item, index) in paginatedData" :key="item.id">
              <TableCell>
                {{ (currentPage - 1) * itemsPerPage + index + 1 }}
              </TableCell>
              <TableCell class="font-medium">
                {{ formatTanggal(item.tglSurat) }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.perihal }}
              </TableCell>
              <TableCell>{{ formatTanggal(item.tglRups) }}</TableCell>

              <TableCell>
                <!-- <div class="flex justify-center"> -->
                <ListDownload :item="item" @dataFiles="handleDataFiles" />
                <!-- </div> -->
              </TableCell>
              <TableCell> {{ formatTanggal(item.createdDate) }} </TableCell>

              <TableCell>
                <div class="flex items-center justify-center gap-2">
                  <EditData v-if="showActionButtons" :id="item.id" @dataEdited="handleDataEdited" />
                  <DeleteData
                    v-if="showActionButtons"
                    :item="item"
                    @dataDeleted="handleDataDeleted"
                  />
                  <UploadData :item="item" @uploadFiles="handleUploadFiles" />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div v-else class="text-center py-8">Tidak ada data tersedia</div>
      </div>
    </CardContent>
  </Card>
  <div v-if="data.length > 0">
    <div class="mt-4 flex float-right">
      <Button class="mr-2" @click="prevPage" :disabled="currentPage === 1">Previous </Button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <Button class="ml-2" @click="nextPage" :disabled="currentPage === totalPages">Next </Button>
    </div>
  </div>
</template>

<style scoped></style>
