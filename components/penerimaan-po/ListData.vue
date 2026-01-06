<script setup lang="ts">
import {
  DownloadCloud,
  FileDown,
  Loader2,
  LucideTrash,
  PencilIcon,
  Trash2Icon,
  TrashIcon,
} from 'lucide-vue-next'
import { computed, onMounted, ref } from 'vue'
import DetailPo from './DetailPo.vue'
import UploadFile from './UploadFile.vue'
import { formatDate } from 'date-fns'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
const config = useRuntimeConfig()
const baseUrl = config.public.apiBase
const isLoading = ref(false)
// console.log(baseUrl)
const currentPage = ref(1)
const itemsPerPage = ref(10)
const data = ref<any>([]) // Define the type for fetched data

// FILTER STATE ==============================
const searchQuery = ref('')
const filterJenis = ref('') // Cash, Tempo, atau kosong
const filterJatuhTempoStart = ref(null)
const filterJatuhTempoEnd = ref(null)
// FILTER TANGGAL (field: tanggal)
const filterTanggalStart = ref(null)
const filterTanggalEnd = ref(null)

// ===========================================
const filteredData = computed(() => {
  return data.value.filter(item => {
    // ============================
    // SEARCH
    // ============================
    const search = searchQuery.value.toLowerCase()
    const matchesSearch =
      item.namaPekerjaan.toLowerCase().includes(search) || item.noPo.toLowerCase().includes(search)

    // ============================
    // FILTER JENIS PAYMENT
    // ============================
    // const matchesJenis = filterJenis.value === '' || item.jenisPayment === filterJenis.value

    // ============================
    // FILTER TANGGAL (START – END)
    // ============================
    let matchesTanggal = true

    if (filterTanggalStart.value) {
      const start = new Date(filterTanggalStart.value)
      const itemDate = new Date(item.tanggal)
      if (!(itemDate >= start)) matchesTanggal = false
    }

    if (filterTanggalEnd.value) {
      const end = new Date(filterTanggalEnd.value)
      const itemDate = new Date(item.tanggal)
      if (!(itemDate <= end)) matchesTanggal = false
    }

    // ============================
    // FILTER JATUH TEMPO (START – END)
    // ============================
    // let matchesJatuhTempo = true

    // if (filterJatuhTempoStart.value && item.tglJatuhTempo) {
    //   const start = new Date(filterJatuhTempoStart.value)
    //   const itemDate = new Date(item.tglJatuhTempo)
    //   if (!(itemDate >= start)) matchesJatuhTempo = false
    // }

    // if (filterJatuhTempoEnd.value && item.tglJatuhTempo) {
    //   const end = new Date(filterJatuhTempoEnd.value)
    //   const itemDate = new Date(item.tglJatuhTempo)
    //   if (!(itemDate <= end)) matchesJatuhTempo = false
    // }

    // return matchesSearch && matchesJenis && matchesTanggal && matchesJatuhTempo
    return matchesSearch && matchesTanggal
  })
})

