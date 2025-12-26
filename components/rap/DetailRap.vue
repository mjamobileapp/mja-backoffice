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
import { PlusSquareIcon, ChevronsUpDown, Check, Loader2, Trash2 } from 'lucide-vue-next'
import { format as formatDate } from 'date-fns'
import { cn } from '@/lib/utils'

const props = defineProps<{ id: number }>()
const emit = defineEmits(['detailRap'])

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const isDialogOpen = ref(false)
const isLoadingHeader = ref(false)
const isLoadingDetail = ref(false)

async function openDialog() {
  isDialogOpen.value = true
  fetchHeaderRap()
  fetchDetailRap()
}

function closeDialog() {
  isDialogOpen.value = false
}

// 🔹 Header RAP State
const headerRap = reactive({
  idRap: 0,
  noRap: '',
  namaRap: '',
  tanggal: '',
})

// Cookies & Auth
const accessToken = useCookie('accessToken')
const token = accessToken.value?.token

// ===================
// FETCH DATA
// ===================
async function fetchHeaderRap() {
  isLoadingHeader.value = true
  try {
    const response = await fetch(`${baseUrl}/rap/${props.id}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    })
    const fetchedData = await response.json()
    const data = fetchedData.data[0] || fetchedData.data

    Object.assign(headerRap, {
      idRap: data.id_rap || data.id,
      noRap: data.noRap,
      namaRap: data.namaRap,
      tanggal: data.tanggal ? formatDate(new Date(data.tanggal), 'dd/MM/yyyy') : '-',
    })
  } catch (err) {
    toast({ title: 'Error', description: 'Gagal mengambil header RAP', variant: 'destructive' })
  } finally {
    isLoadingHeader.value = false
  }
}

const dataDetail = ref([
  { idBarang: 0, item: '', ukuran: '', banyak: 0, satuan: '', harga: 0, total: 0, refHarga: 0 },
])

async function fetchDetailRap() {
  isLoadingDetail.value = true
  try {
    const response = await fetch(`${baseUrl}/detailRap?idRap=${props.id}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    })
    const fetchedData = await response.json()

    if (fetchedData.data && fetchedData.data.length > 0) {
      dataDetail.value = fetchedData.data
    } else {
      dataDetail.value = [
        {
          idBarang: 0,
          item: '',
          ukuran: '',
          banyak: 0,
          satuan: '',
          harga: 0,
          total: 0,
          refHarga: 0,
        },
      ]
    }
  } catch (err) {
    toast({ title: 'Error', description: 'Gagal mengambil Detail RAP', variant: 'destructive' })
  } finally {
    isLoadingDetail.value = false
  }
}

// ===================
// MASTER BARANG
// ===================
const masterBarang = ref([])
const searchQuery = ref('')
const openPopover = ref<{ [key: number]: boolean }>({})

