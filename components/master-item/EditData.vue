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
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toTypedSchema } from '@vee-validate/zod'
import { PencilIcon } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { ref, onMounted } from 'vue'
import { toast } from 'vue-sonner'
import * as z from 'zod'

import {
  CalendarDate,
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
  today,
} from '@internationalized/date'
import { toDate } from 'date-fns'

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const props = defineProps<{
  id: {
    type: Number
    required: true
  }
}>()
const emit = defineEmits<{
  (e: 'dataEdited'): void
}>()
const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

// onMounted(() => {
//   fetchData()
//   // console.log(props.item.code)
// })
const currentUser = useCookie('currentUser') // diasumsikan cookie bernilai object stringified
const username = computed(() => currentUser.value?.username || 'no-email@example.com')

const profileFormSchema = toTypedSchema(
  z.object({
    namaItem: z.string(),
    tipeItem: z.enum(['stok', 'non_stok'], {
      message: 'Tipe item harus Stok atau Non Stok',
    }),
  })
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
    const response = await fetch(`${baseUrl}/api/backoffice/item/${props.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.ok) {
      const { data } = await response.json()
      console.log(data)

      // --- 3. setValues ke VeeValidate ---
      setValues({
        namaItem: data.namaItem,
        tipeItem: data.tipeItem,
      })
    } else {
      console.error('Gagal mengambil data. Status:', response.status)
    }
  } catch (error) {
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
// get token====================
const accessToken = useCookie('accessToken')
const token = accessToken.value.token

const onSubmit = handleSubmit(async () => {
  isSubmitting.value = true
  try {
    const dataForm = {
      namaItem: values.namaItem,
      tipeItem: values.tipeItem,
      updatedBy: username.value,
    }

    console.log(JSON.stringify(dataForm))
    const response = await fetch(`${baseUrl}/api/backoffice/item/${props.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataForm),
    })

    if (response.ok) {
      emit('dataEdited')
      toast.success('Data Berhasil Di Update')
      closeDialog()
      resetForm()
    } else {
      console.error('Gagal mengedit data')
    }
  } catch (error) {
    console.error('Error:', error)
  } finally {
    isSubmitting.value = false
  }
})
</script>

<template>
  <Dialog :open="isDialogOpen" @openChange="isDialogOpen = $event">
    <DialogTrigger as-child>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button @click="openDialog" size="sm"><PencilIcon class="w-4 h-4" /></Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit Data</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[800px] [&>button]:hidden">
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
              Updating..
            </Button>
          </span>
          <Button type="submit" v-else>Update </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
