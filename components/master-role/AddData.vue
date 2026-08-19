<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Loader2 } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { toast } from '~/components/ui/toast'

const emit = defineEmits(['dataAdded'])

const formSchema = toTypedSchema(
  z.object({
    namaRole: z.string().min(2).max(50),
    description: z.string().min(2).max(200),
  }),
)

const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
})

const isDialogOpen = ref(false)

function openDialog() {
  isDialogOpen.value = true
}

function closeDialog() {
  isDialogOpen.value = false
  resetForm()
}

const currentUser = useCookie<any>('currentUser') // diasumsikan cookie bernilai object stringified
const email = computed(() => currentUser.value?.email || 'no-email@example.com')
const isSubmitting = ref(false)
const onSubmit = handleSubmit(async (values: any) => {
  isSubmitting.value = true
  const dataForm = {
    namaRole: values.namaRole,
    description: values.description,
    createdBy: email.value,
    createdDate: new Date(),
  }

  try {
    await apiFetch('/api/backoffice/roles', {
      method: 'POST',
      body: dataForm,
    })

    toast({
      title: 'Berhasil',
      description: 'Data berhasil disimpan.',
    })

    setTimeout(() => {
      emit('dataAdded')
      isDialogOpen.value = false
      resetForm()
    }, 300)
  }
  catch (error: any) {
    const message = error?.data?.message || error?.message || 'Terjadi kesalahan saat mengirim data.'
    console.error('Error submitting data:', error)
    toast({
      title: 'Gagal',
      description: message,
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
      <DialogHeader>
        <DialogTitle>Add Data Master Role</DialogTitle>
      </DialogHeader>
      <form class="space-y-5" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="namaRole">
          <FormItem>
            <FormLabel>Nama Role</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Nama Role" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="description">
          <FormItem>
            <FormLabel>Deskripsi</FormLabel>
            <FormControl>
              <Textarea placeholder="deskripsi" v-bind="componentField" cols="5" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

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
