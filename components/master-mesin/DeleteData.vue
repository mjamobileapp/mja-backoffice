<script setup lang="ts">
import { Trash2Icon, TrashIcon } from 'lucide-vue-next'
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
import { toast } from '~/components/ui/toast'

const props = defineProps(['item'])
const emit = defineEmits(['dataDeleted'])

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

// get token====================
const accessToken = useCookie<any>('accessToken')
const token = accessToken.value.token

function formatApiErrorValue(value: unknown): string | null {
  if (!value)
    return null
  if (typeof value === 'string')
    return value
  if (Array.isArray(value)) {
    return value
      .map(item => formatApiErrorValue(item))
      .filter(Boolean)
      .join(', ')
  }
  if (typeof value === 'object') {
    return JSON.stringify(value)
  }

  return String(value)
}

async function getErrorMessage(response: Response) {
  const fallbackMessage = `Gagal menghapus data. Status: ${response.status}`
  const contentType = response.headers.get('content-type') || ''

  try {
    if (contentType.includes('application/json')) {
      const errorData = await response.json()
      return (
        formatApiErrorValue(errorData?.message)
        || formatApiErrorValue(errorData?.error)
        || formatApiErrorValue(errorData?.errors)
        || formatApiErrorValue(errorData?.detail)
        || formatApiErrorValue(errorData?.data)
        || fallbackMessage
      )
    }

    const errorText = await response.text()
    return errorText || fallbackMessage
  }
  catch (error) {
    console.error('Gagal membaca response error:', error)
    return fallbackMessage
  }
}

async function deleteItem() {
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/mesin/${props.item.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.ok) {
      emit('dataDeleted', props.item.id)
      toast({
        title: 'Success',
        description: 'Data berhasil dihapus.',
      })
    }
    else {
      const message = await getErrorMessage(response)

      toast({
        title: `Gagal (${response.status})`,
        description: message,
        variant: 'destructive',
      })
      console.error('Gagal menghapus:', message)
    }
  }
  catch (error) {
    toast({
      title: 'Error',
      description: 'Terjadi kesalahan saat menghapus data.',
      variant: 'destructive',
    })
    console.error('Error:', error)
  }
}
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button size="sm">
              <TrashIcon class="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Delete Data</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Apakah anda yakin menghapus data ini ? </AlertDialogTitle>
        <AlertDialogDescription>
          data yg dihapus tidak bisa dikembalikan kembali, jadi pastikan anda yakin untuk menghapus
          data ini.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction @click="deleteItem">
          Delete
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