function resetFilter() {
  searchQuery.value = ''
  filterJenis.value = ''
  filterTanggalStart.value = null
  filterTanggalEnd.value = null
  filterJatuhTempoStart.value = null
  filterJatuhTempoEnd.value = null
}

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
    const response = await fetch(`${baseUrl}/penerimaanPo`, {
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

const editItem = ref(null)
function handleDataEdited() {
  console.log('Event dataEdited diterima, menunggu 500ms sebelum refresh data...')

  setTimeout(() => {
    console.log('Melakukan fetch data setelah edit...')
    fetchData()
  }, 500)
}
function handleDetailPo() {
  console.log('Event detailPo diterima, menunggu 500ms sebelum refresh data...')

  setTimeout(() => {
    console.log('Melakukan fetch data setelah DetilPo...')
    fetchData()
  }, 500)
}

function formatRupiah(value: number | Ref<number>) {
  const val = typeof value === 'object' ? value.value : value
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val || 0)
}

function handleDataDeleted() {
  setTimeout(() => {
    console.log('Melakukan fetch data setelah delete...')
    fetchData()
  }, 500)
}

async function handleUploadFiles() {
  await new Promise(resolve => setTimeout(resolve, 500))
  await fetchData()
}

const downloadingId = ref<number | null>(null)

const downloadPdf = async item => {
  try {
    downloadingId.value = item.id

    const res = await fetch(`${baseUrl}/penerimaanPo/generatePO/${item.id}/pdf`, {
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
    a.download = `PO_${item.noPo}.pdf`
    a.click()
    URL.revokeObjectURL(url)
  } catch (err) {
    console.error('Download gagal:', err)
    alert('Gagal mengunduh file PO!')
  } finally {
    downloadingId.value = null
  }
}

const previewOpen = ref(false)
const previewImages = ref([])

async function openPreview(item) {
  try {
    const images = await $fetch(`${baseUrl}/getBuktiLunas?idPo=${item.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })

    previewImages.value = images.map(img => ({
      id: img.id,
      url: img.url, // ini harus URL yang bisa diakses oleh frontend
    }))

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
async function openPreviewSuratJalan(item) {
  try {
    const images = await $fetch(`${baseUrl}/getSuratJalan?idPo=${item.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })

    previewImages.value = images.map(img => ({
      id: img.id,
      url: img.url, // ini harus URL yang bisa diakses oleh frontend
    }))

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

const deletingId = ref<number | null>(null)
async function deleteFile(item) {
  console.log(item)
  deletingId.value = item.id
  try {
    const { data, error } = await useFetch(`${baseUrl}/deleteBuktiLunas/${item.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (error.value) {
      throw new Error(error.value.data || 'Gagal menghapus lampiran')
    }

    // return data.value

    setTimeout(() => {
      console.log('Melakukan fetch data setelah Delete File...')
      fetchData()
    }, 500)
  } catch (error) {
    console.error('Delete Error:', err)
    throw err
  } finally {
    deletingId.value = null
  }
}
</script>
<template>
  <Card class="w-full">
    <CardHeader>
      <CardTitle>
        <!-- <Input type="text" v-model="searchQuery" placeholder="Search..." /> -->
      </CardTitle>
    </CardHeader>
    <CardContent>
      <!-- FILTER AREA -->
      <div class="flex items-center gap-4 mb-4">
        <Input v-model="searchQuery" placeholder="Search..." class="w-64" />

        <!-- Filter Tanggal -->
        <Datepicker
          v-model="filterTanggalStart"
          :format="'dd-MM-yyyy'"
          placeholder="Tanggal Start"
        />
        <Datepicker v-model="filterTanggalEnd" :format="'dd-MM-yyyy'" placeholder="Tanggal End" />

        <!-- Filter Jatuh Tempo -->
        <!-- <Datepicker
          v-model="filterJatuhTempoStart"
          :format="'dd-MM-yyyy'"
          placeholder="Jatuh Tempo Start"
        />
        <Datepicker
          v-model="filterJatuhTempoEnd"
          :format="'dd-MM-yyyy'"
          placeholder="Jatuh Tempo End"
        /> -->

        <!-- Filter Jenis Payment -->
        <!-- <select v-model="filterJenis" class="border rounded p-2">
          <option value="">Semua Jenis</option>
          <option value="Tempo">Tempo</option>
          <option value="Cash">Cash</option>
        </select> -->

        <!-- Button Reset -->
        <Button @click="resetFilter" variant="default"> Reset Filter </Button>
      </div>

      <!-- <AddData @dataAdded="fetchData" /> -->
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
              <TableHead>Nama Proyek</TableHead>
              <TableHead>No PO</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Tujuan PO</TableHead>
              <TableHead>Tanggal Pengiriman</TableHead>
              <!-- <TableHead>Jenis Payment</TableHead>
              <TableHead>Tgl Jatuh Tempo</TableHead>
              <TableHead>Status PO</TableHead> -->
              <!-- <TableHead>PPN %</TableHead> -->
              <!-- <TableHead>Grand Total</TableHead> -->
              <TableHead>Status Pengiriman</TableHead>
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
                {{ item.noPo }}
              </TableCell>
              <TableCell>{{ formatTanggal(item.tanggal) }}</TableCell>
              <TableCell class="font-medium">
                {{ item.tujuanPo }}
              </TableCell>
              <TableCell>{{ formatTanggal(item.tglPengiriman) }}</TableCell>
              <!-- <TableCell class="font-medium">
                <Button
                  v-if="item.jenisPayment"
                  size="sm"
                  :variant="item.jenisPayment.toLowerCase() === 'cash' ? 'default' : 'destructive'"
                  :class="[
                    'text-white',
                    item.jenisPayment.toLowerCase() === 'cash'
                      ? 'bg-blue-600 hover:bg-green-700'
                      : '',
                    item.jenisPayment.toLowerCase() === 'tempo'
                      ? 'bg-orange-600 hover:bg-red-700'
                      : '',
                  ]"
                >
                  {{ item.jenisPayment }}
                </Button>

                <span v-else>-</span>
              </TableCell> -->

              <!-- <TableCell>
                {{ item.tglJatuhTempo ? formatTanggal(item.tglJatuhTempo) : '-' }}
              </TableCell> -->
              <!-- <TableCell class="font-medium flex items-center gap-2">
                <Button
                  v-if="item.statusPo"
                  size="sm"
                  :variant="item.statusPo.toLowerCase() === 'lunas' ? 'default' : 'destructive'"
                  :class="[
                    'text-white',
                    item.statusPo.toLowerCase() === 'lunas'
                      ? 'bg-green-600 hover:bg-green-700'
                      : '',
                    item.statusPo.toLowerCase() === 'pending' ? 'bg-red-600 hover:bg-red-700' : '',
                  ]"
                >
                  {{ item.statusPo }}
                </Button>

                <Button
                  v-if="item.statusPo && item.statusPo.toLowerCase() === 'lunas'"
                  size="sm"
                  variant="default"
                  @click="openPreview(item)"
                >
                  Preview
                </Button>
              </TableCell> -->

              <!-- <TableCell class="font-medium">
                {{ item.ppn }}
              </TableCell> -->
              <!-- <TableCell class="font-medium">
                {{ formatRupiah(item.grandTotal ?? 0) }}
              </TableCell> -->
              <TableCell class="font-medium flex gap-2">
                {{ item.statusPenerimaan }}
                <Button
                  v-if="
                    item.statusPenerimaan && item.statusPenerimaan?.toLowerCase() === 'delivered'
                  "
                  size="sm"
                  variant="default"
                  @click="openPreviewSuratJalan(item)"
                >
                  Preview
                </Button>
              </TableCell>
              <TableCell class="text-right">
                <div class="flex items-center justify-center gap-2">
                  <DetailPo :id="item.id" @detailPo="handleDetailPo" />
                  <UploadFile
                    :item="item"
                    @uploadFiles="handleUploadFiles"
                    :disabled="item.statusPenerimaan?.toLowerCase() === 'delivered'"
                  />
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
