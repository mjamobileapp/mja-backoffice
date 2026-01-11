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
import { Trash2Icon, TrashIcon } from 'lucide-vue-next'
import { toast } from '~/components/ui/toast'
const props = defineProps<{
  id: {
    type: Number
    required: true
  }
  disabled?: boolean
}>()
const emit = defineEmits(['dataDeleted'])

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

// get token====================
const accessToken = useCookie('accessToken')
const token = accessToken.value.token

async function deleteItem() {
  try {
    const response = await fetch(`${baseUrl}/kontrakSubkon/${props.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.ok) {
      emit('dataDeleted', props.id)
      toast({
        title: 'Success',
        description: 'Data berhasil dihapus.',
      })
    } else {
      // Ambil pesan dari response body
      const errorData = await response.json()
      const message = errorData?.message || 'Gagal Menghapus Data'

      // Tampilkan toast error
      toast({
        title: 'Gagal',
        description: message,
        variant: 'destructive',
      })
      console.error('Gagal menghapus:', message)
    }
  } catch (error) {
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
            <Button size="sm" :disabled="props.disabled">
              <TrashIcon class="w-4 h-4" />
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
        <AlertDialogTitle>Apakah anda yakin menghapus data ini? </AlertDialogTitle>
        <AlertDialogDescription>
          data yg dihapus tidak bisa dikembalikan kembali, jadi pastikan anda yakin untuk menghapus
          data ini.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction @click="deleteItem">Delete</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
