<script setup lang="ts">
defineProps<{
  reverse?: boolean
}>()
</script>

<template>
  <div class="relative flex items-center justify-center h-dvh">
    <!-- LEFT : Illustration -->
    <div class="relative hidden h-full flex-1 flex-col bg-white lg:flex">
      <div class="h-full flex items-center justify-center p-10">
        <img
          src="/login-illustration.webp"
          alt="MJA Illustration"
          class="max-h-[85%] max-w-[85%] object-contain transition-transform duration-700 hover:scale-105"
        >
      </div>
    </div>

    <!-- RIGHT : Login Area -->
    <div
      class="h-full flex flex-1 items-center justify-center from-[#0D6EFD] via-[#1976D2] to-[#42A5F5] bg-gradient-to-br p-8"
    >
      <!-- Glow Effect -->
      <div class="absolute right-10 top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div class="absolute bottom-10 right-32 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl" />

      <!-- Login Card -->
      <div class="relative z-10 max-w-md w-full rounded-3xl bg-white p-8 shadow-2xl">
        <slot />
      </div>
    </div>
  </div>
</template>
