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

/* ===============================
   PROPS & EMIT
================================ */
const props = defineProps<{ id: number }>()
const emit = defineEmits(['dataEdited'])

/* ===============================
   CONFIG
================================ */
const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const isDialogOpen = ref(false)
const isSubmitting = ref(false)
const openProyek = ref(false)
const proyekList = ref<any[]>([])
const dateValue = ref<Date | null>(null)

/* ===============================
   USER & TOKEN
================================ */
const currentUser = useCookie('currentUser')
const username = computed(() => currentUser.value?.username || 'admin')
const accessToken = useCookie('accessToken')
const token = accessToken.value?.token

/* ===============================
   VALIDATION SCHEMA
================================ */
const formSchema = toTypedSchema(
  z.object({
    idProyek: z.number({ required_error: 'Pilih proyek terlebih dahulu' }),
    tanggal: z.date({ required_error: 'Tanggal wajib diisi' }),
    ygMengajukan: z.string().min(3, 'Nama pengaju minimal 3 karakter'),
    tujuan: z.string().min(3, 'Tujuan minimal 3 karakter'),
  })
)

const { handleSubmit, resetForm, setFieldValue, setValues } = useForm({
  validationSchema: formSchema,
  initialValues: {
    tanggal: new Date(),
    ygMengajukan: '',
    tujuan: '',
  },
})

/* ===============================
   FETCH PROYEK
================================ */
async function fetchDataProyek() {
  try {
    const res = await fetch(`${baseUrl}/proyek`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const result = await res.json()
    proyekList.value = Array.isArray(result.data) ? result.data : []
  } catch (err) {
    console.error('Gagal mengambil proyek:', err)
  }
}

/* ===============================
   FETCH PREMILINARY BY ID
================================ */
async function fetchData() {
  try {
    const res = await fetch(`${baseUrl}/premilinary/${props.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })

    if (!res.ok) return

    const result = await res.json()
    const data = result.data

    const tanggalObj = new Date(data.tanggal)

    setValues({
      idProyek: data.idProyek,
      tanggal: tanggalObj,
      ygMengajukan: data.ygMengajukan,
      tujuan: data.tujuan,
    })

    dateValue.value = tanggalObj
  } catch (err) {
    console.error('Fetch premilinary error:', err)
  }
}

/* ===============================
   DIALOG HANDLER
================================ */
async function openDialog() {
  isDialogOpen.value = true
  await fetchDataProyek()
  await fetchData()
}

function closeDialog() {
  isDialogOpen.value = false
  resetForm()
}

/* ===============================
   SUBMIT
================================ */
const onSubmit = handleSubmit(async formValues => {
  isSubmitting.value = true

  const payload = {
    ...formValues,
    createdBy: username.value,
  }

  try {
    const res = await fetch(`${baseUrl}/premilinary/${props.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) throw new Error('Gagal update data')

    toast.success('Premilinary berhasil diperbarui')
    emit('dataEdited')
    closeDialog()
  } catch (err: any) {
    toast.error(err.message || 'Terjadi kesalahan server')
  } finally {
    isSubmitting.value = false
  }
})
</script>

<template>
  <Dialog :open="isDialogOpen" @openChange="isDialogOpen = $event">
    <DialogTrigger as-child>
      <Button @click="openDialog" size="sm">
        <PencilIcon class="w-4 h-4" />
      </Button>
    </DialogTrigger>

    <DialogContent class="sm:max-w-[600px]">
      <form @submit.prevent="onSubmit">
        <DialogHeader>
          <DialogTitle>Edit Premilinary</DialogTitle>
        </DialogHeader>

        <div class="grid gap-6 py-4">
          <!-- PROYEK -->
          <FormField v-slot="{ value }" name="idProyek">
            <FormItem class="flex flex-col">
              <FormLabel>Proyek</FormLabel>
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
                          ? proyekList.find(p => p.id === value)?.namaPekerjaan
                          : 'Pilih Proyek...'
                      }}
                      <ChevronsUpDown class="ml-2 h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>

                <PopoverContent class="p-0">
                  <Command>
                    <CommandInput placeholder="Cari proyek..." />
                    <CommandEmpty>Proyek tidak ditemukan.</CommandEmpty>
                    <CommandList>
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

          <!-- TANGGAL -->
          <FormField name="tanggal">
            <FormItem class="flex flex-col">
              <FormLabel>Tanggal</FormLabel>
              <Datepicker
                v-model="dateValue"
                :enable-time-picker="false"
                auto-apply
                @update:model-value="val => setFieldValue('tanggal', val)"
              />
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="ygMengajukan">
            <FormItem>
              <FormLabel>Yang Mengajukan</FormLabel>
              <FormControl>
                <Input placeholder="Contoh: Budi Santoso" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <!-- TUJUAN -->
          <FormField v-slot="{ componentField }" name="tujuan">
            <FormItem>
              <FormLabel>Tujuan</FormLabel>
              <FormControl>
                <Textarea rows="3" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>

        <DialogFooter>
          <DialogClose as-child>
            <Button type="button" variant="secondary" @click="closeDialog"> Batal </Button>
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
