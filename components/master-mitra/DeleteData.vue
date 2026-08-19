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
    await apiFetch(`/api/backoffice/mitra/${props.item.id}`, {
      method: 'DELETE',
    })

    emit('dataDeleted', props.item.id)
    toast({
      title: 'Success',
      description: 'Data berhasil dihapus.',
    })
  }
  catch (error: any) {
    // Ambil pesan dari response body
    const message = error?.data?.message || error?.message || 'Gagal Menghapus Data'

    // Tampilkan toast error
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
