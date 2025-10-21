<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import {
  CalendarDate,
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
  today,
} from '@internationalized/date'
import { toDate } from 'date-fns'
import * as z from 'zod'
import { toast } from '@/components/ui/toast'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { ChevronsUpDown, Check } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { PencilIcon } from 'lucide-vue-next'

const open = ref(false)
const props = defineProps<{
  id: {
    type: Number
    required: true
  }
}>()

const emit = defineEmits<{
  (e: 'dataEdited'): void
}>()

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const dateValue = ref<DateValue | undefined>()

const isDialogOpen = ref(false)
const codes = ref<{ id: string; code: string }[]>([])
const direksis = [
  { nama: 'DIREKTUR UTAMA', direksi: 'DIREKTUR UTAMA' },
  {
    nama: 'DIREKTUR KEUANGAN DAN MANAJEMEN RISIKO',
    direksi: 'DIREKTUR KEUANGAN DAN MANAJEMEN RISIKO',
  },
  { nama: 'DIREKTUR OPERASI PEMBANGKIT BATUBARA', direksi: 'DIREKTUR OPERASI PEMBANGKIT BATASARA' },
  { nama: 'DIREKTUR OPERASI PEMBANGKIT GAS', direksi: 'DIREKTUR OPERASI PEMBANGKIT GAS' },
  {
    nama: 'DIREKTUR MANAJEMEN HUMAN CAPITAL DAN ADMINISTRASI',
    direksi: 'DIREKTUR MANAJEMEN HUMAN CAPITAL DAN ADMINISTRASI',
  },
  {
    nama: 'DIREKTUR PENGEMBANGAN BISNIS DAN NIAGA',
    direksi: 'DIREKTUR PENGEMBANGAN BISNIS DAN NIAGA',
  },
] as const

const formSchema = toTypedSchema(
  z.object({
    acara: z.string().min(1, 'Acara wajib diisi'),
    folderCode: z.string().min(1, 'Folder Code wajib diisi'),
    idCode: z.string().min(1, 'Code wajib diisi'),
    direksi: z.string().min(1, 'Direksi wajib dipilih'),
    tglAcara: z
      .string()
      .datetime()
      .optional()
      .refine(date => date !== undefined, 'Please select a valid date.'),
  })
)

const { handleSubmit, resetForm, setValues, setFieldValue } = useForm({
  validationSchema: formSchema,
  initialValues: {
    acara: '',
    idCode: '',
    direksi: '',
    folderCode: '',
  },
})

async function openDialog() {
  isDialogOpen.value = true
  await fetchData()
}

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

// get token====================
const accessToken = useCookie('accessToken')
const token = accessToken.value.token

