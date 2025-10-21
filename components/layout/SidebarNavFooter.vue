<script setup lang="ts">
import { useSidebar } from '~/components/ui/sidebar'

const { isMobile, setOpenMobile } = useSidebar()

// Ambil dan parsing cookie user secara reaktif
const dataLogin = useCookie('currentUser')

// Akses langsung
const name = computed(() => dataLogin.value?.nama || 'Unknown')
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

const showModalTheme = ref(false)
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <SidebarMenuButton
            size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
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
              <!-- <span class="truncate text-xs">{{ jobTitle }}</span> -->
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
