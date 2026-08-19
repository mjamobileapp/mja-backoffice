<script setup lang="ts">
import { ref } from 'vue'
import AddData from './AddData.vue'
import DeleteData from './DeleteData.vue'
import EditData from './EditData.vue'

const isLoading = ref(false)
const searchQuery = ref('')
const data = ref<any[]>([]) // Define the type for fetched data

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
  searchFields: ['namaMenu', 'menuParent', 'menuSubParent', 'noUrut'],
})

async function fetchData() {
  isLoading.value = true
  try {
    const fetchedData = await apiFetch('/api/backoffice/menus')
    data.value = Array.isArray(fetchedData?.data) ? fetchedData.data : []
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
              <TableHead>Nama Menu</TableHead>
              <TableHead>Menu Header</TableHead>
              <TableHead>Sub Menu</TableHead>
              <TableHead>No Urut</TableHead>
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
                {{ item.namaMenu }}
              </TableCell>
              <TableCell>{{ item.menuParent }}</TableCell>
              <TableCell>
                {{ item.menuSubParent }}
              </TableCell>
              <TableCell>
                {{ item.noUrut }}
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
