<script setup lang="ts">
import type { NavGroup, NavLink, NavSectionTitle } from '~/types/nav'
import { navMenu, navMenuBottom, navMenuTop } from '~/constants/menus'

function resolveNavItemComponent(item: NavLink | NavGroup | NavSectionTitle): any {
  // console.log(item)
  if ('children' in item) return resolveComponent('LayoutSidebarNavGroup')

  return resolveComponent('LayoutSidebarNavLink')
}

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase
// console.log(baseUrl)
const user: {
  name: string
  email: string
  avatar: string
} = {
  name: 'Rizky Reza',
  email: 'rizky.reza@plnindonesiapower.co.id',
  avatar: '/avatars/avatartion.png',
}
const dataNavMenu: any = ref([])

// Ambil email dari cookie
const currentUser = useCookie('currentUser') // diasumsikan cookie bernilai object stringified
const username = computed(() => currentUser.value?.username || 'no-email@example.com')
// get token====================
const accessToken = useCookie('accessToken')
const token = accessToken.value.token

// Ambil data menu dari endpoint
onMounted(async () => {
  if (!username.value) return
  try {
    const response = await $fetch(`${baseUrl}/getAkses/${username.value}`, {
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
  <Sidebar :collapsible="sidebar.collapsible" :side="sidebar.side" :variant="sidebar.variant">
    <SidebarHeader>
      <LayoutSidebarNavHeader />
      <!-- <Search /> -->
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <component
          :is="resolveNavItemComponent(item)"
          v-for="(item, index) in navMenuTop"
          :key="index"
          :item="item"
          size="sm"
        />
      </SidebarGroup>
      <SidebarGroup v-for="(nav, indexGroup) in dataNavMenu" :key="indexGroup">
        <SidebarGroupLabel v-if="nav.heading">
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
    <SidebarFooter>
      <LayoutSidebarNavFooter :user="user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>

<style scoped></style>
