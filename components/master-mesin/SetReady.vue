<script setup lang="ts">
import { CircleCheck } from 'lucide-vue-next'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { toast } from '~/components/ui/toast'

const props = defineProps(['item'])
const emit = defineEmits(['dataReady'])

async function readyItem() {
  try {
    await apiFetch(`/api/backoffice/mesin/ready/${props.item.id}`, {
      method: 'PUT',
    })
    emit('dataReady', props.item.id)
    toast({
      title: 'Success',
      description: 'Status mesin berhasil diubah menjadi READY.',
    })
  }
  catch (error: any) {
    const message = error?.data?.message || error?.message || 'Gagal mengubah status mesin menjadi READY'
    toast({
      title: 'Gagal',
      description: message,
      variant: 'destructive',
    })
    console.error('Gagal set ready:', message)
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
              <CircleCheck class="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Set Ready Mesin</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Apakah anda yakin mengubah status mesin ini menjadi READY ?</AlertDialogTitle>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction @click="readyItem">
          Set Ready
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
