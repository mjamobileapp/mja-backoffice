<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next'
import PasswordInput from '~/components/PasswordInput.vue'
import { toast } from '../ui/toast'

const username = ref('')
const password = ref('')
const isLoading = ref(false)

async function onSubmit(event: Event) {
  event.preventDefault()
  if (!username.value || !password.value)
    return

  isLoading.value = true

  try {
    const apiResponse = await apiFetch('/api/backoffice/login', {
      method: 'POST',
      body: {
        username: username.value,
        password: password.value,
      },
    })

    const userData = apiResponse?.data

    if (!apiResponse || apiResponse.message !== 'Login successful' || !userData || !userData.id) {
      toast({
        title: 'Uh oh! Something went wrong.',
        description: 'Username/Password Anda Salah',
        variant: 'destructive',
      })
      return
    }

    const userCookie = useCookie('currentUser', {
      maxAge: 60 * 60 * 24,
      path: '/',
    })
    userCookie.value = userData

    const accessToken = useCookie<any>('accessToken', {
      maxAge: 60 * 60 * 24,
      sameSite: 'strict',
    })
    accessToken.value = { token: userData.token }

    navigateTo('/')
  }
  catch (err) {
    console.error('Login error:', err)
    toast({
      title: 'Login Gagal',
      description: 'Terjadi kesalahan sistem atau kredensial salah.',
      variant: 'destructive',
    })
  }
  finally {
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
        <NuxtLink to="/forgot-password" class="ml-auto inline-block text-sm underline">
          Forgot your password?
        </NuxtLink>
      </div>
      <PasswordInput id="password" v-model="password" />
    </div>
    <Button type="submit" class="w-full" :disabled="isLoading">
      <Loader2 v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
      Login
    </Button>
  </form>
</template>
