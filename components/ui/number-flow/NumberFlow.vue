<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue'

const props = withDefaults(
  defineProps<{
    value: number | string
    prefix?: string
    suffix?: string
    locale?: string
    showDecimal?: boolean
    duration?: number
  }>(),
  {
    prefix: 'Rp.',
    suffix: '',
    locale: 'id-ID',
    showDecimal: false,
    duration: 500,
  }
)

const displayValue = ref(0)
const isChanging = ref(false)
const isMounted = ref(false)

// Saat komponen mounted, baru sync nilai awal
onMounted(() => {
  if (props.value !== undefined && props.value !== null) {
    displayValue.value = Number(props.value)
  }
  isMounted.value = true
})

// Watch perubahan nilai setelah mount
watch(
  () => props.value,
  (newVal, oldVal) => {
    if (!isMounted.value) return
    if (newVal == null || isNaN(Number(newVal))) return
    if (Number(newVal) === Number(oldVal)) return

    isChanging.value = true
    const start = Number(oldVal ?? 0)
    const end = Number(newVal)
    const diff = end - start
    const steps = 30
    const interval = props.duration / steps
    let step = 0

    const animate = setInterval(() => {
      step++
      displayValue.value = start + (diff * step) / steps
      if (step >= steps) {
        clearInterval(animate)
        displayValue.value = end
        isChanging.value = false
      }
    }, interval)
  },
  { immediate: true }
)

const formattedValue = computed(() => {
  if (!isMounted.value || isNaN(displayValue.value)) return '-'
  const formatted = new Intl.NumberFormat(props.locale, {
    minimumFractionDigits: props.showDecimal ? 2 : 0,
    maximumFractionDigits: props.showDecimal ? 2 : 0,
  }).format(displayValue.value)
  return `${props.prefix} ${formatted}${props.suffix}`
})
</script>

<template>
  <transition name="fade-slide" mode="out-in">
    <span
      :key="formattedValue"
      class="inline-block font-semibold tabular-nums tracking-tight transition-all"
    >
      {{ formattedValue }}
    </span>
  </transition>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(4px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
