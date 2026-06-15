<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'blank',
})

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

// State untuk handle loading dan feedback
const isLoading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

// Fungsi untuk mengirim request reset password ke API
async function handleResetPassword(emailData: { email: string }) {
  if (!emailData.email) {
    errorMessage.value = 'Email tidak boleh kosong.'
    return
  }

  isLoading.value = true
  errorMessage.value = ''
  successMessage.value = ''

  try {
    // Menggunakan useFetch atau $fetch dari Nuxt 3
    // Mengganti ':email' di URL dengan email yang diinput user
    const response = await $fetch(
      `${baseUrl}/api/backoffice/users/${encodeURIComponent(emailData.email)}/resetpassword`,
      {
        method: 'POST',
        // Jika API membutuhkan payload tambahan di body, bisa ditambahkan di sini
      }
    )
    // console.log('email: ', emailData.email)
    // console.log(response)
    successMessage.value = 'Instruksi reset password telah dikirim ke email Anda.'
  } catch (error: any) {
    console.error('Reset password error:', error)
    errorMessage.value = error.data?.message || 'Terjadi kesalahan, silakan coba lagi nanti.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-6 bg-muted p-6 min-h-svh md:p-10">
    <div class="max-w-sm w-full flex flex-col gap-6">
      <NuxtLink to="#" class="flex items-center self-center gap-3 font-medium">
        <img src="/mja-logo.png" alt="MJA Logo" class="h-20 w-20 object-contain" />
        <span>MJA Back Office</span>
      </NuxtLink>
      <Card>
        <CardHeader class="text-center">
          <CardTitle class="text-xl"> Forgot Password </CardTitle>
          <CardDescription>
            Enter your username/email below to reset your password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div class="grid mx-auto max-w-sm gap-6">
            <AuthForgotPassword :loading="isLoading" @submit="handleResetPassword" />

            <p v-if="errorMessage" class="text-center text-sm text-destructive font-medium">
              {{ errorMessage }}
            </p>
            <p v-if="successMessage" class="text-center text-sm text-green-600 font-medium">
              {{ successMessage }}
            </p>

            <p class="text-center text-sm text-muted-foreground">
              Already have an account?
              <NuxtLink to="/login" class="underline underline-offset-4 hover:text-primary">
                Login
              </NuxtLink>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped></style>
