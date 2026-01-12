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
import { Textarea } from '@/components/ui/textarea'
import { toTypedSchema } from '@vee-validate/zod'
import { PencilIcon, Loader2, ChevronsUpDown, Check } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { ref, computed } from 'vue'
import { toast } from 'vue-sonner'
import * as z from 'zod'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { cn } from '@/lib/utils'

const props = defineProps<{
  id: {
    type: Number
    required: true
  }
  disabled: boolean
}>()

const emit = defineEmits<{
  (e: 'dataEdited'): void
}>()

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase
const isDialogOpen = ref(false)
const isSubmitting = ref(false)
const openProyek = ref(false)
const proyekList = ref([])
const dateRap = ref(null)

const currentUser = useCookie('currentUser')
const username = computed(() => currentUser.value?.username || 'admin')
const accessToken = useCookie('accessToken')
const token = accessToken.value?.token

// 🔹 SCHEMA VALIDASI RAP
const profileFormSchema = toTypedSchema(
  z.object({
    idProyek: z.number({ required_error: 'Pilih proyek' }),
    namaRap: z.string().min(3, 'Nama RAP minimal 3 karakter'),
    tanggal: z.date({ required_error: 'Tanggal wajib diisi' }),
    keterangan: z.string().optional().nullable(),
  })
)

const { handleSubmit, resetForm, setValues, setFieldValue, values } = useForm({
  validationSchema: profileFormSchema,
  initialValues: {
    idProyek: 0,
    namaRap: '',
    tanggal: new Date(),
    keterangan: '',
  },
})

async function fetchDataProyek() {
  try {
    const response = await fetch(`${baseUrl}/proyek`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const fetchedData = await response.json()
    proyekList.value = Array.isArray(fetchedData.data) ? fetchedData.data : []
  } catch (error) {
    console.error('Gagal mengambil data proyek:', error)
  }
}

async function fetchData() {
  try {
    const response = await fetch(`${baseUrl}/rap/${props.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })

    if (response.ok) {
      const result = await response.json()
      const data = result.data // Asumsi API mengembalikan array atau object tunggal

      console.log(data)
      const tanggalObj = new Date(data.tanggal)

      setValues({
        idProyek: data.idProyek,
        namaRap: data.namaRap,
        tanggal: tanggalObj,
        keterangan: data.keterangan,
      })

      dateRap.value = tanggalObj
    }
  } catch (error: any) {
    console.error('Fetch error:', error.message)
  }
}

async function openDialog() {
  isDialogOpen.value = true
  await fetchDataProyek()
  await fetchData()
}

function closeDialog() {
  isDialogOpen.value = false
  resetForm()
}

const onSubmit = handleSubmit(async formValues => {
  isSubmitting.value = true
  try {
    const payload = {
      ...formValues,
      createdBy: username.value,
    }

    const response = await fetch(`${baseUrl}/rap/${props.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })

    if (response.ok) {
      toast.success('RAP Berhasil Diperbarui')
      emit('dataEdited')
      closeDialog()
    } else {
      toast.error('Gagal memperbarui data')
    }
  } catch (error) {
    console.error('Error:', error)
    toast.error('Terjadi kesalahan server')
  } finally {
    isSubmitting.value = false
  }
})
</script>

<template>
  <Dialog :open="isDialogOpen" @openChange="isDialogOpen = $event">
    <DialogTrigger as-child>
      <Button @click="openDialog" size="sm" :disabled="props.disabled">
        <PencilIcon class="w-4 h-4" />
      </Button>
    </DialogTrigger>

    <DialogContent class="sm:max-w-[600px]">
      <form @submit.prevent="onSubmit">
        <DialogHeader>
          <DialogTitle>Edit Header RAP</DialogTitle>
        </DialogHeader>

        <div class="grid gap-6 py-4">
          <FormField v-slot="{ value }" name="idProyek">
            <FormItem class="flex flex-col">
              <FormLabel>Pilih Proyek</FormLabel>
              <Popover v-model:open="openProyek">
                <PopoverTrigger as-child>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      :class="cn('justify-between', !value && 'text-muted-foreground')"
                    >
                      {{
                        value
                          ? proyekList.find(item => item.id === value)?.namaPekerjaan
                          : 'Select Proyek...'
                      }}
                      <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent class="w-[var(--radix-popover-trigger-width)] p-0">
                  <Command>
                    <CommandInput placeholder="Cari proyek..." />
                    <CommandList>
                      <CommandEmpty>No Proyek found.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem
                          v-for="item in proyekList"
                          :key="item.id"
                          :value="item.namaPekerjaan"
                          @select="
                            () => {
                              setFieldValue('idProyek', item.id)
                              openProyek = false
                            }
                          "
                        >
                          <Check
                            :class="
                              cn('mr-2 h-4 w-4', value === item.id ? 'opacity-100' : 'opacity-0')
                            "
                          />
                          {{ item.namaPekerjaan }}
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="namaRap">
            <FormItem>
              <FormLabel>Nama RAP</FormLabel>
              <FormControl>
                <Input v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ field }" name="tanggal">
            <FormItem class="flex flex-col">
              <FormLabel>Tanggal</FormLabel>
              <Datepicker
                v-model="dateRap"
                :enable-time-picker="false"
                :format="'dd-MM-yyyy'"
                auto-apply
                @update:model-value="
                  val => {
                    setFieldValue('tanggal', val)
                  }
                "
              />
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="keterangan">
            <FormItem>
              <FormLabel>Keterangan</FormLabel>
              <FormControl>
                <Textarea v-bind="componentField" rows="3" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>

        <DialogFooter>
          <DialogClose as-child>
            <Button type="button" variant="secondary" @click="closeDialog">Batal</Button>
          </DialogClose>
          <Button type="submit" :disabled="isSubmitting">
            <Loader2 v-if="isSubmitting" class="w-4 h-4 mr-2 animate-spin" />
            Update
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
