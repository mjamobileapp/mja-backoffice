<script setup lang="ts">
import { KeyRound } from 'lucide-vue-next'
import { ref } from 'vue'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import PasswordInput from '~/components/PasswordInput.vue'
import { toast } from '~/components/ui/toast'

const props = defineProps(['item'])
const emit = defineEmits(['passwordReset'])

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const accessToken = useCookie<{ token: string }>('accessToken')
const token = accessToken.value?.token
const isSubmitting = ref(false)
const isDialogOpen = ref(false)

const password = ref('')
const confirmPassword = ref('')

function openDialog() {
  password.value = ''
  confirmPassword.value = ''
  isDialogOpen.value = true
}

function closeDialog() {
  isDialogOpen.value = false
  password.value = ''
  confirmPassword.value = ''
}

async function handleResetPassword() {
  if (!password.value || !confirmPassword.value) {
    toast({
      title: 'Peringatan',
      description: 'Password baru dan konfirmasi password wajib diisi.',
      variant: 'destructive',
    })
    return
  }

  if (password.value !== confirmPassword.value) {
    toast({
      title: 'Gagal',
      description: 'Konfirmasi password tidak cocok dengan password baru.',
      variant: 'destructive',
    })
    return
  }

  if (password.value.length < 6) {
    toast({
      title: 'Peringatan',
      description: 'Password minimal 6 karakter.',
      variant: 'destructive',
    })
    return
  }

  isSubmitting.value = true

  try {
    const response = await fetch(`${baseUrl}/api/backoffice/userowner/${props.item.id}/forceresetpassword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        newPassword: password.value,
        ConfirmNewPassword: confirmPassword.value,
      }),
    })

    if (response.ok) {
      emit('passwordReset', props.item.id)
      toast({
        title: 'Success',
        description: 'Password berhasil direset.',
      })
      closeDialog()
    }
    else {
      const errorData = await response.json()
      const message = errorData?.message || 'Gagal reset password'

      toast({
        title: 'Gagal',
        description: message,
        variant: 'destructive',
      })
      console.error('Gagal reset password:', message)
    }
  }
  catch (error) {
    toast({
      title: 'Error',
      description: 'Terjadi kesalahan saat reset password.',
      variant: 'destructive',
    })
    console.error('Error:', error)
  }
  finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <Dialog :open="isDialogOpen" @open-change="isDialogOpen = $event">
    <DialogTrigger as-child>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button size="sm" variant="outline" class="border-yellow-200 text-yellow-600 hover:bg-yellow-50 hover:text-yellow-700" @click="openDialog">
              <KeyRound class="h-4 w-4 text-yellow-600" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Force Reset Password</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <form class="space-y-4" @submit.prevent="handleResetPassword">
        <DialogHeader>
          <DialogTitle>Force Reset Password</DialogTitle>
        </DialogHeader>

        <div class="space-y-3 py-2">
          <div class="space-y-1">
            <Label for="new-password">Password Baru</Label>
            <PasswordInput
              id="new-password"
              v-model="password"
              placeholder="Masukkan password baru"
              :disabled="isSubmitting"
            />
          </div>

          <div class="space-y-1">
            <Label for="confirm-password">Konfirmasi Password Baru</Label>
            <PasswordInput
              id="confirm-password"
              v-model="confirmPassword"
              placeholder="Konfirmasi password baru"
              :disabled="isSubmitting"
            />
          </div>
        </div>

        <DialogFooter>
          <Button type="button" variant="outline" :disabled="isSubmitting" @click="closeDialog">
            Cancel
          </Button>
          <Button type="submit" :disabled="isSubmitting">
            {{ isSubmitting ? 'Submitting...' : 'Submit' }}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
