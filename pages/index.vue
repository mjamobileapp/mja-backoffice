<script setup lang="ts">
import NumberFlow from '@number-flow/vue'
import { Activity, CreditCard, DollarSign, Users } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import NumberFlowRp from '~/components/ui/number-flow/NumberFlow.vue'

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const dataCard = ref({
  totalKnowledge: 0,
  totalMasterCode: 0,
  totalUser: 0,
})

const dataProyekTerbaru = ref([])

// get token====================
const accessToken = useCookie('accessToken')
const token = accessToken.value.token

onMounted(() => {
  // dataCard.value = {
  //   totalRevenue: 45231.89,
  //   totalRevenueDesc: 20.1 / 100,
  //   subscriptions: 2350,
  //   subscriptionsDesc: 180.5 / 100,
  //   sales: 12234,
  //   salesDesc: 45 / 100,
  //   activeNow: 89,
  //   activeNowDesc: 201,
  //   nilaiProyek: 12000000,
  // }

  fetchDataProyek()
  fetchListTopProyek()
  fetchDataBarchart(selectedProyek.value)
  fetchDataProyekById(selectedProyek.value)
  // console.log(selectedProyek.value)
  // fetchData()
})

const proyekList = ref([])
const selectedProyek = ref(1)
async function fetchListTopProyek() {
  try {
    const timestamp = new Date().getTime()
    const response = await fetch(`${baseUrl}/topProyek?t=${timestamp}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const fetchedData = await response.json()
    // console.log('Data yang diterima dari server:', fetchedData.data)
    // const result = fetchedData.data
    dataProyekTerbaru.value = fetchedData.data
  } catch (error) {
    console.error('Gagal mengambil data:', error)
  }
}

async function fetchDataProyek() {
  try {
    const response = await fetch(`${baseUrl}/proyek`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const fetchedData = await response.json()
    // console.log('Data yang diterima dari server:', fetchedData.data)

    if (Array.isArray(fetchedData.data)) {
      proyekList.value = fetchedData.data
    } else {
      console.error('Data yang diterima bukan array:', fetchedData)
      proyekList.value = []
    }
  } catch (error) {
    console.error('Gagal mengambil data:', error)
    proyekList.value = []
  }
}

const objProyek = ref({})
async function fetchDataProyekById(idProyek) {
  try {
    const response = await fetch(`${baseUrl}/proyek/${idProyek}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const fetchedData = await response.json()
    // console.log('Data yang diterima dari server:', fetchedData.data)
    objProyek.value = fetchedData.data
  } catch (error) {
    console.error('Gagal mengambil data:', error)
    proyekList.value = []
  }
}

async function handleSelectProyek(proyekId: string) {
  selectedProyek.value = proyekId
  fetchDataBarchart(selectedProyek.value)
  fetchDataProyekById(selectedProyek.value)
}

const searchQuery = ref('')

function onSearchInput(value: string) {
  searchQuery.value = value
}

const filteredProyekList = computed(() => {
  if (!searchQuery.value) return proyekList.value
  return proyekList.value.filter(
    item =>
      item.namaPekerjaan.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.lokasi?.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const jumlahProyek = ref(0)
const totalNilaiKontrak = ref(0)
async function fetchDataBarchart(idProyek) {
  try {
    const response = await fetch(`${baseUrl}/getDataBarChart/${idProyek}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const result = await response.json()
    // console.log(result)
    if (!result.success) throw new Error(result.message || 'Gagal mengambil data')
    jumlahProyek.value = result.jumlahProyek
    totalNilaiKontrak.value = result.totalNilaiKontrak
    // console.log('Jumlah Proyek:' + jumlahProyek.value)
  } catch (error) {
    console.error('Error fetching barchart:', error)
    dataBarchart.value = []
  }
}

const formattedValue = computed(() =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    currencyDisplay: 'symbol',
    minimumFractionDigits: 0,
  }).format(objProyek.nilaiKontrak)
)
// definePageMeta({
//   middleware: 'auth',
// })
</script>

<template>
  <div class="w-full flex flex-col gap-4">
    <div class="flex flex-wrap items-center justify-between gap-2">
      <h2 class="text-2xl font-bold tracking-tight">Dashboard</h2>

      <div class="flex items-center space-x-2 w-full md:w-[400px]">
        <Popover v-model:open="open">
          <PopoverTrigger as-child>
            <Button
              variant="outline"
              role="combobox"
              :aria-expanded="open"
              class="justify-between w-full"
            >
              {{
                selectedProyek
                  ? proyekList.find(item => item.id === selectedProyek)?.namaPekerjaan
                  : 'Select Proyek...'
              }}

              <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent class="p-0">
            <Command>
              <CommandInput placeholder="Search Proyek..." />
              <CommandEmpty>No Proyek found.</CommandEmpty>
              <CommandList>
                <CommandGroup>
                  <CommandItem
                    v-for="item in proyekList"
                    :key="item.id"
                    :value="item.namaPekerjaan"
                    @select="handleSelectProyek(item.id)"
                  >
                    <Check
                      :class="cn('mr-2 h-4 w-4', value === item.id ? 'opacity-100' : 'opacity-0')"
                    />
                    {{ item.namaPekerjaan }}
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
    <main class="flex flex-1 flex-col gap-4 md:gap-8">
      <div class="grid gap-4 lg:grid-cols-3 md:grid-cols-2 md:gap-8">
        <Card>
          <CardHeader class="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle class="text-sm font-medium"> Jumlah Semua Proyek </CardTitle>
            <Activity class="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">
              <NumberFlow :value="jumlahProyek" />
            </div>
            <!-- <p class="text-xs text-muted-foreground">terkini</p> -->
          </CardContent>
        </Card>
        <Card>
          <CardHeader class="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle class="text-sm font-medium">Total Nilai Kontrak Seluruh Proyek </CardTitle>
            <Activity class="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">
              <NumberFlowRp :value="totalNilaiKontrak" />
            </div>
            <!-- <p class="text-xs text-muted-foreground">terkini</p> -->
          </CardContent>
        </Card>
        <Card>
          <CardHeader class="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle class="text-sm font-medium"> Nilai Proyek Saat Ini </CardTitle>
            <Activity class="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">
              <NumberFlowRp :value="objProyek.nilaiKontrak" />
            </div>
            <!-- <p class="text-xs text-muted-foreground">terkini</p> -->
          </CardContent>
        </Card>
      </div>
      <div class="grid gap-4 lg:grid-cols-2 xl:grid-cols-3 md:gap-8">
        <Card class="xl:col-span-2">
          <CardHeader>
            <CardTitle>Monitoring Project</CardTitle>
          </CardHeader>
          <CardContent class="pl-2">
            <DashboardOverview :idProyek="selectedProyek" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Proyek Baru</CardTitle>
          </CardHeader>
          <CardContent class="grid gap-8">
            <div
              v-for="itemProyek in dataProyekTerbaru"
              :key="itemProyek.namaPekerjaan"
              class="flex items-center gap-4"
            >
              <Avatar class="hidden h-9 w-9 sm:flex">
                <AvatarFallback>{{
                  itemProyek.namaPekerjaan
                    .split(' ')
                    .map(n => n[0])
                    .join('')
                }}</AvatarFallback>
              </Avatar>
              <div class="grid gap-1">
                <p class="text-sm font-medium leading-none">
                  {{ itemProyek.namaPekerjaan }}
                </p>
                <p class="text-sm text-muted-foreground">
                  {{ itemProyek.lokasi }}
                </p>
              </div>
              <div class="ml-auto font-medium">
                <NumberFlowRp :value="itemProyek.nilaiKontrak" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  </div>
</template>
