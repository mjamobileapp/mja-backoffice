<script setup lang="ts">
import { DownloadCloud, PencilIcon, Trash2Icon } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'
import { formatDate } from '~/lib/utils'
import AddData from './AddData.vue'
import DeleteData from './DeleteData.vue'
import EditData from './EditData.vue'
import ResetDeviceIdData from './ResetDeviceIdData.vue'
import ResetPasswordData from './ResetPasswordData.vue'
import DetailData from './DetailData.vue'

const isLoading = ref(false)
const searchQuery = ref('')
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
  searchFields: ['namaLengkap', 'username', 'noTelp', 'email'],
})

function formatTanggal(tanggal: any) {
  return formatDate(tanggal)
}

async function fetchData() {
  isLoading.value = true
  try {
    const fetchedData = await apiFetch('/api/backoffice/userowner')
    data.value = Array.isArray(fetchedData?.data) ? fetchedData.data : []
  }
  catch (error) {
    console.error('Gagal mengambil data user owner:', error)
    data.value = []
  }
  finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchData()
})

const editItem = ref(null)
function handleDataEdited() {
  setTimeout(() => {
    fetchData()
  }, 500)
}

function formatRupiah(value: number | Ref<number>) {
  const val = typeof value === 'object' ? value.value : value
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val || 0)
}

function handleDataDeleted(deletedItemId: any) {
  data.value = data.value.filter((item: any) => item.id !== deletedItemId)
}

function handleDeviceIdReset() {
  setTimeout(() => {
    fetchData()
  }, 500)
}

function handlePasswordReset() {
  setTimeout(() => {
    fetchData()
  }, 500)
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
              <TableHead class="w-[50px]">
                No
              </TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Nama Lengkap</TableHead>
              <TableHead>No Telpon</TableHead>
              <TableHead>Email</TableHead>
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
                <DetailData :id="item.id" :username="item.username" />
              </TableCell>
              <TableCell class="font-medium">
                {{ item.role }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.namaLengkap }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.noTelp }}
              </TableCell>
              <TableCell>{{ item.email }}</TableCell>
              <TableCell class="text-right">
                <div class="flex items-center justify-center gap-2">
                  <EditData :id="item.id" @data-edited="handleDataEdited" />
                  <DeleteData :item="item" @data-deleted="handleDataDeleted" />
                  <ResetDeviceIdData
                    v-if="item.deviceId"
                    :item="item"
                    @device-id-reset="handleDeviceIdReset"
                  />
                  <ResetPasswordData
                    :item="item"
                    @password-reset="handlePasswordReset"
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
