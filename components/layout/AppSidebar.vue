<script setup lang="ts">
import type { NavGroup, NavLink, NavSectionTitle } from '~/types/nav'

function resolveNavItemComponent(item: NavLink | NavGroup | NavSectionTitle): any {
  if ('children' in item)
    return resolveComponent('LayoutSidebarNavGroup')
  return resolveComponent('LayoutSidebarNavLink')
}

const dataNavMenu: any = ref([])
const currentUser = useCookie<any>('currentUser')
const username = computed(() => currentUser.value?.username || '')

onMounted(async () => {
  if (!username.value)
    return
  try {
    const response = await apiFetch(`/api/backoffice/akses/user/${username.value}`)
    dataNavMenu.value = response
  }
  catch (err) {
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
    </SidebarHeader>
    <SidebarContent class="px-2">
      <SidebarGroup v-for="(nav, indexGroup) in dataNavMenu" :key="indexGroup" class="py-2">
        <SidebarGroupLabel v-if="nav.heading" class="px-3 text-xs text-[#7b8492] font-medium">
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
