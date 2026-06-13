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
    namaLengkap: z.string(),
    username: z.string(),
    role: z.string(),
    idMitra: z.number({ required_error: 'Pilih Mitra terlebih dahulu' }),
    noTelp: z.string(),
    email: z.string(),
  })
)

const isSubmitting = ref(false)

const { handleSubmit, resetForm, setFieldValue } = useForm({
  validationSchema: profileFormSchema,
})

const isDialogOpen = ref(false)

async function openDialog() {
  isDialogOpen.value = true
  await fetchDataMitra()
}

function closeDialog() {
  isDialogOpen.value = false
  resetForm()
}

const mitraList = ref([])
const openMitra = ref(false)

// get token====================
const accessToken = useCookie('accessToken')
const token = accessToken.value.token

async function fetchDataMitra() {
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/mitra`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const fetchedData = await response.json()
    mitraList.value = fetchedData.data.map(item => ({
      ...item,
      idMitra: item.idRap || item.id, // Normalisasi agar template tidak bingung
      kodeMitra: item.kodeMitra, // Normalisasi agar template tidak bingung
      namaMitra: item.namaMitra,
    }))
  } catch (error) {
    console.error('Gagal mengambil data Mitra:', error)
  }
}

// 🔹 Logic saat Mitra dipilih
function onSelectMitra(rap: any) {
  setFieldValue('idMitra', rap.idMitra || rap.id)
  openMitra.value = false
}

const onSubmit = handleSubmit(async (values: any) => {
  isSubmitting.value = true
  const dataForm = {
    namaLengkap: values.namaLengkap,
    idMitra: values.idMitra,
    username: values.username,
    role: values.role,
    noTelp: values.noTelp,
    email: values.email,
    createdBy: username.value,
  }
  isDialogOpen.value = false
  console.log(JSON.stringify(dataForm))
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/userowner`, {
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
          <DialogTitle>Add Data User Owner</DialogTitle>
        </DialogHeader>

        <div class="max-h-[60vh] overflow-y-auto pr-4 space-y-6">
          <FormField v-slot="{ componentField }" name="namaLengkap">
            <FormItem>
              <FormLabel>Nama Lengkap</FormLabel>
              <FormControl>
                <Input type="text" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="username">
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="text" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="role">
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <Input type="text" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ value }" name="idMitra">
            <FormItem class="flex flex-col">
              <FormLabel>Pilih Mitra</FormLabel>
              <Popover v-model:open="openMitra">
                <PopoverTrigger as-child>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      :class="cn('justify-between', !value && 'text-muted-foreground')"
                    >
                      {{
                        value
                          ? mitraList.find(r => (r.idMitra || r.id) === value)?.namaMitra
                          : 'Pilih Mitra...'
                      }}
                      <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent class="w-[var(--radix-popover-trigger-width)] p-0">
                  <Command>
                    <CommandInput placeholder="Cari..." />
                    <CommandList>
                      <CommandEmpty>Mitra tidak ditemukan.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem
                          v-for="item in mitraList"
                          :key="item.id"
                          :value="`${item.namaMitra}`"
                          @select="onSelectMitra(item)"
                        >
                          <Check
                            :class="
                              cn(
                                'mr-2 h-4 w-4',
                                value === (item.idMitra || item.id) ? 'opacity-100' : 'opacity-0'
                              )
                            "
                          />
                          {{ item.kodeMitra }} - {{ item.namaMitra }}
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="noTelp">
            <FormItem>
              <FormLabel>No Telepon</FormLabel>
              <FormControl> <Input v-bind="componentField" /> </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="email">
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl> <Input v-bind="componentField" /> </FormControl>
              <FormMessage />
            </FormItem>
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
