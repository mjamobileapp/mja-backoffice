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

import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

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

// const editedItem = ref({ ...props.item })
// console.log(props.id)
// onMounted(() => {
//   fetchData()
//   // console.log(props.item.code)
// })
const currentUser = useCookie('currentUser') // diasumsikan cookie bernilai object stringified
const username = computed(() => currentUser.value?.username || 'no-email@example.com')

const profileFormSchema = toTypedSchema(
  z.object({
    idMitra: z.number({ required_error: 'Pilih Mitra terlebih dahulu' }),
    namaCabang: z.string(),
    alamatCabang: z.string(),
  })
)

const { handleSubmit, resetForm, setValues, values, setFieldValue } = useForm({
  validationSchema: profileFormSchema,
  initialValues: {
    idMitra: '',
    namaCabang: '',
    alamatCabang: '',
  },
})

const isDialogOpen = ref(false)

// Asumsi: dateMulai dan dateSelesai adalah ref() untuk Calendar
// Asumsi: toDate adalah fungsi untuk konversi ke objek Date JS
// Asumsi: setValues adalah fungsi dari VeeValidate useForm

const dateMulai = ref(null)
const dateSelesai = ref(null)

async function fetchData() {
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/cabang/${props.id}`, {
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
        namaCabang: data.namaCabang,
        alamatCabang: data.alamatCabang,
        idMitra: data.idMitra,
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
  await fetchDataMitra()
}

function closeDialog() {
  isDialogOpen.value = false
  resetForm()
}

const mitraList = ref([])
const openMitra = ref(false)

const isSubmitting = ref(false)
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
const onSubmit = handleSubmit(async () => {
  isSubmitting.value = true
  try {
    const dataForm = {
      idMitra: values.idMitra,
      namaCabang: values.namaCabang,
      alamatCabang: values.alamatCabang,
      updatedBy: username.value,
    }

    const response = await fetch(`${baseUrl}/api/backoffice/cabang/${props.id}`, {
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
          <DialogTitle>Edit Data Proyek</DialogTitle>
        </DialogHeader>

        <!-- <div class="max-h-[60vh] overflow-y-auto pr-4 space-y-6"> -->
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
        <FormField v-slot="{ componentField }" name="namaCabang">
          <FormItem>
            <FormLabel>Nama Cabang</FormLabel>
            <FormControl>
              <Input type="text" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="alamatCabang">
          <FormItem>
            <FormLabel>Alamat Cabang</FormLabel>
            <FormControl>
              <Textarea v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <!-- </div> -->

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
