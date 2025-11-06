<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const currentUser = useCookie('currentUser')
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center p-6">
    <Card class="w-full max-w-2xl shadow-sm">
      <CardHeader>
        <CardTitle class="text-xl font-semibold"> Selamat Datang 👋 </CardTitle>
      </CardHeader>

      <CardContent class="space-y-4">
        <p class="text-gray-600">
          Hai <strong>{{ currentUser?.username || currentUser?.email }}</strong
          >.
        </p>

        <p class="text-gray-600">
          Anda login sebagai <span class="font-semibold text-blue-600">{{ currentUser?.role }}</span
          >.
        </p>

        <p class="text-gray-500 text-sm leading-relaxed">
          Anda tidak memiliki akses ke Dashboard Admin. Silakan gunakan menu navigasi yang tersedia
          sesuai hak akses Anda.
        </p>

        <Button class="mt-4" @click="navigateTo('/')"> Kembali </Button>
      </CardContent>
    </Card>
  </div>
</template>
