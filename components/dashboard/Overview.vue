<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useRuntimeConfig } from '#app' // jika kamu pakai Nuxt 3
import CustomChartTooltip from './CustomChartTooltip.vue'

// Props untuk idProyek (supaya bisa dipakai dinamis)
const props = defineProps({
  idProyek: {
    type: [String, Number],
    required: true,
  },
})

console.log(props.idProyek)

// get token====================
const accessToken = useCookie('accessToken')
const token = accessToken.value.token

// Reaktif data chart
const dataBarchart = ref<{ name: string; total: number }[]>([])

// Ambil base URL dari runtime config (Nuxt) atau bisa juga langsung string
const config = useRuntimeConfig()
const baseUrl = config.public.apiBase || 'http://localhost:4000'

// Fungsi ambil data dari API
async function fetchDataBarchart() {
  try {
    const response = await fetch(`${baseUrl}/getDataBarChart/${props.idProyek}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const result = await response.json()

    if (!result.success) throw new Error(result.message || 'Gagal mengambil data')

    // isi data ke chart
    dataBarchart.value = result.data.map((item: any) => ({
      name: item.name,
      total: Number(item.total) || 0,
    }))
  } catch (error) {
    console.error('Error fetching barchart:', error)
    dataBarchart.value = []
  }
}

// Panggil ketika komponen mount atau idProyek berubah
onMounted(fetchDataBarchart)
watch(() => props.idProyek, fetchDataBarchart)
</script>

<template>
  <div class="w-full">
    <BarChart
      v-if="dataBarchart.length > 0"
      :data="dataBarchart"
      :categories="['total']"
      index="name"
      :rounded-corners="8"
      :y-formatter="
        (tick, i) => {
          return typeof tick === 'number'
            ? `Rp ${new Intl.NumberFormat('id-ID').format(tick).toString()}`
            : ''
        }
      "
      :custom-tooltip="CustomChartTooltip"
    />
    <div v-else class="text-center py-10 text-muted-foreground">Memuat data chart...</div>
  </div>
</template>
