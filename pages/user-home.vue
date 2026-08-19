<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const currentUser = useCookie<any>('currentUser')
</script>

<template>
  <div class="min-h-screen flex flex-col items-center bg-gray-50 p-6">
    <Card class="max-w-2xl w-full shadow-sm">
      <CardHeader>
        <CardTitle class="text-xl font-semibold">
          Selamat Datang 👋
        </CardTitle>
      </CardHeader>

      <CardContent class="space-y-4">
        <p class="text-gray-600">
          Hai <strong>{{ currentUser?.username || currentUser?.email }}</strong>.
        </p>

        <p class="text-gray-600">
          Anda login sebagai <span class="text-blue-600 font-semibold">{{ currentUser?.role }}</span>.
        </p>

        <p class="text-sm text-gray-500 leading-relaxed">
          Anda tidak memiliki akses ke Dashboard Admin. Silakan gunakan menu navigasi yang tersedia
          sesuai hak akses Anda.
        </p>
      </CardContent>
    </Card>
  </div>
</template>
