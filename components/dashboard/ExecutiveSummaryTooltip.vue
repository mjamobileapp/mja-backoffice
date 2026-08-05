<script setup lang="ts">
defineProps<{
  title?: string
  data: {
    name: string
    color: string
    value: unknown
  }[]
}>()

function formatCurrency(value: unknown) {
  const amount = Number(value)
  if (!Number.isFinite(amount))
    return '-'

  return `Rp ${new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(Math.round(amount))}`
}
</script>

<template>
  <div class="min-w-[180px] border rounded-lg bg-background/80 p-3 text-sm shadow-md backdrop-blur-sm">
    <div v-if="title" class="mb-2 border-b pb-2 font-semibold">
      {{ title }}
    </div>
    <div v-for="(item, key) in data" :key="key" class="flex justify-between gap-4">
      <div class="flex items-center">
        <span class="mr-2 h-2.5 w-2.5 rounded-full" :style="{ backgroundColor: item.color }" />
        <span>{{ item.name }}</span>
      </div>
      <span class="font-semibold">{{ formatCurrency(item.value) }}</span>
    </div>
  </div>
</template>
