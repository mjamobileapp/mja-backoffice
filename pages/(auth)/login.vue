<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})
</script>

<template>
  <LayoutAuth reverse>
    <div class="grid mx-auto max-w-sm gap-6">
      <div class="grid gap-4 text-center">
        <img src="/mja-logo.png" alt="MJA Logo" class="mx-auto h-24 w-24 object-contain" />

        <div>
          <h1 class="text-2xl font-semibold tracking-tight">Welcome Back</h1>
          <p class="mt-2 text-sm text-muted-foreground">MJA Back Office</p>
        </div>
      </div>

      <AuthSignIn />
    </div>
  </LayoutAuth>
</template>
