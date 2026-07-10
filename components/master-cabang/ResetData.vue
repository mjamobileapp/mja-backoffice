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
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { XCircle } from 'lucide-vue-next'
import { toast } from '~/components/ui/toast'

const props = defineProps(['item'])
const emit = defineEmits(['dataReset'])

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const accessToken = useCookie<{ token: string }>('accessToken')
const token = accessToken.value?.token

const isConfirmOpen = ref(false)
const isInputOpen = ref(false)
const confirmationText = ref('')
const isSubmitting = ref(false)

function closeInputDialog() {
  isInputOpen.value = false
  confirmationText.value = ''
}

async function openInputDialog() {
  isConfirmOpen.value = false
  confirmationText.value = ''
  await nextTick()
  isInputOpen.value = true
}

async function resetItem() {
  if (confirmationText.value.trim().toLowerCase() !== 'reset') {
    toast({
      title: 'Gagal',
      description: 'Ketik "reset" untuk melanjutkan reset data.',
      variant: 'destructive',
    })
    return
  }

  isSubmitting.value = true

  try {
    const response = await fetch(`${baseUrl}/api/backoffice/cabang/${props.item.id}/reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        konfirmasi: confirmationText.value,
      }),
    })

    if (response.ok) {
      emit('dataReset', props.item.id)
      closeInputDialog()
      toast({
        title: 'Success',
        description: 'Data cabang berhasil direset.',
      })
    } else {
      const errorData = await response.json()
      const message = errorData?.message || 'Gagal reset data cabang'

      toast({
        title: 'Gagal',
        description: message,
        variant: 'destructive',
      })
      console.error('Gagal reset data cabang:', message)
    }
  } catch (error) {
    toast({
      title: 'Error',
      description: 'Terjadi kesalahan saat reset data cabang.',
      variant: 'destructive',
    })
    console.error('Error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <AlertDialog v-model:open="isConfirmOpen">
    <AlertDialogTrigger>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button size="sm" variant="outline" class="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700">
              <XCircle class="w-4 h-4 text-red-600" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Reset Data</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Apakah Anda yakin MERESET data cabang ini?</AlertDialogTitle>
        <AlertDialogDescription>
          Data transaksi dan relasi terkait cabang ini akan direset. Pastikan anda yakin sebelum
          melanjutkan.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction @click="openInputDialog">Reset</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>

  <Dialog v-model:open="isInputOpen">
    <DialogContent class="sm:max-w-[420px]">
      <form class="space-y-4" @submit.prevent="resetItem">
        <DialogHeader>
          <DialogTitle>ketik "RESET" pada kotak di bawah ini.</DialogTitle>
        </DialogHeader>

        <Input
          v-model="confirmationText"
          autocomplete="off"
          placeholder="ketik RESET"
        />

        <DialogFooter>
          <Button type="button" variant="outline" @click="closeInputDialog">Cancel</Button>
          <Button type="submit" :disabled="isSubmitting">
            {{ isSubmitting ? 'Resetting...' : 'Submit' }}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
