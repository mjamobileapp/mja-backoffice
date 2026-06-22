<script setup lang="ts">
import { onMounted, ref } from 'vue'
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

// get token====================
const accessToken = useCookie('accessToken')
const token = accessToken.value.token

const formSchema = toTypedSchema(
  z.object({
    username: z.string(),
    nama: z.string(),
    // password: z.string(),
    roleId: z.string(),
  })
)

const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
})

const isDialogOpen = ref(false)
const dataRole = ref([])

async function fetchRoles() {
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/roles`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.ok) {
      const data = await response.json()
      dataRole.value = data.data
    } else {
      console.error('Failed to fetch roles')
    }
  } catch (error) {
    console.error('Fetch roles error:', error)
  }
}

function openDialog() {
  isDialogOpen.value = true
  fetchRoles()
}

function closeDialog() {
  isDialogOpen.value = false
  resetForm()
}

const currentUser = useCookie('currentUser') // diasumsikan cookie bernilai object stringified
const email = computed(() => currentUser.value?.username || 'no-email@example.com')

const isSubmitting = ref(false)

const onSubmit = handleSubmit(async (values: any) => {
  isSubmitting.value = true
  const dataForm = {
    username: values.username,
    nama: values.nama,
    // password: values.password,
    roleId: values.roleId,
    createdBy: email.value,
    // createdDate: new Date(),
  }
  // console.log(JSON.stringify(dataForm))
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/users`, {
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
    <DialogContent class="sm:max-w-[800px] [&>button]:hidden">
      <DialogHeader>
        <DialogTitle>Add Data Master User</DialogTitle>
      </DialogHeader>
      <form class="space-y-8" @submit.prevent="onSubmit">
        <FormField v-slot="{ componentField }" name="nama">
          <FormItem>
            <FormLabel>Nama</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Nama Lengkap" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="username">
          <FormItem>
            <FormLabel>Username/Email</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Username" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <!-- <FormField v-slot="{ componentField }" name="password">
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="Password" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField> -->

        <FormField v-slot="{ componentField }" name="roleId">
          <FormItem>
            <FormLabel>Role Akses</FormLabel>
            <Select v-bind="componentField">
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Role/Peran" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem v-for="item in dataRole" :key="item.id" :value="item.id.toString()">
                    {{ item.namaRole }}
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
          <Button type="submit">Save </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
