<script setup lang="ts">
import { computed, ref } from 'vue'
import AddData from './AddData.vue'
import DeleteData from './DeleteData.vue'
import EditData from './EditData.vue'

const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = ref(10)
const data = ref([]) // Define the type for fetched data

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase
const isLoading = ref(false)

// get token====================
const accessToken = useCookie('accessToken')
const token = accessToken.value.token

async function fetchData() {
  isLoading.value = true
  try {
    const timestamp = new Date().getTime()
    const response = await fetch(`${baseUrl}/users?t=${timestamp}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const fetchedData = await response.json()
    // console.log('Data yang diterima dari server:', fetchedData)
    // console.log(fetchedData.data)
    if (Array.isArray(fetchedData.data)) {
      data.value = fetchedData.data
    } else {
      console.error('Data yang diterima bukan array:', fetchedData)
      data.value = []
    }
  } catch (error) {
    console.error('Gagal mengambil data:', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchData()
})

const filteredData = computed(() => {
  return data.value.filter((item: any) =>
    item.username.toLowerCase().includes(searchQuery.value.toLowerCase())
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
              <TableHead>Nama</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role Akses</TableHead>
              <TableHead class="text-center w-[300px]"> Action </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="(item, index) in paginatedData" :key="item.id">
              <TableCell>
                {{ index + 1 }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.nama }}
              </TableCell>
              <TableCell>{{ item.username }}</TableCell>
              <TableCell>
                {{ item.namaRole }}
              </TableCell>

              <TableCell class="text-center">
                <div class="flex items-center justify-center gap-2">
                  <EditData :id="item.id" @dataUpdated="fetchData" />
                  <DeleteData :item="item" @dataDeleted="fetchData" />
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
