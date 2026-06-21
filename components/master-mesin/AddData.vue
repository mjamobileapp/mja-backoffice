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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { toTypedSchema } from '@vee-validate/zod'
import { Loader2 } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { ref, computed } from 'vue'
import * as z from 'zod'
import { toast } from '~/components/ui/toast'

const emit = defineEmits(['dataAdded'])

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const currentUser = useCookie('currentUser')
const username = computed(() => currentUser.value?.username || 'no-username@example.com')

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

const isSubmitting = ref(false)
const isDialogOpen = ref(false)

const mitraList = ref<any[]>([])
const cabangList = ref<any[]>([])

const openMitra = ref(false)
const openCabang = ref(false)

const { handleSubmit, resetForm, setFieldValue } = useForm({
  validationSchema: profileFormSchema,
  initialValues: {
    washer: false,
    dryer: false,
  },
})

async function openDialog() {
  isDialogOpen.value = true
  await fetchDataMitra()
}

function closeDialog() {
  isDialogOpen.value = false
  resetForm()
}

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

async function onSelectMitra(item: any) {
  const selectedIdMitra = item.idMitra || item.id

  setFieldValue('idMitra', selectedIdMitra)
  setFieldValue('cabangId', undefined)

  cabangList.value = []
  openMitra.value = false

  await fetchDataCabangByMitra(selectedIdMitra)
}

function onSelectCabang(item: any) {
  setFieldValue('cabangId', item.cabangId || item.id)
  openCabang.value = false
}

const onSubmit = handleSubmit(async (values: any) => {
  isSubmitting.value = true

  const dataForm = {
    idMitra: values.idMitra,
    cabangId: values.cabangId,
    espId: values.espId,
    washer: values.washer ? 1 : 0,
    dryer: values.dryer ? 1 : 0,
  }

  console.log(JSON.stringify(dataForm))

  try {
    const response = await fetch(`${baseUrl}/api/backoffice/mesin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataForm),
    })

    if (response.ok) {
      toast({
        title: 'Success',
        description: 'Data berhasil disimpan.',
      })

      emit('dataAdded')
      resetForm()
      isDialogOpen.value = false
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
          <DialogTitle>Add Data Mesin</DialogTitle>
        </DialogHeader>

        <div class="max-h-[60vh] overflow-y-auto pr-4 space-y-6">
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
                          ? mitraList.find(item => (item.idMitra || item.id) === value)?.namaMitra
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

          <FormField v-slot="{ value }" name="cabangId">
            <FormItem class="flex flex-col">
              <FormLabel>Pilih Cabang</FormLabel>

              <Popover v-model:open="openCabang">
                <PopoverTrigger as-child>
                  <FormControl>
                    <Button
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

                <PopoverContent class="w-[var(--radix-popover-trigger-width)] p-0">
                  <Command>
                    <CommandInput placeholder="Cari..." />
                    <CommandList>
                      <CommandEmpty>Cabang tidak ditemukan.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem
                          v-for="item in cabangList"
                          :key="item.id"
                          :value="`${item.namaCabang}`"
                          @select="onSelectCabang(item)"
                        >
                          <Check
                            :class="
                              cn(
                                'mr-2 h-4 w-4',
                                value === (item.cabangId || item.id) ? 'opacity-100' : 'opacity-0'
                              )
                            "
                          />
                          {{ item.kodeCabang }} - {{ item.namaCabang }}
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
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
            Saving..
          </Button>

          <Button v-else type="submit"> Save </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
