export const UserMenuList = [
    { title: 'My Info', page: '/profile' },
    { title: 'Logout', action: 'logout' }
]

export const MenuList = [
    {
        title: 'Dashboard',
        root: true,
        icon: 'far fa-tachometer-alt-slow',
        page: '/index',
        translate: 'MENU.DASHBOARD',
    },
    {
        title: 'Page1',
        icon: 'fal fa-user-friends',
        page: '/user',
        translate: 'MENU.USER_MANAGER',
    },
    {
        title: 'Page2',
        icon: 'fal fa-server',
        page: '/device',
        translate: 'MENU.DEVICE_MANAGER',
    },
    {
        title: 'Memu1',
        icon: 'fal fa-database',
        translate: 'MENU1',
        submenu: [
            {
                title: 'Page1',
                icon: 'fal fa-file-alt',
                page: '/page1',
                translate: 'MENU.DATA_RAW',
            },
            {
                title: 'Page2',
                icon: 'fal fa-file-medical-alt',
                page: '/page2',
                translate: 'MENU.DATA_VISUAL',
            },
            {
                title: 'Page3',
                page: '/page3',
                icon: 'fal fa-cloud-download',
                translate: 'MENU.DATA_DISTRIBUTION',
            },
        ]
    },
    {
        title: 'Memu2',
        icon: 'fal fa-code',
        translate: 'MENU2',
        submenu: [
            {
                title: 'Page3',
                icon: 'fal fa-box-alt',
                page: '/page3',
                translate: 'MENU.PRODEVICE_MANAGER',
            },
            {
                title: 'Page2',
                icon: 'fal fa-microchip',
                page: '/page2',
                translate: 'MENU.FIRMWARE_MANAGER',
            },
            {
                title: 'Page1',
                icon: 'fal fa-chart-network',
                page: '/page1',
                translate: 'MENU.EDGE_COMPUTING',
            },
        ]

    },
    {
        title: 'Settings',
        root: true,
        icon: 'fal fa-cog',
        page: '/settings',
        translate: 'MENU.SETTINGS',
    },
    { section: 'Others' },
    {
        title: 'Document',
        icon: 'fal fa-book',
        link: 'https://doc.blinker.app',
        translate: 'MENU.DOCUMENT',
    },
    {
        title: 'GitHub',
        icon: 'fab fa-github',
        link: 'https://github.com/blinker-iot',
        translate: 'GitHub',
    },
]