<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
} from '@/components/ui/select'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { toast } from '~/components/ui/toast'

const emit = defineEmits(['dataAdded'])

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const currentUser = useCookie('currentUser') // diasumsikan cookie bernilai object stringified
const email = computed(() => currentUser.value?.username || 'no-email@example.com')

// get token====================
const accessToken = useCookie('accessToken')
const token = accessToken.value.token

const formSchema = toTypedSchema(
  z.object({
    namaMenu: z.string(),
    url: z.string(),
    parentId: z.number().optional(),
    // menuParent: z.string(),
    // menuSubParent: z.string(),
    noUrut: z.number(),
    levelMenu: z.number(),
    tipeMenu: z.string(),
    iconMenu: z.string().optional(),
  })
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
const listMenuHeader = ref([])

const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
})

const isDialogOpen = ref(false)

async function fetchMenuHeader() {
  try {
    const response = await fetch(`${baseUrl}/getMenuHeader`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.ok) {
      const data = await response.json()
      listMenuHeader.value = data
      // console.log(data)
    } else {
      console.error('Failed to fetch Menu Header')
    }
  } catch (error) {
    console.error('Fetch roles error:', error)
  }
}

function openDialog() {
  isDialogOpen.value = true
  fetchMenuHeader()
}

function closeDialog() {
  isDialogOpen.value = false
  resetForm()
}
const isSubmitting = ref(false)

const onSubmit = handleSubmit(async (values: any) => {
  isSubmitting.value = true
  const dataForm = {
    namaMenu: values.namaMenu,
    url: values.url,
    parentId: values.parentId ? values.parentId : '',
    menuParent: values.menuParent ? values.menuParent : '',
    menuSubParent: values.menuSubParent ? values.menuSubParent : '',
    noUrut: values.noUrut,
    levelMenu: values.levelMenu,
    tipeMenu: values.tipeMenu,
    iconMenu: values.iconMenu,
    createdBy: email.value,
    createdDate: new Date(),
  }
  console.log(JSON.stringify(dataForm))
  try {
    const response = await fetch(`${baseUrl}/menus`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(dataForm),
    })

    if (response.ok) {
      toast({ title: 'Success', description: 'Data berhasil disimpan.' })

      setTimeout(() => {
        emit('dataAdded')
        isDialogOpen.value = false
        resetForm()
      }, 300)
    } else {
      toast({ title: 'Error', description: 'Gagal menyimpan data.' })
    }
  } catch (error) {
    console.error('Error submitting data:', error)
    toast({ title: 'Error', description: 'Terjadi kesalahan saat mengirim data.' })
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
    <DialogContent class="sm:max-w-[1000px] max-h-[100vh] overflow-y-auto [&>button]:hidden">
      <DialogHeader>
        <DialogTitle>Add Data Master Menu</DialogTitle>
      </DialogHeader>
      <div class="max-h-[60vh] overflow-y-auto pr-2">
        <form class="space-y-5" @submit="onSubmit">
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
          <FormField v-slot="{ componentField }" name="levelMenu">
            <FormItem>
              <FormLabel>Level Menu</FormLabel>
              <Select v-bind="componentField">
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
                      :value="item.nilai"
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
              <Button type="button" variant="secondary" @click="closeDialog">Close</Button>
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
      </div>
    </DialogContent>
  </Dialog>
</template>
