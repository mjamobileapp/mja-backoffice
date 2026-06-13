<script setup lang="ts">
import { ref } from 'vue'
import { Loader2 } from 'lucide-vue-next'

// 1. Definisikan props untuk menerima status loading dari parent
defineProps<{
  isLoading: boolean
}>()

// 2. Definisikan emit untuk mengirim event 'submit' beserta data email ke parent
const emit = defineEmits<{
  (e: 'submit', data: { email: string }): void
}>()

// 3. State untuk menampung input email
const email = ref('')

function onSubmit(event: Event) {
  event.preventDefault()

  // 4. Pancarkan data email ke parent component
  emit('submit', { email: email.value })
}
</script>

<template>
  <form @submit="onSubmit">
    <div class="grid gap-4">
      <div class="grid gap-2">
        <Label for="email"> Email </Label>
        <Input
          id="email"
          v-model="email"
          placeholder="name@example.com"
          type="email"
          auto-capitalize="none"
          auto-complete="email"
          auto-correct="off"
          :disabled="isLoading"
          required
        />
      </div>
      <Button :disabled="isLoading">
        <Loader2 v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
        Submit
      </Button>
    </div>
  </form>
</template>

<style scoped></style>
