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
const emit = defineEmits(['detailSubkon'])

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const isDialogOpen = ref(false)
function openDialog() {
  isDialogOpen.value = true
  fetchData()
  fetchDataDetailProgressSubkon()
}
function closeDialog() {
  isDialogOpen.value = false
}

// Header PO
const headerProgressSubkon = reactive({
  idSubkon: 0,
  idProgress: 0,
  namaSubkon: '',
  tglPenagihan: '',
  noPenagihan: '',
  totalProgress: 0,
})

// cookies
const accessToken = useCookie('accessToken')
const token = accessToken.value?.token

// ===================
// FETCH DATA
// ===================
async function fetchData() {
  try {
    const response = await fetch(`${baseUrl}/progressSubkon/${props.id}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const fetchedData = await response.json()

    // console.log(JSON.stringify(fetchedData.data.noPenagihan))
    Object.assign(headerProgressSubkon, {
      idSubkon: fetchedData.data?.idSubkon ?? fetchedData.data?.idSubkon ?? '',
      idProgress: fetchedData.data?.idProgress ?? fetchedData.data?.idProgress ?? '',
      namaSubkon: fetchedData.data?.namaSubkon ?? fetchedData.data?.namaSubkon ?? '',
      noPenagihan: fetchedData.data?.noPenagihan ?? fetchedData.data?.noPenagihan ?? '',
      totalProgress: fetchedData.data?.totalProgress ?? fetchedData.data?.totalProgress ?? '',
      tglPenagihan: fetchedData.data?.tglPenagihan
        ? formatDate(new Date(fetchedData.data.tglPenagihan), 'yyyy-MM-dd')
        : '',
    })
  } catch (err) {
    console.error('Gagal fetch Subkon:', err)
    toast({ title: 'Error', description: 'Gagal mengambil header Subkon', variant: 'destructive' })
  }
}

const dataDetail = ref([{ item: '', volume: 0, volumeProgress: 0, bobotProgress: 0 }])

async function fetchDataDetailProgressSubkon() {
  try {
    const response = await fetch(`${baseUrl}/detailProgressSubkon?idProgress=${props.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })

    if (!response.ok) throw new Error(`HTTP ${response.status}`)

    const fetchedData = await response.json()

    dataDetail.value = fetchedData.data || []
  } catch (err) {
    console.error(err)
    toast({
      title: 'Error',
      description: 'Gagal mengambil Detail Progress Subkon',
      variant: 'destructive',
    })
  }
}

const currentUser = useCookie('currentUser')

// ===================
// Util
// ===================
function formatRupiah(value: number | Ref<number>) {
  const val = typeof value === 'object' ? value.value : value
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val || 0)
}

function normalizeNumber(val: any) {
  if (val === null || val === undefined) return 0
  return Number(String(val).replace(',', '.')) || 0
}
</script>

<template>
  <Dialog :open="isDialogOpen" @openChange="isDialogOpen = $event">
    <DialogTrigger as-child>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button size="sm" @click="openDialog"><PlusSquareIcon class="w-4 h-4" /></Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Detail Data</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </DialogTrigger>

    <DialogContent
      class="sm:max-w-[90vw] w-full max-h-[90vh] flex flex-col overflow-hidden [&>button]:hidden"
    >
      <DialogHeader class="border-b pb-2 shrink-0">
        <DialogTitle>Detail Prgress Subkon</DialogTitle>
      </DialogHeader>
      <form id="poForm" class="flex-1 overflow-y-auto p-4 space-y-6" @submit.prevent="handleSubmit">
        <!-- Header -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="text-sm font-medium text-gray-600">Nama Subkon</label>
            <Input v-model="headerProgressSubkon.idProgress" class="hidden" />
            <Input v-model="headerProgressSubkon.namaSubkon" disabled class="bg-gray-50" />
          </div>
          <div>
            <label class="text-sm font-medium text-gray-600">Tanggal</label>
            <Input v-model="headerProgressSubkon.tglPenagihan" disabled class="bg-gray-50" />
          </div>
          <div>
            <label class="text-sm font-medium text-gray-600">No. Penagihan</label>
            <Input v-model="headerProgressSubkon.noPenagihan" disabled class="bg-gray-50" />
          </div>
        </div>

        <!-- Table -->
        <div v-if="dataDetail.length > 0" class="border rounded-xl overflow-hidden shadow-sm">
          <table class="w-full text-sm table-auto">
            <thead class="bg-gray-50 border-b">
              <tr>
                <th class="p-3 text-left font-semibold w-[5%]">No</th>
                <th class="p-3 text-left font-semibold w-[25%]">Item Pekerjaan</th>
                <th class="p-3 text-left font-semibold w-[10%]">Vol. Kontrak</th>
                <th class="p-3 text-center font-semibold w-[8%]">Vol. Progress</th>
                <th class="p-3 text-center font-semibold w-[7%]">Bobot Progress %</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(field, idx) in dataDetail"
                :key="idx"
                class="border-b hover:bg-gray-50 transition-colors"
              >
                <td class="p-3 text-center">{{ idx + 1 }}</td>

                <td class="p-3 font-medium">
                  {{ field.item }}
                </td>

                <td class="p-3">
                  {{ Number(field.volume || 0) }}
                </td>
                <td class="p-3 text-center">
                  {{ field.volumeProgress }}
                </td>
                <td class="p-3 text-center">
                  {{ field.bobotProgress }}
                </td>
              </tr>
            </tbody>
          </table>
          <!-- Ringkasan Total -->
          <div class="flex flex-col items-end p-4 bg-gray-50 border-t text-sm">
            <div class="flex justify-between w-64 border-t pt-2 mt-1">
              <span>Total</span>
              <span class="font-bold text-green-600">{{
                formatRupiah(headerProgressSubkon.totalProgress)
              }}</span>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <DialogFooter class="border-t pt-3 mt-2 shrink-0 flex justify-between items-center">
          <DialogClose as-child>
            <Button type="button" variant="secondary" @click="closeDialog">Close</Button>
          </DialogClose>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
