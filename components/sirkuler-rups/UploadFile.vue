<script setup lang="ts">
import { Button } from '@/components/ui/button'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { toTypedSchema } from '@vee-validate/zod'
import { UploadCloud } from 'lucide-vue-next'
import { FieldArray, useForm } from 'vee-validate'
import { h, ref } from 'vue'
import * as z from 'zod'
import { toast } from '~/components/ui/toast'

const props = defineProps(['item'])
// console.log(props.item.id)
const emit = defineEmits<{
  (e: 'uploadFiles'): void
}>()
const profileFormSchema = toTypedSchema(
  z.object({
    perihal: z.string(),
    files: z.array(z.any()), // Skema array untuk file
  })
)

const { handleSubmit, resetForm, setFieldValue, values } = useForm({
  validationSchema: profileFormSchema,
  initialValues: {
    perihal: props.item.perihal,
    files: [],
  },
})

const isDialogOpen = ref(false)

function openDialog() {
  isDialogOpen.value = true
}

function closeDialog() {
  isDialogOpen.value = false
  resetForm()
}

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files) {
    setFieldValue('files', Array.from(target.files))
  }
}

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

// get token=====
const accessToken = useCookie('accessToken')
const token = accessToken.value.token

const currentUser = useCookie('currentUser') // diasumsikan cookie bernilai object stringified
const email = computed(() => currentUser.value?.email || 'no-email@example.com')

const isSubmitting = ref(false)
const onSubmit = handleSubmit(async values => {
  isSubmitting.value = true
  const formDataFile = new FormData()
  formDataFile.append('createdBy', email.value)
  formDataFile.append('idSirkulerRups', props.item.id) // Tambahkan ID di luar loop
  values.files.forEach(file => {
    formDataFile.append('files', file)
  })
  // console.log('FormData File:', formDataFile)

  try {
    const responseUpload = await $fetch(`${baseUrl}/uploadFileSirkulerRups`, {
      method: 'POST',
      body: formDataFile,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    // console.log('Upload successful:', responseUpload)
    toast({
      title: 'Success',
      description: 'File upload successful',
    })
    setTimeout(() => {
      emit('uploadFiles')
      closeDialog()
      resetForm()
    }, 300)
  } catch (error) {
    console.error('Upload failed:', error)
    toast({
      title: 'Error',
      description: 'File upload failed',
      variant: 'destructive',
    })
  } finally {
    isSubmitting.value = false
  }
})
</script>

<template>
  <Dialog :open="isDialogOpen" @openChange="isDialogOpen = $event">
    <DialogTrigger as-child>
      <Button @click="openDialog"><UploadCloud class="w-4 h-4 mr-2" /> Upload Data</Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[800px] [&>button]:hidden">
      <form class="space-y-8" @submit="onSubmit">
        <DialogHeader>
          <DialogTitle>Upload Data</DialogTitle>
        </DialogHeader>
        <FormField v-slot="{ componentField }" name="perihal">
          <FormItem>
            <FormLabel>Perihal</FormLabel>
            <FormControl>
              <Input type="text" v-bind="componentField" disabled />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField name="files">
          <FormItem>
            <FormLabel>Upload Files</FormLabel>
            <FormControl>
              <Input type="file" multiple @change="handleFileChange" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <DialogFooter>
          <DialogClose as-child>
            <Button type="button" variant="secondary" @click="closeDialog"> Close </Button>
          </DialogClose>
          <Button type="submit" :disabled="isSubmitting">
            <UploadCloud class="w-4 h-4 mr-2" />
            <Loader2 v-if="isSubmitting" class="w-4 h-4 mr-2 animate-spin" />
            {{ isSubmitting ? 'Uploading..' : 'Upload' }}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
