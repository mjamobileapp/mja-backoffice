<script setup lang="ts">
import NumberFlow from '@number-flow/vue'
import { Activity } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import NumberFlowRp from '~/components/ui/number-flow/NumberFlow.vue'
import CustomChartTooltip from '~/components/dashboard/CustomChartTooltip.vue'
import CustomBarChart from '~/components/dashboard/CustomBarChart.vue'

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

// ==================== STATE ====================
const dataCard = ref({
  totalKnowledge: 0,
  totalMasterCode: 0,
  totalUser: 0,
})

const dataProyekTerbaru = ref([])
const proyekList = ref([])
const selectedProyek = ref(1)

const jumlahProyek = ref(0)
const totalNilaiKontrak = ref(0)
const totalNilaiProyek = ref(0)
const objProyek = ref({})
const dataBarchart = ref<{ name: string; total: number }[]>([])

const searchQuery = ref('')
const accessToken = useCookie('accessToken')
const token = accessToken.value?.token

// ==================== FETCH FUNCTIONS ====================

async function fetchListTopProyek() {
  try {
    const timestamp = new Date().getTime()
    const response = await fetch(`${baseUrl}/topProyek?t=${timestamp}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const fetchedData = await response.json()
    dataProyekTerbaru.value = fetchedData.data || []
  } catch (error) {
    console.error('Gagal mengambil data proyek terbaru:', error)
  }
}

async function fetchDataProyek() {
  try {
    const response = await fetch(`${baseUrl}/proyek`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const fetchedData = await response.json()
    proyekList.value = Array.isArray(fetchedData.data) ? fetchedData.data : []
  } catch (error) {
    console.error('Gagal mengambil data proyek:', error)
    proyekList.value = []
  }
}

async function fetchDataProyekById(idProyek) {
  try {
    const response = await fetch(`${baseUrl}/proyek/${idProyek}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const fetchedData = await response.json()
    objProyek.value = fetchedData.data || {}
  } catch (error) {
    console.error('Gagal mengambil data proyek by id:', error)
    objProyek.value = {}
  }
}

// ✅ Fungsi Barchart yang sudah diperbaiki
async function fetchDataBarchart(idProyek) {
  try {
    const response = await fetch(`${baseUrl}/getDataBarChart/${idProyek}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const result = await response.json()

    if (!result.success) throw new Error(result.message || 'Gagal mengambil data')

    jumlahProyek.value = result.jumlahProyek
    totalNilaiKontrak.value = result.totalNilaiKontrak
    totalNilaiProyek.value = result.totalNilaiProyek

    // ✅ Isi data chart di sini
    dataBarchart.value = Array.isArray(result.data)
      ? result.data.map(item => ({
          name: item.name,
          total: Number(item.total) || 0,
          color: item.color || null,
        }))
      : []
  } catch (error) {
    console.error('Error fetching barchart:', error)
    dataBarchart.value = []
  }
}

// ==================== HANDLER ====================

async function handleSelectProyek(proyekId) {
  selectedProyek.value = proyekId
  await Promise.all([fetchDataBarchart(proyekId), fetchDataProyekById(proyekId)])
}

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

// ==================== FORMATTED VALUE ====================
const formattedValue = computed(() =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    currencyDisplay: 'symbol',
    minimumFractionDigits: 0,
  }).format(objProyek.value?.nilaiKontrak || 0)
)

// ==================== LIFECYCLE ====================
onMounted(async () => {
  await Promise.all([
    fetchDataProyek(),
    fetchListTopProyek(),
    fetchDataProyekById(selectedProyek.value),
    fetchDataBarchart(selectedProyek.value),
  ])
})

// ✅ Optional: gunakan watch supaya otomatis refresh chart kalau selectedProyek berubah
watch(selectedProyek, newId => {
  if (newId) {
    fetchDataBarchart(newId)
    fetchDataProyekById(newId)
  }
})
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
              <NumberFlowRp :value="totalNilaiProyek" />
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
            <CustomBarChart v-if="dataBarchart.length > 0" :data="dataBarchart" />
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
