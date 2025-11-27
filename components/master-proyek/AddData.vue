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
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

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
    namaPekerjaan: z.string(),
    noKontrak: z.string(),
    nilaiKontrak: z.number(),
    lokasi: z.string(),
    tglMulai: z.date({
      required_error: 'Please select a valid date.',
      invalid_type_error: 'Please select a valid date.',
    }),
    tglSelesai: z.date({
      required_error: 'Please select a valid date.',
      invalid_type_error: 'Please select a valid date.',
    }),
  })
)

const dateMulai = ref(null)
const dateSelesai = ref(null)

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
    namaPekerjaan: values.namaPekerjaan,
    noKontrak: values.noKontrak,
    nilaiKontrak: values.nilaiKontrak,
    lokasi: values.lokasi,
    tglMulai: values.tglMulai,
    tglSelesai: values.tglSelesai,
    createdBy: username.value,
    createdDate: new Date(),
  }
  isDialogOpen.value = false
  console.log(JSON.stringify(dataForm))
  try {
    const response = await fetch(`${baseUrl}/proyek`, {
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
          <DialogTitle>Add Data Proyek</DialogTitle>
        </DialogHeader>

        <div class="max-h-[60vh] overflow-y-auto pr-4 space-y-6">
          <!-- 🧱 Field: Nama Pekerjaan -->
          <FormField v-slot="{ componentField }" name="namaPekerjaan">
            <FormItem>
              <FormLabel>Nama Pekerjaan</FormLabel>
              <FormControl>
                <Input type="text" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <!-- 🧱 Field: Nomor Kontrak -->
          <FormField v-slot="{ componentField }" name="noKontrak">
            <FormItem>
              <FormLabel>Nomor Kontrak</FormLabel>
              <FormControl>
                <Input type="text" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <!-- 🧱 Field: Nilai Kontrak -->
          <FormField v-slot="{ field }" name="nilaiKontrak">
            <FormItem>
              <FormLabel>Nilai Kontrak</FormLabel>
              <FormControl>
                <div class="space-y-1">
                  <Input class="mb-4" type="number" v-bind="field" />

                  <!-- ✅ Tampilan dalam format Rupiah -->
                  <p class="text-sm text-muted-foreground">
                    {{
                      field.value
                        ? 'Rp ' + new Intl.NumberFormat('id-ID').format(Number(field.value))
                        : 'Rp 0'
                    }}
                  </p>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <!-- 🧱 Field: Lokasi -->
          <FormField v-slot="{ componentField }" name="lokasi">
            <FormItem>
              <FormLabel>Lokasi</FormLabel>
              <FormControl>
                <Textarea v-bind="componentField"></Textarea>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <!-- 🗓️ Field: Tanggal Mulai -->
          <FormField v-slot="{ field, value }" name="tglMulai">
            <FormItem class="flex flex-col">
              <FormLabel>Tanggal Mulai</FormLabel>
              <Datepicker
                v-model="dateMulai"
                :enable-time-picker="false"
                :format="'dd-MM-yyyy'"
                @update:model-value="
                  val => {
                    dateMulai = val
                    field.onChange(val) // <--- ini penting
                  }
                "
              />
              <FormMessage />
            </FormItem>
            <input type="hidden" v-bind="field" />
          </FormField>

          <!-- 🗓️ Field: Tanggal Selesai -->
          <FormField v-slot="{ field, value }" name="tglSelesai">
            <FormItem class="flex flex-col">
              <FormLabel>Tanggal Selesai</FormLabel>
              <Datepicker
                v-model="dateSelesai"
                :enable-time-picker="false"
                :format="'dd-MM-yyyy'"
                @update:model-value="
                  val => {
                    dateSelesai = val
                    field.onChange(val) // <--- ini penting
                  }
                "
              />
              <FormMessage />
            </FormItem>
            <input type="hidden" v-bind="field" />
          </FormField>
        </div>

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
