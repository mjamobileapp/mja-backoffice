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
import { SettingsIcon, Trash2Icon, TrashIcon } from 'lucide-vue-next'
import { toast } from '~/components/ui/toast'
const props = defineProps(['item'])
const emit = defineEmits(['dataMaintenance'])

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

// get token====================
const accessToken = useCookie('accessToken')
const token = accessToken.value.token

async function maintenanceItem() {
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/mesin/maintenance/${props.item.id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.ok) {
      emit('dataMaintenance', props.item.id)
      toast({
        title: 'Success',
        description: 'Data berhasil dimaintenance.',
      })
    } else {
      // Ambil pesan dari response body
      const errorData = await response.json()
      const message = errorData?.message || 'Gagal Maintenance Data'

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
            <Button size="sm">
              <SettingsIcon class="w-4 h-4" />
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
        <AlertDialogTitle>Apakah anda yakin melakukan Maintenance mesin ini ? </AlertDialogTitle>
        <!-- <AlertDialogDescription>
          data yg dihapus tidak bisa dikembalikan kembali, jadi pastikan anda yakin untuk menghapus
          data ini.
        </AlertDialogDescription> -->
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction @click="maintenanceItem">Maintenance</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
