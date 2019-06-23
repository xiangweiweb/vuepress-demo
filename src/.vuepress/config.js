
module.exports = {
    title: 'vuePress Demo', 
    head: [
        ['link', { rel: 'icon', href: '/img/logo.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }]
    ],
    serviceWorker: true,
    theme: 'meteorlxy',
    themeConfig: {
      nav: [
        { text: '主页', link: '/' },
        { text: 'Nodejs', link: '/nodejs/' },
        { text: 'Vue.js', link: '/vue/' },
        { text: '关于', link: '/about/' },
        { text: 'Github', link: 'https://www.github.com/codeteenager' }
      ],
      personalInfo: {
        // 昵称
        nickname: '橘子',
  
        // 个人简介
        description: '',
  
        // 电子邮箱
        email: 'xiangweiweb@163.com.com',
  
        // 所在地
        location: '深圳',
  
        // 组织
        organization: '富途网络',
         // 设置为外部链接
        avatar: 'http://p.qpic.cn/wwhead/nMl9ssowtibVGyrmvBiaibzDmaBESrsMOhWua1WThWibtFI8oarFAw1muRmywqcarsRY3u8CCY95lbU/0',
        // 或者放置在 .vuepress/public 文件夹，例如 .vuepress/public/img/avatar.jpg
      // avatar: '/img/avatar.jpg',
      },
      // 是否显示文章的最近更新时间
      lastUpdated: true,
      defaultPages: {
        // 是否允许主题自动添加 Home 页面 (url: /)
        home: true,
        // 是否允许主题自动添加 Posts 页面 (url: /posts/)
        posts: false,
      },
      // 分页配置
    pagination: {
      perPage: 5,
    },
    }
}