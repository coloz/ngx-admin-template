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




var ddd = [
    {
        "title": "000-首页.md",
        "icon": "fas fa-home",
        "page": "/000-首页.md"
    },
    {
        "title": "001-快速开始","icon":"fas fa- home","page":" / 001 - 快速开始",
        "submenu":[
            {"title":"01 - arduino - 蓝牙接入.md","icon":"fas fa - home","page":" / 001 - 快速开始 / 01 - arduino - 蓝牙接入.md"},
            {"title":"02 - esp8266 - WiFi接入.md","icon":"fas fa - home","page":" / 001 - 快速开始 / 02 - esp8266 - WiFi接入.md"},
            {"title":"03 - esp32 - 蓝牙接入.md","icon":"fas fa - home","page":" / 001 - 快速开始 / 03 - esp32 - 蓝牙接入.md"},
            {"title":"04 - esp32 - WiFi接入.md","icon":"fas fa - home","page":" / 001 - 快速开始 / 04 - esp32 - WiFi接
入.md"},{"title":"07 - 树莓派 - 蓝牙接入.md","icon":"fas fa - home","page":" / 001 - 快速开始 / 07 - 树
莓派 - 蓝牙接入.md"},{"title":"09 - 树莓派 - WiFi接入.md","icon":"fas fa - home","page":" / 001 - 快速
开始 / 09 - 树莓派 - WiFi接入.md"},{"title":"10 - esp8266模块 - WiFi接入.md","icon":"fas fa - home","page":" / 001 - 快速开始 / 10 - esp8266模块 - WiFi接入.md"},{"title":"11 - GPRS模块接入.md","icon":"fas fa - home","page":" / 001 - 快速开始 / 11 - GPRS模块接入.md"},{"title":"12 - NB - IoT模块接入.md","icon":"fas fa - home","page":" / 001 - 快速开始 / 12 - NB - IoT模块接入.md"},{"title":"20 - 提问指南.md","icon":"fas fa - home","page":" / 001 - 快速开始 / 20 - 提问指南.md"}]},{"title":"002 - 开发入门","icon":"fas fa - home","page":" / 002 - 开发入门","submenu":[{"title":"000 - 基础知识.md","icon":"fas fa - home","page":" / 002 - 开发入门 / 000 - 基础知识.md"},{"title":"001 - 添加设备.md","icon":"fas fa - home","page":" / 002 - 开发入门 / 001 - 添加设备.md"},{"title":"002 - Arduino开发入门.md","icon":"fas
fa - home","page":" / 002 - 开发入门 / 002 - Arduino开发入门.md"},{"title":"003 - Arduino实例教程.md","icon":"fas fa - home","page":" / 002 - 开发入门 / 003 - Arduino实例教程.md"},{"title":"004 - Python开
发入门.md","icon":"fas fa - home","page":" / 002 - 开发入门 / 004 - Python开发入门.md"}]},{"title":"003 - 硬件开发","icon":"fas fa - home","page":" / 003 - 硬件开发","submenu":[{"title":"01 - 设备端支
持.md","icon":"fas fa - home","page":" / 003 - 硬件开发 / 01 - 设备端支持.md"},{"title":"02 - Arduino
支持.md","icon":"fas fa - home","page":" / 003 - 硬件开发 / 02 - Arduino支持.md"},{"title":"03 - Python支持.md","icon":"fas fa - home","page":" / 003 - 硬件开发 / 03 - Python支持.md"},{"title":"04 - JavaScript支持.md","icon":"fas fa - home","page":" / 003 - 硬件开发 / 04 - JavaScript支持.md"},{"title":"05 - ESP_AT模块支持.md","icon":"fas fa - home","page":" / 003 - 硬件开发 / 05 - ESP_AT模块支持.md"},{"title":"08 - 通信指令.md","icon":"fas fa - home","page":" / 003 - 硬件开发 / 08 - 通信指令.md"},{"title":"09 - 接入其他设备.md","icon":"fas fa - home","page":" / 003 - 硬件开发 / 09 - 接入其他设备.md"},{"title":"10 - 开发工具.md","icon":"fas fa - home","page":" / 003 - 硬件开发 / 10 - 开发工具.md"}]},{"title":"004 - 特有功能","icon":"fas fa - home","page":" / 004 - 特有功能","submenu":[{"title":"00 - 界
面布局器.md","icon":"fas fa - home","page":" / 004 - 特有功能 / 00 - 界面布局器.md"},{"title":"01 - 时
间获取.md","icon":"fas fa - home","page":" / 004 - 特有功能 / 01 - 时间获取.md"},{"title":"02 - 通知功
能.md","icon":"fas fa - home","page":" / 004 - 特有功能 / 02 - 通知功能.md"},{"title":"03 - 气象数据获
取.md","icon":"fas fa - home","page":" / 004 - 特有功能 / 03 - 气象数据获取.md"},{"title":"04 - 云存储
        .md","icon":"fas fa - home","page":" / 004 - 特有功能 / 04 - 云存储.md"},{"title":"05 - 固件更新.md","icon":"fas fa - home","page":" / 004 - 特有功能 / 05 - 固件更新.md"},{"title":"06 - 自动化.md","icon":"fas fa - home","page":" / 004 - 特有功能 / 06 - 自动化.md"},{"title":"07 - 设备共享.md","icon":"fas fa - home","page":" / 004 - 特有功能 / 07 - 设备共享.md"}]},{"title":"005 - App使用","icon":"fas fa - home","page":" / 005 - App使用","submenu":[{"title":"01 - 添加设备.md","icon":"fas fa - home","page":" / 005 - App使用 / 01 - 添加设备.md"},{"title":"02 - 自定义布局.md","icon":"fas fa - home","page":" / 005 - App使用 / 02 - 自定义布局.md"},{"title":"03 - 设备控制.md","icon":"fas fa - home","page":" / 005 - App使用 / 03 - 设备控制.md"},{"title":"04 - 语音控制.md","icon":"fas fa - home","page":" / 005 - App使
用 / 04 - 语音控制.md"},{"title":"05 - 场景控制.md","icon":"fas fa - home","page":" / 005 - App使用 / 05 - 场景控制.md"},{"title":"06 - 定时任务.md","icon":"fas fa - home","page":" / 005 - App使用 / 06 - 定时
任务.md"},{"title":"07 - 设备分类.md","icon":"fas fa - home","page":" / 005 - App使用 / 07 - 设备分类.md"},{"title":"08 - 设备设置.md","icon":"fas fa - home","page":" / 005 - App使用 / 08 - 设备设置.md"},{"title":"09 - 设备共享.md","icon":"fas fa - home","page":" / 005 - App使用 / 09 - 设备共享.md"},{"title":"10 - 数据聚合.md","icon":"fas fa - home","page":" / 005 - App使用 / 10 - 数据聚合.md"},{"title":"98 - App设置.md","icon":"fas fa - home","page":" / 005 - App使用 / 98 - App设置.md"},{"title":"99 - 登录
    - 注册 - 找回密码.md","icon":"fas fa - home","page":" / 005 - App使用 / 99 - 登录 - 注册 - 找回密码.md"}]},{"title":"006 - APP开发","icon":"fas fa - home","page":" / 006 - APP开发","submenu":[{"title":"09 - 独立app开发.md","icon":"fas fa - home","page":" / 006 - APP开发 / 09 - 独立app开发.md"},{"title":"10 - 小程序支持.md","icon":"fas fa - home","page":" / 006 - APP开发 / 10 - 小程序支持.md"}]},{"title":"007 - 语音助手接入","icon":"fas fa - home","page":" / 007 - 语音助手接入","submenu":[{"title":"00 -
    接入说明.md","icon":"fas fa - home","page":" / 007 - 语音助手接入 / 00 - 接入说明.md"},{"title":"01 - 天猫精灵.md","icon":"fas fa - home","page":" / 007 - 语音助手接入 / 01 - 天猫精灵.md"},{"title":"02 - 百度音响.md","icon":"fas fa - home","page":" / 007 - 语音助手接入 / 02 - 百度音响.md"},{"title":"03 - 小米小爱.md","icon":"fas fa - home","page":" / 007 - 语音助手接入 / 03 - 小米小爱.md"},{"title":"04 - GoogleAssistant.md","icon":"fas fa - home","page":" / 007 - 语音助手接入 / 04 - GoogleAssistant.md"},{"title":"05 - 亚马逊Alexa.md","icon":"fas fa - home","page":" / 007 - 语音助手接入 / 05 - 亚马逊Alexa.md"},{"title":"08 - 三星Bixby.md","icon":"fas fa - home","page":" / 007 - 语音助手接入 / 08 - 三星Bixby.md"},{"title":"09 - 微软Cortana.md","icon":"fas fa - home","page":" / 007 - 语音助手接入 / 09 - 微
软Cortana.md"}]},{"title":"008 - 项目实践","icon":"fas fa - home","page":" / 008 - 项目实践","submenu":[{"title":"01 - 蓝牙氛围灯.md","icon":"fas fa - home","page":" / 008 - 项目实践 / 01 - 蓝牙氛围灯
        .md"},{"title":"03 - 远程报警装置.md","icon":"fas fa - home","page":" / 008 - 项目实践 / 03 - 远程报警
装置.md"},{"title":"04 - 远程环境检测仪.md","icon":"fas fa - home","page":" / 008 - 项目实践 / 04 - 远
程环境检测仪.md"},{"title":"05 - 语音控制灯.md","icon":"fas fa - home","page":" / 008 - 项目实践 / 05 - 语音控制灯.md"}]},{"title":"009 - 专属设备开发","icon":"fas fa - home","page":" / 009 - 专属设备
开发","submenu":[{"title":"00 - 开发说明.md","icon":"fas fa - home","page":" / 009 - 专属设备开发 / 00 - 开发说明.md"},{"title":"01 - 设备端开发.md","icon":"fas fa - home","page":" / 009 - 专属设备开
发 / 01 - 设备端开发.md"},{"title":"02 - Arduino支持.md","icon":"fas fa - home","page":" / 009 - 专属
设备开发 / 02 - Arduino支持.md"},{"title":"03 - 专属设备模板.md","icon":"fas fa - home","page":" / 009 - 专属设备开发 / 03 - 专属设备模板.md"},{"title":"04 - 保留关键字.md","icon":"fas fa - home","page":" / 009 - 专属设备开发 / 04 - 保留关键字.md"}]},{"title":"010 - 专属设备类型","icon":"fas fa - home","page":" / 010 - 专属设备类型","submenu":[{"title":"00 - 设备类型.md","icon":"fas fa - home","page":" / 010 - 专属设备类型 / 00 - 设备类型.md"},{"title":"01 - 独立设备.md","icon":"fas fa - home","page":" / 010 - 专属设备类型 / 01 - 独立设备.md"},{"title":"02 - 网关设备.md","icon":"fas fa - home","page":" / 010 - 专属设备类型 / 02 - 网关设备.md"},{"title":"03 - 子设备.md","icon":"fas fa - home","page":" / 010 - 专属设备类型 / 03 - 子设备.md"}]},{"title":"010 - 认证用户服务","icon":"fas fa - home","page":" / 010 - 认证用户服务","submenu":[]},{"title":"020 - Q & A及开发常见问题","icon":"fas fa - home","page":" / 020 - Q & A及开发常见问题","submenu":[{"title":"00 - Q & A.md","icon":"fas fa - home","page":" / 020 - Q & A及开发常见问题 / 00 - Q & A.md"},{"title":"01 - 错误码.md","icon":"fas fa - home","page":" / 020 - Q & A及开发常见问题 / 01 - 错误码.md"},{"title":"02 - 开发注意事项.md","icon":"fas fa - home","page":" / 020 - Q & A及开发常见问题 / 02 - 开发注意事项.md"},{"title":"03 - 常见问题.md","icon":"fas fa - home","page":" / 020 - Q & A及开发常见问题 / 03 - 常见问题.md"}]},{"title":"099 - 产品化与授权","icon":"fas fa - home","page":" / 099 - 产品化与授权","submenu":[{"title":"01 - 产品化服务.md","icon":"fas fa - home","page":" / 099 - 产品化与授权 / 01 - 产品化服务.md"},{"title":"02 - 商业授权.md","icon":"fas fa - home","page":" / 099 - 产品化与授权 / 02 - 商业授权.md"},{"title":"09 - 教育支持.md","icon":"fas fa - home","page":" / 099 - 产品化与授权 / 09 - 教育支持.md"}]}]
