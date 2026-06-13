<script setup lang="ts">
defineProps<{
  reverse?: boolean
}>()
</script>

<template>
  <div class="relative flex h-dvh items-center justify-center">
    <!-- LEFT : Illustration -->
    <div class="relative hidden h-full flex-1 flex-col bg-white lg:flex">
      <div class="flex h-full items-center justify-center p-10">
        <img
          src="/login-illustration.webp"
          alt="MJA Illustration"
          class="max-h-[85%] max-w-[85%] object-contain transition-transform duration-700 hover:scale-105"
        />
      </div>
    </div>

    <!-- RIGHT : Login Area -->
    <div
      class="flex h-full flex-1 items-center justify-center bg-gradient-to-br from-[#0D6EFD] via-[#1976D2] to-[#42A5F5] p-8"
    >
      <!-- Glow Effect -->
      <div class="absolute right-10 top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div class="absolute bottom-10 right-32 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl" />

      <!-- Login Card -->
      <div class="relative z-10 w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <slot />
      </div>
    </div>
  </div>
</template>
