<script setup lang="ts">
import type { NavGroup } from '~/types/nav'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { type SidebarMenuButtonVariants, useSidebar } from '~/components/ui/sidebar'

const props = withDefaults(defineProps<{
  item: NavGroup
  size?: SidebarMenuButtonVariants['size']
}>(), {
  size: 'default',
})

const { setOpenMobile } = useSidebar()
const route = useRoute()

const isActive = computed(() => props.item.children.some(subItem => route.path === subItem.link))
const openCollapsible = ref(isActive.value)

function isSubItemActive(link: string) {
  return route.path.replace(/\/$/, '') === link.replace(/\/$/, '')
}
</script>

<template>
  <SidebarMenu>
    <Collapsible
      :key="item.title"
      v-model:open="openCollapsible"
      as-child
      class="group/collapsible"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger as-child>
          <SidebarMenuButton
            :tooltip="item.title"
            :size="size"
            :is-active="isActive"
            class="rounded-md text-[#374151] data-[active=true]:bg-[#dfe5ec] hover:bg-[#e8edf3] data-[active=true]:text-[#2563eb] data-[active=true]:font-normal"
          >
            <Icon :name="item.icon || ''" mode="svg" />
            <span>{{ item.title }}</span>
            <span v-if="item.new" class="rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline">
              New
            </span>
            <Icon name="i-lucide-chevron-right" class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            <SidebarMenuSubItem
              v-for="subItem in item.children"
              :key="subItem.title"
            >
              <SidebarMenuSubButton
                as-child
                :is-active="isSubItemActive(subItem.link)"
                class="data-[active=true]:font-bold"
              >
                <NuxtLink
                  :to="subItem.link"
                  :class="isSubItemActive(subItem.link) ? 'font-bold' : ''"
                  active-class="font-bold"
                  exact-active-class="font-bold"
                  @click="setOpenMobile(false)"
                >
                  <span>{{ subItem.title }}</span>
                  <span v-if="subItem.new" class="rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline">
                    New
                  </span>
                </NuxtLink>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  </SidebarMenu>
</template>

<style scoped>
:deep(a.router-link-active),
:deep(a.router-link-exact-active) {
  font-weight: 700 !important;
}
</style>
