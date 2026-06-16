<script setup lang="ts">
import { cn } from '@/lib/utils'
import { toTypedSchema } from '@vee-validate/zod'
import { Eye, UploadCloud, X } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { computed, ref } from 'vue'
import * as z from 'zod'
import { toast } from '~/components/ui/toast'

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

const accessToken = useCookie('accessToken')
const token = accessToken.value?.token

const currentUser = useCookie('currentUser')

const avatarPreview = ref(
  currentUser.value?.avatarUrl
    ? `${baseUrl}${currentUser.value.avatarUrl}`
    : '/avatar-placeholder.png'
)

const selectedFile = ref<File | null>(null)

const profileFormSchema = toTypedSchema(
  z.object({
    username: z
      .string()
      .min(2, {
        message: 'Username minimal 2 karakter.',
      })
      .max(30, {
        message: 'Username maksimal 30 karakter.',
      }),
    // email: z
    //   .string({
    //     required_error: 'Email wajib diisi.',
    //   })
    //   .email({
    //     message: 'Format email tidak valid.',
    //   }),
    nama: z.string().min(2, {
      message: 'Nama lengkap minimal 2 karakter.',
    }),
    // phoneNumber: z.string().optional(),
    // bio: z
    //   .string()
    //   .max(160, {
    //     message: 'Bio maksimal 160 karakter.',
    //   })
    //   .optional(),
  })
)

const { handleSubmit, resetForm, values } = useForm({
  validationSchema: profileFormSchema,
  initialValues: {
    username: currentUser.value?.username || '',
    // email: currentUser.value?.email || '',
    nama: currentUser.value?.nama || '',
    // phoneNumber: currentUser.value?.phoneNumber || '',
    // bio: currentUser.value?.bio || '',
  },
})

const initials = computed(() => {
  const name = values.nama || values.username || 'User'
  return name
    .split(' ')
    .map(item => item[0])
    .join('')
    .substring(0, 2)
    .toUpperCase()
})

function handleFileChange(event: Event) {
  const target = event.target as HTMLInputElement

  if (!target.files?.length) return

  const file = target.files[0]

  if (!file.type.startsWith('image/')) {
    toast({
      title: 'Error',
      description: 'File harus berupa gambar.',
      variant: 'destructive',
    })
    return
  }

  if (file.size > 2 * 1024 * 1024) {
    toast({
      title: 'Error',
      description: 'Ukuran gambar maksimal 2MB.',
      variant: 'destructive',
    })
    return
  }

  selectedFile.value = file
  avatarPreview.value = URL.createObjectURL(file)
}

function removeAvatar() {
  selectedFile.value = null
  avatarPreview.value = '/avatar-placeholder.png'
}

const onSubmit = handleSubmit(async values => {
  try {
    const formData = new FormData()

    formData.append('username', values.username)
    formData.append('email', values.email)
    formData.append('nama', values.nama)
    formData.append('phoneNumber', values.phoneNumber || '')
    formData.append('bio', values.bio || '')

    if (selectedFile.value) {
      formData.append('avatar', selectedFile.value)
    }

    await $fetch(`${baseUrl}/api/backoffice/profile`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })

    toast({
      title: 'Success',
      description: 'Profile berhasil diperbarui.',
    })
  } catch (error: any) {
    console.error('Update profile error:', error)

    toast({
      title: 'Error',
      description: error.data?.message || 'Gagal memperbarui profile.',
      variant: 'destructive',
    })
  }
})
</script>

<template>
  <div>
    <h3 class="text-lg font-medium">Profile</h3>
    <p class="text-sm text-muted-foreground">Kelola informasi profile dan foto akun Anda.</p>
  </div>

  <Separator />

  <div class="grid gap-8 lg:grid-cols-[280px_1fr]">
    <Card>
      <CardHeader>
        <CardTitle>Foto Profile</CardTitle>
        <CardDescription> Upload foto profile agar akun lebih mudah dikenali. </CardDescription>
      </CardHeader>

      <CardContent class="flex flex-col items-center gap-4">
        <Avatar class="h-32 w-32">
          <AvatarImage :src="avatarPreview" />
          <AvatarFallback class="text-2xl">
            {{ initials }}
          </AvatarFallback>
        </Avatar>

        <div class="text-center">
          <p class="font-medium">
            {{ values.nama || values.username || 'User' }}
          </p>
          <p class="text-sm text-muted-foreground">
            {{ values.email || '-' }}
          </p>
        </div>

        <!-- <div class="flex flex-col gap-2 w-full">
          <Label
            for="avatar"
            class="inline-flex h-10 cursor-pointer items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
          >
            <UploadCloud class="mr-2 h-4 w-4" />
            Upload Foto
          </Label>

          <Input
            id="avatar"
            type="file"
            accept="image/*"
            class="hidden"
            @change="handleFileChange"
          />

          <Button type="button" variant="outline" size="sm" @click="removeAvatar">
            <X class="mr-2 h-4 w-4" />
            Hapus Foto
          </Button>
        </div>

        <p class="text-xs text-muted-foreground text-center">
          Format JPG, PNG, atau WEBP. Maksimal 2MB.
        </p> -->
      </CardContent>
    </Card>

    <form class="space-y-8" @submit="onSubmit">
      <FormField v-slot="{ componentField }" name="username">
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Masukkan username" disabled v-bind="componentField" />
          </FormControl>
          <FormDescription>
            Username digunakan sebagai identitas login atau tampilan akun.
          </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="nama">
        <FormItem>
          <FormLabel>Nama Lengkap</FormLabel>
          <FormControl>
            <Input
              type="text"
              placeholder="Masukkan nama lengkap"
              disabled
              v-bind="componentField"
            />
          </FormControl>
          <FormDescription> Nama ini akan ditampilkan pada profile akun Anda. </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>

      <!-- <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input type="email" placeholder="nama@email.com" v-bind="componentField" />
          </FormControl>
          <FormDescription> Email digunakan untuk notifikasi dan pemulihan akun. </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="phoneNumber">
        <FormItem>
          <FormLabel>Nomor Telepon</FormLabel>
          <FormControl>
            <Input type="text" placeholder="08xxxxxxxxxx" v-bind="componentField" />
          </FormControl>
          <FormDescription> Nomor telepon opsional untuk kebutuhan kontak akun. </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="bio">
        <FormItem>
          <FormLabel>Bio</FormLabel>
          <FormControl>
            <Textarea placeholder="Tulis deskripsi singkat tentang Anda" v-bind="componentField" />
          </FormControl>
          <FormDescription> Bio singkat maksimal 160 karakter. </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField> -->

      <!-- <div class="flex justify-start gap-2">
        <Button type="submit"> Update Profile </Button>

        <Button type="button" variant="outline" @click="resetForm"> Reset form </Button>
      </div> -->
    </form>
  </div>
</template>
