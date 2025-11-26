<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { toast } from '~/components/ui/toast'
import { PlusSquareIcon } from 'lucide-vue-next'
import { format as formatDate } from 'date-fns'

const props = defineProps<{ id: number }>()
const emit = defineEmits(['detailAhs'])

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const isDialogOpen = ref(false)
function openDialog() {
  isDialogOpen.value = true
  fetchData()
  fetchDatadetailAhs()
}
function closeDialog() {
  isDialogOpen.value = false
}

// Header PO
const headerAhs = reactive({
  idAhs: 0,
  kodeAhs: '',
  namaAhs: '',
  satuan: '',
  harga: 0, // default 11%
})

// cookies
const accessToken = useCookie('accessToken')
const token = accessToken.value?.token

// ===================
// FETCH DATA
// ===================
async function fetchData() {
  try {
    const response = await fetch(`${baseUrl}/ahs/${props.id}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const fetchedData = await response.json()

    Object.assign(headerAhs, {
      idAhs: fetchedData.data?.idAhs ?? fetchedData.data?.id ?? '',
      kodeAhs: fetchedData.data?.kodeAhs ?? fetchedData.data?.kode_ahs ?? '',
      namaAhs: fetchedData.data?.namaAhs ?? fetchedData.data?.nama_ahs ?? '',
      satuan: fetchedData.data?.satuan ?? fetchedData.data?.satuan ?? '',
    })
  } catch (err) {
    console.error('Gagal fetch PO:', err)
    toast({ title: 'Error', description: 'Gagal mengambil header PO', variant: 'destructive' })
  }
}

const dataDetail = ref([
  { item: '', ukuran: '', banyak: 0, satuan: '', harga: 0, total: 0, refHarga: 0, idItem: 0 },
])

async function fetchDatadetailAhs() {
  try {
    const response = await fetch(`${baseUrl}/detailAhs?idAhs=${props.id}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const fetchedData = await response.json()
    dataDetail.value = fetchedData.data?.length
      ? fetchedData.data
      : [{ item: '', ukuran: '', banyak: 0, satuan: '', harga: 0, total: 0, refHarga: 0 }]
  } catch (err) {
    console.error('Gagal fetch Detail AHS:', err)
    toast({ title: 'Error', description: 'Gagal mengambil Detail PO', variant: 'destructive' })
  }
}

const masterItemAhs = ref<
  { namaItem: string; spesifikasi: string; unit: string; harga: number; id: number }[]
>([])

async function fetchItem() {
  try {
    const res = await fetch(`${baseUrl}/getItemAhs`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const json = await res.json()
    // console.log('Master Barang Response:', json.data)
    masterItemAhs.value = json.data || []
    // console.log('barang variabel', masterItemAhs.value)
  } catch (err) {
    console.error('Gagal fetch master item AHS:', err)
    toast({
      title: 'Error',
      description: 'Gagal mengambil data master item AHS',
      variant: 'destructive',
    })
  }
}

onMounted(() => {
  fetchItem()
})

// ===================
// Table Dinamis
// ===================
function addRow() {
  dataDetail.value.push({
    idItem: 0,
    item: '',
    ukuran: '',
    banyak: 0,
    satuan: '',
    harga: 0,
    total: 0,
    refHarga: 0,
  })
}

function removeRow(index: number, ev?: Event) {
  ev?.preventDefault()
  if (dataDetail.value.length > 1) dataDetail.value.splice(index, 1)
}

function calculateTotal(index: number) {
  const row = dataDetail.value[index]
  const banyak = Number(row.banyak) || 0
  const harga = Number(row.harga) || 0
  row.total = banyak * harga
}

// validasi harga
function handleHargaChange(index: number, val: number) {
  const row = dataDetail.value[index]
  if (val > row.refHarga) {
    toast({
      title: 'Harga Melebihi Batas',
      description: `Harga tidak boleh melebihi harga referensi (${formatRupiah(row.refHarga)})`,
      variant: 'destructive',
    })
    row.harga = row.refHarga
  } else {
    row.harga = val
  }
  calculateTotal(index)
}

// ===================
// Perhitungan
// ===================
const subtotal = computed(() =>
  dataDetail.value.reduce((sum, row) => sum + (Number(row.total) || 0), 0)
)
// const totalPpn = computed(() => (subtotal.value * Number(headerAhs.ppn)) / 100)
// const grandTotal = computed(() => subtotal.value + totalPpn.value)
const isValid = computed(() =>
  dataDetail.value.some(d => d.item && Number(d.banyak) > 0 && Number(d.harga) > 0)
)

const currentUser = useCookie('currentUser')
const username = computed(() => currentUser.value?.username || 'no-username@example.com')

const openPopover = ref<{ [key: number]: boolean }>({})

function handleBarangSelect(index: number, barang: any) {
  const row = dataDetail.value[index]
  row.idItem = barang.id
  row.item = barang.namaItem
  row.ukuran = barang.spesifikasi
  row.satuan = barang.unit
  row.refHarga = barang.harga
  row.harga = barang.harga
  calculateTotal(index)
  openPopover.value[index] = false
}

// ===================
// SUBMIT
// ===================
const isLoading = ref(false)
async function handleSubmit() {
  isLoading.value = true
  if (!isValid.value) {
    toast({
      title: 'Data belum lengkap',
      description: 'Isi minimal 1 baris dengan item, banyak, dan harga sebelum menyimpan.',
      variant: 'destructive',
    })
    return
  }

  const payload = {
    idAhs: headerAhs.idAhs,
    dataDetail: dataDetail.value
      .filter(d => d.item && Number(d.banyak) > 0 && Number(d.harga) > 0)
      .map(d => ({
        idItem: d.idItem,
        item: d.item,
        ukuran: d.ukuran,
        banyak: Number(d.banyak),
        satuan: d.satuan,
        harga: Number(d.harga),
        total: Number(d.total),
      })),
    subtotal: subtotal.value,
    // grandTotal: grandTotal.value,
    createdBy: username.value,
  }

  // console.log(JSON.stringify(payload))

  const response = await fetch(`${baseUrl}/detailAhs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  })

  if (response.ok) {
    toast({ title: 'Success', description: 'Data berhasil disimpan.' })
    isLoading.value = false
    emit('detailAhs', payload)
    closeDialog()
  } else {
    toast({ title: 'Error', description: 'Gagal menyimpan data. Silakan coba lagi.' })
  }
}

// ===================
// Util
// ===================
function formatRupiah(value: number | Ref<number>) {
  const val = typeof value === 'object' ? value.value : value
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val || 0)
}

const searchQuery = ref('')

const filteredBarang = computed(() => {
  if (!searchQuery.value) return masterItemAhs.value
  // console.log(searchQuery.value)
  return masterItemAhs.value.filter(b =>
    b.namaItem?.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

watch(searchQuery, v => {
  console.log('searchQuery berubah:', v)
})
</script>

<template>
  <Dialog :open="isDialogOpen" @openChange="isDialogOpen = $event">
    <DialogTrigger as-child>
      <Button size="sm" @click="openDialog"><PlusSquareIcon class="w-4 h-4" /></Button>
    </DialogTrigger>

    <DialogContent class="sm:max-w-[90vw] w-full max-h-[90vh] flex flex-col overflow-hidden">
      <DialogHeader class="border-b pb-2 shrink-0">
        <DialogTitle>Detail Analisa Harga Satuan (AHS)</DialogTitle>
      </DialogHeader>
      <form id="poForm" class="flex-1 overflow-y-auto p-4 space-y-6" @submit.prevent="handleSubmit">
        <!-- Header -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="text-sm font-medium text-gray-600">Kode. AHS</label>
            <Input v-model="headerAhs.idAhs" class="hidden" />
            <Input v-model="headerAhs.kodeAhs" disabled class="bg-gray-50" />
          </div>
          <div>
            <label class="text-sm font-medium text-gray-600">Nama AHS</label>
            <Input v-model="headerAhs.namaAhs" disabled class="bg-gray-50" />
          </div>
          <!-- <div>
            <label class="text-sm font-medium text-gray-600">Harga</label>
            <Input type="number" v-model="headerAhs.ppn" disabled class="bg-white" />
          </div>
          <div>
            <label class="text-sm font-medium text-gray-600">No. Telepon</label>
            <Input v-model="headerAhs.noTelepon" disabled class="bg-gray-50" />
          </div> -->
        </div>

        <!-- Table -->
        <div class="border rounded-xl overflow-hidden shadow-sm">
          <table class="min-w-full text-sm">
            <thead class="bg-gray-100 text-gray-700">
              <tr>
                <th class="px-3 py-2 text-left w-12">No</th>
                <th class="px-3 py-2 text-left">Item</th>
                <th class="px-3 py-2 text-left">Ukuran / Type</th>
                <th class="px-3 py-2 text-left w-24">Banyak</th>
                <th class="px-3 py-2 text-left w-24">Satuan</th>
                <th class="px-3 py-2 text-left w-32">Ref. Harga</th>
                <th class="px-3 py-2 text-left w-32">Harga</th>
                <th class="px-3 py-2 text-left">Total</th>
                <th class="px-3 py-2 text-center w-12">🗑</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, i) in dataDetail"
                :key="i"
                class="border-t hover:bg-gray-50 transition"
              >
                <td class="px-3 py-2">{{ i + 1 }}</td>

                <!-- Pilih Item -->
                <td class="px-3 py-2">
                  <Popover
                    v-model:open="openPopover[i]"
                    @update:open="
                      val => {
                        openPopover[i] = val
                        if (val) searchQuery = ''
                      }
                    "
                  >
                    <PopoverTrigger as-child>
                      <Button
                        variant="outline"
                        role="combobox"
                        :aria-expanded="openPopover[i]"
                        class="w-full justify-between"
                      >
                        {{ row.item || 'Pilih Item...' }}
                        <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>

                    <PopoverContent class="p-0 w-[300px]">
                      <div class="border-b p-2">
                        <input
                          v-model="searchQuery"
                          placeholder="Cari barang..."
                          class="w-full border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-200"
                        />
                      </div>

                      <div class="max-h-[200px] overflow-auto">
                        <div
                          v-for="barang in filteredBarang"
                          :key="barang.namaItem"
                          class="px-3 py-1 hover:bg-gray-100 cursor-pointer flex items-center text-sm"
                          @click="handleBarangSelect(i, barang)"
                        >
                          <Check
                            :class="
                              cn(
                                'mr-2 h-4 w-4 text-green-600',
                                row.item === barang.namaItem ? 'opacity-100' : 'opacity-0'
                              )
                            "
                          />
                          {{ barang.namaItem }}
                        </div>

                        <div
                          v-if="filteredBarang.length === 0"
                          class="p-2 text-gray-400 text-sm text-center"
                        >
                          Item tidak ditemukan.
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                  <Input type="number" :modelValue="row.idItem" class="hidden" />
                </td>

                <td class="px-3 py-2"><Input v-model="row.ukuran" disabled /></td>

                <td class="px-3 py-2">
                  <Input
                    type="number"
                    :modelValue="row.banyak"
                    @update:modelValue="
                      val => {
                        row.banyak = val
                        calculateTotal(i)
                      }
                    "
                  />
                </td>

                <td class="px-3 py-2"><Input v-model="row.satuan" disabled /></td>

                <td class="px-3 py-2">
                  <Input :modelValue="row.refHarga" disabled />
                  <p class="text-xs text-gray-400 mt-0.5">{{ formatRupiah(row.refHarga) }}</p>
                </td>

                <td class="px-3 py-2">
                  <Input
                    type="number"
                    :modelValue="row.harga"
                    @update:modelValue="val => handleHargaChange(i, val)"
                  />
                  <p class="text-xs text-gray-400 mt-0.5">{{ formatRupiah(row.harga) }}</p>
                </td>

                <td class="px-3 py-2">
                  <Input :modelValue="row.total" disabled class="bg-gray-50" />
                  <p class="text-xs text-gray-400 mt-0.5 font-semibold">
                    {{ formatRupiah(row.total) }}
                  </p>
                </td>

                <td class="px-3 py-2 text-center">
                  <button
                    type="button"
                    class="text-red-500 hover:text-red-700"
                    @click="removeRow(i, $event)"
                  >
                    ✕
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Ringkasan Total -->
          <div class="flex flex-col items-end p-4 bg-gray-50 border-t text-sm">
            <div class="flex justify-between w-64">
              <span>Total:</span>
              <span class="font-bold text-green-600">{{ formatRupiah(subtotal) }}</span>
            </div>
            <!-- <div class="flex justify-between w-64 border-t pt-2 mt-1">
              <span>Total Akhir:</span>
              <span class="font-bold text-green-600">{{ formatRupiah(grandTotal) }}</span>
            </div> -->
          </div>
        </div>

        <!-- Add Row -->
        <div class="flex justify-between items-center">
          <Button type="button" variant="outline" @click="addRow">+ Tambah Baris</Button>
        </div>

        <!-- Footer -->
        <DialogFooter class="border-t pt-3 mt-2 shrink-0 flex justify-between items-center">
          <DialogClose as-child>
            <Button type="button" variant="secondary" @click="closeDialog">Close</Button>
          </DialogClose>

          <!-- Tombol ini TETAP bagian dari form -->
          <Button type="submit" form="poForm" :disabled="isLoading || !isValid">
            <span v-if="!isLoading">Simpan</span>
            <span v-else class="flex items-center gap-2">
              <svg
                class="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 018 8h-4l3.5 3.5L20 12h-4a8 8 0 01-8 8v-4l-3.5 3.5L8 20v-4a8 8 0 01-8-8z"
                />
              </svg>
              Menyimpan...
            </span>
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
