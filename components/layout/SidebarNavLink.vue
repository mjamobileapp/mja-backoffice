<script setup lang="ts">
import type { NavLink } from '~/types/nav'
import { type SidebarMenuButtonVariants, useSidebar } from '~/components/ui/sidebar'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = withDefaults(
  defineProps<{
    item: NavLink
    size?: SidebarMenuButtonVariants['size']
  }>(),
  {
    size: 'default',
  }
)

const { setOpenMobile } = useSidebar()
const route = useRoute()
const isActive = computed(() => route.path === props.item.link)
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton
        as-child
        :tooltip="item.title"
        :size="size"
        :is-active="isActive"
        class="rounded-md text-[#374151] data-[active=true]:bg-[#dfe5ec] data-[active=true]:font-bold data-[active=true]:text-[#2563eb] hover:bg-[#e8edf3]"
      >
        <NuxtLink :to="item.link" @click="setOpenMobile(false)">
          <Icon :name="item.icon || ''" mode="svg" />
          <span>{{ item.title }}</span>
          <span
            v-if="item.new"
            class="rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
          >
            New
          </span>
        </NuxtLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
</template>

<style scoped></style>
