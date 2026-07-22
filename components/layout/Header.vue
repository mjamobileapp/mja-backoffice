<!-- <script setup lang="ts">
const route = useRoute()

function setLinks() {
  if (route.fullPath === '/') {
    return [{ title: '', href: '/' }]
  }

  const segments = route.fullPath.split('/').filter(item => item !== '')

  const breadcrumbs = segments.map((item, index) => {
    const str = item.replace(/-/g, ' ')
    const title = str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')

    return {
      title,
      href: `/${segments.slice(0, index + 1).join('/')}`,
    }
  })

  return [{ title: '', href: '/' }, ...breadcrumbs]
}

const links = ref<
  {
    title: string
    href: string
  }[]
>(setLinks())

watch(
  () => route.fullPath,
  val => {
    if (val) {
      links.value = setLinks()
    }
  }
)
</script> -->

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useSidebar } from '~/components/ui/sidebar'

const route = useRoute()

function setLinks() {
  // Jika berada di root (Halaman Utama / Dashboard), sesuaikan judulnya di sini jika diperlukan
  if (route.fullPath === '/') {
    return [{ title: 'Dashboard', href: '/' }]
  }

  const segments = route.fullPath.split('/').filter(item => item !== '')

  const breadcrumbs = segments.map((item, index) => {
    // Menghapus dash (-) dan capitalize setiap kata
    const str = item.replace(/-/g, ' ')
    const title = str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')

    return {
      title,
      href: `/${segments.slice(0, index + 1).join('/')}`,
    }
  })

  // Cukup return breadcrumbs hasil mapping tanpa menambahkan elemen kosong di depannya
  return breadcrumbs
}

const links = ref<
  {
    title: string
    href: string
  }[]
>(setLinks())

watch(
  () => route.fullPath,
  (val) => {
    if (val) {
      links.value = setLinks()
    }
  },
)

const dataLogin = useCookie<{ nama?: string, role?: string }>('currentUser')
const name = computed(() => dataLogin.value?.nama || 'Hamdan')
const role = computed(() => dataLogin.value?.role || 'System Admin')
const { setOpenMobile } = useSidebar()

async function handleLogout() {
  try {
    await apiFetch('/api/backoffice/logout', {
      method: 'POST',
    })
  }
  catch {
    // Tetap hapus sesi lokal apabila server logout tidak dapat dihubungi.
  }

  const userCookie = useCookie<any>('currentUser')
  userCookie.value = null

  const tokenCookie = useCookie<any>('accessToken')
  tokenCookie.value = null
  await navigateTo('/login')
}

function goToProfile() {
  setOpenMobile(false)
  navigateTo('/settings/profile')
}

function goToChangePassword() {
  setOpenMobile(false)
  navigateTo('/settings/change-password')
}
</script>

<template>
  <header
    class="sticky top-0 z-20 h-16 flex items-center gap-4 border-b border-[#dfe4eb] bg-white px-4 shadow-sm md:px-5"
  >
    <div class="min-w-0 flex items-center gap-3">
      <SidebarTrigger class="h-8 w-8 text-[#4b5563]" />
      <Separator orientation="vertical" class="h-5 bg-[#d8dde6]" />
      <BaseBreadcrumbCustom :links="links" />
    </div>
    <div class="ml-auto flex items-center gap-4">
      <slot />

      <DropdownMenu>
        <DropdownMenuTrigger class="profile-trigger">
          <Avatar class="profile-avatar">
            <AvatarImage src="/avatars/avatartion.png" :alt="name" />
            <AvatarFallback>{{ name.charAt(0) }}</AvatarFallback>
          </Avatar>
          <span class="profile-copy">
            <span class="profile-name">{{ name }}</span>
            <span class="profile-role">{{ role }}</span>
          </span>
          <ChevronDown class="profile-chevron" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          class="w-[190px] border-[#dfe4eb] rounded-lg bg-white p-1.5 shadow-lg"
          align="end"
          :side-offset="10"
        >
          <DropdownMenuItem
            class="my-1 h-10 gap-2 rounded-md px-2.5 text-sm text-[#111827] focus:bg-[#f3f4f6]"
            @click="goToProfile"
          >
            <Icon name="i-lucide-user" class="size-4 text-[#111827]" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem
            class="my-1 h-10 gap-2 rounded-md px-2.5 text-sm text-[#111827] focus:bg-[#f3f4f6]"
            @click="goToChangePassword"
          >
            <Icon name="i-lucide-lock-keyhole" class="size-4 text-[#111827]" />
            Change Password
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            class="mt-1 h-10 gap-2 rounded-md px-2.5 text-sm text-[#111827] focus:bg-[#f3f4f6]"
            @click="handleLogout"
          >
            <Icon name="i-lucide-log-out" class="size-4 text-[#111827]" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </header>
</template>

<style scoped>
.profile-trigger {
  display: flex !important;
  width: 190px;
  height: 48px;
  flex-direction: row !important;
  flex-wrap: nowrap !important;
  align-items: center !important;
  justify-content: flex-start !important;
  gap: 12px;
  border-left: 1px solid #e5e7eb;
  border-radius: 6px 0 0 6px;
  padding: 0 12px;
  text-align: left;
  transition: background-color 150ms ease;
}

.profile-trigger:hover {
  background-color: #f6f7f9;
}

.profile-avatar {
  width: 36px !important;
  height: 36px !important;
  flex: 0 0 36px !important;
  overflow: hidden;
  border-radius: 9999px;
}

.profile-copy {
  display: flex !important;
  min-width: 0;
  flex: 1 1 auto;
  flex-direction: column !important;
  align-items: flex-start !important;
  justify-content: center !important;
  line-height: 1;
}

.profile-name {
  max-width: 120px;
  overflow: hidden;
  color: #111827;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.profile-role {
  max-width: 120px;
  margin-top: 2px;
  overflow: hidden;
  color: #6b7280;
  font-size: 12px;
  line-height: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.profile-chevron {
  width: 16px;
  height: 16px;
  flex: 0 0 16px;
  color: #6b7280;
  transition: transform 150ms ease;
}

.profile-trigger[data-state='open'] .profile-chevron {
  transform: rotate(180deg);
}
</style>
