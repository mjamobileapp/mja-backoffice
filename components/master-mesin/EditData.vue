<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
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
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { toTypedSchema } from '@vee-validate/zod'
import { Loader2, PencilIcon } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { ref, computed } from 'vue'
import { toast } from 'vue-sonner'
import * as z from 'zod'

const props = defineProps<{
  espId: string
}>()

const emit = defineEmits<{
  (e: 'dataEdited'): void
}>()

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const currentUser = useCookie('currentUser')
const username = computed(() => currentUser.value?.username || 'no-email@example.com')

const accessToken = useCookie('accessToken')
const token = accessToken.value.token

const profileFormSchema = toTypedSchema(
  z.object({
    cabangId: z.number({
      required_error: 'Pilih Cabang terlebih dahulu',
    }),
    idMitra: z.number({
      required_error: 'Pilih Mitra terlebih dahulu',
    }),
    espId: z.string().min(1, 'ESP ID wajib diisi'),
    washer: z.boolean().default(false),
    dryer: z.boolean().default(false),
  })
)

const { handleSubmit, resetForm, setValues, values } = useForm({
  validationSchema: profileFormSchema,
  initialValues: {
    cabangId: 0,
    idMitra: 0,
    espId: '',
    washer: false,
    dryer: false,
  },
})

const isDialogOpen = ref(false)
const isSubmitting = ref(false)

const mitraList = ref<any[]>([])
const cabangList = ref<any[]>([])

async function fetchDataMitra() {
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/mitra`, {
      headers: { Authorization: `Bearer ${token}` },
    })

    const fetchedData = await response.json()

    mitraList.value = fetchedData.data.map((item: any) => ({
      ...item,
      idMitra: item.idRap || item.id,
      kodeMitra: item.kodeMitra,
      namaMitra: item.namaMitra,
    }))
  } catch (error) {
    console.error('Gagal mengambil data Mitra:', error)
    mitraList.value = []
  }
}

async function fetchDataCabangByMitra(idMitra: number) {
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/cabang/mitra/${idMitra}`, {
      headers: { Authorization: `Bearer ${token}` },
    })

    const fetchedData = await response.json()

    cabangList.value = fetchedData.data.map((item: any) => ({
      ...item,
      cabangId: item.id,
      kodeCabang: item.kodeCabang,
      namaCabang: item.namaCabang,
    }))
  } catch (error) {
    console.error('Gagal mengambil data Cabang by Mitra:', error)
    cabangList.value = []
  }
}

async function fetchData() {
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/mesin/esp/${props.espId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.ok) {
      const { data } = await response.json()

      setValues({
        cabangId: data.cabangId,
        idMitra: data.idMitra,
        espId: data.espId,
        washer: data.washer === 1 || data.washer === true,
        dryer: data.dryer === 1 || data.dryer === true,
      })

      console.log(JSON.stringify(data))
      await fetchDataCabangByMitra(Number(data.idMitra))
    } else {
      console.error('Gagal mengambil data. Status:', response.status)
    }
  } catch (error: any) {
    console.error('Fetch error:', error.message)
  }
}

async function openDialog() {
  isDialogOpen.value = true
  await fetchDataMitra()
  await fetchData()
}

function closeDialog() {
  isDialogOpen.value = false
  resetForm()
}

const onSubmit = handleSubmit(async () => {
  isSubmitting.value = true

  const dataForm = {
    idMitra: values.idMitra,
    cabangId: values.cabangId,
    espId: values.espId,
    washer: values.washer ? 1 : 0,
    dryer: values.dryer ? 1 : 0,
    updatedBy: username.value,
  }

  try {
    const response = await fetch(`${baseUrl}/api/backoffice/mesin/${props.espId}`, {
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
      toast.error('Gagal mengedit data')
    }
  } catch (error) {
    console.error('Error:', error)
    toast.error('Terjadi kesalahan saat mengedit data')
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
            <Button @click="openDialog" size="sm">
              <PencilIcon class="w-4 h-4" />
            </Button>
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
          <DialogTitle>Edit Data Mesin</DialogTitle>
        </DialogHeader>

        <div class="max-h-[60vh] overflow-y-auto pr-4 space-y-6">
          <FormField v-slot="{ value }" name="idMitra">
            <FormItem class="flex flex-col">
              <FormLabel>Pilih Mitra</FormLabel>

              <Popover :open="false">
                <PopoverTrigger as-child>
                  <FormControl>
                    <Button
                      disabled
                      variant="outline"
                      role="combobox"
                      :class="cn('justify-between', !value && 'text-muted-foreground')"
                    >
                      {{
                        value
                          ? mitraList.find(item => (item.idMitra || item.id) === value)?.namaMitra
                          : 'Pilih Mitra...'
                      }}
                      <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
              </Popover>

              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ value }" name="cabangId">
            <FormItem class="flex flex-col">
              <FormLabel>Pilih Cabang</FormLabel>

              <Popover :open="false">
                <PopoverTrigger as-child>
                  <FormControl>
                    <Button
                      disabled
                      variant="outline"
                      role="combobox"
                      :class="cn('justify-between', !value && 'text-muted-foreground')"
                    >
                      {{
                        value
                          ? cabangList.find(item => (item.cabangId || item.id) === value)
                              ?.namaCabang
                          : 'Pilih Cabang...'
                      }}
                      <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
              </Popover>

              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="espId">
            <FormItem>
              <FormLabel>ESP ID</FormLabel>
              <FormControl>
                <Input placeholder="A10:CF:12:3A:5B:7C" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <div class="space-y-3">
            <Label>Tipe Mesin</Label>

            <FormField v-slot="{ value, handleChange }" name="washer">
              <FormItem class="flex flex-row items-center gap-3 space-y-0">
                <FormControl>
                  <Checkbox :checked="value" @update:checked="handleChange" />
                </FormControl>
                <FormLabel class="font-normal"> Washer </FormLabel>
              </FormItem>
            </FormField>

            <FormField v-slot="{ value, handleChange }" name="dryer">
              <FormItem class="flex flex-row items-center gap-3 space-y-0">
                <FormControl>
                  <Checkbox :checked="value" @update:checked="handleChange" />
                </FormControl>
                <FormLabel class="font-normal"> Dryer </FormLabel>
              </FormItem>
            </FormField>
          </div>
        </div>

        <DialogFooter>
          <DialogClose as-child>
            <Button type="button" variant="secondary" @click="closeDialog"> Close </Button>
          </DialogClose>

          <Button v-if="isSubmitting" disabled>
            <Loader2 class="w-4 h-4 mr-2 animate-spin" />
            Updating..
          </Button>

          <Button v-else type="submit"> Update </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
