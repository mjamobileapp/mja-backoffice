<script setup lang="ts">

</script>

<template>
  <div class="h-[calc(100svh-6.5rem)] min-h-0 space-y-4 overflow-hidden">
    <div class="space-y-0.5">
      <h2 class="text-xl font-bold tracking-tight">
        Settings
      </h2>
      <p class="text-muted-foreground">
        Kelola pengaturan akun Anda dan atur preferensi kredensial.
      </p>
    </div>
    <Separator class="my-2" />
    <div class="flex flex-col gap-4 lg:flex-row">
      <div class="w-full overflow-x-auto lg:w-1/6">
        <SettingsSidebarNav />
      </div>
      <div class="flex-1 lg:max-w-2xl">
        <div class="space-y-4">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
