<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { ChevronsUpDown, Loader2 } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { ref } from 'vue'
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
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { toast } from '~/components/ui/toast'
import Textarea from '../ui/textarea/Textarea.vue'
import '@vuepic/vue-datepicker/dist/main.css'

const emit = defineEmits(['dataAdded'])

const currentUser = useCookie<any>('currentUser') // diasumsikan cookie bernilai object stringified
const username = computed(() => currentUser.value?.username || 'no-username@example.com')

const profileFormSchema = toTypedSchema(
  z.object({
    idMitra: z.number({ required_error: 'Pilih Mitra terlebih dahulu' }),
    namaCabang: z.string(),
    alamatCabang: z.string(),
  }),
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

const mitraList = ref<any[]>([])
const openMitra = ref(false)

async function fetchDataMitra() {
  try {
    const fetchedData = await apiFetch('/api/backoffice/mitra')
    mitraList.value = (fetchedData?.data || []).map(item => ({
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

const onSubmit = handleSubmit(async (values: any) => {
  isSubmitting.value = true
  const dataForm = {
    idMitra: values.idMitra,
    namaCabang: values.namaCabang,
    alamatCabang: values.alamatCabang,
    createdBy: username.value,
  }
  try {
    await apiFetch('/api/backoffice/cabang', {
      method: 'POST',
      body: dataForm,
    })

    toast({
      title: 'Berhasil',
      description: 'Data berhasil disimpan.',
    })

    emit('dataAdded') // kirim emit dulu
    resetForm() // reset form
    isDialogOpen.value = false // baru tutup dialog
  }
  catch (error: any) {
    console.error('Error submitting data:', error)
    toast({
      title: 'Gagal',
      variant: 'destructive',
      description: error?.data?.message || error?.message || 'Terjadi kesalahan saat mengirim data.',
    })
  }
  finally {
    isSubmitting.value = false
  }
})
</script>

<template>
  <Dialog :open="isDialogOpen" @open-change="isDialogOpen = $event">
    <DialogTrigger as-child>
      <Button @click="openDialog">
        Add Data
      </Button>
    </DialogTrigger>
    <DialogContent class="[&>button]:hidden sm:max-w-[800px]">
      <form class="space-y-8" @submit.prevent="onSubmit">
        <DialogHeader>
          <DialogTitle>Add Data Cabang</DialogTitle>
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
                    :class="cn('h-9 w-full justify-between whitespace-nowrap px-3 py-2 text-sm font-normal', !value && 'text-muted-foreground')"
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
            <Button type="button" variant="secondary" @click="closeDialog">
              Close
            </Button>
          </DialogClose>
          <span v-if="isSubmitting">
            <Button disabled>
              <Loader2 class="mr-2 h-4 w-4 animate-spin" />
              Saving..
            </Button>
          </span>
          <Button v-else type="submit">
            Save
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