async function fetchMasterBarang() {
  try {
    const res = await fetch(`${baseUrl}/masterReferensiBarang`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const json = await res.json()
    masterBarang.value = json.data || []
  } catch (err) {
    console.error('Gagal fetch master barang:', err)
  }
}

onMounted(() => {
  fetchMasterBarang()
})

const filteredBarang = computed(() => {
  if (!searchQuery.value) return masterBarang.value
  return masterBarang.value.filter(b =>
    b.namaBarang?.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

// ===================
// LOGIC TABLE
// ===================
function addRow() {
  dataDetail.value.push({
    idBarang: 0,
    item: '',
    ukuran: '',
    banyak: 0,
    satuan: '',
    harga: 0,
    total: 0,
    refHarga: 0,
  })
}

function removeRow(index: number) {
  if (dataDetail.value.length > 1) dataDetail.value.splice(index, 1)
}

function calculateTotal(index: number) {
  const row = dataDetail.value[index]
  row.total = (Number(row.banyak) || 0) * (Number(row.harga) || 0)
}

function handleBarangSelect(index: number, barang: any) {
  const row = dataDetail.value[index]
  row.idBarang = barang.id
  row.item = barang.namaBarang
  row.ukuran = barang.spesifikasi
  row.satuan = barang.unit
  row.refHarga = barang.harga
  row.harga = barang.harga
  calculateTotal(index)
  openPopover.value[index] = false
}

const grandTotal = computed(() =>
  dataDetail.value.reduce((sum, row) => sum + (Number(row.total) || 0), 0)
)

const isValid = computed(() => dataDetail.value.some(d => d.item && Number(d.banyak) > 0))

// ===================
// SUBMIT
// ===================
const isSubmitting = ref(false)
const currentUser = useCookie('currentUser')

async function handleSubmit() {
  isSubmitting.value = true
  const payload = {
    idRap: headerRap.idRap,
    dataDetail: dataDetail.value.filter(d => d.item && Number(d.banyak) > 0),
    createdBy: currentUser.value?.username || 'admin',
  }

  // console.log(JSON.stringify(payload))
  try {
    const response = await fetch(`${baseUrl}/detailRap`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })

    if (response.ok) {
      toast({ title: 'Success', description: 'Rincian RAP berhasil diperbarui.' })
      emit('detailRap', payload)
      closeDialog()
    } else {
      throw new Error()
    }
  } catch (err) {
    toast({ title: 'Error', description: 'Gagal menyimpan rincian.', variant: 'destructive' })
  } finally {
    isSubmitting.value = false
  }
}

function formatRupiah(val: number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val || 0)
}
</script>

<template>
  <Dialog :open="isDialogOpen" @openChange="isDialogOpen = $event">
    <DialogTrigger as-child>
      <Button size="sm" @click="openDialog">
        <PlusSquareIcon class="w-4 h-4" />
      </Button>
    </DialogTrigger>

    <DialogContent class="sm:max-w-[95vw] h-[90vh] flex flex-col p-0">
      <DialogHeader class="p-6 border-b">
        <DialogTitle>Rincian Item RAP</DialogTitle>
      </DialogHeader>

      <div class="flex-1 overflow-y-auto p-6 space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg border">
          <div>
            <p class="text-xs text-muted-foreground uppercase font-bold">No. RAP</p>
            <p class="font-medium">{{ headerRap.noRap || '-' }}</p>
          </div>
          <div>
            <p class="text-xs text-muted-foreground uppercase font-bold">Nama RAP</p>
            <p class="font-medium">{{ headerRap.namaRap || '-' }}</p>
          </div>
          <div>
            <p class="text-xs text-muted-foreground uppercase font-bold">Tanggal</p>
            <p class="font-medium">{{ headerRap.tanggal }}</p>
          </div>
        </div>

        <div class="rounded-md border overflow-hidden">
          <table class="w-full text-sm">
            <thead class="bg-muted">
              <tr>
                <th class="p-3 text-left w-12">No</th>
                <th class="p-3 text-left">Item / Material</th>
                <th class="p-3 text-left">Spesifikasi</th>
                <th class="p-3 text-left w-24">Qty</th>
                <th class="p-3 text-left w-24">Satuan</th>
                <th class="p-3 text-left w-40">Harga Satuan</th>
                <th class="p-3 text-left w-44">Total Anggaran</th>
                <th class="p-3 text-center w-12"></th>
              </tr>
            </thead>
            <tbody class="divide-y">
              <tr v-for="(row, i) in dataDetail" :key="i" class="hover:bg-muted/30">
                <td class="p-3">{{ i + 1 }}</td>

                <td class="p-3">
                  <Popover v-model:open="openPopover[i]">
                    <PopoverTrigger as-child>
                      <Button variant="outline" class="w-full justify-between font-normal">
                        {{ row.item || 'Pilih Material...' }}
                        <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent class="p-0 w-[300px]">
                      <div class="p-2 border-b">
                        <Input v-model="searchQuery" placeholder="Cari material..." class="h-8" />
                      </div>
                      <div class="max-h-60 overflow-y-auto">
                        <div
                          v-for="barang in filteredBarang"
                          :key="barang.id"
                          class="p-2 hover:bg-muted cursor-pointer flex items-center"
                          @click="handleBarangSelect(i, barang)"
                        >
                          <Check
                            :class="
                              cn(
                                'mr-2 h-4 w-4',
                                row.idBarang === barang.id ? 'opacity-100' : 'opacity-0'
                              )
                            "
                          />
                          <div>
                            <p class="font-medium">{{ barang.namaBarang }}</p>
                            <p class="text-xs text-muted-foreground">{{ barang.spesifikasi }}</p>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </td>

                <td class="p-3 text-muted-foreground">{{ row.ukuran || '-' }}</td>
                <td class="p-3">
                  <Input type="number" v-model="row.banyak" @input="calculateTotal(i)" />
                </td>
                <td class="p-3 text-muted-foreground">{{ row.satuan || '-' }}</td>
                <!-- <td class="p-3">
                  <Input type="number" v-model="row.harga" @input="calculateTotal(i)" />
                  <p class="text-[10px] text-muted-foreground mt-1">
                    Ref: {{ formatRupiah(row.refHarga) }}
                  </p>
                </td> -->
                <td class="p-3">
                  <div class="font-bold">{{ formatRupiah(row.harga) }}</div>
                </td>
                <td class="p-3">
                  <div class="font-bold">{{ formatRupiah(row.total) }}</div>
                </td>
                <td class="p-3 text-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    @click="removeRow(i)"
                    :disabled="dataDetail.length === 1"
                  >
                    <Trash2 class="w-4 h-4 text-destructive" />
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- Ringkasan Total -->
          <div class="flex flex-col items-end p-4 bg-gray-50 border-t text-sm">
            <div class="flex justify-between w-64 border-t pt-2 mt-1">
              <span class="font-bold text-primary">Total Anggaran:</span>
              <span class="font-bold text-green-600">{{ formatRupiah(grandTotal) }}</span>
            </div>
          </div>
        </div>

        <Button @click="addRow" class="w-full border-dashed"> + Tambah Baris Anggaran </Button>
      </div>

      <div
        class="p-6 border-t bg-muted/20 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <div class="text-lg">
          &nbsp;
          <!-- Total Anggaran: <span class="font-bold text-primary">{{ formatRupiah(grandTotal) }}</span> -->
        </div>
        <div class="flex gap-2">
          <Button variant="secondary" @click="closeDialog">Batal</Button>
          <Button @click="handleSubmit" :disabled="isSubmitting || !isValid">
            <Loader2 v-if="isSubmitting" class="w-4 h-4 mr-2 animate-spin" />
            Simpan Rincian RAP
          </Button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
