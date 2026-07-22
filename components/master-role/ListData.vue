<script setup lang="ts">
import { DownloadCloud, PencilIcon, Trash2Icon } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import AddData from './AddData.vue'
import DeleteData from './DeleteData.vue'
import EditData from './EditData.vue'
import ModalAkses from './ModalAkses.vue'

const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = ref(10)
const data = ref<any[]>([]) // Define the type for fetched data

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase
const isLoading = ref(false)

// get token====================
const accessToken = useCookie<any>('accessToken')
const token = accessToken.value.token
// console.log(token)
async function fetchData() {
  isLoading.value = true
  try {
    const timestamp = new Date().getTime()
    const response = await fetch(`${baseUrl}/api/backoffice/roles`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const fetchedData = await response.json()
    // console.log(fetchedData.data)
    // console.log('Data yang diterima dari server:', fetchedData)
    // console.log(fetchedData.data)
    if (Array.isArray(fetchedData.data)) {
      data.value = fetchedData.data
    }
    else {
      console.error('Data yang diterima bukan array:', fetchedData)
      data.value = []
    }
  }
  catch (error) {
    console.error('Gagal mengambil data:', error)
  }
  finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchData()
})

const filteredData = computed(() => {
  return data.value.filter((item: any) =>
    item.namaRole.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
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
</script>

<template>
  <Card class="w-full">
    <CardHeader>
      <CardTitle>
        <Input v-model="searchQuery" type="text" placeholder="Search..." />
      </CardTitle>
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
              <TableHead class="w-[100px]">
                No
              </TableHead>
              <TableHead>Nama Peran</TableHead>
              <TableHead>Keterangan</TableHead>
              <TableHead>Akses</TableHead>
              <TableHead class="w-[300px] text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="(item, index) in paginatedData" :key="item.id">
              <TableCell>
                {{ index + 1 }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.namaRole }}
              </TableCell>
              <TableCell>{{ item.description }}</TableCell>
              <TableCell>
                <!-- <Button> <DownloadCloud class="w-4 h-4 mr-2" /> Akses </Button> -->
                <ModalAkses :id="item.id" @data-akses="fetchData" />
              </TableCell>
              <TableCell class="text-right">
                <EditData :id="item.id" @data-updated="fetchData" />
                <DeleteData :item="item" @data-deleted="fetchData" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </CardContent>
  </Card>
  <div>
    <div class="float-right mt-4 flex">
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
