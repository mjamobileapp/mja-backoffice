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
  name: 'MJA Backoffice',
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
            class="h-12 rounded-md px-2 data-[state=open]:bg-[#e9edf3]"
          >
            <div
              class="size-9 flex items-center justify-center rounded-md bg-[#111827] text-white"
            >
              <img src="/mja-logo.png" alt="MJA" class="h-6 w-6 object-contain" />
            </div>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-bold text-[#111827]">
                {{ activeTeam.name }}
              </span>
              <span class="truncate text-xs text-[#6b7280]">{{ activeTeam.plan }}</span>
            </div>
            <Icon name="i-lucide-chevrons-up-down" class="ml-auto text-[#6b7280]" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</template>

<style scoped></style>
