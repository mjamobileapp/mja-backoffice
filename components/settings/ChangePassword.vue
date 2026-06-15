<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Eye, EyeOff, Loader2 } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { ref } from 'vue'
import * as z from 'zod'
import { toast } from '~/components/ui/toast'

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const accessToken = useCookie('accessToken')
const token = accessToken.value?.token

const isLoading = ref(false)
const showOldPassword = ref(false)
const showNewPassword = ref(false)
const showConfirmPassword = ref(false)

const changePasswordSchema = toTypedSchema(
  z
    .object({
      oldPassword: z.string().min(1, {
        message: 'Password lama wajib diisi.',
      }),
      newPassword: z.string().min(8, {
        message: 'Password baru minimal 8 karakter.',
      }),
      confirmPassword: z.string().min(8, {
        message: 'Konfirmasi password minimal 8 karakter.',
      }),
    })
    .refine(data => data.newPassword === data.confirmPassword, {
      message: 'Password baru dan konfirmasi password tidak cocok.',
      path: ['confirmPassword'],
    })
)

const { handleSubmit, resetForm } = useForm({
  validationSchema: changePasswordSchema,
  initialValues: {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  },
})

const onSubmit = handleSubmit(async values => {
  isLoading.value = true

  try {
    await $fetch(`${baseUrl}/api/backoffice/auth/change-password`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
        confirmPassword: values.confirmPassword,
      },
    })

    toast({
      title: 'Success',
      description: 'Password berhasil diubah.',
    })

    resetForm()
  } catch (error: any) {
    console.error('Change password error:', error)

    toast({
      title: 'Error',
      description: error.data?.message || 'Gagal mengubah password.',
      variant: 'destructive',
    })
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div>
    <h3 class="text-lg font-medium">Change Password</h3>
    <p class="text-sm text-muted-foreground">
      Update your account password. Use a strong password to keep your account secure.
    </p>
  </div>

  <Separator />

  <form class="space-y-8" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="oldPassword">
      <FormItem>
        <FormLabel>Password Lama</FormLabel>

        <FormControl>
          <div class="relative flex items-center">
            <Input
              v-bind="componentField"
              :type="showOldPassword ? 'text' : 'password'"
              placeholder="Masukkan password lama"
              class="pr-10"
              :disabled="isLoading"
            />

            <button
              type="button"
              class="absolute end-0 py-2 pe-3 text-muted-foreground hover:text-foreground"
              @click="showOldPassword = !showOldPassword"
            >
              <Eye v-if="showOldPassword" class="h-4 w-4" />
              <EyeOff v-else class="h-4 w-4" />
            </button>
          </div>
        </FormControl>

        <FormDescription> Masukkan password yang saat ini digunakan untuk login. </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="newPassword">
      <FormItem>
        <FormLabel>Password Baru</FormLabel>

        <FormControl>
          <div class="relative flex items-center">
            <Input
              v-bind="componentField"
              :type="showNewPassword ? 'text' : 'password'"
              placeholder="Masukkan password baru"
              class="pr-10"
              :disabled="isLoading"
            />

            <button
              type="button"
              class="absolute end-0 py-2 pe-3 text-muted-foreground hover:text-foreground"
              @click="showNewPassword = !showNewPassword"
            >
              <Eye v-if="showNewPassword" class="h-4 w-4" />
              <EyeOff v-else class="h-4 w-4" />
            </button>
          </div>
        </FormControl>

        <FormDescription> Password baru minimal 8 karakter. </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="confirmPassword">
      <FormItem>
        <FormLabel>Konfirmasi Password Baru</FormLabel>

        <FormControl>
          <div class="relative flex items-center">
            <Input
              v-bind="componentField"
              :type="showConfirmPassword ? 'text' : 'password'"
              placeholder="Ulangi password baru"
              class="pr-10"
              :disabled="isLoading"
            />

            <button
              type="button"
              class="absolute end-0 py-2 pe-3 text-muted-foreground hover:text-foreground"
              @click="showConfirmPassword = !showConfirmPassword"
            >
              <Eye v-if="showConfirmPassword" class="h-4 w-4" />
              <EyeOff v-else class="h-4 w-4" />
            </button>
          </div>
        </FormControl>

        <FormDescription> Pastikan konfirmasi password sama dengan password baru. </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>

    <div class="flex justify-start gap-2">
      <Button type="submit" :disabled="isLoading">
        <Loader2 v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
        Update Password
      </Button>

      <Button type="button" variant="outline" :disabled="isLoading" @click="resetForm">
        Reset form
      </Button>
    </div>
  </form>
</template>
