<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { PencilIcon } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
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
import { toast } from '~/components/ui/toast'

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['dataUpdated'])

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase
const formSchema = toTypedSchema(
  z.object({
    namaMenu: z.string(),
    url: z.string(),
    parentId: z.number().optional(),
    noUrut: z.number(),
    levelMenu: z.coerce.number(),
    tipeMenu: z.string(),
    iconMenu: z.string().optional(),
  }),
)

const listTipeMenu = [
  {
    nama: 'Header',
  },
  {
    nama: 'Item',
  },
  // {
  //   nama: 'Sub Item',
  // },
]
const listLevelmenu = [
  {
    nilai: 1,
  },
  {
    nilai: 2,
  },
  // {
  //   nilai: 3,
  // },
]

const listIconMenu = [
  {
    nama: 'Home',
    icon: 'i-lucide-house',
  },
  {
    nama: 'Master Data',
    icon: 'i-lucide-file',
  },
  {
    nama: 'Settings',
    icon: 'i-lucide-settings',
  },
  {
    nama: 'Sub Menu',
    icon: 'i-lucide-circle',
  },
]
const listMenuHeader = ref<any[]>([])

const { handleSubmit, resetForm, setValues } = useForm({
  validationSchema: formSchema,
})

const isDialogOpen = ref(false)
const isLoading = ref(false)

async function fetchMenuHeader() {
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/getMenuHeader`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.ok) {
      const data = await response.json()
      listMenuHeader.value = data.data
      // console.log(data)
    }
    else {
      console.error('Failed to fetch Menu Header')
    }
  }
  catch (error) {
    console.error('Fetch roles error:', error)
  }
}

async function openDialog() {
  isDialogOpen.value = true
  await fetchData()
  await fetchMenuHeader()
  console.log(props.id)
}

function closeDialog() {
  isDialogOpen.value = false
  resetForm()
}

// get token====================
const accessToken = useCookie<any>('accessToken')
const token = accessToken.value.token

async function fetchData() {
  try {
    isLoading.value = true
    const response = await fetch(`${baseUrl}/api/backoffice/menus/${props.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    const res = await response.json()
    // console.log(res.data)
    setValues({
      namaMenu: res.data.namaMenu,
      url: res.data.url,
      parentId: res.data.parentId,
      noUrut: res.data.noUrut,
      // Radix Select menggunakan value string, sedangkan API mengembalikan
      // levelMenu sebagai angka. Normalisasi agar nilai langsung terpilih
      // saat form edit pertama kali dibuka.
      levelMenu: Number(res.data.levelMenu),
      tipeMenu: res.data.tipeMenu,
      iconMenu: res.data.iconMenu,
    })
  }
  catch (error) {
    console.error('Error fetching data:', error)
    toast({
      title: 'Error',
      description: 'Gagal mengambil data.',
    })
    closeDialog()
  }
  finally {
    isLoading.value = false
  }
}

const currentUser = useCookie<any>('currentUser') // diasumsikan cookie bernilai object stringified
const email = computed(() => currentUser.value?.username || 'no-email@example.com')

const isSubmitting = ref(false)
const onSubmit = handleSubmit(async (values: any) => {
  isSubmitting.value = true
  const dataForm = {
    namaMenu: values.namaMenu,
    url: values.url,
    parentId: values.parentId,
    menuParent: values.menuParent ? values.menuParent : '',
    menuSubParent: values.menuSubParent ? values.menuSubParent : '',
    noUrut: values.noUrut,
    levelMenu: values.levelMenu,
    tipeMenu: values.tipeMenu,
    iconMenu: values.iconMenu,
    createdBy: email.value,
    createdDate: new Date(),
  }
  // console.log(dataForm)
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/menus/${props.id}`, {
      method: 'PUT', // atau PATCH
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(dataForm),
    })

    if (response.ok) {
      toast({ title: 'Success', description: 'Data berhasil diupdate.' })

      setTimeout(() => {
        emit('dataUpdated')
        isDialogOpen.value = false
        resetForm()
      }, 300)
    }
    else {
      toast({ title: 'Error', description: 'Gagal Update data.' })
    }
  }
  catch (error) {
    console.error('Error submitting data:', error)
    toast({ title: 'Error', description: 'Terjadi kesalahan saat mengirim data.' })
  }
  finally {
    isSubmitting.value = false
  }
})
</script>

<template>
  <Dialog :open="isDialogOpen" @open-change="isDialogOpen = $event">
    <DialogTrigger as-child>
      <Button class="mr-2" @click="openDialog">
        <PencilIcon class="mr-2 h-4 w-4" /> Edit Data
      </Button>
    </DialogTrigger>
    <DialogContent class="[&>button]:hidden sm:max-w-[800px]">
      <DialogHeader>
        <DialogTitle>Edit Data Master Menu</DialogTitle>
      </DialogHeader>
      <form v-if="!isLoading" class="grid grid-cols-1 gap-4 sm:grid-cols-2" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="namaMenu">
          <FormItem>
            <FormLabel>Nama Menu</FormLabel>
            <FormControl>
              <Input type="text" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="url">
          <FormItem>
            <FormLabel>Url</FormLabel>
            <FormControl>
              <Input type="text" placeholder="/nama-menu" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="parentId">
          <FormItem>
            <FormLabel>Menu Header</FormLabel>
            <Select v-bind="componentField">
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Menu Header" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    v-for="(item, index) in listMenuHeader"
                    :key="index"
                    :value="item.id"
                  >
                    {{ item.namaMenu }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="noUrut">
          <FormItem>
            <FormLabel>No Urut</FormLabel>
            <FormControl>
              <Input type="number" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ field }" name="levelMenu">
          <FormItem>
            <FormLabel>Level Menu</FormLabel>
            <Select
              :model-value="field.value === undefined || field.value === null ? '' : String(field.value)"
              @update:model-value="value => field.onChange(Number(value))"
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Level Menu" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    v-for="(item, index) in listLevelmenu"
                    :key="index"
                    :value="String(item.nilai)"
                  >
                    {{ item.nilai }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="tipeMenu">
          <FormItem>
            <FormLabel>Tipe Menu</FormLabel>
            <Select v-bind="componentField">
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Tipe Menu" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    v-for="(item, index) in listTipeMenu"
                    :key="index"
                    :value="item.nama"
                  >
                    {{ item.nama }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="iconMenu">
          <FormItem>
            <FormLabel>Icon Menu</FormLabel>
            <Select v-bind="componentField">
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Icon Menu" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    v-for="(item, index) in listIconMenu"
                    :key="index"
                    :value="item.icon"
                  >
                    {{ item.nama }} - {{ item.icon }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        </FormField>

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
