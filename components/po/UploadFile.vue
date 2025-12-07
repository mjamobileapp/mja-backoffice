<script setup lang="ts">
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
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { UploadCloud, Loader2 } from 'lucide-vue-next'
import { ref, computed } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { toast } from '~/components/ui/toast'

import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

// 🧩 props & emits
const props = defineProps({
  item: Object,
  disabled: Boolean,
})
const emit = defineEmits(['uploadFiles'])

// 📋 Schema dinamis pakai .superRefine agar bisa validasi kondisional
const profileFormSchema = toTypedSchema(
  z.object({
    tglLunas: z.date().nullable(),
    files: z
      .array(z.any())
      .min(1, 'Minimal 1 file harus diupload')
      .refine(files => files.every(file => file.type.startsWith('image/')), {
        message: 'File harus berupa gambar (jpg, jpeg, png, webp, dll)',
      }),
  })
)

const { handleSubmit, resetForm, setFieldValue, values } = useForm({
  validationSchema: profileFormSchema,
  initialValues: {
    files: [],
    tglLunas: new Date(),
  },
})

const isDialogOpen = ref(false)
const isSubmitting = ref(false)

function openDialog() {
  if (props.disabled) return
  isDialogOpen.value = true
}
function closeDialog() {
  isDialogOpen.value = false
  resetForm()
}

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const accessToken = useCookie('accessToken')
const token = accessToken.value.token
const currentUser = useCookie('currentUser')
const email = computed(() => currentUser.value?.username || 'no-email@example.com')

// 📁 handle file
function handleFileChange(e: Event) {
  const target = e.target as HTMLInputElement
  if (target.files) {
    const arrFiles = Array.from(target.files)
    setFieldValue('files', arrFiles)
  }
}

const datePelunasan = ref(new Date())

// 🚀 submit logic
const onSubmit = handleSubmit(async values => {
  isSubmitting.value = true
  const formDataFile = new FormData()
  formDataFile.append('createdBy', email.value)
  formDataFile.append('idPo', props.item.id)
  formDataFile.append('tglLunas', values.tglLunas)

  values.files.forEach(file => formDataFile.append('files', file))

  try {
    await $fetch(`${baseUrl}/uploadBuktiLunas`, {
      method: 'POST',
      body: formDataFile,
      headers: { Authorization: `Bearer ${token}` },
    })
    toast({ title: 'Success', description: 'File upload successful' })
    emit('uploadFiles')
    closeDialog()
  } catch (error) {
    console.error(error)
    toast({ title: 'Error', description: 'File upload failed', variant: 'destructive' })
  } finally {
    isSubmitting.value = false
  }
})

onMounted(() => {
  setFieldValue('tglLunas', datePelunasan.value)
})
</script>

<template>
  <Dialog :open="isDialogOpen" @openChange="isDialogOpen = $event">
    <DialogTrigger as-child>
      <Button size="sm" :disabled="props.disabled" @click="!props.disabled && openDialog()">
        <UploadCloud class="w-4 h-4" />
      </Button>
    </DialogTrigger>

    <DialogContent class="sm:max-w-[800px] [&>button]:hidden">
      <form class="space-y-6" @submit="onSubmit">
        <DialogHeader>
          <DialogTitle>Upload Bukti Pelunasan</DialogTitle>
        </DialogHeader>

        <FormField v-slot="{ field, value }" name="tglLunas">
          <FormItem>
            <FormLabel>Tanggal Pelunasan</FormLabel>
            <Datepicker
              v-model="datePelunasan"
              :enable-time-picker="false"
              :format="'dd-MM-yyyy'"
              @update:model-value="
                val => {
                  datePelunasan = val
                  field.onChange(val)
                }
              "
            />
            <FormMessage />
          </FormItem>
        </FormField>
        <!-- Upload File -->
        <FormField name="files">
          <FormItem>
            <FormLabel>Upload Files</FormLabel>
            <FormControl>
              <Input type="file" @change="handleFileChange" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <!-- Footer -->
        <DialogFooter>
          <Button type="button" variant="secondary" @click="closeDialog">Close</Button>
          <Button type="submit" :disabled="isSubmitting">
            <Loader2 v-if="isSubmitting" class="w-4 h-4 mr-2 animate-spin" />
            <UploadCloud v-else class="w-4 h-4 mr-2" />
            {{ isSubmitting ? 'Uploading...' : 'Upload' }}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
