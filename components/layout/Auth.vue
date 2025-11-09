<script setup lang="ts">
defineProps<{
  reverse?: boolean
}>()
</script>

<!-- <template>
  <div
    class="relative flex items-center justify-center px-4 h-dvh lg:max-w-none lg:px-0"
    :class="{ 'flex-row-reverse': reverse }"
  >
    <div
      class="relative hidden h-full flex-1 flex-col bg-muted p-10 text-white lg:flex dark:border-r"
    >
      <div class="absolute inset-0 bg-[url('/login-image.jpg')] bg-cover bg-center" />
      <div class="absolute inset-0 bg-black/40" />

      <div class="relative z-20 flex items-center text-lg font-medium">
      
      </div>

      <div class="relative z-20 mt-auto">
        <blockquote class="space-y-2">
          <p class="text-lg">Aplikasi Monitoring Project</p>
          <footer class="text-sm">Create By Shandy Digital Solution</footer>
        </blockquote>
      </div>
    </div>

    <div class="mx-auto flex-1 lg:p-8">
      <slot />
    </div>
  </div>
</template> -->

<template>
  <div
    class="relative flex items-center justify-center px-4 min-h-screen lg:max-w-none lg:px-0"
    :class="{ 'flex-row-reverse': reverse }"
  >
    <div class="mx-auto w-full max-w-md p-4 lg:p-8">
      <slot />
    </div>
  </div>
</template>
