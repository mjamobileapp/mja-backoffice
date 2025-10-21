<script setup lang="ts">
import { DownloadCloud, PencilIcon, Trash2Icon } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import AddData from './AddData.vue'
import DeleteData from './DeleteData.vue'
import EditData from './EditData.vue'
import ListDownload from './ListFile.vue'
import { formatDate } from 'date-fns'
import UploadData from './UploadFile.vue'

interface KnowledgeRepoItem {
  id: number | string
  acara: string
  tglAcara: string
  code: string
  direksi: string
  [key: string]: any
}

function formatTanggal(tanggal: any) {
  return formatDate(tanggal, 'dd/M/yyyy')
}
const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = ref(10)
const data = ref<KnowledgeRepoItem[]>([])

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
      safeIncludes(item.acara, query) ||
      safeIncludes(item.tglAcara, query) ||
      safeIncludes(item.code, query) ||
      safeIncludes(item.direksi, query) ||
      safeIncludes(item.createdDate, query) ||
      safeIncludes(item.folderCode, query)
  )

  // Sort jika diset
  if (sortColumn.value && sortDirection.value) {
    result = result.slice().sort((a, b) => {
      const column = sortColumn.value

      // Khusus tanggal
      if (['tglAcara', 'createdDate'].includes(column)) {
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
    const response = await fetch(
      `${baseUrl}/knowledgeRepo?username=${email.value}&t=${timestamp}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

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

onMounted(() => {
  fetchData()
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
      <div v-else class="min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px">
        <Table v-if="data.length > 0">
          <TableHeader>
            <TableRow>
              <TableHead class="w-[100px]"> No </TableHead>
              <TableHead
                @click="sortBy('acara')"
                class="cursor-pointer hover:text-primary transition-colors duration-150"
              >
                Acara
                <Icon
                  v-if="sortColumn === 'acara'"
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
                @click="sortBy('tglAcara')"
                class="cursor-pointer hover:text-primary transition-colors duration-150"
              >
                Tanggal Acara
                <Icon
                  v-if="sortColumn === 'tglAcara'"
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
              <TableHead>Folder Code</TableHead>
              <TableHead
                @click="sortBy('code')"
                class="cursor-pointer hover:text-primary transition-colors duration-150"
              >
                Code
                <Icon
                  v-if="sortColumn === 'code'"
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
                @click="sortBy('direksi')"
                class="cursor-pointer hover:text-primary transition-colors duration-150"
              >
                Direksi
                <Icon
                  v-if="sortColumn === 'direksi'"
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
                {{ item.acara }}
              </TableCell>
              <TableCell>{{ formatTanggal(item.tglAcara) }}</TableCell>
              <TableCell>{{ item.folderCode }}</TableCell>
              <TableCell>{{ item.code }}</TableCell>
              <TableCell>{{ item.direksi }}</TableCell>
              <TableCell>
                <ListDownload :item="item" @dataFiles="handleDataFiles" />
              </TableCell>
              <TableCell> {{ formatTanggal(item.createdDate) }} </TableCell>

              <TableCell>
                <div class="flex items-center justify-center gap-2">
                  <EditData :id="item.id" @dataEdited="handleDataEdited" />
                  <DeleteData :item="item" @dataDeleted="handleDataDeleted" />
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
