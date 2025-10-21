<script setup lang="ts">
defineProps<{
  x?: string | number
  data?: { name: string; value: number; color?: string }[]
}>()
</script>

<template>
  <div
    class="rounded-lg border bg-background/80 backdrop-blur-sm p-2 shadow-md text-sm min-w-[150px]"
  >
    <!-- Label (misal: nama bulan) -->
    <div class="font-medium text-foreground mb-1">
      {{ x }}
    </div>

    <!-- Daftar nilai (misal total / predicted) -->
    <div v-for="(d, i) in data" :key="i" class="flex items-center gap-2">
      <div
        class="w-3 h-3 rounded-full shrink-0"
        :style="{ backgroundColor: d.color || 'hsl(var(--primary))' }"
      />
      <span class="text-muted-foreground">{{ d.name }}:</span>
      <span class="ml-auto font-medium">
        {{
          typeof d.value === 'number'
            ? new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
              }).format(d.value)
            : '-'
        }}
      </span>
    </div>
  </div>
</template>
