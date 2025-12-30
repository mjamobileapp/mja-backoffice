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
    tglPenerimaan: z.date().nullable(),
    namaPenerima: z.string(),
    keterangan: z.string(),
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
    tglPenerimaan: new Date(),
    namaPenerima: '',
    keterangan: '',
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
const username = computed(() => currentUser.value?.username || 'no-email@example.com')

// 📁 handle file
function handleFileChange(e: Event) {
  const target = e.target as HTMLInputElement
  if (target.files) {
    const arrFiles = Array.from(target.files)
    setFieldValue('files', arrFiles)
  }
}

const datePenerimaan = ref(new Date())

// 🚀 submit logic
const onSubmit = handleSubmit(async values => {
  isSubmitting.value = true

  const dataForm = {
    ...values,
    idPo: props.item.id,
    createdBy: username.value,
  }

  // console.log(JSON.stringify(dataForm))

  try {
    const response = await fetch(`${baseUrl}/penerimaanPo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataForm),
    })

    const result = await response.json()

    if (!response.ok) {
      toast({
        title: 'Error',
        description: result.message || 'Gagal menyimpan penerimaan PO.',
        variant: 'destructive',
      })
      return
    }

    // ✅ Upload file hanya jika ada file
    if (values.files && values.files.length > 0) {
      const formDataFile = new FormData()
      formDataFile.append('idPenerimaanPo', result.data.id)
      formDataFile.append('createdBy', username.value)
      values.files.forEach(file => {
        formDataFile.append('files', file)
      })

      await $fetch(`${baseUrl}/uploadSuratJalan`, {
        method: 'POST',
        body: formDataFile,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      toast({ title: 'Success', description: 'File upload berhasil.' })
    }

    toast({ title: 'Success', description: 'Penerimaan PO berhasil disimpan.' })
    emit('uploadFiles')
    closeDialog()
  } catch (error) {
    console.error(error)
    toast({
      title: 'Error',
      description: 'Terjadi kesalahan saat menyimpan data.',
      variant: 'destructive',
    })
  } finally {
    isSubmitting.value = false
  }
})

onMounted(() => {
  setFieldValue('tglPenerimaan', datePenerimaan.value)
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
          <DialogTitle>Form Penerimaan PO</DialogTitle>
        </DialogHeader>

        <FormField v-slot="{ field, value }" name="tglPenerimaan">
          <FormItem>
            <FormLabel>Tanggal Penerimaan</FormLabel>
            <Datepicker
              v-model="datePenerimaan"
              :enable-time-picker="false"
              :format="'dd-MM-yyyy'"
              @update:model-value="
                val => {
                  datePenerimaan = val
                  field.onChange(val)
                }
              "
            />
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="namaPenerima">
          <FormItem>
            <FormLabel>Nama Penerima</FormLabel>
            <Input v-bind="componentField" />
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="keterangan">
          <FormItem>
            <FormLabel>Keterangan</FormLabel>
            <Textarea v-bind="componentField" rows="2" />
            <FormMessage />
          </FormItem>
        </FormField>
        <!-- Upload File -->
        <FormField name="files">
          <FormItem>
            <FormLabel>Upload Surat Jalan</FormLabel>
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
