<script setup lang="ts">
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from 'chart.js'
import { Bar } from 'vue-chartjs'

const props = defineProps<{
  data: { name: string, total: number, color?: string }[]
}>()

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

// 🟢 Buat data chart dengan warna dinamis dari API
const chartData = computed(() => ({
  labels: props.data.map(d => d.name),
  datasets: [
    {
      label: 'Nilai Proyek (Rp)',
      data: props.data.map(d => Number(d.total) || 0),
      backgroundColor: props.data.map((d) => {
        // console.log(d.color)
        // mapping warna dasar dari API
        switch ((d.color || '').toLowerCase()) {
          case 'red':
            return '#ef4444' // merah
          case 'blue':
            return '#3b82f6' // biru
          case 'green':
            return '#10b981' // hijau
          case 'yellow':
            return '#eab308' // kuning
          case 'purple':
            return '#8b5cf6' // ungu
          case 'orange':
            return '#EA8808' // orange
          default:
            return '#10b981' // fallback hijau
        }
      }),
      borderRadius: 8,
    },
  ],
}))

// ⚙️ Opsi Chart
const chartOptions: any = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const val = context.parsed.y || 0
          return `Rp ${new Intl.NumberFormat('id-ID').format(val)}`
        },
      },
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: '#6b7280' },
    },
    y: {
      grid: { color: '#e5e7eb' },
      ticks: {
        color: '#6b7280',
        callback: value => `Rp ${new Intl.NumberFormat('id-ID').format(value)}`,
      },
    },
  },
  animation: {
    duration: 800,
    easing: 'easeOutQuart',
  },
}
</script>

<template>
  <div class="h-[350px] w-full">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>
