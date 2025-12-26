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
import { Textarea } from '@/components/ui/textarea' // Pastikan import Textarea ada
import { cn } from '@/lib/utils'
import { toTypedSchema } from '@vee-validate/zod'
import { ChevronsUpDown, Loader2, Check } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { h, ref, onMounted, computed } from 'vue'
import * as z from 'zod'
import { toast } from '~/components/ui/toast'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const emit = defineEmits(['dataAdded'])

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const currentUser = useCookie('currentUser')
const username = computed(() => currentUser.value?.username || 'admin')

const proyekList = ref([])
const isSubmitting = ref(false)
const isDialogOpen = ref(false)
const openProyek = ref(false)

// 🔹 SCHEMA VALIDASI RAP
const profileFormSchema = toTypedSchema(
  z.object({
    idProyek: z.number({ required_error: 'Pilih proyek terlebih dahulu' }),
    namaRap: z.string().min(3, 'Nama RAP minimal 3 karakter'),
    tanggal: z.date({ required_error: 'Tanggal wajib diisi' }),
    keterangan: z.string().optional().nullable(),
  })
)

const { handleSubmit, resetForm, setFieldValue, values } = useForm({
  validationSchema: profileFormSchema,
  initialValues: {
    tanggal: new Date(),
  },
})

// State untuk datepicker (local view)
const dateRap = ref(new Date())

async function openDialog() {
  isDialogOpen.value = true
  await fetchDataProyek()
}

function closeDialog() {
  isDialogOpen.value = false
  resetForm()
  dateRap.value = new Date()
}

// Token access
const accessToken = useCookie('accessToken')
const token = accessToken.value?.token

async function fetchDataProyek() {
  try {
    const response = await fetch(`${baseUrl}/proyek`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    })
    const result = await response.json()
    proyekList.value = Array.isArray(result.data) ? result.data : []
  } catch (error) {
    console.error('Gagal mengambil proyek:', error)
  }
}

const onSubmit = handleSubmit(async formValues => {
  isSubmitting.value = true

  const payload = {
    ...formValues,
    createdBy: username.value,
  }

  try {
    const response = await fetch(`${baseUrl}/rap`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })

    if (response.ok) {
      toast({
        title: 'Success',
        description: 'Header RAP berhasil dibuat.',
      })
      emit('dataAdded')
      closeDialog()
    } else {
      const err = await response.json()
      throw new Error(err.message || 'Gagal menyimpan data')
    }
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
      <Button @click="openDialog">Add New RAP</Button>
    </DialogTrigger>

    <DialogContent class="sm:max-w-[600px]">
      <form @submit.prevent="onSubmit">
        <DialogHeader>
          <DialogTitle>Tambah Header RAP Baru</DialogTitle>
        </DialogHeader>

        <div class="grid gap-6 py-4">
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
                          ? proyekList.find(item => item.id === value)?.namaPekerjaan
                          : 'Pilih Proyek...'
                      }}
                      <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent class="w-[var(--radix-popover-trigger-width)] p-0">
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

          <FormField v-slot="{ componentField }" name="namaRap">
            <FormItem>
              <FormLabel>Nama/Judul RAP</FormLabel>
              <FormControl>
                <Input placeholder="Contoh: RAP Pekerjaan Sipil Lantai 1" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ field }" name="tanggal">
            <FormItem class="flex flex-col">
              <FormLabel>Tanggal RAP</FormLabel>
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
              <FormLabel>Keterangan (Opsional)</FormLabel>
              <FormControl>
                <Textarea placeholder="Catatan tambahan..." v-bind="componentField" rows="3" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>

        <DialogFooter>
          <Button type="button" variant="secondary" @click="closeDialog">Batal</Button>
          <Button :disabled="isSubmitting" type="submit">
            <Loader2 v-if="isSubmitting" class="w-4 h-4 mr-2 animate-spin" />
            Simpan
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
