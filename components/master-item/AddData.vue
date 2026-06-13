<script setup lang="ts">
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
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { toTypedSchema } from '@vee-validate/zod'
import { Loader2, Notebook } from 'lucide-vue-next'
import { FieldArray, useForm } from 'vee-validate'
import { h, ref } from 'vue'
import * as z from 'zod'
import { toast } from '~/components/ui/toast'
import {
  CalendarDate,
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
  today,
} from '@internationalized/date'
import { toDate } from 'date-fns'

const emit = defineEmits(['dataAdded'])

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const currentUser = useCookie('currentUser') // diasumsikan cookie bernilai object stringified
const username = computed(() => currentUser.value?.username || 'no-username@example.com')

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const profileFormSchema = toTypedSchema(
  z.object({
    namaItem: z.string(),
    tipeItem: z.enum(['stok', 'non_stok'], {
      message: 'Tipe item harus Stok atau Non Stok',
    }),
  })
)

const displayharga = ref('')

// Gunakan NumberFormat sekali, bukan setiap ketik
const formatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
})

const isSubmitting = ref(false)

const { handleSubmit, resetForm, setFieldValue } = useForm({
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

// get token====================
const accessToken = useCookie('accessToken')
const token = accessToken.value.token

const onSubmit = handleSubmit(async (values: any) => {
  isSubmitting.value = true
  const dataForm = {
    namaItem: values.namaItem,
    tipeItem: values.tipeItem,
    createdBy: username.value,
  }
  isDialogOpen.value = false
  console.log(JSON.stringify(dataForm))
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/item`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataForm),
    })

    // console.log(await response.json())

    if (response.ok) {
      toast({
        title: 'Success',
        description: 'Data berhasil disimpan.',
      })

      console.log('[AddData] Emitting dataAdded...')
      emit('dataAdded') // kirim emit dulu
      resetForm() // reset form
      isDialogOpen.value = false // baru tutup dialog
    } else {
      toast({
        title: 'Error',
        description: 'Gagal menyimpan data. Silakan coba lagi.',
      })
    }
  } catch (error) {
    console.error('Error submitting data:', error)
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
      <Button @click="openDialog">Add Data</Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[800px] [&>button]:hidden">
      <form class="space-y-8" @submit.prevent="onSubmit">
        <DialogHeader>
          <DialogTitle>Add Master Item</DialogTitle>
        </DialogHeader>
        <!-- 🧱 Nama Item -->
        <FormField v-slot="{ componentField }" name="namaItem">
          <FormItem>
            <FormLabel>Nama Item</FormLabel>
            <FormControl>
              <Input type="text" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="tipeItem">
          <FormItem>
            <FormLabel>Tipe Item</FormLabel>

            <Select
              :model-value="componentField.modelValue"
              @update:model-value="componentField['onUpdate:modelValue']"
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Tipe Item" />
                </SelectTrigger>
              </FormControl>

              <SelectContent>
                <SelectItem value="stok"> Stok </SelectItem>
                <SelectItem value="non_stok"> Non Stok </SelectItem>
              </SelectContent>
            </Select>

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
              Saving..
            </Button>
          </span>
          <Button type="submit" v-else>Save </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
