<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { PencilIcon } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { ref } from 'vue'
import { toast } from 'vue-sonner'
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

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const props = defineProps<{ id: number }>()

const emit = defineEmits<{
  (e: 'dataEdited'): void
}>()

// onMounted(() => {
//   fetchData()
//   // console.log(props.item.code)
// })
const currentUser = useCookie<any>('currentUser') // diasumsikan cookie bernilai object stringified
const username = computed(() => currentUser.value?.username || 'no-email@example.com')

const profileFormSchema = toTypedSchema(
  z.object({
    namaItem: z.string(),
    tipeItem: z.enum(['stok', 'non_stok'], {
      message: 'Tipe item harus Stok atau Non Stok',
    }),
  }),
)

const { handleSubmit, resetForm, setValues, values } = useForm({
  validationSchema: profileFormSchema,
  initialValues: {
    namaItem: '',
    tipeItem: 'stok',
  },
})

const isDialogOpen = ref(false)

async function fetchData() {
  try {
    const res = await apiFetch(`/api/backoffice/item/${props.id}`)
    const data = res?.data

    if (data) {
      // --- 3. setValues ke VeeValidate ---
      setValues({
        namaItem: data.namaItem,
        tipeItem: data.tipeItem,
      })
    }
  }
  catch (error) {
    console.error('Fetch error:', error.message)
    // Tampilkan notifikasi error ke user jika perlu
  }
}

async function openDialog() {
  isDialogOpen.value = true
  await fetchData()
}

function closeDialog() {
  isDialogOpen.value = false
  resetForm()
}

const isSubmitting = ref(false)

const onSubmit = handleSubmit(async () => {
  isSubmitting.value = true
  try {
    const dataForm = {
      namaItem: values.namaItem,
      tipeItem: values.tipeItem,
      updatedBy: username.value,
    }

    await apiFetch(`/api/backoffice/item/${props.id}`, {
      method: 'PUT',
      body: dataForm,
    })

    emit('dataEdited')
    toast.success('Data Berhasil Di Update')
    closeDialog()
    resetForm()
  }
  catch (error) {
    console.error('Error:', error)
  }
  finally {
    isSubmitting.value = false
  }
})
</script>

<template>
  <Dialog :open="isDialogOpen" @open-change="isDialogOpen = $event">
    <DialogTrigger as-child>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button size="sm" @click="openDialog">
              <PencilIcon class="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit Data</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </DialogTrigger>
    <DialogContent class="[&>button]:hidden sm:max-w-[800px]">
      <form class="space-y-8" @submit.prevent="onSubmit">
        <DialogHeader>
          <DialogTitle>Edit Data Item</DialogTitle>
        </DialogHeader>
        <!-- 🧱 Nama Pekerjaan -->
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
