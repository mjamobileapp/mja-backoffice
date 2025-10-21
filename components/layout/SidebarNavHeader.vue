<script setup lang="ts">
// import { useSidebar } from "~/components/ui/sidebar";

// const props = defineProps<{
//   teams: {
//     name: string;
//     logo: string;
//     plan: string;
//   }[];
// }>();

// const { isMobile } = useSidebar()

// const activeTeam = ref(props.teams[0]);
import { useRouter } from 'vue-router'

const router = useRouter()
const activeTeam = ref({
  name: 'Monitoring Project',
  logo: 'i-lucide-gallery-vertical-end',
  plan: 'Application',
})

function goToDashboard() {
  router.push('/')
}
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <SidebarMenuButton
            size="lg"
            @click="goToDashboard"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div
              class="aspect-square size-8 flex items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
            >
              <Icon :name="activeTeam.logo" class="size-4" />
            </div>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-semibold">
                {{ activeTeam.name }}
              </span>
              <span class="truncate text-xs">{{ activeTeam.plan }}</span>
            </div>
            <Icon name="i-lucide-chevrons-up-down" class="ml-auto" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</template>

<style scoped></style>
