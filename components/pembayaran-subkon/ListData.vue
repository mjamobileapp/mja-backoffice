<script setup lang="ts">
import { DownloadCloud, PencilIcon, Trash2Icon } from 'lucide-vue-next'
import { computed, onMounted, ref } from 'vue'
import AddData from './AddData.vue'
import DeleteData from './DeleteData.vue'
import EditData from './EditData.vue'
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
      item.namaSubkon.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.noKontrak.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.keterangan.toLowerCase().includes(searchQuery.value.toLowerCase())
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
    const response = await fetch(`${baseUrl}/pembayaranSubkon`, {
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
  console.log('Event dataEdited diterima, menunggu 500ms sebelum refresh data...')

  setTimeout(() => {
    console.log('Melakukan fetch data setelah edit...')
    fetchData()
  }, 500)
}

function formatRupiah(value: number | Ref<number>) {
  const val = typeof value === 'object' ? value.value : value
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val || 0)
}

function handleDataDeleted(deletedItemId) {
  data.value = data.value.filter(item => item.id !== deletedItemId)
}

const previewOpen = ref(false)
const previewImages = ref([])

async function openPreview(item) {
  try {
    const img = await $fetch(`${baseUrl}/getBuktiBayarSubkon?idPembayaran=${item.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })

    // Karena API mengembalikan object {id, url, title},
    // kita bungkus dalam array agar tidak merusak logika v-for di template
    previewImages.value = [
      {
        id: img.id,
        url: img.url,
        title: img.title,
      },
    ]

    previewOpen.value = true
  } catch (error) {
    console.error(error)
    const errorMsg = error.response?._data?.message || 'Gagal mengambil bukti bayar'

    toast({
      title: 'Informasi',
      description: errorMsg,
      variant: 'destructive',
    })
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
              <TableHead>Nama Proyek + Nama Subkon</TableHead>
              <TableHead>No Termin</TableHead>
              <TableHead>Tanggal Pembayaran</TableHead>
              <TableHead>Nilai Progress</TableHead>
              <TableHead>Nilai Tagihan</TableHead>
              <TableHead>Potongan DP</TableHead>
              <TableHead>Nilai Retensi</TableHead>
              <TableHead>Nilai Dibayar</TableHead>
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
                {{ item.namaPekerjaan }} - {{ item.namaSubkon }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.noTermin }}
              </TableCell>
              <TableCell>{{ formatTanggal(item.tanggalPembayaran) }}</TableCell>
              <TableCell class="font-medium">
                {{ formatRupiah(item.nilaiProgress) }}
              </TableCell>

              <TableCell class="font-medium">
                {{ formatRupiah(item.nilaiTagihan) }}
              </TableCell>
              <TableCell class="font-medium">
                {{ formatRupiah(item.potonganDp) }}
              </TableCell>
              <TableCell class="font-medium">
                {{ formatRupiah(item.nilaiRetensi) }}
              </TableCell>
              <TableCell class="font-medium">
                {{ formatRupiah(item.nilaiDibayar) }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.status }}
              </TableCell>

              <TableCell class="text-right">
                <div class="flex items-center justify-center gap-2">
                  <Button size="sm" variant="default" @click="openPreview(item)"> Preview </Button>
                  <!-- <EditData :id="item.id" @dataEdited="handleDataEdited" />
                  <DeleteData :item="item" @dataDeleted="handleDataDeleted" /> -->
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Dialog v-model:open="previewOpen">
          <DialogContent class="max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Preview Bukti Lunas</DialogTitle>
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
