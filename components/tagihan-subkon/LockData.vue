<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

import { LockIcon, Loader2Icon } from 'lucide-vue-next'
import { toast } from '~/components/ui/toast'
import { ref } from 'vue'
import { boolean } from 'zod'
type Item = {
  idProgress: number
  totalProgress?: Number
  namaSubkon: string
  noPenagihan: string
}

const props = defineProps<{
  item: Item
  disabled?: boolean
}>()

// console.log(props.item.idProgress)
const emit = defineEmits(['dataLocked'])
const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

// token
const accessToken = useCookie<any>('accessToken')
const token = accessToken.value?.token

const isLoading = ref(false)

async function lockItem() {
  if (isLoading.value) return

  isLoading.value = true

  try {
    const response = await fetch(`${baseUrl}/progressSubkon/${props.item.idProgress}/lock`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData?.message || 'Gagal melakukan lock data')
    }

    emit('dataLocked', props.item.idProgress)

    toast({
      title: 'Berhasil',
      description: 'Data berhasil di-lock.',
    })
  } catch (error: any) {
    toast({
      title: 'Gagal',
      description: error.message || 'Terjadi kesalahan saat lock data.',
      variant: 'destructive',
    })
    console.error(error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              size="sm"
              :disabled="props.disabled || isLoading || props.item.totalProgress === 0"
            >
              <LockIcon v-if="!isLoading" class="w-4 h-4" />
              <Loader2Icon v-else class="w-4 h-4 animate-spin" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Lock Data</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </AlertDialogTrigger>

    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          Apakah anda yakin ingin mengunci data {{ props.item.namaSubkon }} -
          {{ props.item.noPenagihan }}?
        </AlertDialogTitle>
        <AlertDialogDescription>
          Data yang sudah di-lock tidak dapat diubah kembali.
        </AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter>
        <AlertDialogCancel :disabled="isLoading"> Batal </AlertDialogCancel>

        <AlertDialogAction :disabled="isLoading" @click="lockItem" class="flex items-center gap-2">
          <Loader2Icon v-if="isLoading" class="w-4 h-4 animate-spin" />
          <span>{{ isLoading ? 'Mengunci...' : 'Lock' }}</span>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
