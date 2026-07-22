<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Eye, EyeOff, Loader2, PencilIcon } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { onMounted, ref, watch } from 'vue'
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from '@/components/ui/toast'

const props = defineProps<{
  id: {
    type: number
    required: true
  }
}>()

const emit = defineEmits(['dataUpdated'])

const isDialogOpen = ref(false)
const userData = ref<any>(null)

const formSchema = toTypedSchema(
  z.object({
    username: z.string(),
    nama: z.string(),
    // password: z.string().optional(),
    roleId: z.string(),
  }),
)

const { handleSubmit, resetForm, setValues } = useForm({
  validationSchema: formSchema,
})

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

// get token====================
const accessToken = useCookie<any>('accessToken')
const token = accessToken.value.token

// Fitur Toggle View Password
const showPassword = ref(false)
function togglePassword() {
  showPassword.value = !showPassword.value
}

async function fetchUserData() {
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/users/${props.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()
    // console.log(data.data)
    userData.value = data.data
    setValues({
      username: data.data.username,
      nama: data.data.nama,
      roleId: String(data.data.idRole),
      // password: data.data.password,
    })
  }
  catch (error) {
    console.error('Gagal mengambil data user:', error)
  }
}
const dataRole = ref<any[]>([])

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
    }
    else {
      console.error('Failed to fetch roles')
    }
  }
  catch (error) {
    console.error('Fetch roles error:', error)
  }
}

watch(isDialogOpen, async (open) => {
  if (open) {
    await fetchRoles()
    await fetchUserData()
  }
  else {
    resetForm()
  }
})

function openDialog() {
  isDialogOpen.value = true
}

const currentUser = useCookie<any>('currentUser') // diasumsikan cookie bernilai object stringified
const email = computed(() => currentUser.value?.email || 'no-email@example.com')

const isSubmitting = ref(false)
const onSubmit = handleSubmit(async (values: any) => {
  isSubmitting.value = true
  const dataForm = {
    username: values.username,
    nama: values.nama,
    // password: values.password,
    roleId: values.roleId,
    updatedBy: email.value,
    // createdDate: new Date(),
  }
  // console.log(JSON.stringify(dataForm))
  try {
    const response = await fetch(`${baseUrl}/api/backoffice/users/${props.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify(dataForm),
    })
    if (response.ok) {
      toast({ title: 'Success', description: 'Data berhasil diupdate.' })

      setTimeout(() => {
        emit('dataUpdated')
        isDialogOpen.value = false
      }, 300)
    }
    else {
      toast({ title: 'Error', description: 'Gagal mengupdate data.' })
    }
  }
  catch (error) {
    toast({ title: 'Error', description: 'Terjadi kesalahan saat update.' })
  }
  finally {
    isSubmitting.value = false
  }
})
</script>

<template>
  <Dialog :open="isDialogOpen" @open-change="isDialogOpen = $event">
    <DialogTrigger as-child>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button size="sm" @click="openDialog">
              <PencilIcon class="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit Data</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </DialogTrigger>
    <DialogContent class="[&>button]:hidden sm:max-w-[600px]">
      <DialogHeader>
        <DialogTitle>Edit Data User</DialogTitle>
      </DialogHeader>
      <form class="space-y-4" @submit="onSubmit">
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

        <!-- <FormField name="password">
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
        </FormField> -->

        <FormField v-slot="{ field }" name="roleId">
          <FormItem>
            <FormLabel>Role Akses</FormLabel>
            <Select :model-value="field.value" @update:model-value="field.onChange">
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Role/Peran" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem v-for="item in dataRole" :key="item.id" :value="String(item.id)">
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
            <Button type="button" variant="secondary" @click="isDialogOpen = false">
              Close
            </Button>
          </DialogClose>
          <span v-if="isSubmitting">
            <Button disabled>
              <Loader2 class="mr-2 h-4 w-4 animate-spin" />
              Updating...
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
