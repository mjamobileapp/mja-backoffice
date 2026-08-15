<script setup lang="ts">
import { ref } from 'vue'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { formatDate } from '~/lib/utils'

const props = defineProps<{
  id: {
    type: number
    required: true
  }
  username: {
    type: string
    required: true
  }
}>()

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const accessToken = useCookie<{ token: string }>('accessToken')
const token = accessToken.value?.token

const isDialogOpen = ref(false)
const isLoading = ref(false)
const userDetail = ref<any>(null)

async function fetchDetail() {
  isLoading.value = true
  userDetail.value = null
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/userowner/${props.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.ok) {
      const result = await response.json()
      userDetail.value = result.data || null
    }
    else {
      console.error('Gagal mengambil detail user owner. Status:', response.status)
    }
  }
  catch (error) {
    console.error('Error fetching user owner detail:', error)
  }
  finally {
    isLoading.value = false
  }
}

async function handleOpen() {
  isDialogOpen.value = true
  await fetchDetail()
}

function formatTanggal(tanggal: any) {
  if (!tanggal) return '-'
  const date = new Date(tanggal)
  if (Number.isNaN(date.getTime())) return tanggal

  const formatted = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'UTC',
  }).format(date)

  return formatted.replace(/(\d{2}):(\d{2})$/, '$1.$2')
}
</script>

<template>
  <Dialog v-model:open="isDialogOpen">
    <DialogTrigger as-child>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <button
              type="button"
              class="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer bg-transparent border-none p-0 text-left font-medium outline-none"
              @click="handleOpen"
            >
              {{ username }}
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Lihat Detail</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[500px]">
      <DialogHeader>
        <DialogTitle>Detail Informasi User Mobile</DialogTitle>
      </DialogHeader>

      <div v-if="isLoading" class="flex items-center justify-center p-8">
        <div class="h-8 w-8 animate-spin border-2 border-primary border-t-transparent rounded-full" />
      </div>

      <div v-else-if="userDetail" class="space-y-4 py-2 text-sm">
        <div class="grid grid-cols-3 gap-2 py-1.5 border-b border-gray-100 dark:border-gray-800">
          <span class="text-gray-500 dark:text-gray-400 font-medium">Username</span>
          <span class="col-span-2 font-semibold text-gray-900 dark:text-gray-100">{{ userDetail.username || '-' }}</span>
        </div>

        <div class="grid grid-cols-3 gap-2 py-1.5 border-b border-gray-100 dark:border-gray-800">
          <span class="text-gray-500 dark:text-gray-400 font-medium">Role</span>
          <span class="col-span-2 text-gray-900 dark:text-gray-100">{{ userDetail.role || '-' }}</span>
        </div>

        <div class="grid grid-cols-3 gap-2 py-1.5 border-b border-gray-100 dark:border-gray-800">
          <span class="text-gray-500 dark:text-gray-400 font-medium">Nama Lengkap</span>
          <span class="col-span-2 text-gray-900 dark:text-gray-100">{{ userDetail.namaLengkap || '-' }}</span>
        </div>

        <div class="grid grid-cols-3 gap-2 py-1.5 border-b border-gray-100 dark:border-gray-800">
          <span class="text-gray-500 dark:text-gray-400 font-medium">No Telepon</span>
          <span class="col-span-2 text-gray-900 dark:text-gray-100">{{ userDetail.noTelp || '-' }}</span>
        </div>

        <div class="grid grid-cols-3 gap-2 py-1.5 border-b border-gray-100 dark:border-gray-800">
          <span class="text-gray-500 dark:text-gray-400 font-medium">Email</span>
          <span class="col-span-2 text-gray-900 dark:text-gray-100">{{ userDetail.email || '-' }}</span>
        </div>

        <div class="grid grid-cols-3 gap-2 py-1.5 border-b border-gray-100 dark:border-gray-800">
          <span class="text-gray-500 dark:text-gray-400 font-medium">App Version</span>
          <span class="col-span-2 text-gray-900 dark:text-gray-100">{{ userDetail.appVersion || '-' }}</span>
        </div>

        <div class="grid grid-cols-3 gap-2 py-1.5 border-b border-gray-100 dark:border-gray-800">
          <span class="text-gray-500 dark:text-gray-400 font-medium">OS Type</span>
          <span class="col-span-2 text-gray-900 dark:text-gray-100">{{ userDetail.osType || '-' }}</span>
        </div>

        <div class="grid grid-cols-3 gap-2 py-1.5 border-b border-gray-100 dark:border-gray-800">
          <span class="text-gray-500 dark:text-gray-400 font-medium">Last Login</span>
          <span class="col-span-2 text-gray-900 dark:text-gray-100">{{ formatTanggal(userDetail.lastLogin) }} WIB</span>
        </div>

        <div class="grid grid-cols-3 gap-2 py-1.5 border-b border-gray-100 dark:border-gray-800">
          <span class="text-gray-500 dark:text-gray-400 font-medium">Last Change Password</span>
          <span class="col-span-2 text-gray-900 dark:text-gray-100">{{ formatTanggal(userDetail.lastChangePassword) }} WIB</span>
        </div>
      </div>

      <div v-else class="text-center py-6 text-gray-500">
        Data tidak ditemukan.
      </div>
    </DialogContent>
  </Dialog>
</template>
