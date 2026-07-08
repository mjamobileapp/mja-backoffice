<script setup lang="ts">
import type { NavGroup, NavLink, NavSectionTitle } from '~/types/nav'

function resolveNavItemComponent(item: NavLink | NavGroup | NavSectionTitle): any {
  // console.log(item)
  if ('children' in item) return resolveComponent('LayoutSidebarNavGroup')

  return resolveComponent('LayoutSidebarNavLink')
}

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase
// console.log(baseUrl)
const dataNavMenu: any = ref([])

// Ambil email dari cookie
const currentUser = useCookie<{ username?: string }>('currentUser') // diasumsikan cookie bernilai object stringified
const username = computed(() => currentUser.value?.username || 'no-email@example.com')
// get token====================
const accessToken = useCookie<{ token: string }>('accessToken')
const token = accessToken.value?.token

// Ambil data menu dari endpoint
onMounted(async () => {
  if (!username.value) return
  try {
    const response = await $fetch(`${baseUrl}/api/backoffice/akses/user/${username.value}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    // console.log(JSON.stringify(response))
    dataNavMenu.value = response
  } catch (err) {
    console.error('Gagal mengambil data menu:', err)
  }
})

const { sidebar } = useAppSettings()
</script>

<template>
  <Sidebar
    :collapsible="sidebar.collapsible"
    :side="sidebar.side"
    :variant="sidebar.variant"
    class="border-r border-[#dfe4eb] bg-[#f6f7f9] text-[#374151]"
  >
    <SidebarHeader class="px-2 py-3">
      <LayoutSidebarNavHeader />
      <!-- <Search /> -->
    </SidebarHeader>
    <SidebarContent class="px-2">
      <!-- <SidebarGroup>
        <component
          :is="resolveNavItemComponent(item)"
          v-for="(item, index) in navMenuTop"
          :key="index"
          :item="item"
          size="sm"
        />
      </SidebarGroup> -->
      <SidebarGroup v-for="(nav, indexGroup) in dataNavMenu" :key="indexGroup" class="py-2">
        <SidebarGroupLabel v-if="nav.heading" class="px-3 text-xs font-medium text-[#7b8492]">
          {{ nav.heading }}
        </SidebarGroupLabel>
        <component
          :is="resolveNavItemComponent(item)"
          v-for="(item, index) in nav.items"
          :key="index"
          :item="item"
        />
      </SidebarGroup>
    </SidebarContent>
    <SidebarRail />
  </Sidebar>
</template>

<style scoped></style>
