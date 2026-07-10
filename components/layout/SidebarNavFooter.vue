<script setup lang="ts">
import { useSidebar } from '~/components/ui/sidebar'

const { isMobile, setOpenMobile } = useSidebar()

// Ambil dan parsing cookie user secara reaktif
const dataLogin = useCookie<{ nama?: string, role?: string }>('currentUser')

// Akses langsung
const name = computed(() => dataLogin.value?.nama || 'Unknown')
const role = computed(() => dataLogin.value?.role || 'System Admin')
// const email = computed(() => dataLogin.value?.email || 'no-email@example.com')
// const jobTitle = computed(() => dataLogin.value?.jobTitle || 'no-email@example.com')
// const avatar = computed(() => dataLogin.value?.avatar || '')

function handleLogout() {
  const userCookie = useCookie('currentUser')
  userCookie.value = null

  const tokenCookie = useCookie('accessToken')
  tokenCookie.value = null
  navigateTo('/login')
}

function goToProfile() {
  setOpenMobile(false)
  navigateTo('/settings/profile')
}

function goToChangePassword() {
  setOpenMobile(false)
  navigateTo('/settings/change-password')
}

const showModalTheme = ref(false)
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <SidebarMenuButton
            size="lg"
            class="h-auto rounded-none border-t border-[#dfe4eb] px-3 py-4 data-[state=open]:bg-[#e9edf3]"
          >
            <Avatar class="h-12 w-12 overflow-hidden rounded-full">
              <AvatarImage src="/avatars/avatartion.png" :alt="name" />
              <AvatarFallback>{{ name.charAt(0) }}</AvatarFallback>
            </Avatar>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-semibold text-[#111827]">{{ name }}</span>
              <span class="truncate text-xs text-[#6b7280]">{{ role }}</span>
            </div>
            <Icon name="i-lucide-chevrons-up-down" class="ml-auto size-4" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          class="min-w-56 w-[--radix-dropdown-menu-trigger-width] rounded-lg"
          :side="isMobile ? 'bottom' : 'right'"
          align="end"
        >
          <DropdownMenuLabel class="p-0 font-normal">
            <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <!-- <Avatar class="h-8 w-8 rounded-lg">
                <AvatarImage :src="user.avatar" :alt="user.name" />
                <AvatarFallback class="rounded-lg">
                  {{
                    user.name
                      .split(' ')
                      .map(n => n[0])
                      .join('')
                  }}
                </AvatarFallback>
              </Avatar> -->
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">{{ name }}</span>
                <!-- <span class="truncate text-xs">{{ email }}</span> -->
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuSeparator />

          <DropdownMenuItem @click="goToProfile">
            <Icon name="i-lucide-user" />
            Profile
          </DropdownMenuItem>

          <DropdownMenuItem @click="goToChangePassword">
            <Icon name="i-lucide-lock-keyhole" />
            Change Password
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem @click="handleLogout">
            <Icon name="i-lucide-log-out" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>

  <Dialog v-model:open="showModalTheme">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Customize</DialogTitle>
        <DialogDescription class="text-xs text-muted-foreground">
          Customize & Preview in Real Time
        </DialogDescription>
      </DialogHeader>
      <ThemeCustomize />
    </DialogContent>
  </Dialog>
</template>

<style scoped></style>
