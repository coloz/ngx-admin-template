export const UserMenuList = [
    { title: 'My Info', page: '/profile' },
    { title: 'Logout', action: 'logout' }
]

export const MenuList = [
    {
        title: 'Dashboard',
        root: true,
        icon: 'fas fa-home',
        page: '/index',
        translate: 'MENU.DASHBOARD',
    },
    {
        title: 'Page1',
        icon: 'fas fa-user-friends',
        page: '/user',
        translate: 'MENU.USER_MANAGER',
    },
    {
        title: 'Page2',
        icon: 'fas fa-server',
        page: '/device',
        translate: 'MENU.DEVICE_MANAGER',
    },
    {
        title: 'Memu1',
        icon: 'fas fa-database',
        translate: 'MENU1',
        submenu: [
            {
                title: 'Page1',
                icon: 'fas fa-file-alt',
                page: '/page1',
                translate: 'MENU.DATA_RAW',
            },
            {
                title: 'Page2',
                icon: 'fas fa-file-medical-alt',
                page: '/page2',
                translate: 'MENU.DATA_VISUAL',
            },
            {
                title: 'Page3',
                page: '/page3',
                icon: 'fas fa-envelope-open-text',
                translate: 'MENU.DATA_DISTRIBUTION',
            },
        ]
    },
    {
        title: 'Memu2',
        icon: 'fas fa-bars',
        translate: 'MENU2',
        submenu: [
            {
                title: 'Page3',
                icon: 'fas fa-pen',
                page: '/page3',
                translate: 'MENU.PRODEVICE_MANAGER',
            },
            {
                title: 'Page2',
                icon: 'fas fa-pencil-alt',
                page: '/page2',
                translate: 'MENU.FIRMWARE_MANAGER',
            },
            {
                title: 'Page1',
                icon: 'fas fa-pen-fancy',
                page: '/page1',
                translate: 'MENU.EDGE_COMPUTING',
            },
        ]

    },
    {
        title: 'Settings',
        root: true,
        icon: 'fas fa-cog',
        page: '/settings',
        translate: 'MENU.SETTINGS',
    },
    { section: 'Others' },
    {
        title: 'Document',
        icon: 'fas fa-file-alt',
        link: 'https://github.com/coloz/ngx-admin-template/blob/master/README.md',
        translate: 'MENU.DOCUMENT',
    },
    {
        title: 'GitHub',
        icon: 'fab fa-github',
        link: 'https://github.com/coloz/ngx-admin-template',
        translate: 'GitHub',
    },
]