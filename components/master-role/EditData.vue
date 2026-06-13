<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { toast } from '~/components/ui/toast'
import * as z from 'zod'
import { PencilIcon } from 'lucide-vue-next'

const emit = defineEmits(['dataUpdated'])

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
})

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

// get token====================
const accessToken = useCookie('accessToken')
const token = accessToken.value.token

const formSchema = toTypedSchema(
  z.object({
    namaRole: z.string().min(2).max(50),
    description: z.string().min(2).max(200),
  })
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
    const response = await fetch(`${baseUrl}/api/backoffice/roles/${props.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    const res = await response.json()
    // console.log(data)
    setValues({
      namaRole: res.data.namaRole,
      description: res.data.description,
    })
  } catch (error) {
    console.error('Error fetching data:', error)
    toast({
      title: 'Error',
      description: 'Gagal mengambil data.',
    })
    closeDialog()
  } finally {
    isLoading.value = false
  }
}
const currentUser = useCookie('currentUser') // diasumsikan cookie bernilai object stringified
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
  //   console.log(dataForm)
  try {
    const response = await fetch(`${baseUrl}/roles/${props.id}`, {
      method: 'PUT', // atau PATCH
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataForm),
    })

    if (response.ok) {
      toast({
        title: 'Success',
        description: 'Data berhasil diperbarui.',
      })

      setTimeout(() => {
        emit('dataUpdated')
        isDialogOpen.value = false
        resetForm()
      }, 300)
    } else {
      toast({
        title: 'Error',
        description: 'Gagal memperbarui data. Silakan coba lagi.',
      })
    }
  } catch (error) {
    console.error('Error updating data:', error)
    toast({
      title: 'Error',
      description: 'Terjadi kesalahan saat mengirim data.',
    })
  } finally {
    isSubmitting.value = false
  }
})
</script>

<template>
  <Dialog :open="isDialogOpen" @openChange="isDialogOpen = $event">
    <DialogTrigger as-child>
      <Button class="mr-2" @click="openDialog"
        ><PencilIcon class="w-4 h-4 mr-2" /> Edit Data</Button
      >
    </DialogTrigger>
    <DialogContent class="sm:max-w-[800px] [&>button]:hidden">
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
            <Button type="button" variant="secondary" @click="closeDialog"> Close </Button>
          </DialogClose>
          <span v-if="isSubmitting">
            <Button disabled>
              <Loader2 class="w-4 h-4 mr-2 animate-spin" />
              Updating..
            </Button>
          </span>
          <Button type="submit" v-else>Update </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
