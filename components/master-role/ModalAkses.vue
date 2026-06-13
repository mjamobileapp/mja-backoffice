<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { toast } from '~/components/ui/toast'
import * as z from 'zod'
import { ScanEyeIcon } from 'lucide-vue-next'

const emit = defineEmits(['dataAkses'])

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
})
const config = useRuntimeConfig()
const baseUrl = config.public.apiBase
const isDialogOpen = ref(false)
const isLoading = ref(true)
const menus: any = ref([])

// get token====================
const accessToken = useCookie('accessToken')
const token = accessToken.value.token

async function fetchGetAkses() {
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/akses/role/${props.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    // console.log(data)
    const results = data
    menus.value = results.map(menu => ({
      ...menu,

      children: menu.children?.map(child => ({ ...child })) || [],
    }))
    isLoading.value = false
  } catch (error) {
    console.error('Gagal mengambil data:', error)
  }
}
async function openDialog() {
  isDialogOpen.value = true
  isLoading.value = true
  await fetchGetAkses()
  // console.log(props.id)
}

function closeDialog() {
  isDialogOpen.value = false
}

function toggleParent(menu: any) {
  menu.children?.forEach((child: any) => {
    child.checked = menu.checked
  })
}

function toggleChild(menu: any, child: any) {
  if (!child.checked) {
    menu.checked = false
  } else if (menu.children.every(c => c.checked)) {
    menu.checked = true
  }
}

async function onSubmit() {
  const selectedMenus: any[] = []

  menus.value.forEach((menu: any) => {
    const selectedChildren = menu.children?.filter((child: any) => child.checked) || []

    if (menu.checked || selectedChildren.length > 0) {
      selectedMenus.push({
        id: menu.id,
        name: menu.name,
        checked: menu.checked,
        children: selectedChildren.map((child: any) => ({
          id: child.id,
          name: child.name,
          checked: child.checked,
        })),
      })
    }
  })

  try {
    const response = await fetch(`${baseUrl}/api/backoffice/akses/role/${props.id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(selectedMenus),
    })

    if (!response.ok) {
      throw new Error(`Gagal menyimpan akses role. Status: ${response.status}`)
    }

    toast({ title: 'Berhasil', description: 'Akses role berhasil diperbarui' })
    setTimeout(() => {
      emit('dataAkses')
      closeDialog()
    }, 300)
  } catch (error) {
    console.error('Error saat simpan:', error)
    toast({ title: 'Error', description: 'Gagal menyimpan data', variant: 'destructive' })
  }
}
</script>

<template>
  <Dialog :open="isDialogOpen" @openChange="isDialogOpen = $event">
    <DialogTrigger as-child>
      <Button class="mr-2" @click="openDialog">
        <ScanEyeIcon class="w-4 h-4 mr-2" /> Role Access
      </Button>
    </DialogTrigger>

    <DialogContent class="sm:max-w-[800px] [&>button]:hidden">
      <DialogHeader>
        <DialogTitle>Akses Role</DialogTitle>
      </DialogHeader>

      <form v-if="!isLoading" class="space-y-5" @submit.prevent="onSubmit">
        <div v-for="menu in menus" :key="menu.id">
          <FormField name="menuHeader">
            <FormItem class="flex items-center space-x-2">
              <FormControl>
                <Checkbox v-model:checked="menu.checked" @change="toggleParent(menu)" />
              </FormControl>
              <FormLabel>{{ menu.name }}</FormLabel>
            </FormItem>
          </FormField>

          <div v-if="menu.children" class="pl-6 space-y-1 mt-2">
            <div v-for="child in menu.children" :key="child.id">
              <FormField name="childMenu">
                <FormItem class="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox v-model:checked="child.checked" @change="toggleChild(menu, child)" />
                  </FormControl>
                  <FormLabel>{{ child.name }}</FormLabel>
                </FormItem>
              </FormField>
            </div>
          </div>
        </div>

        <DialogFooter>
          <DialogClose as-child>
            <Button type="button" variant="secondary" @click="closeDialog"> Close </Button>
          </DialogClose>
          <Button type="submit">Update</Button>
        </DialogFooter>
      </form>

      <div v-else class="text-center p-6">Loading data...</div>
    </DialogContent>
  </Dialog>
</template>
