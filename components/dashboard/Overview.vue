<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import CustomChartTooltip from './CustomChartTooltip.vue'

// Props untuk idProyek (supaya bisa dipakai dinamis)
const props = defineProps({
  idProyek: {
    type: [String, Number],
    required: true,
  },
})

// Reaktif data chart
const dataBarchart = ref<{ name: string, total: number }[]>([])

// Fungsi ambil data dari API
async function fetchDataBarchart() {
  try {
    const result = await apiFetch(`/getDataBarChart/${props.idProyek}`)

    if (!result.success)
      throw new Error(result.message || 'Gagal mengambil data')

    // isi data ke chart
    dataBarchart.value = result.data.map((item: any) => ({
      name: item.name,
      total: Number(item.total) || 0,
    }))
  }
  catch (error) {
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
    <div v-else class="py-10 text-center text-muted-foreground">
      Memuat data chart...
    </div>
  </div>
</template>
