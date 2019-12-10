import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEM:NbMenuItem[] = [
    {
        title:"DASHBOARD",
        icon: 'home-outline',
        link: '/application/admin-dashboard',
        home: true,
    },
    {
        title:"VENDOR MANAGEMENT",
        icon: 'person-outline',
        link: '/application/vendor-management',
    },
    {
        title:"COSTING MANAGEMENT",
        icon: 'pantone-outline',
        link: '/application/costing-management',
    }
]