<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AddData from './AddData.vue'
import DeleteData from './DeleteData.vue'
import EditData from './EditData.vue'

const searchQuery = ref('')
const isLoading = ref(false)
const data = ref<any[]>([])

const {
  paginatedData,
  totalPages,
  currentPage,
  itemsPerPage,
  nextPage,
  prevPage,
} = usePagination({
  data,
  searchQuery,
  searchFields: ['nama', 'username', 'namaRole'],
})

async function fetchData() {
  isLoading.value = true
  try {
    const fetchedData = await apiFetch('/api/backoffice/users')
    data.value = Array.isArray(fetchedData?.data) ? fetchedData.data : []
  }
  catch (error) {
    console.error('Gagal mengambil data user:', error)
    data.value = []
  }
  finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchData()
})
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
              <TableHead class="w-[50px]">
                No
              </TableHead>
              <TableHead>Nama</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role Akses</TableHead>
              <TableHead class="w-[300px] text-center">
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
                {{ item.nama }}
              </TableCell>
              <TableCell>{{ item.username }}</TableCell>
              <TableCell>
                {{ item.namaRole }}
              </TableCell>

              <TableCell class="text-center">
                <div class="flex items-center justify-center gap-2">
                  <EditData :id="item.id" @data-updated="fetchData" />
                  <DeleteData :item="item" @data-deleted="fetchData" />
                </div>
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
