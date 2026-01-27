<script setup lang="ts">
import { DownloadCloud, PencilIcon, Trash2Icon } from 'lucide-vue-next'
import { computed, onMounted, ref } from 'vue'
import AddData from './AddData.vue'
import DeleteData from './DeleteData.vue'
import EditData from './EditData.vue'
import DetailSubkon from './DetailSubkon.vue'
import LockKontrak from './LockKontrak.vue'
import { formatDate } from 'date-fns'
import UploadFile from './UploadFile.vue'
import { toast } from '../ui/toast'

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

function formatRupiah(value: number | Ref<number>) {
  const val = typeof value === 'object' ? value.value : value
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val || 0)
}

// get token=====
const accessToken = useCookie('accessToken')
const token = accessToken.value.token

async function fetchData() {
  isLoading.value = true
  try {
    const timestamp = new Date().getTime()
    const response = await fetch(`${baseUrl}/kontrakSubkon`, {
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
  setTimeout(() => {
    fetchData()
  }, 500)
}

function handleDetailSubkon() {
  setTimeout(() => {
    fetchData()
  }, 500)
}

async function handleUploadFiles() {
  await new Promise(resolve => setTimeout(resolve, 500))
  await fetchData()
}

function handleDataLocked() {
  setTimeout(() => {
    fetchData()
  }, 500)
}

const previewOpen = ref(false)
const previewImages = ref([])

async function openPreview(item) {
  try {
    const images = await $fetch(`${baseUrl}/uploadBuktiDp?idSubkon=${item.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })

    previewImages.value = images.map(img => ({
      id: img.id,
      url: img.url, // ini harus URL yang bisa diakses oleh frontend
    }))
    console.log(previewImages.value)
    previewOpen.value = true
  } catch (error) {
    console.error(error)
    toast({
      title: 'Error',
      description: 'Gagal mengambil bukti lunas',
      variant: 'destructive',
    })
  }
}

function handleDataDeleted(deletedItemId) {
  data.value = data.value.filter(item => item.id !== deletedItemId)
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
              <TableHead>Nama Pekerjaan</TableHead>
              <TableHead>Nama Subkon/Kontrak</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Nilai Kontrak</TableHead>
              <TableHead>DP</TableHead>
              <TableHead>Preview DP</TableHead>
              <TableHead>Retensi %</TableHead>
              <TableHead>Keterangan</TableHead>
              <TableHead>Status</TableHead>
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
                {{ item.namaSubkon }}
              </TableCell>
              <TableCell>{{ formatTanggal(item.tanggal) }}</TableCell>

              <TableCell class="font-medium">
                {{ formatRupiah(item.nilaiKontrak) }}
              </TableCell>
              <TableCell class="font-medium">
                {{ formatRupiah(item.nilaiDp) }}
              </TableCell>
              <TableCell class="font-medium">
                <Button
                  v-if="item.statusUploadDp && item.statusUploadDp === 1"
                  size="sm"
                  variant="default"
                  @click="openPreview(item)"
                >
                  Preview
                </Button>
              </TableCell>
              <TableCell class="font-medium">
                {{ item.nilaiRetensi }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.keterangan }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.status }}
              </TableCell>

              <TableCell class="text-right">
                <div class="flex items-center justify-center gap-2">
                  <UploadFile
                    :item="item"
                    @uploadFiles="handleUploadFiles"
                    :disabled="item.statusUploadDp === 1"
                  />
                  <LockKontrak
                    :item="item"
                    :disabled="item.status === 'locked'"
                    @dataLocked="handleDataLocked"
                  />
                  <DetailSubkon :item="item" @detailSubkon="handleDetailSubkon" />
                  <EditData
                    :id="item.id"
                    @dataEdited="handleDataEdited"
                    :disabled="item.status === 'locked'"
                  />
                  <DeleteData
                    :id="item.id"
                    @dataDeleted="handleDataDeleted"
                    :disabled="item.status === 'locked'"
                  />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Dialog v-model:open="previewOpen">
          <DialogContent class="max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Preview Bukti DP</DialogTitle>
            </DialogHeader>

            <div class="flex flex-col gap-4">
              <img
                v-for="img in previewImages"
                :key="img.id"
                :src="img.url"
                class="rounded-lg border shadow"
              />
            </div>

            <DialogFooter>
              <Button @click="previewOpen = false">Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
