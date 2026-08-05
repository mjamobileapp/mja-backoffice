<script setup lang="ts">
import ExecutiveSummary from '~/components/dashboard/ExecutiveSummary.vue'
</script>

<template>
  <ClientOnly>
    <ExecutiveSummary />
    <template #fallback>
      <div class="min-h-[320px] flex items-center justify-center text-sm text-muted-foreground">
        Memuat executive summary...
      </div>
    </template>
  </ClientOnly>
</template>
