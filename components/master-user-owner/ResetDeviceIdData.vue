<script setup lang="ts">
import { RotateCcw } from 'lucide-vue-next'
import { ref } from 'vue'
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
const emit = defineEmits(['deviceIdReset'])

const isSubmitting = ref(false)

async function resetDeviceId() {
  isSubmitting.value = true

  try {
    await apiFetch(`/api/backoffice/userowner/${props.item.id}/resetdeviceid`, { method: 'PUT' })
    emit('deviceIdReset', props.item.id)
    toast({
      title: 'Berhasil',
      description: 'Device ID berhasil direset.',
    })
  }
  catch (error) {
    const message = error?.data?.message || error?.message || 'Gagal reset Device ID'

    toast({
      title: 'Gagal',
      description: message,
      variant: 'destructive',
    })
    console.error('Gagal reset Device ID:', message)
  }
  finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button size="sm" variant="outline" class="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700">
              <RotateCcw class="h-4 w-4 text-red-600" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Reset Device ID</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Apakah anda yakin reset Device ID user owner ini?</AlertDialogTitle>
        <AlertDialogDescription>
          Device ID akan dihapus dari user owner ini. User perlu login ulang dari device yang
          digunakan.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction :disabled="isSubmitting" @click="resetDeviceId">
          {{ isSubmitting ? 'Resetting...' : 'Reset' }}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
