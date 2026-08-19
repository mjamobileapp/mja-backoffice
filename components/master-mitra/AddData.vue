<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Loader2 } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { ref } from 'vue'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { toast } from '~/components/ui/toast'
import Textarea from '../ui/textarea/Textarea.vue'
import '@vuepic/vue-datepicker/dist/main.css'

const emit = defineEmits(['dataAdded'])

const currentUser = useCookie<any>('currentUser') // diasumsikan cookie bernilai object stringified
const username = computed(() => currentUser.value?.username || 'no-username@example.com')

const profileFormSchema = toTypedSchema(
  z.object({
    namaMitra: z.string(),
    alamatMitra: z.string(),
  }),
)

const isSubmitting = ref(false)

const { handleSubmit, resetForm } = useForm({
  validationSchema: profileFormSchema,
})

const isDialogOpen = ref(false)

function openDialog() {
  isDialogOpen.value = true
}

function closeDialog() {
  isDialogOpen.value = false
  resetForm()
}

const onSubmit = handleSubmit(async (values: any) => {
  isSubmitting.value = true

  const dataForm = {
    namaMitra: values.namaMitra,
    alamatMitra: values.alamatMitra,
    createdBy: username.value,
  }

  try {
    await apiFetch('/api/backoffice/mitra', {
      method: 'POST',
      body: JSON.stringify(dataForm),
    })

    toast({
      title: 'Berhasil',
      description: 'Data berhasil disimpan.',
    })

    emit('dataAdded')
    resetForm()
    isDialogOpen.value = false
  }
  catch (error: any) {
    console.error('Error submitting data:', error)

    toast({
      title: 'Gagal',
      description: error?.data?.message || error?.message || 'Terjadi kesalahan saat mengirim data.',
      variant: 'destructive',
    })
  }
  finally {
    isSubmitting.value = false
  }
})
</script>

<template>
  <Dialog :open="isDialogOpen" @open-change="isDialogOpen = $event">
    <DialogTrigger as-child>
      <Button @click="openDialog">
        Add Data
      </Button>
    </DialogTrigger>
    <DialogContent class="[&>button]:hidden sm:max-w-[800px]">
      <form class="space-y-8" @submit.prevent="onSubmit">
        <DialogHeader>
          <DialogTitle>Add Data Mitra</DialogTitle>
        </DialogHeader>

        <!-- <div class="max-h-[60vh] overflow-y-auto pr-4 space-y-6"> -->
        <!-- 🧱 Field: Nama Mitra -->
        <FormField v-slot="{ componentField }" name="namaMitra">
          <FormItem>
            <FormLabel>Nama Mitra</FormLabel>
            <FormControl>
              <Input type="text" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="alamatMitra">
          <FormItem>
            <FormLabel>Alamat Mitra</FormLabel>
            <FormControl>
              <Textarea v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <!-- </div> -->
        <DialogFooter>
          <DialogClose as-child>
            <Button type="button" variant="secondary" @click="closeDialog">
              Close
            </Button>
          </DialogClose>
          <span v-if="isSubmitting">
            <Button disabled>
              <Loader2 class="mr-2 h-4 w-4 animate-spin" />
              Saving..
            </Button>
          </span>
          <Button v-else type="submit">
            Save
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
