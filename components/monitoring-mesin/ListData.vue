<script setup lang="ts">
import { Loader2, Power } from 'lucide-vue-next'
import { onMounted, ref, watch } from 'vue'
import { toast } from '~/components/ui/toast'

const isLoading = ref(false)

// State data dropdown filter
const listMitra = ref<any[]>([])
const listCabang = ref<any[]>([])

// State pilihan filter yang aktif
const selectedMitraId = ref<number | null>(null)
const selectedCabangId = ref<number | null>(null)

// State data mesin hasil fetch
const dataMesin = ref<any[]>([])
const isConfirmOpen = ref(false)
const loadingToggleKey = ref<string | null>(null)
const pendingToggle = ref<{
  espId: string
  jenis: 'dryer' | 'washer'
  mesinTarget: any
  unitMesin: any
  isTurningOn: boolean
} | null>(null)

// 1. FETCH DAFTAR MITRA (Dijalankan sekali saat onMounted)
async function fetchAllMitra() {
  try {
    const result = await apiFetch('/api/backoffice/mitra')
    listMitra.value = result?.data || []
  }
  catch (error) {
    console.error('Gagal mengambil data mitra:', error)
  }
}

// 2. FETCH DAFTAR CABANG BERDASARKAN ID MITRA
async function fetchCabangByMitra(idMitra: number) {
  listCabang.value = []
  selectedCabangId.value = null
  dataMesin.value = [] // Reset tampilan mesin lama

  try {
    const result = await apiFetch(`/api/backoffice/cabang/mitra/${idMitra}`)
    listCabang.value = result?.data || []
  }
  catch (error) {
    console.error('Gagal mengambil data cabang:', error)
  }
}

// 3. FETCH DAFTAR MESIN BERDASARKAN ID CABANG TERPILIH
async function fetchMesinList() {
  if (!selectedCabangId.value)
    return

  isLoading.value = true
  try {
    const result = await apiFetch(`/api/backoffice/mesin/list/cabang/${selectedCabangId.value}`)

    if (result.success) {
      dataMesin.value = result.data || []
    }
    else {
      // PERBAIKAN: Jika sukses false (MESIN_NOT_FOUND), kosongkan list mesin agar tidak menimbun data lama
      dataMesin.value = []
    }
  }
  catch (error) {
    console.error('Fetch Mesin Error:', error)
    // PERBAIKAN: Jika terjadi error jaringan, pastikan list mesin juga bersih
    dataMesin.value = []
  }
  finally {
    isLoading.value = false
  }
}
// WATCHER: Memantau perubahan pilihan Dropdown Filter
watch(selectedMitraId, (newMitraId) => {
  if (newMitraId) {
    fetchCabangByMitra(newMitraId)
  }
})

watch(selectedCabangId, (newCabangId) => {
  if (newCabangId) {
    fetchMesinList()
  }
})

// Membuka konfirmasi sebelum mengirim perintah start/stop ke mesin.
function toggleStatus(espId: string, jenis: 'dryer' | 'washer') {
  const mesinTarget = dataMesin.value.find(item => item.espId === espId)
  if (!mesinTarget)
    return

  const unitMesin = mesinTarget[jenis]
  if (!unitMesin)
    return

  pendingToggle.value = {
    espId,
    jenis,
    mesinTarget,
    unitMesin,
    isTurningOn: unitMesin.status === 'READY',
  }
  isConfirmOpen.value = true
}

// Menjalankan perintah setelah user mengonfirmasi melalui AlertDialog.
async function executeToggleStatus() {
  const pending = pendingToggle.value
  if (!pending)
    return

  isConfirmOpen.value = false
  loadingToggleKey.value = `${pending.espId}:${pending.jenis}`

  const { unitMesin, isTurningOn } = pending
  const tindakanTeks = isTurningOn ? 'MENYALAKAN' : 'MENGHENTIKAN'

  try {
    const targetUrl = isTurningOn
      ? '/api/transaksi/startmesinbybackoffice'
      : '/api/transaksi/stopmesinbybackoffice'

    const result = await apiFetch(targetUrl, {
      method: 'POST',
      body: {
        mesinId: unitMesin.idDb,
        idMitra: selectedMitraId.value, // Menggunakan ID Mitra terpilih dari filter aktif
        cabangId: selectedCabangId.value, // Menggunakan ID Cabang terpilih dari filter aktif
      },
    })

    fetchMesinList() // Segarkan data mesin IoT

    if (result.success) {
      toast({
        title: 'Berhasil',
        description: result.message || `Perintah ${tindakanTeks.toLowerCase()} mesin sukses dijalankan!`,
      })
    }
    else {
      toast({
        title: 'Gagal',
        description: result.message || `Perintah ${tindakanTeks.toLowerCase()} mesin gagal dijalankan.`,
        variant: 'destructive',
      })
    }
  }
  catch (error: any) {
    console.error('Gagal kontrol mesin:', error)
    toast({
      title: 'Gagal',
      description: error?.data?.message || error?.message || 'Tidak dapat terhubung ke server kontrol mesin.',
      variant: 'destructive',
    })
  }
  finally {
    loadingToggleKey.value = null
  }
}

