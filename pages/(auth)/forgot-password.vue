<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})
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
            <AuthForgotPassword />
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
