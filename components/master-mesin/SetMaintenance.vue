<script setup lang="ts">
import { SettingsIcon } from 'lucide-vue-next'
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
const emit = defineEmits(['dataMaintenance'])

async function maintenanceItem() {
  try {
    await apiFetch(`/api/backoffice/mesin/maintenance/${props.item.id}`, {
      method: 'PUT',
    })
    emit('dataMaintenance', props.item.id)
    toast({
      title: 'Success',
      description: 'Data berhasil dimaintenance.',
    })
  }
  catch (error: any) {
    const message = error?.data?.message || error?.message || 'Gagal Maintenance Data'
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
              <SettingsIcon class="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Maintenance Mesin</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Apakah Anda yakin akan melakukan Maintenance mesin ini ? </AlertDialogTitle>
        <!-- <AlertDialogDescription>
          data yg dihapus tidak bisa dikembalikan kembali, jadi pastikan anda yakin untuk menghapus
          data ini.
        </AlertDialogDescription> -->
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction @click="maintenanceItem">
          Maintenance
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
