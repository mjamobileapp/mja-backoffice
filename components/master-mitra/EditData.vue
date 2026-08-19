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
import '@vuepic/vue-datepicker/dist/main.css'

const props = defineProps<{
  id: number
}>()

const emit = defineEmits<{
  (e: 'dataEdited'): void
}>()

const currentUser = useCookie<any>('currentUser') // diasumsikan cookie bernilai object stringified
const username = computed(() => currentUser.value?.username || 'no-email@example.com')

const profileFormSchema = toTypedSchema(
  z.object({
    namaMitra: z.string(),
    alamatMitra: z.string(),
  }),
)

const { handleSubmit, resetForm, setValues, values } = useForm({
  validationSchema: profileFormSchema,
  initialValues: {
    namaMitra: '',
    alamatMitra: '',
  },
})

const isDialogOpen = ref(false)

async function fetchData() {
  try {
    const res = await apiFetch(`/api/backoffice/mitra/${props.id}`)
    const data = res?.data

    // --- 3. setValues ke VeeValidate ---
    setValues({
      namaMitra: data?.namaMitra,
      alamatMitra: data?.alamatMitra,
    })
  }
  catch (error: any) {
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
      namaMitra: values.namaMitra,
      alamatMitra: values.alamatMitra,
      updatedBy: username.value,
    }

    await apiFetch(`/api/backoffice/mitra/${props.id}`, {
      method: 'PUT',
      body: JSON.stringify(dataForm),
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
          <DialogTitle>Edit Data Mitra</DialogTitle>
        </DialogHeader>

        <div class="max-h-[60vh] overflow-y-auto pr-4 space-y-6">
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
        </div>

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
