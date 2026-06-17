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
console.log(token)

const currentUser = useCookie('currentUser') // diasumsikan cookie bernilai object stringified
const email = computed(() => currentUser.value?.username || 'no-email@example.com')
const idUser = computed(() => currentUser.value?.id || 0)

const isLoading = ref(false)
const showOldPassword = ref(false)
const showNewPassword = ref(false)
const showConfirmPassword = ref(false)

// Daftarkan template refs untuk menangkap elemen Input Shadcn
const oldPasswordInput = ref<any>(null)
const newPasswordInput = ref<any>(null)
const confirmPasswordInput = ref<any>(null)

// Fungsi untuk toggle type input langsung ke DOM asli (Sudah Diperbaiki)
const toggleVisibility = (targetRefName: string) => {
  const refsMap: Record<string, any> = {
    oldPasswordInput: oldPasswordInput.value,
    newPasswordInput: newPasswordInput.value,
    confirmPasswordInput: confirmPasswordInput.value,
  }

  const targetComponent = refsMap[targetRefName]
  if (!targetComponent) return

  // Mengambil element input asli di dalam komponen Shadcn
  const inputEl =
    targetComponent.$el?.querySelector('input') || targetComponent.$el || targetComponent

  if (inputEl) {
    inputEl.type = inputEl.type === 'password' ? 'text' : 'password'
  }
}

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

function getErrorMessage(error: any) {
  const data = error?.data || error?.response?._data

  const message = data?.message || error?.message || 'Gagal mengubah password.'

  const missingFields =
    Array.isArray(data?.missingFields) && data.missingFields.length
      ? ` (${data.missingFields.join(', ')})`
      : ''

  return `${message}${missingFields}`
}

const onSubmit = handleSubmit(async values => {
  isLoading.value = true

  try {
    await $fetch(`${baseUrl}/api/backoffice/users/${idUser.value}/changepassword`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
        ConfirmNewPassword: values.confirmPassword,
      },
    })

    toast({
      title: 'Success',
      description: 'Password berhasil diubah.',
    })

    resetForm()
  } catch (error: any) {
    const data = error?.data || error?.response?._data

    const message = data?.error || data?.message || error?.message || 'Gagal mengubah password.'

    const missingFields =
      Array.isArray(data?.missingFields) && data.missingFields.length
        ? ` (${data.missingFields.join(', ')})`
        : ''

    toast({
      title: 'Error',
      description: `${message}${missingFields}`,
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

  <Separator class="my-4" />

  <form class="space-y-8" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="oldPassword">
      <FormItem>
        <FormLabel>Password Lama</FormLabel>

        <div class="relative flex items-center w-full">
          <FormControl>
            <Input
              v-bind="componentField"
              type="password"
              ref="oldPasswordInput"
              placeholder="Masukkan password lama"
              class="w-full pr-10"
              :disabled="isLoading"
            />
          </FormControl>

          <button
            type="button"
            class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-muted-foreground hover:text-foreground z-20 h-4 w-4"
            @click="toggleVisibility('oldPasswordInput')"
          >
            <Eye class="h-4 w-4" />
          </button>
        </div>

        <FormDescription>Masukkan password yang saat ini digunakan untuk login.</FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="newPassword">
      <FormItem>
        <FormLabel>Password Baru</FormLabel>

        <div class="relative flex items-center w-full">
          <FormControl>
            <Input
              v-bind="componentField"
              type="password"
              ref="newPasswordInput"
              placeholder="Masukkan password baru"
              class="w-full pr-10"
              :disabled="isLoading"
            />
          </FormControl>

          <button
            type="button"
            class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-muted-foreground hover:text-foreground z-20 h-4 w-4"
            @click="toggleVisibility('newPasswordInput')"
          >
            <Eye class="h-4 w-4" />
          </button>
        </div>

        <FormDescription>Password baru minimal 8 karakter.</FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="confirmPassword">
      <FormItem>
        <FormLabel>Konfirmasi Password Baru</FormLabel>

        <div class="relative flex items-center w-full">
          <FormControl>
            <Input
              v-bind="componentField"
              type="password"
              ref="confirmPasswordInput"
              placeholder="Ulangi password baru"
              class="w-full pr-10"
              :disabled="isLoading"
            />
          </FormControl>

          <button
            type="button"
            class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-muted-foreground hover:text-foreground z-20 h-4 w-4"
            @click="toggleVisibility('confirmPasswordInput')"
          >
            <Eye class="h-4 w-4" />
          </button>
        </div>

        <FormDescription>Pastikan konfirmasi password sama dengan password baru.</FormDescription>
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
