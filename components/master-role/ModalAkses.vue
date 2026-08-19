<script setup lang="ts">
import { ScanEyeIcon } from 'lucide-vue-next'
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
import { toast } from '~/components/ui/toast'

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['dataAkses'])

const isDialogOpen = ref(false)
const isLoading = ref(true)
const menus: any = ref([])

async function fetchGetAkses() {
  try {
    const res = await apiFetch(`/api/backoffice/akses/role/${props.id}`)
    const list = Array.isArray(res) ? res : (res?.data || [])
    menus.value = list.map(menu => ({
      ...menu,

      children: menu.children?.map(child => ({ ...child })) || [],
    }))
  }
  catch (error) {
    console.error('Gagal mengambil data:', error)
  }
  finally {
    isLoading.value = false
  }
}
async function openDialog() {
  isDialogOpen.value = true
  isLoading.value = true
  await fetchGetAkses()
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
  }
  else if (menu.children.every(c => c.checked)) {
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
    await apiFetch(`/api/backoffice/akses/role/${props.id}`, {
      method: 'POST',
      body: selectedMenus,
    })

    toast({ title: 'Berhasil', description: 'Akses role berhasil diperbarui' })
    setTimeout(() => {
      emit('dataAkses')
      closeDialog()
    }, 300)
  }
  catch (error) {
    console.error('Error saat simpan:', error)
    toast({ title: 'Gagal', description: 'Gagal menyimpan data', variant: 'destructive' })
  }
}
</script>

<template>
  <Dialog :open="isDialogOpen" @open-change="isDialogOpen = $event">
    <DialogTrigger as-child>
      <Button class="mr-2" @click="openDialog">
        <ScanEyeIcon class="mr-2 h-4 w-4" /> Role Access
      </Button>
    </DialogTrigger>

    <DialogContent class="[&>button]:hidden sm:max-w-[800px]">
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

          <div v-if="menu.children" class="mt-2 pl-6 space-y-1">
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
            <Button type="button" variant="secondary" @click="closeDialog">
              Close
            </Button>
          </DialogClose>
          <Button type="submit">
            Update
          </Button>
        </DialogFooter>
      </form>

      <div v-else class="p-6 text-center">
        Loading data...
      </div>
    </DialogContent>
  </Dialog>
</template>
