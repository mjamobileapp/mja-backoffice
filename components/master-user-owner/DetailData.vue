<script setup lang="ts">
import { ref } from 'vue'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const props = defineProps<{ id: number, username: string }>()

const isDialogOpen = ref(false)
const isLoading = ref(false)
const userDetail = ref<any>(null)

async function fetchDetail() {
  isLoading.value = true
  userDetail.value = null
  try {
    const res = await apiFetch(`/api/backoffice/userowner/${props.id}`)
    userDetail.value = res?.data || null
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
  if (!tanggal)
    return '-'
  const date = new Date(tanggal)
  if (Number.isNaN(date.getTime()))
    return tanggal

  const formatted = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
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
              class="cursor-pointer border-none bg-transparent p-0 text-left text-blue-600 font-medium outline-none hover:text-blue-800 hover:underline"
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

      <div v-else-if="userDetail" class="py-2 text-sm space-y-4">
        <div class="grid grid-cols-3 gap-2 border-b border-gray-100 py-1.5 dark:border-gray-800">
          <span class="text-gray-500 font-medium dark:text-gray-400">Username</span>
          <span class="col-span-2 text-gray-900 font-semibold dark:text-gray-100">{{ userDetail.username || '-' }}</span>
        </div>

        <div class="grid grid-cols-3 gap-2 border-b border-gray-100 py-1.5 dark:border-gray-800">
          <span class="text-gray-500 font-medium dark:text-gray-400">Role</span>
          <span class="col-span-2 text-gray-900 dark:text-gray-100">{{ userDetail.role || '-' }}</span>
        </div>

        <div class="grid grid-cols-3 gap-2 border-b border-gray-100 py-1.5 dark:border-gray-800">
          <span class="text-gray-500 font-medium dark:text-gray-400">Nama Lengkap</span>
          <span class="col-span-2 text-gray-900 dark:text-gray-100">{{ userDetail.namaLengkap || '-' }}</span>
        </div>

        <div class="grid grid-cols-3 gap-2 border-b border-gray-100 py-1.5 dark:border-gray-800">
          <span class="text-gray-500 font-medium dark:text-gray-400">No Telepon</span>
          <span class="col-span-2 text-gray-900 dark:text-gray-100">{{ userDetail.noTelp || '-' }}</span>
        </div>

        <div class="grid grid-cols-3 gap-2 border-b border-gray-100 py-1.5 dark:border-gray-800">
          <span class="text-gray-500 font-medium dark:text-gray-400">Email</span>
          <span class="col-span-2 text-gray-900 dark:text-gray-100">{{ userDetail.email || '-' }}</span>
        </div>

        <div class="grid grid-cols-3 gap-2 border-b border-gray-100 py-1.5 dark:border-gray-800">
          <span class="text-gray-500 font-medium dark:text-gray-400">App Version</span>
          <span class="col-span-2 text-gray-900 dark:text-gray-100">{{ userDetail.appVersion || '-' }}</span>
        </div>

        <div class="grid grid-cols-3 gap-2 border-b border-gray-100 py-1.5 dark:border-gray-800">
          <span class="text-gray-500 font-medium dark:text-gray-400">OS Type</span>
          <span class="col-span-2 text-gray-900 dark:text-gray-100">{{ userDetail.osType || '-' }}</span>
        </div>

        <div class="grid grid-cols-3 gap-2 border-b border-gray-100 py-1.5 dark:border-gray-800">
          <span class="text-gray-500 font-medium dark:text-gray-400">Last Login</span>
          <span class="col-span-2 text-gray-900 dark:text-gray-100">{{ formatTanggal(userDetail.lastLogin) }} WIB</span>
        </div>

        <div class="grid grid-cols-3 gap-2 border-b border-gray-100 py-1.5 dark:border-gray-800">
          <span class="text-gray-500 font-medium dark:text-gray-400">Last Change Password</span>
          <span class="col-span-2 text-gray-900 dark:text-gray-100">{{ formatTanggal(userDetail.lastChangePassword) }} WIB</span>
        </div>
      </div>

      <div v-else class="py-6 text-center text-gray-500">
        Data tidak ditemukan.
      </div>
    </DialogContent>
  </Dialog>
</template>