const pendingMachineLabel = computed(() => {
  if (!pendingToggle.value)
    return 'mesin'

  return pendingToggle.value.jenis === 'dryer' ? 'Dryer' : 'Washer'
})

const pendingActionLabel = computed(() => pendingToggle.value?.isTurningOn ? 'menyalakan' : 'menghentikan')

function getPowerTooltip(unit: any, jenis: 'dryer' | 'washer') {
  const label = jenis === 'dryer' ? 'Dryer' : 'Washer'

  if (!unit)
    return `${label} tidak tersedia`

  if (unit.status === 'OFFLINE')
    return `${label} sedang Offline`

  return unit.status === 'READY' ? `Nyalakan ${label}` : `Matikan ${label}`
}

function isMachineControlDisabled(unit: any) {
  return !unit || unit.status === 'OFFLINE'
}

function isToggleLoading(espId: string, jenis: 'dryer' | 'washer') {
  return loadingToggleKey.value === `${espId}:${jenis}`
}

function getMachineStatusColor(unit: any) {
  if (!unit)
    return 'bg-[#9aa0a6]'

  if (unit.status === 'READY')
    return 'bg-[#e63946]'

  if (unit.status === 'IN_USE')
    return 'bg-[#4caf50]'

  return 'bg-[#9aa0a6]'
}

onMounted(() => {
  fetchAllMitra()
})
</script>

