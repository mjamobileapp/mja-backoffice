<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next'
import { toast, ToastAction } from '../ui/toast'
import PasswordInput from '~/components/PasswordInput.vue'

const username = ref('')
const password = ref('')
const isLoading = ref(false)
const baseUrl = 'http://localhost:4000/Login'
const urlToken = 'http://localhost:9000/login'

async function onSubmit(event: Event) {
  event.preventDefault()
  if (!username.value || !password.value) return

  isLoading.value = true
  // console.log(password.value)
  // Asumsi fungsi bernama 'login'
  // Gunakan variabel isLoading yang sudah Anda deklarasikan
  // isLoading.value = true;

  try {
    const { data, error } = await useFetch(`${baseUrl}`, {
      method: 'POST',
      body: {
        username: username.value,
        password: password.value,
      },
      // Penting: atur key unik untuk fetch agar tidak ada konflik
      // key: 'login-attempt',
    })

    // --- KOREKSI AKSES DATA DI SINI ---

    // 1. Ambil nilai dari Ref 'data' (data.value)
    const apiResponse = data.value
    // console.log(apiResponse)
    // 2. Akses data user dari properti 'data' di dalam response
    const userData = apiResponse?.data
    // console.log(userData)
    // 3. Pengecekan awal error dan data user
    if (
      error.value ||
      !apiResponse ||
      apiResponse.message !== 'Login successful' ||
      !userData ||
      !userData.id
    ) {
      console.error('Login API Error:', error.value || apiResponse?.message)

      toast({
        title: 'Uh oh! Something went wrong.',
        description: 'Username/Password Anda Salah',
        variant: 'destructive',
        // ... (ToastAction Anda) ...
      })
      throw new Error('Login failed')
    }

    // // DEBUGGING: console.log yang benar
    console.log('User ID:', userData.id)

    // // ------------------------------------
    // // --- AKTIFKAN LOGIKA POST-LOGIN ---

    // Simpan data user ke cookies
    const userCookie = useCookie('currentUser', {
      maxAge: 60 * 60 * 24,
      path: '/',
    })
    // Simpan hanya data user yang penting, atau seluruh apiResponse
    userCookie.value = userData

    // getToken============
    // const responseToken = await useFetch(`${urlToken}`, {
    //   method: 'POST',
    //   body: {
    //     username: username.value,
    //     password: password.value,
    //     idApplication: '38351BF3-1D55-4651-9A1C-397B6A90AAA4',
    //   },
    // })

    // simpanToken
    const accessToken = useCookie('accessToken', {
      maxAge: 60 * 60 * 24,
      sameSite: 'strict',
    })

    // Pastikan responseToken.data.value diakses dengan benar
    // console.log('Token Response:', responseToken.data.value)
    accessToken.value = userData

    // Redirect setelah login sukses
    navigateTo('/')
  } catch (err) {
    console.error('Login error:', err)
    // Tambahkan toast error umum
    toast({
      title: 'Login Gagal',
      description: 'Terjadi kesalahan sistem. Silakan coba lagi.',
      variant: 'destructive',
    })
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <form class="grid gap-6" @submit="onSubmit">
    <div class="grid gap-2">
      <Label for="username"> Username </Label>
      <Input
        id="username"
        v-model="username"
        placeholder="Enter your username"
        type="username"
        :disabled="isLoading"
        auto-capitalize="none"
        auto-complete="username"
        auto-correct="off"
      />
    </div>
    <div class="grid gap-2">
      <div class="flex items-center">
        <Label for="password"> Password </Label>
        <!-- <NuxtLink to="/forgot-password" class="ml-auto inline-block text-sm underline">
          Forgot your password?
        </NuxtLink> -->
      </div>
      <PasswordInput id="password" v-model="password" />
    </div>
    <Button type="submit" class="w-full" :disabled="isLoading">
      <Loader2 v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
      Login
    </Button>
  </form>
  <div class="mt-4 text-center text-sm text-muted-foreground">
    <!-- Don't have an account?
    <NuxtLink to="/register" class="underline"> Sign up </NuxtLink> -->
  </div>
</template>

<style scoped></style>
