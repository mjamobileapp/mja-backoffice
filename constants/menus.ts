import type { NavMenu, NavMenuItems } from '~/types/nav'

export const navMenu: NavMenu[] = [
  {
    heading: 'Pages',
    items: [
      {
        title: 'Master Data',
        icon: 'i-lucide-file',
        children: [
          {
            title: 'Master Code',
            icon: 'i-lucide-circle',
            link: '/master-code',
          },
        ],
      },
      {
        title: 'Home',
        icon: 'i-lucide-house',
        children: [
          {
            title: 'Knowledge Repository',
            icon: 'i-lucide-circle',
            link: '/knowledge-repo',
          },
        ],
      },
      {
        title: 'Settings',
        icon: 'i-lucide-settings',
        children: [
          {
            title: 'Master User',
            icon: 'i-lucide-circle',
            link: '/master-user',
          },
          {
            title: 'Master Role',
            icon: 'i-lucide-circle',
            link: '/master-role',
          },
          {
            title: 'Master Menu',
            icon: 'i-lucide-circle',
            link: '/master-menu',
          },
        ],
      },
    ],
  },
]

export const navMenuBottom: NavMenuItems = [
  {
    title: 'Help & Support',
    icon: 'i-lucide-circle-help',
    link: '/support',
  },
  {
    title: 'Feedback',
    icon: 'i-lucide-send',
    link: '/feedback',
  },
]

export const navMenuTop: NavMenuItems = [
  {
    title: 'Dashboard',
    icon: 'i-lucide-layout-dashboard',
    link: '/',
  },
]