<template>
  <AlertDialog v-model:open="isConfirmOpen">
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          Konfirmasi {{ pendingToggle?.isTurningOn ? 'Nyalakan' : 'Matikan' }} Mesin
        </AlertDialogTitle>
        <AlertDialogDescription>
          Apakah Anda yakin ingin {{ pendingActionLabel }} unit {{ pendingMachineLabel }}
          di {{ pendingToggle?.mesinTarget?.namaGroupMesin || 'lokasi ini' }}?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel @click="pendingToggle = null">
          Cancel
        </AlertDialogCancel>
        <AlertDialogAction @click="executeToggleStatus">
          {{ pendingToggle?.isTurningOn ? 'Nyalakan' : 'Matikan' }}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>

  <Card class="w-full">
    <CardHeader class="flex flex-col gap-4 border-b pb-6 lg:flex-row lg:items-center lg:justify-between space-y-0">
      <div>
        <CardTitle class="text-xl font-bold">
          Quick Switch
        </CardTitle>
        <p class="text-sm text-muted-foreground">
          Status Mesin Realtime
        </p>
      </div>

      <!-- AREA FILTER BERJENJANG & INDIKATOR STATUS -->
      <div class="flex flex-wrap items-center gap-4">
        <!-- SELECT MITRA -->
        <div class="flex flex-col gap-1">
          <label class="text-[11px] text-muted-foreground font-bold uppercase">Pilih Mitra</label>
          <select
            v-model="selectedMitraId"
            class="h-9 w-[200px] border border-input rounded-md bg-background px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option :value="null" disabled selected>
              -- Pilih Mitra --
            </option>
            <option v-for="mitra in listMitra" :key="mitra.id" :value="mitra.id">
              {{ mitra.namaMitra }}
            </option>
          </select>
        </div>

        <!-- SELECT CABANG -->
        <div class="flex flex-col gap-1">
          <label class="text-[11px] text-muted-foreground font-bold uppercase">Pilih Cabang</label>
          <select
            v-model="selectedCabangId"
            :disabled="!selectedMitraId || listCabang.length === 0"
            class="h-9 w-[200px] border border-input rounded-md bg-background px-3 py-1 text-sm shadow-sm disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option :value="null" disabled selected>
              {{ listCabang.length === 0 ? 'Pilih Mitra dahulu' : '-- Pilih Cabang --' }}
            </option>
            <option v-for="cabang in listCabang" :key="cabang.id" :value="cabang.id">
              {{ cabang.namaCabang }}
            </option>
          </select>
        </div>

        <!-- LEGENDA BADGE -->
        <div class="mt-5 h-9 flex items-center gap-4 rounded-full bg-primary px-4 text-xs text-primary-foreground font-semibold">
          <div class="flex items-center gap-1.5">
            <span class="h-2.5 w-2.5 rounded-full bg-[#e63946]" />
            <span>OFF</span>
          </div>
          <div class="flex items-center gap-1.5">
            <span class="h-2.5 w-2.5 rounded-full bg-[#4caf50]" />
            <span>ON</span>
          </div>
        </div>
      </div>
    </CardHeader>

    <CardContent class="pt-6">
      <!-- PANDUAN PENGGUNAAN AWAL -->
      <div v-if="!selectedMitraId" class="flex items-center justify-center border-2 rounded-xl border-dashed p-12 text-sm text-muted-foreground">
        Silakan tentukan Mitra terlebih dahulu untuk memulai sinkronisasi kontrol mesin.
      </div>

      <div v-else-if="selectedMitraId && !selectedCabangId" class="flex items-center justify-center border-2 rounded-xl border-dashed p-12 text-sm text-muted-foreground">
        Silakan pilih Cabang untuk memuat daftar perangkat saklar laundry.
      </div>

      <!-- LOADER INDICATOR -->
      <div v-else-if="isLoading" class="flex flex-col items-center justify-center gap-2 p-12">
        <div class="h-8 w-8 animate-spin border-2 border-primary border-t-transparent rounded-full" />
        <span class="text-sm text-primary font-medium">Sinkronisasi status mesin IoT...</span>
      </div>

      <!-- EMPTY STATE MESIN -->
      <div v-else-if="dataMesin.length === 0" class="flex items-center justify-center border-2 rounded-xl border-dashed p-12 text-sm text-muted-foreground">
        Tidak ada mesin yang terdaftar atau aktif di lokasi cabang ini.
      </div>

      <!-- GRID KARTU MESIN LAUNDRY -->
      <div v-else class="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
        <div
          v-for="mesin in dataMesin"
          :key="mesin.espId"
          class="h-[130px] flex items-center justify-between rounded-2xl bg-[#4361ee] p-4 text-white shadow-md"
        >
          <!-- Sisi Kiri: Identitas Nomor & Nama -->
          <div class="flex flex-col justify-center pl-2">
            <span class="text-5xl font-black leading-none">{{ mesin.nomorUrut }}</span>
            <span class="mt-1 text-sm font-medium italic opacity-90">{{ mesin.namaGroupMesin }}</span>
          </div>

          <!-- Sisi Kanan: Kontrol Saklar (Dryer & Washer) -->
          <div class="h-full w-[136px] flex flex-col overflow-hidden border border-white/40 rounded-xl bg-white/10">
            <!-- SEKSI DRYER -->
            <div class="flex flex-1 items-center justify-between border-b border-white/30 px-3">
              <div class="min-w-0 flex items-center gap-1.5">
                <span
                  class="h-2 w-2 rounded-full"
                  :class="getMachineStatusColor(mesin.dryer)"
                />
                <span class="truncate text-xs font-bold">Dryer</span>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger as-child>
                    <span class="inline-flex">
                      <button
                        :disabled="isMachineControlDisabled(mesin.dryer) || isToggleLoading(mesin.espId, 'dryer')"
                        :aria-label="getPowerTooltip(mesin.dryer, 'dryer')"
                        class="h-9 w-9 flex shrink-0 items-center justify-center rounded-xl shadow-sm transition-all active:scale-95 disabled:opacity-40"
                        :class="getMachineStatusColor(mesin.dryer)"
                        @click="toggleStatus(mesin.espId, 'dryer')"
                      >
                        <Loader2 v-if="isToggleLoading(mesin.espId, 'dryer')" class="h-4 w-4 animate-spin" />
                        <Power v-else class="h-4 w-4 text-white" :stroke-width="2.5" />
                      </button>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{{ getPowerTooltip(mesin.dryer, 'dryer') }}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <!-- SEKSI WASHER -->
            <div class="flex flex-1 items-center justify-between px-3">
              <div class="min-w-0 flex items-center gap-1.5">
                <span
                  class="h-2 w-2 rounded-full"
                  :class="getMachineStatusColor(mesin.washer)"
                />
                <span class="truncate text-xs font-bold">Washer</span>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger as-child>
                    <span class="inline-flex">
                      <button
                        :disabled="isMachineControlDisabled(mesin.washer) || isToggleLoading(mesin.espId, 'washer')"
                        :aria-label="getPowerTooltip(mesin.washer, 'washer')"
                        class="h-9 w-9 flex shrink-0 items-center justify-center rounded-xl shadow-sm transition-all active:scale-95 disabled:opacity-40"
                        :class="getMachineStatusColor(mesin.washer)"
                        @click="toggleStatus(mesin.espId, 'washer')"
                      >
                        <Loader2 v-if="isToggleLoading(mesin.espId, 'washer')" class="h-4 w-4 animate-spin" />
                        <Power v-else class="h-4 w-4 text-white" :stroke-width="2.5" />
                      </button>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{{ getPowerTooltip(mesin.washer, 'washer') }}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<style scoped>
button {
  cursor: pointer;
}
button:disabled {
  cursor: not-allowed;
}
select {
  cursor: pointer;
}
</style>
