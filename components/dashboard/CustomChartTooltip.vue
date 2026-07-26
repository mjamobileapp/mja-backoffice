<script setup lang="ts">
defineProps<{
  label?: string | number
  data?: { name: string, value: number, color?: string }[]
}>()

// onMounted(console.log(data))
</script>

<template>
  <div
    class="min-w-[150px] border rounded-lg bg-background/80 p-2 text-sm shadow-md backdrop-blur-sm"
  >
    <!-- <div class="font-medium text-foreground mb-1">Judul: {{ label }}</div> -->
    <!-- <pre>{{ data }}</pre> -->
    <div v-for="(d, i) in data" :key="i" class="flex items-center gap-2">
      <div
        class="h-3 w-3 shrink-0 rounded-full"
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
