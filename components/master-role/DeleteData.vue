<script setup lang="ts">
import { TrashIcon } from 'lucide-vue-next'
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

async function deleteItem() {
  try {
    await apiFetch(`/api/backoffice/roles/${props.item.id}`, {
      method: 'DELETE',
    })
    emit('dataDeleted', props.item.id)
    toast({
      title: 'Berhasil',
      description: 'Data berhasil dihapus.',
    })
  }
  catch (error: any) {
    const message = error?.data?.message || error?.message || 'Gagal Menghapus Data'
    toast({
      title: 'Gagal',
      description: message,
      variant: 'destructive',
    })
    console.error('Gagal menghapus:', message)
  }
}
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger>
      <Button>
        <TrashIcon class="mr-2 h-4 w-4" />
        Delete Data
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          Apakah anda yakin menghapus data {{ props.item.namaRole }}?
        </AlertDialogTitle>
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
