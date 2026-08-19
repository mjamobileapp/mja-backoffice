<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Loader2, PencilIcon } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
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

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['dataUpdated'])

const currentUser = useCookie<any>('currentUser') // diasumsikan cookie bernilai object stringified
const username = computed(() => currentUser.value?.username || 'no-username@example.com')

const formSchema = toTypedSchema(
  z.object({
    namaRole: z.string().min(2).max(50),
    description: z.string().min(2).max(200),
  }),
)

const { handleSubmit, resetForm, setValues } = useForm({
  validationSchema: formSchema,
})

const isDialogOpen = ref(false)
const isLoading = ref(false)

async function openDialog() {
  isDialogOpen.value = true
  await fetchData()
}

function closeDialog() {
  isDialogOpen.value = false
  resetForm()
}

async function fetchData() {
  try {
    isLoading.value = true
    const res = await apiFetch(`/api/backoffice/roles/${props.id}`)
    setValues({
      namaRole: res?.data?.namaRole,
      description: res?.data?.description,
    })
  }
  catch (error) {
    console.error('Error fetching data:', error)
    toast({
      title: 'Gagal',
      description: 'Gagal mengambil data.',
      variant: 'destructive',
    })
    closeDialog()
  }
  finally {
    isLoading.value = false
  }
}
const isSubmitting = ref(false)
const onSubmit = handleSubmit(async (values: any) => {
  isSubmitting.value = true
  const dataForm = {
    namaRole: values.namaRole,
    description: values.description,
    updatedBy: username.value,
  }
  try {
    await apiFetch(`/api/backoffice/roles/${props.id}`, {
      method: 'PUT', // atau PATCH
      body: dataForm,
    })

    toast({
      title: 'Berhasil',
      description: 'Data berhasil diperbarui.',
    })

    setTimeout(() => {
      emit('dataUpdated')
      isDialogOpen.value = false
      resetForm()
    }, 300)
  }
  catch (error) {
    console.error('Error updating data:', error)
    toast({
      title: 'Gagal',
      description: 'Terjadi kesalahan saat mengirim data.',
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
      <Button class="mr-2" @click="openDialog">
        <PencilIcon class="mr-2 h-4 w-4" /> Edit Data
      </Button>
    </DialogTrigger>
    <DialogContent class="[&>button]:hidden sm:max-w-[800px]">
      <DialogHeader>
        <DialogTitle>Edit Data Master Role</DialogTitle>
      </DialogHeader>

      <form v-if="!isLoading" class="space-y-5" @submit="onSubmit">
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
              <Textarea placeholder="Deskripsi" v-bind="componentField" cols="5" />
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
              Updating..
            </Button>
          </span>
          <Button v-else type="submit">
            Update
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
