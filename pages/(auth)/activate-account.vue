<script setup lang="ts">
import { ref } from 'vue'
import ResetPassword from '~/components/auth/ResetPassword.vue'

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
    console.log('email: ', emailData.email)
    console.log(response)
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
  <ResetPassword />
</template>

<style scoped></style>
