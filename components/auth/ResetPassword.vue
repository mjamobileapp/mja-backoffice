<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Loader2, Eye, EyeOff } from 'lucide-vue-next'

definePageMeta({
  layout: 'blank',
})

const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

// Decode JWT payload tanpa library
function decodeJwtPayload(jwtToken: string) {
  try {
    const base64Payload = jwtToken.split('.')[1]
    const payload = atob(base64Payload)
    return JSON.parse(payload)
  } catch {
    return null
  }
}

// State Form
const token = ref('')
const type = ref('')
const role = ref('')
const password = ref('')
const confirmPassword = ref('')

// State UI / UX
const isLoading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const isTokenExpired = ref(false)

// Cek apakah token sudah expired berdasarkan field `exp` di JWT payload
function checkTokenExpired(jwtToken: string): boolean {
  const payload = decodeJwtPayload(jwtToken)
  if (!payload || !payload.exp) return false // Jika tidak ada exp, anggap belum expired
  const now = Math.floor(Date.now() / 1000) // Current time dalam detik (Unix timestamp)
  return now >= payload.exp
}

// Ambil email dari URL query ketika halaman dimuat (?email=user@example.com)
onMounted(() => {
  token.value = route.query.token as string
  type.value = route.query.type as string

  if (!token.value || !type.value) {
    errorMessage.value = 'Link aktivasi tidak valid atau sudah kadaluarsa.'
    return
  }

  // Decode role dari JWT token
  const payload = decodeJwtPayload(token.value)
  role.value = payload?.role || ''

  // Validasi masa expired token
  if (checkTokenExpired(token.value)) {
    isTokenExpired.value = true
    errorMessage.value = 'Link aktivasi sudah kadaluarsa.<br>Silakan minta link baru.'
  }
})

async function handleSubmit(event: Event) {
  event.preventDefault()

  if (!token.value) {
    errorMessage.value = 'Token tidak valid.'
    return
  }

  // Cek ulang expired sebelum submit
  if (checkTokenExpired(token.value)) {
    isTokenExpired.value = true
    errorMessage.value = 'Link aktivasi sudah kadaluarsa.<br>Silakan minta link baru.'
    return
  }

  // Validasi kecocokan password di sisi client
  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Password baru dan konfirmasi password tidak cocok.'
    return
  }

  isLoading.value = true
  errorMessage.value = ''
  successMessage.value = ''

  const formSubmit = {
    token: token.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  }

  console.log(JSON.stringify(formSubmit))
  try {
    // Menembak API dengan menyisipkan email dan password baru
    await $fetch(`${baseUrl}/api/mobile/activateaccount`, {
      method: 'POST',
      body: formSubmit,
    })

    // Cek role dari JWT token
    if (role.value.toLowerCase() === 'backoffice') {
      successMessage.value = 'Password Anda berhasil diperbarui! Mengalihkan ke halaman login...'

      // Alihkan ke halaman login setelah 3 detik
      setTimeout(() => {
        router.push('/login')
      }, 3000)
    } else {
      successMessage.value = 'Password Anda berhasil diperbarui!'
    }
  } catch (error: any) {
    console.error('Reset password error:', error)
    errorMessage.value = error.data?.message || 'Gagal memperbarui password. Silakan coba lagi.'
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
          <CardTitle class="text-xl"> Create New Password </CardTitle>
          <CardDescription> Create a new password for your account. </CardDescription>
        </CardHeader>
        <CardContent>
          <div class="grid mx-auto max-w-sm gap-6">
            <!-- Form Input Password Baru -->
            <form v-if="!successMessage && !isTokenExpired" @submit="handleSubmit" class="grid gap-4">
              <!-- Input Password Baru -->
              <div class="grid gap-2">
                <Label for="password">New Password</Label>
                <div class="relative flex items-center">
                  <Input
                    id="password"
                    v-model="password"
                    placeholder="••••••••"
                    :type="showPassword ? 'text' : 'password'"
                    :disabled="isLoading || !token || isTokenExpired"
                    required
                    class="pr-10"
                  />
                  <button
                    type="button"
                    class="absolute right-3 text-muted-foreground hover:text-foreground"
                    @click="showPassword = !showPassword"
                  >
                    <Eye v-if="showPassword" class="h-4 w-4" />
                    <EyeOff v-else class="h-4 w-4" />
                  </button>
                </div>
              </div>

              <!-- Input Konfirmasi Password -->
              <div class="grid gap-2">
                <Label for="confirmPassword">Confirm New Password</Label>
                <div class="relative flex items-center">
                  <Input
                    id="confirmPassword"
                    v-model="confirmPassword"
                    placeholder="••••••••"
                    :type="showConfirmPassword ? 'text' : 'password'"
                    :disabled="isLoading || !token || isTokenExpired"
                    required
                    class="pr-10"
                  />
                  <button
                    type="button"
                    class="absolute right-3 text-muted-foreground hover:text-foreground"
                    @click="showConfirmPassword = !showConfirmPassword"
                  >
                    <Eye v-if="showConfirmPassword" class="h-4 w-4" />
                    <EyeOff v-else class="h-4 w-4" />
                  </button>
                </div>
              </div>

              <!-- Tombol Submit -->
              <Button type="submit" :disabled="isLoading || !token || isTokenExpired" class="w-full">
                <Loader2 v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />

                {{ type === 'forgotPassword' ? 'Reset Password' : 'Aktivasi User' }}
              </Button>
            </form>

            <!-- Alert State (Error / Success) -->
            <p
              v-if="errorMessage"
              v-html="errorMessage"
              class="text-center text-sm text-destructive font-medium bg-destructive/10 p-3 rounded"
            >
            </p>
            <p
              v-if="successMessage"
              class="text-center text-sm text-green-600 font-medium bg-green-50 p-3 rounded border border-green-200"
            >
              {{ successMessage }}
            </p>
            <p v-if="type === 'forgotPassword' && role.toLowerCase() === 'backoffice'" class="text-center text-sm text-muted-foreground">
              Back to
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
