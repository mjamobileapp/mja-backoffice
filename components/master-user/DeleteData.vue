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

const props = defineProps<{ item: { id: number | string, username?: string } }>()
const emit = defineEmits<{ dataDeleted: [id: number | string] }>()

async function deleteItem() {
  try {
    await apiFetch(`/api/backoffice/users/${props.item.id}`, { method: 'DELETE' })
    emit('dataDeleted', props.item.id)
    toast({ title: 'Berhasil', description: 'Data berhasil dihapus.' })
  }
  catch (error) {
    console.error('Error menghapus data:', error)
    toast({ title: 'Gagal', description: 'Gagal menghapus data.', variant: 'destructive' })
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
          <TooltipContent><p>Delete Data</p></TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Apakah anda yakin menghapus data {{ props.item.username }}?</AlertDialogTitle>
        <AlertDialogDescription>Data yang dihapus tidak bisa dikembalikan kembali.</AlertDialogDescription>
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
