<script setup lang="ts">
</script>

<template>
  <SidebarProvider class="min-h-screen bg-[#eef1f5] text-[#111827]">
    <LayoutAppSidebar />
    <SidebarInset class="min-w-0 bg-[#eef1f5]">
      <LayoutHeader />
      <div class="min-w-0 w-full flex-1 overflow-x-auto px-4 py-5 lg:px-6">
        <slot />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>

<style scoped>

</style>
