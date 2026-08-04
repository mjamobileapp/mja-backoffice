<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})
</script>

<template>
  <div class="min-h-svh flex items-center justify-center bg-[#f6f7f9] p-6">
    <Card class="w-full max-w-lg border-[#dfe4eb] shadow-sm">
      <CardHeader class="text-center">
        <div class="mx-auto mb-3 h-14 w-14 flex items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <Icon name="i-lucide-lock-keyhole" class="h-7 w-7" />
        </div>
        <CardTitle class="text-xl text-slate-900">
          Akses halaman terbatas
        </CardTitle>
        <CardDescription class="mt-2 text-slate-500">
          Anda belum memiliki akses ke halaman ini. Silakan pilih menu yang tersedia sesuai hak akses Anda.
        </CardDescription>
      </CardHeader>

      <CardContent class="flex justify-center gap-3">
        <Button @click="navigateTo('/')">
          <Icon name="i-lucide-house" class="mr-2 h-4 w-4" />
          Menu utama
        </Button>
      </CardContent>
    </Card>
  </div>
</template>
