import type { NavMenu, NavMenuItems } from '~/types/nav'

export const navMenu: NavMenu[] = [
  // {
  //   heading: 'General',
  //   items: [
  //     {
  //       title: 'Home',
  //       icon: 'i-lucide-home',
  //       link: '/',
  //     },
  //     {
  //       title: 'Email',
  //       icon: 'i-lucide-mail',
  //       link: '/email',
  //     },
  //     {
  //       title: 'Tasks',
  //       icon: 'i-lucide-calendar-check-2',
  //       link: '/tasks',
  //       new: true,
  //     },
  //   ],
  // },
  // {
  //   heading: 'Master Data',
  //   items: [
  //     {
  //       title: 'Master Code',
  //       icon: 'i-lucide-circle',
  //       link: '/master-code',
  //     },
  //   ],
  // },
  {
    heading: 'Pages',
    items: [
      // {
      //   title: 'Authentication',
      //   icon: 'i-lucide-lock-keyhole-open',
      //   children: [
      //     {
      //       title: 'Login',
      //       icon: 'i-lucide-circle',
      //       link: '/login',
      //     },
      //     {
      //       title: 'Login Basic',
      //       icon: 'i-lucide-circle',
      //       link: '/login-basic',
      //     },
      //     {
      //       title: 'Register',
      //       icon: 'i-lucide-circle',
      //       link: '/register',
      //     },
      //     {
      //       title: 'Forgot Password',
      //       icon: 'i-lucide-circle',
      //       link: '/forgot-password',
      //     },
      //   ],
      // },
      // {
      //   title: 'Errors',
      //   icon: 'i-lucide-triangle-alert',
      //   children: [
      //     {
      //       title: '401 - Unauthorized',
      //       icon: 'i-lucide-circle',
      //       link: '/401',
      //     },
      //     {
      //       title: '403 - Forbidden',
      //       icon: 'i-lucide-circle',
      //       link: '/403',
      //     },
      //     {
      //       title: '404 - Not Found',
      //       icon: 'i-lucide-circle',
      //       link: '/404',
      //     },
      //     {
      //       title: '500 - Internal Server Error',
      //       icon: 'i-lucide-circle',
      //       link: '/500',
      //     },
      //     {
      //       title: '503 - Service Unavailable',
      //       icon: 'i-lucide-circle',
      //       link: '/503',
      //     },
      //   ],
      // },
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
      // {
      //   title: 'Settings',
      //   icon: 'i-lucide-settings',
      //   new: true,
      //   children: [
      //     {
      //       title: 'Profile',
      //       icon: 'i-lucide-circle',
      //       link: '/settings/profile',
      //     },
      //     {
      //       title: 'Account',
      //       icon: 'i-lucide-circle',
      //       link: '/settings/account',
      //     },
      //     {
      //       title: 'Appearance',
      //       icon: 'i-lucide-circle',
      //       link: '/settings/appearance',
      //     },
      //     {
      //       title: 'Notifications',
      //       icon: 'i-lucide-circle',
      //       link: '/settings/notifications',
      //     },
      //     {
      //       title: 'Display',
      //       icon: 'i-lucide-circle',
      //       link: '/settings/display',
      //     },
      //   ],
      // },
    ],
  },
  // {
  //   heading: 'Components',
  //   items: [
  //     {
  //       title: 'Components',
  //       icon: 'i-lucide-component',
  //       children: [
  //         {
  //           title: 'Accordion',
  //           icon: 'i-lucide-circle',
  //           link: '/components/accordion',
  //         },
  //         {
  //           title: 'Alert',
  //           icon: 'i-lucide-circle',
  //           link: '/components/alert',
  //         },
  //         {
  //           title: 'Alert Dialog',
  //           icon: 'i-lucide-circle',
  //           link: '/components/alert-dialog',
  //         },
  //         {
  //           title: 'Aspect Ratio',
  //           icon: 'i-lucide-circle',
  //           link: '/components/aspect-ratio',
  //         },
  //         {
  //           title: 'Avatar',
  //           icon: 'i-lucide-circle',
  //           link: '/components/avatar',
  //         },
  //         {
  //           title: 'Badge',
  //           icon: 'i-lucide-circle',
  //           link: '/components/badge',
  //         },
  //         {
  //           title: 'Breadcrumb',
  //           icon: 'i-lucide-circle',
  //           link: '/components/breadcrumb',
  //         },
  //         {
  //           title: 'Button',
  //           icon: 'i-lucide-circle',
  //           link: '/components/button',
  //         },
  //         {
  //           title: 'Calendar',
  //           icon: 'i-lucide-circle',
  //           link: '/components/calendar',
  //         },
  //         {
  //           title: 'Card',
  //           icon: 'i-lucide-circle',
  //           link: '/components/card',
  //         },
  //         {
  //           title: 'Carousel',
  //           icon: 'i-lucide-circle',
  //           link: '/components/carousel',
  //         },
  //         {
  //           title: 'Checkbox',
  //           icon: 'i-lucide-circle',
  //           link: '/components/checkbox',
  //         },
  //         {
  //           title: 'Collapsible',
  //           icon: 'i-lucide-circle',
  //           link: '/components/collapsible',
  //         },
  //         {
  //           title: 'Combobox',
  //           icon: 'i-lucide-circle',
  //           link: '/components/combobox',
  //         },
  //         {
  //           title: 'Command',
  //           icon: 'i-lucide-circle',
  //           link: '/components/command',
  //         },
  //         {
  //           title: 'Context Menu',
  //           icon: 'i-lucide-circle',
  //           link: '/components/context-menu',
  //         },
  //         {
  //           title: 'Dialog',
  //           icon: 'i-lucide-circle',
  //           link: '/components/dialog',
  //         },
  //         {
  //           title: 'Drawer',
  //           icon: 'i-lucide-circle',
  //           link: '/components/drawer',
  //         },
  //         {
  //           title: 'Dropdown Menu',
  //           icon: 'i-lucide-circle',
  //           link: '/components/dropdown-menu',
  //         },
  //         {
  //           title: 'Form',
  //           icon: 'i-lucide-circle',
  //           link: '/components/form',
  //         },
  //         {
  //           title: 'Hover Card',
  //           icon: 'i-lucide-circle',
  //           link: '/components/hover-card',
  //         },
  //         {
  //           title: 'Input',
  //           icon: 'i-lucide-circle',
  //           link: '/components/input',
  //         },
  //         {
  //           title: 'Label',
  //           icon: 'i-lucide-circle',
  //           link: '/components/label',
  //         },
  //         {
  //           title: 'Menubar',
  //           icon: 'i-lucide-circle',
  //           link: '/components/menubar',
  //         },
  //         {
  //           title: 'Navigation Menu',
  //           icon: 'i-lucide-circle',
  //           link: '/components/navigation-menu',
  //         },
  //         {
  //           title: 'Number Field',
  //           icon: 'i-lucide-circle',
  //           link: '/components/number-field',
  //         },
  //         {
  //           title: 'Pagination',
  //           icon: 'i-lucide-circle',
  //           link: '/components/pagination',
  //         },
  //         {
  //           title: 'PIN Input',
  //           icon: 'i-lucide-circle',
  //           link: '/components/pin-input',
  //         },
  //         {
  //           title: 'Popover',
  //           icon: 'i-lucide-circle',
  //           link: '/components/popover',
  //         },
  //         {
  //           title: 'Progress',
  //           icon: 'i-lucide-circle',
  //           link: '/components/progress',
  //         },
  //         {
  //           title: 'Radio Group',
  //           icon: 'i-lucide-circle',
  //           link: '/components/radio-group',
  //         },
  //         {
  //           title: 'Range Calendar',
  //           icon: 'i-lucide-circle',
  //           link: '/components/range-calendar',
  //         },
  //         {
  //           title: 'Resizable',
  //           icon: 'i-lucide-circle',
  //           link: '/components/resizable',
  //         },
  //         {
  //           title: 'Scroll Area',
  //           icon: 'i-lucide-circle',
  //           link: '/components/scroll-area',
  //         },
  //         {
  //           title: 'Select',
  //           icon: 'i-lucide-circle',
  //           link: '/components/select',
  //         },
  //         {
  //           title: 'Separator',
  //           icon: 'i-lucide-circle',
  //           link: '/components/separator',
  //         },
  //         {
  //           title: 'Sheet',
  //           icon: 'i-lucide-circle',
  //           link: '/components/sheet',
  //         },
  //         {
  //           title: 'Skeleton',
  //           icon: 'i-lucide-circle',
  //           link: '/components/skeleton',
  //         },
  //         {
  //           title: 'Slider',
  //           icon: 'i-lucide-circle',
  //           link: '/components/slider',
  //         },
  //         {
  //           title: 'Sonner',
  //           icon: 'i-lucide-circle',
  //           link: '/components/sonner',
  //         },
  //         {
  //           title: 'Stepper',
  //           icon: 'i-lucide-circle',
  //           link: '/components/stepper',
  //           new: true,
  //         },
  //         {
  //           title: 'Switch',
  //           icon: 'i-lucide-circle',
  //           link: '/components/switch',
  //         },
  //         {
  //           title: 'Table',
  //           icon: 'i-lucide-circle',
  //           link: '/components/table',
  //         },
  //         {
  //           title: 'Tabs',
  //           icon: 'i-lucide-circle',
  //           link: '/components/tabs',
  //         },
  //         {
  //           title: 'Tags Input',
  //           icon: 'i-lucide-circle',
  //           link: '/components/tags-input',
  //         },
  //         {
  //           title: 'Textarea',
  //           icon: 'i-lucide-circle',
  //           link: '/components/textarea',
  //         },
  //         {
  //           title: 'Toast',
  //           icon: 'i-lucide-circle',
  //           link: '/components/toast',
  //         },
  //         {
  //           title: 'Toggle',
  //           icon: 'i-lucide-circle',
  //           link: '/components/toggle',
  //         },
  //         {
  //           title: 'Toggle Group',
  //           icon: 'i-lucide-circle',
  //           link: '/components/toggle-group',
  //         },
  //         {
  //           title: 'Tooltip',
  //           icon: 'i-lucide-circle',
  //           link: '/components/tooltip',
  //         },
  //       ],
  //     },
  //   ],
  // },
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
