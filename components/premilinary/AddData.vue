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
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { toTypedSchema } from '@vee-validate/zod'
import { ChevronsUpDown, Loader2, Check } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { ref, computed } from 'vue'
import * as z from 'zod'
import { toast } from '~/components/ui/toast'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const emit = defineEmits(['dataAdded'])

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const currentUser = useCookie('currentUser')
const username = computed(() => currentUser.value?.username || 'admin')

const proyekList = ref<any[]>([])
const isSubmitting = ref(false)
const isDialogOpen = ref(false)
const openProyek = ref(false)

/* ===============================
   SCHEMA VALIDASI PREMILINARY
================================ */
const formSchema = toTypedSchema(
  z.object({
    idProyek: z.number({ required_error: 'Pilih proyek terlebih dahulu' }),
    tanggal: z.date({ required_error: 'Tanggal wajib diisi' }),
    ygMengajukan: z.string().min(3, 'Nama pengaju minimal 3 karakter'),
    tujuan: z.string().min(3, 'Tujuan minimal 3 karakter'),
  })
)

const { handleSubmit, resetForm, setFieldValue } = useForm({
  validationSchema: formSchema,
  initialValues: {
    tanggal: new Date(),
    ygMengajukan: '',
    tujuan: '',
  },
})

const dateValue = ref(new Date())

/* ===============================
   TOKEN
================================ */
const accessToken = useCookie('accessToken')
const token = accessToken.value?.token

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

async function openDialog() {
  isDialogOpen.value = true
  await fetchDataProyek()
}

function closeDialog() {
  isDialogOpen.value = false
  resetForm()
  dateValue.value = new Date()
}

/* ===============================
   SUBMIT
================================ */
const onSubmit = handleSubmit(async formValues => {
  isSubmitting.value = true

  const payload = {
    ...formValues,
    // ygMengajukan: username.value,
    createdBy: username.value,
  }

  try {
    const response = await fetch(`${baseUrl}/premilinary`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const err = await response.json()
      throw new Error(err.message || 'Gagal menyimpan data')
    }

    toast({
      title: 'Success',
      description: 'Premilinary berhasil dibuat',
    })

    emit('dataAdded')
    closeDialog()
  } catch (error: any) {
    toast({
      title: 'Error',
      description: error.message || 'Terjadi kesalahan sistem',
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
      <Button @click="openDialog">Add New Premilinary</Button>
    </DialogTrigger>

    <DialogContent class="sm:max-w-[600px]">
      <form @submit.prevent="onSubmit">
        <DialogHeader>
          <DialogTitle>Tambah Premilinary Baru</DialogTitle>
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
          <FormField v-slot="{ field }" name="tanggal">
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
                <Textarea
                  placeholder="Contoh: Survey awal lokasi proyek"
                  rows="3"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>

        <DialogFooter>
          <Button type="button" variant="secondary" @click="closeDialog"> Batal </Button>
          <Button type="submit" :disabled="isSubmitting">
            <Loader2 v-if="isSubmitting" class="mr-2 h-4 w-4 animate-spin" />
            Simpan
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