async function fetchData() {
  try {
    const response = await fetch(`${baseUrl}/knowledgeRepo/${props.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.ok) {
      const { data } = await response.json()
      const dateAcara = toDate(data.tglAcara)
      setValues({
        acara: data.acara,
        idCode: String(data.idCode),
        direksi: data.direksi,
        folderCode: data.folderCode,
        tglAcara: dateAcara.toISOString(),
      })
      // set nilai dateValue dari tglAcara untuk menampilkan di calendar
      dateValue.value = new CalendarDate(
        dateAcara.getFullYear(),
        dateAcara.getMonth() + 1,
        dateAcara.getDate()
      )
    } else {
      console.error('Gagal mengambil data')
    }
  } catch (error) {
    console.error('Fetch error:', error)
  }
}

async function getDataMasterCode() {
  try {
    const response = await fetch(`${baseUrl}/masterCode`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const json = await response.json()
    codes.value = json.data
  } catch (err) {
    console.error('Gagal mengambil kode:', err)
  }
}

// onMounted(() => {
//   getDataMasterCode()
//   // console.log('id:' + props.id)
// })

watch(isDialogOpen, async open => {
  if (open) {
    await getDataMasterCode()
  } else {
    resetForm()
  }
})

const currentUser = useCookie('currentUser')
const email = computed(() => currentUser.value?.email || 'no-email@example.com')

const isSubmitting = ref(false)

const onSubmit = handleSubmit(async values => {
  isSubmitting.value = true
  try {
    const dataToSend = {
      ...values,
      createdBy: email.value,
      createdDate: new Date(),
    }
    // console.log(dataToSend)
    const response = await fetch(`${baseUrl}/knowledgeRepo/${props.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(dataToSend),
    })

    if (!response.ok) throw new Error('Gagal menyimpan data')

    toast({
      title: 'Success',
      description: 'Data berhasil disimpan',
    })
    setTimeout(() => {
      emit('dataEdited')
      resetForm()
      isDialogOpen.value = false
    }, 300)
  } catch (error) {
    console.log(error)
    toast({
      title: 'Error',
      description: 'Terjadi kesalahan saat menyimpan data',
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
      <Button class="mr-2" @click="openDialog"
        ><PencilIcon class="w-4 h-4 mr-2" /> Edit Data</Button
      >
    </DialogTrigger>
    <DialogContent class="sm:max-w-[800px] [&>button]:hidden">
      <DialogHeader>
        <DialogTitle>Edit Knowledge Repositori</DialogTitle>
      </DialogHeader>
      <form class="space-y-4" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="acara">
          <FormItem>
            <FormLabel>Acara</FormLabel>
            <FormControl>
              <Input type="text" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ field, value }" name="tglAcara">
          <FormItem class="flex flex-col">
            <FormLabel>Tanggal Acara</FormLabel>
            <Popover>
              <PopoverTrigger as-child>
                <FormControl>
                  <Button
                    variant="outline"
                    :class="
                      cn('justify-start text-left font-normal', !value && 'text-muted-foreground')
                    "
                  >
                    <RadixIconsCalendar class="mr-2 h-4 w-4 opacity-50" />
                    <span>{{
                      value ? df.format(toDate(dateValue, getLocalTimeZone())) : 'Pick a date'
                    }}</span>
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent class="p-0">
                <Calendar
                  v-model:placeholder="placeholder"
                  v-model="dateValue"
                  calendar-label="Date of birth"
                  initial-focus
                  @update:model-value="
                    v => {
                      if (v) {
                        dateValue = v
                        setFieldValue('tglAcara', toDate(v).toISOString())
                      } else {
                        dateValue = undefined
                        setFieldValue('tglAcara', undefined)
                      }
                    }
                  "
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
          <input type="hidden" v-bind="field" />
        </FormField>
        <FormField v-slot="{ value }" name="idCode">
          <FormItem class="flex flex-col">
            <FormLabel>Code</FormLabel>

            <Popover v-model:open="open">
              <PopoverTrigger as-child>
                <FormControl>
                  <Button
                    variant="outline"
                    role="combobox"
                    :aria-expanded="open"
                    :class="cn('justify-between', !value && 'text-muted-foreground')"
                  >
                    {{ value ? codes.find(item => item.id === value)?.code : 'Select Code...' }}

                    <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent class="p-0">
                <Command>
                  <CommandInput placeholder="Search Code..." />
                  <CommandEmpty>No Code found.</CommandEmpty>
                  <CommandList>
                    <CommandGroup>
                      <CommandItem
                        v-for="item in codes"
                        :key="item.id"
                        :value="item.code"
                        @select="
                          () => {
                            setFieldValue('idCode', item.id)
                            open = false
                          }
                        "
                      >
                        <Check
                          :class="
                            cn('mr-2 h-4 w-4', value === item.id ? 'opacity-100' : 'opacity-0')
                          "
                        />
                        {{ item.code }}
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="direksi">
          <FormItem>
            <FormLabel>Direksi</FormLabel>
            <Select v-bind="componentField">
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Direksi" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem v-for="item in direksis" :key="item.nama" :value="String(item.nama)">
                    {{ item.nama }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="folderCode">
          <FormItem>
            <FormLabel>Folder Code</FormLabel>
            <FormControl>
              <Input type="text" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <DialogFooter>
          <DialogClose as-child>
            <Button type="button" variant="secondary" @click="isDialogOpen = false">Close</Button>
          </DialogClose>
          <Button type="submit" :disabled="isSubmitting">
            <Loader2 v-if="isSubmitting" class="w-4 h-4 mr-2 animate-spin" />
            {{ isSubmitting ? 'Updating..' : 'Update' }}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
