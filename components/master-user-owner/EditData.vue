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

const props = defineProps<{ id: number }>()

const emit = defineEmits<{
  (e: 'dataEdited'): void
}>()

const currentUser = useCookie<any>('currentUser') // diasumsikan cookie bernilai object stringified
const username = computed(() => currentUser.value?.username || 'no-email@example.com')

const profileFormSchema = toTypedSchema(
  z.object({
    namaLengkap: z.string(),
    username: z.string(),
    // role: z.string(),
    idMitra: z.number({ required_error: 'Pilih Mitra terlebih dahulu' }),
    noTelp: z.string(),
    email: z.string().min(1, 'Email wajib diisi').email('Format email tidak valid'),
  }),
)

const { handleSubmit, resetForm, setValues, values, setFieldValue } = useForm({
  validationSchema: profileFormSchema,
  initialValues: {
    namaLengkap: '',
    username: '',
    idMitra: 0,
    // role: '',
    noTelp: '',
    email: '', // Use prop value directly as fallback
  },
})

const isDialogOpen = ref(false)

async function fetchData() {
  try {
    const res = await apiFetch(`/api/backoffice/userowner/${props.id}`)
    const data = res?.data

    setValues({
      namaLengkap: data.namaLengkap,
      username: data.username,
      email: data.email,
      noTelp: data.noTelp,
      idMitra: data.idMitra,
      // role: data.role,
    })
  }
  catch (error) {
    console.error('Fetch error:', error.message)
    // Tampilkan notifikasi error ke user jika perlu
  }
}

async function openDialog() {
  isDialogOpen.value = true
  await fetchData()
  await fetchDataMitra()
}

function closeDialog() {
  isDialogOpen.value = false
  resetForm()
}

const mitraList = ref<any[]>([])
const openMitra = ref(false)

const isSubmitting = ref(false)

async function fetchDataMitra() {
  try {
    const fetchedData = await apiFetch('/api/backoffice/mitra')
    const list = Array.isArray(fetchedData?.data) ? fetchedData.data : []
    mitraList.value = list.map(item => ({
      ...item,
      idMitra: item.idRap || item.id, // Normalisasi agar template tidak bingung
      kodeMitra: item.kodeMitra, // Normalisasi agar template tidak bingung
      namaMitra: item.namaMitra,
    }))
  }
  catch (error) {
    console.error('Gagal mengambil data Mitra:', error)
  }
}

// 🔹 Logic saat Mitra dipilih
function onSelectMitra(rap: any) {
  setFieldValue('idMitra', rap.idMitra || rap.id)
  openMitra.value = false
}

const onSubmit = handleSubmit(async () => {
  isSubmitting.value = true
  try {
    const dataForm = {
      namaLengkap: values.namaLengkap,
      idMitra: values.idMitra,
      username: values.username,
      // role: values.role,
      noTelp: values.noTelp,
      email: values.email,
      updatedBy: username.value,
    }

    await apiFetch(`/api/backoffice/userowner/${props.id}`, {
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
      <form class="space-y-6" @submit.prevent="onSubmit">
        <DialogHeader>
          <DialogTitle>Edit Data User Owner</DialogTitle>
        </DialogHeader>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                <Input type="text" v-bind="componentField" disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <!-- <FormField v-slot="{ componentField }" name="role">
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <Input type="text" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField> -->
          <FormField v-slot="{ value }" name="idMitra">
            <FormItem>
              <FormLabel>Pilih Mitra</FormLabel>
              <Popover v-model:open="openMitra">
                <PopoverTrigger as-child>
                  <FormControl>
                    <Button
                      disabled
                      variant="outline"
                      role="combobox"
                      :class="cn('h-10 w-full justify-between', !value && 'text-muted-foreground')"
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
                                value === (item.idMitra || item.id) ? 'opacity-100' : 'opacity-0',
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
              <FormControl>
                <Input type="tel" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="email">
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl> <Input type="email" placeholder="nama@domain.com" v-bind="componentField" /> </FormControl>
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
