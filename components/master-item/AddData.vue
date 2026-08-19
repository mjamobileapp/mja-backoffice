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

const emit = defineEmits(['dataAdded'])

const currentUser = useCookie<any>('currentUser') // diasumsikan cookie bernilai object stringified
const username = computed(() => currentUser.value?.username || 'no-username@example.com')

const profileFormSchema = toTypedSchema(
  z.object({
    namaItem: z.string(),
    tipeItem: z.enum(['stok', 'non_stok'], {
      message: 'Tipe item harus Stok atau Non Stok',
    }),
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
    namaItem: values.namaItem,
    tipeItem: values.tipeItem,
    createdBy: username.value,
  }
  try {
    await apiFetch('/api/backoffice/item', {
      method: 'POST',
      body: dataForm,
    })

    toast({
      title: 'Berhasil',
      description: 'Data berhasil disimpan.',
    })

    emit('dataAdded') // kirim emit dulu
    resetForm() // reset form
    isDialogOpen.value = false // baru tutup dialog
  }
  catch (error: any) {
    console.error('Error submitting data:', error)
    toast({
      title: 'Gagal',
      variant: 'destructive',
      description: error?.data?.message || error?.message || 'Terjadi kesalahan saat mengirim data.',
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
                <SelectItem value="stok">
                  Stok
                </SelectItem>
                <SelectItem value="non_stok">
                  Non Stok
                </SelectItem>
              </SelectContent>
            </Select>

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
