<script setup lang="ts">
import { Power } from 'lucide-vue-next'
import { onMounted, ref, watch } from 'vue'

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase
const isLoading = ref(false)

// State data dropdown filter
const listMitra = ref<any[]>([])
const listCabang = ref<any[]>([])

// State pilihan filter yang aktif
const selectedMitraId = ref<number | null>(null)
const selectedCabangId = ref<number | null>(null)

// State data mesin hasil fetch
const dataMesin = ref<any[]>([])

// Mengambil Token dari Cookie
const accessToken = useCookie<any>('accessToken')
const token = accessToken.value?.token

// 1. FETCH DAFTAR MITRA (Dijalankan sekali saat onMounted)
async function fetchAllMitra() {
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/mitra`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    const result = await response.json()
    if (response.ok) {
      listMitra.value = result.data || []
    }
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
    const response = await fetch(`${baseUrl}/api/backoffice/cabang/mitra/${idMitra}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    const result = await response.json()
    if (response.ok) {
      listCabang.value = result.data || []
    }
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
    const response = await fetch(`${baseUrl}/api/backoffice/mesin/list/cabang/${selectedCabangId.value}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      // Jika HTTP status error (404, 500, dll), kosongkan list mesin
      dataMesin.value = []
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()

    if (result.success) {
      dataMesin.value = result.data || []
    }
    else {
      // PERBAIKAN: Jika sukses false (MESIN_NOT_FOUND), kosongkan list mesin agar tidak menimbun data lama
      dataMesin.value = []
      console.log('Info:', result.message || 'Gagal memuat status mesin.')
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

// FUNGSI UTAMA START/STOP MESIN DENGAN POP-UP KONFIRMASI BROWSER
async function toggleStatus(espId: string, jenis: 'dryer' | 'washer') {
  const mesinTarget = dataMesin.value.find(item => item.espId === espId)
  if (!mesinTarget)
    return

  const unitMesin = mesinTarget[jenis]
  if (!unitMesin)
    return

  const isTurningOn = unitMesin.status === 'READY'
  const tindakanTeks = isTurningOn ? 'MENYALAKAN' : 'MENGHENTIKAN'

  const yakin = window.confirm(
    `Konfirmasi Tindakan:\nApakah Anda yakin ingin ${tindakanTeks.toLowerCase()} unit ${jenis} di ${mesinTarget.namaGroupMesin}?`,
  )

  if (!yakin)
    return

  try {
    const targetUrl = isTurningOn
      ? `${baseUrl}/dev/api/transaksi/startmesinbyowner`
      : `${baseUrl}/dev/api/transaksi/stopmesinbyowner`

    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        mesinId: unitMesin.idDb,
        cabangId: selectedCabangId.value, // Menggunakan ID Cabang terpilih dari filter aktif
      }),
    })

    const result = await response.json()

    if (response.ok) {
      fetchMesinList() // Segarkan data mesin IoT
      alert(result.success || `Perintah ${tindakanTeks.toLowerCase()} mesin sukses dijalankan!`)
    }
    else {
      alert(result.message || 'Gagal memproses kontrol ke unit mesin.')
    }
  }
  catch (error) {
    console.error('Gagal kontrol mesin:', error)
    alert('Tidak dapat terhubung ke server kontrol mesin.')
  }
}

onMounted(() => {
  fetchAllMitra()
})
</script>

<template>
  <Card class="w-full">
    <CardHeader class="flex flex-col gap-4 border-b pb-6 lg:flex-row lg:items-center lg:justify-between space-y-0">
      <div>
        <CardTitle class="text-xl font-bold">
          Quick Switch
        </CardTitle>
        <p class="text-sm text-muted-foreground">
          Status Mesin Realtime (Mode Owner)
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
              {{ listCabang.length === 0 ? 'Belum ada cabang' : '-- Pilih Cabang --' }}
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
            <span>ON / READY</span>
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
          <div class="h-full w-[90px] flex flex-col overflow-hidden border border-white/40 rounded-xl bg-white/10">
            <!-- SEKSI DRYER -->
            <div class="flex flex-1 items-center justify-between border-b border-white/30 px-2.5">
              <div class="flex items-center gap-1">
                <span
                  class="h-2 w-2 rounded-full"
                  :class="!mesin.dryer ? 'bg-[#9aa0a6]' : (mesin.dryer.status === 'READY' ? 'bg-[#4caf50]' : 'bg-[#e63946]')"
                />
                <span class="text-[11px] font-bold">Dryer</span>
              </div>
              <button
                :disabled="!mesin.dryer"
                class="h-7 w-7 flex items-center justify-center rounded-lg transition-all active:scale-95 disabled:opacity-40"
                :class="!mesin.dryer ? 'bg-[#9aa0a6]' : (mesin.dryer.status === 'READY' ? 'bg-[#4caf50]' : 'bg-[#e63946]')"
                @click="toggleStatus(mesin.espId, 'dryer')"
              >
                <Power class="h-3.5 w-3.5 text-white" />
              </button>
            </div>

            <!-- SEKSI WASHER -->
            <div class="flex flex-1 items-center justify-between px-2.5">
              <div class="flex items-center gap-1">
                <span
                  class="h-2 w-2 rounded-full"
                  :class="!mesin.washer ? 'bg-[#9aa0a6]' : (mesin.washer.status === 'READY' ? 'bg-[#4caf50]' : 'bg-[#e63946]')"
                />
                <span class="text-[11px] font-bold">Washer</span>
              </div>
              <button
                :disabled="!mesin.washer"
                class="h-7 w-7 flex items-center justify-center rounded-lg transition-all active:scale-95 disabled:opacity-40"
                :class="!mesin.washer ? 'bg-[#9aa0a6]' : (mesin.washer.status === 'READY' ? 'bg-[#4caf50]' : 'bg-[#e63946]')"
                @click="toggleStatus(mesin.espId, 'washer')"
              >
                <Power class="h-3.5 w-3.5 text-white" />
              </button>
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
