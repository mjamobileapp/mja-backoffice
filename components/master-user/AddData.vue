<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
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
import { Loader2, Eye, EyeOff } from 'lucide-vue-next' // Tambahkan import Eye dan EyeOff

const emit = defineEmits(['dataAdded'])

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const accessToken = useCookie('accessToken')
const token = computed(() => accessToken.value?.token || '')

// Fitur Toggle View Password
const showPassword = ref(false)
function togglePassword() {
  showPassword.value = !showPassword.value
}

// PERBAIKAN: Password dimasukkan kembali ke dalam validasi schema
const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(1, 'Username wajib diisi'),
    nama: z.string().min(1, 'Nama wajib diisi'),
    password: z.string().min(6, 'Password minimal 6 karakter'), // Validasi password ditambahkan
    roleId: z.string().min(1, 'Role wajib diisi'),
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
        Authorization: `Bearer ${token.value}`,
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
  showPassword.value = false // Reset ke sembunyi saat dialog ditutup
}

const currentUser = useCookie('currentUser')
const email = computed(() => currentUser.value?.username || 'no-email@example.com')

const isSubmitting = ref(false)

const onSubmit = handleSubmit(async (values: any) => {
  isSubmitting.value = true
  const dataForm = {
    username: values.username,
    nama: values.nama,
    password: values.password, // Password dikirim ke server
    roleId: values.roleId,
    createdBy: email.value,
    createdDate: new Date(),
  }

  try {
    const response = await fetch(`${baseUrl}/api/backoffice/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.value}`,
      },
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

      <form class="space-y-6" @submit="onSubmit">
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

        <FormField name="password">
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormField v-slot="{ field }" name="password">
              <div class="relative w-full">
                <Input
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Masukkan Password"
                  v-bind="field"
                  class="pr-10 w-full block"
                />
                <button
                  type="button"
                  @click="togglePassword"
                  class="absolute right-0 top-0 h-full px-3 text-gray-500 hover:text-gray-700 focus:outline-none flex items-center justify-center z-20"
                >
                  <Eye v-if="showPassword" class="w-4 h-4" />
                  <EyeOff v-else class="w-4 h-4" />
                </button>
              </div>
            </FormField>
            <FormMessage />
          </FormItem>
        </FormField>
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

        <DialogFooter class="pt-4">
          <DialogClose as-child>
            <Button type="button" variant="secondary" @click="closeDialog" :disabled="isSubmitting"
              >Close</Button
            >
          </DialogClose>

          <Button v-if="isSubmitting" disabled>
            <Loader2 class="w-4 h-4 mr-2 animate-spin" />
            Saving..
          </Button>
          <Button v-else type="submit">Save</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
