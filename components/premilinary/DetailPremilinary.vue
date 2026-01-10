<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '~/components/ui/toast'
import { PlusSquareIcon, Loader2, Trash2 } from 'lucide-vue-next'
import { format } from 'date-fns'

/* ===============================
   PROPS & EMIT
================================ */
const props = defineProps<{ id: number }>()
const emit = defineEmits(['updated'])

/* ===============================
   CONFIG
================================ */
const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const isDialogOpen = ref(false)
const isLoadingHeader = ref(false)
const isLoadingDetail = ref(false)
const isSubmitting = ref(false)

/* ===============================
   AUTH
================================ */
const accessToken = useCookie('accessToken')
const token = accessToken.value?.token
const currentUser = useCookie('currentUser')

/* ===============================
   HEADER PREMILINARY
================================ */
const header = reactive({
  id: 0,
  namaPekerjaan: '',
  noKontrak: '',
  tanggal: '',
})

async function fetchHeader() {
  isLoadingHeader.value = true
  try {
    const res = await fetch(`${baseUrl}/premilinary/${props.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const json = await res.json()
    const data = json.data

    header.id = data.id
    header.namaPekerjaan = data.namaPekerjaan
    header.noKontrak = data.noKontrak
    header.tanggal = data.tanggal ? format(new Date(data.tanggal), 'dd/MM/yyyy') : '-'
  } catch {
    toast({
      title: 'Error',
      description: 'Gagal mengambil header premilinary',
      variant: 'destructive',
    })
  } finally {
    isLoadingHeader.value = false
  }
}

/* ===============================
   DETAIL STATE
================================ */
const dataDetail = ref<{ item: string; keterangan?: string; harga: number }[]>([
  { item: '', keterangan: '', harga: 0 },
])

async function fetchDetail() {
  isLoadingDetail.value = true
  try {
    const res = await fetch(`${baseUrl}/detailPremilinary?idPremilinary=${props.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const json = await res.json()

    dataDetail.value =
      Array.isArray(json.data) && json.data.length > 0
        ? json.data.map((d: any) => ({
            item: d.item,
            keterangan: d.keterangan,
            harga: d.harga,
          }))
        : [{ item: '', keterangan: '', harga: 0 }]
  } catch {
    toast({ title: 'Error', description: 'Gagal mengambil detail', variant: 'destructive' })
  } finally {
    isLoadingDetail.value = false
  }
}

/* ===============================
   DIALOG HANDLER
================================ */
async function openDialog() {
  isDialogOpen.value = true
  await fetchHeader()
  await fetchDetail()
}

function closeDialog() {
  isDialogOpen.value = false
}

/* ===============================
   TABLE LOGIC
================================ */
function addRow() {
  dataDetail.value.push({ item: '', keterangan: '', harga: 0 })
}

function removeRow(index: number) {
  if (dataDetail.value.length > 1) dataDetail.value.splice(index, 1)
}

const grandTotal = computed(() =>
  dataDetail.value.reduce((sum, d) => sum + (Number(d.harga) || 0), 0)
)

const isValid = computed(() => dataDetail.value.some(d => d.item && Number(d.harga) > 0))

/* ===============================
   SUBMIT
================================ */
async function handleSubmit() {
  isSubmitting.value = true

  const payload = {
    idPremilinary: props.id,
    createdBy: currentUser.value?.username || 'admin',
    dataDetail: dataDetail.value.filter(d => d.item && Number(d.harga) > 0),
  }

  console.log(JSON.stringify(payload))
  try {
    const res = await fetch(`${baseUrl}/detailPremilinary`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) throw new Error()

    toast({ title: 'Success', description: 'Detail premilinary berhasil disimpan' })
    emit('updated')
    closeDialog()
  } catch {
    toast({ title: 'Error', description: 'Gagal menyimpan detail', variant: 'destructive' })
  } finally {
    isSubmitting.value = false
  }
}

/* ===============================
   FORMAT
================================ */
function formatRupiah(val: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(val || 0)
}
</script>

<template>
  <Dialog :open="isDialogOpen" @openChange="isDialogOpen = $event">
    <DialogTrigger as-child>
      <Button size="sm" @click="openDialog">
        <PlusSquareIcon class="w-4 h-4" />
      </Button>
    </DialogTrigger>

    <DialogContent class="sm:max-w-[90vw] h-[85vh] flex flex-col p-0">
      <DialogHeader class="p-6 border-b">
        <DialogTitle>Rincian Premilinary</DialogTitle>
      </DialogHeader>

      <div class="flex-1 overflow-y-auto p-6 space-y-6">
        <!-- HEADER INFO -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg border">
          <div>
            <p class="text-xs font-bold text-muted-foreground">PROYEK</p>
            <p class="font-medium">{{ header.namaPekerjaan }}</p>
          </div>
          <div>
            <p class="text-xs font-bold text-muted-foreground">NO KONTRAK</p>
            <p class="font-medium">{{ header.noKontrak }}</p>
          </div>
          <div>
            <p class="text-xs font-bold text-muted-foreground">TANGGAL</p>
            <p class="font-medium">{{ header.tanggal }}</p>
          </div>
        </div>

        <!-- TABLE -->
        <div class="rounded-md border overflow-hidden">
          <table class="w-full text-sm">
            <thead class="bg-muted">
              <tr>
                <th class="p-3 w-12">No</th>
                <th class="p-3">Item</th>
                <th class="p-3">Keterangan</th>
                <th class="p-3 w-48">Harga</th>
                <th class="p-3 w-12"></th>
              </tr>
            </thead>
            <tbody class="divide-y">
              <tr v-for="(row, i) in dataDetail" :key="i">
                <td class="p-3">{{ i + 1 }}</td>
                <td class="p-3">
                  <Input v-model="row.item" placeholder="Contoh: Akomodasi" />
                </td>
                <td class="p-3">
                  <Textarea v-model="row.keterangan" rows="1" placeholder="Opsional" />
                </td>
                <td class="p-3">
                  <Input type="number" class="text-right" v-model="row.harga" />
                  <p class="text-xs text-gray-400 mt-0.5 text-right">
                    {{ formatRupiah(row.harga) }}
                  </p>
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

          <div class="flex justify-end p-4 bg-muted/30 border-t">
            <div class="text-lg font-bold">Total: {{ formatRupiah(grandTotal) }}</div>
          </div>
        </div>

        <Button variant="outline" class="w-full" @click="addRow"> + Tambah Baris </Button>
      </div>

      <DialogFooter class="p-6 border-t flex justify-between">
        <Button variant="secondary" @click="closeDialog">Batal</Button>
        <Button :disabled="isSubmitting || !isValid" @click="handleSubmit">
          <Loader2 v-if="isSubmitting" class="w-4 h-4 mr-2 animate-spin" />
          Simpan Detail
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
