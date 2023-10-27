// @unocss-include

interface LinkItem {
  title: string
  desc: string
  icon: string
  href: string
  type: 'link' | 'router'
}

interface Links {
  name: string
  links: LinkItem[]
}

const homeLinks: Links[] = [
  {
    name: '🛠️ Tools',
    links: [
      {
        title: 'JSON Viewer',
        desc: 'JSON 数据查看器，拥有优雅的结构展示且折叠显示数量',
        icon: 'i-logos-json',
        href: '/format/json',
        type: 'router',
      },
    ],
  },
  {
    name: '🛵 Frontend',
    links: [
      {
        title: 'Vue',
        desc: '一款用于构建 Web 界面，易学易用，性能出色且功能丰富的框架',
        icon: 'i-logos-vue',
        href: 'https://cn.vuejs.org/',
        type: 'link',
      },
      {
        title: 'Vite',
        desc: '下一代的前端工具链，为开发提供极速响应',
        icon: 'i-logos-vitejs',
        href: 'https://cn.vitejs.dev/',
        type: 'link',
      },
      {
        title: 'Pinia',
        desc: 'Pinia 是 Vue 的专属状态管理库，类型安全、可扩展性以及模块化设计',
        icon: 'i-logos-pinia',
        href: 'https://pinia.vuejs.org/zh/',
        type: 'link',
      },
      {
        title: 'JavaScript 教程',
        desc: '以最新的 JavaScript 为基准。通过简单、详细的内容，讲解 JavaScript 相关知识',
        icon: 'i-logos-javascript',
        href: 'https://zh.javascript.info/',
        type: 'link',
      },
      {
        title: 'W3school',
        desc: '基础 Web 技术教程、在线手册',
        icon: 'i-logos-w3c',
        href: 'https://www.w3school.com.cn/',
        type: 'link',
      },
      {
        title: 'TinyPNG',
        desc: '智能压缩您的WebP、JPEG和PNG图片，拥有良好的压缩率',
        icon: 'i-logos-imagemin',
        href: 'https://tinify.cn/',
        type: 'link',
      },
      {
        title: 'AST Explorer',
        desc: 'AST 在线语法解析，可以选择不同的语言、不同的编译器',
        icon: 'i-logos-aws-elastic-cache',
        href: 'https://astexplorer.net/',
        type: 'link',
      },
    ],
  },
  {
    name: '💎 Resources',
    links: [
      {
        title: 'CSS Loaders',
        desc: 'The Biggest Collection of Loading Animations',
        icon: 'i-logos-css-3-official',
        href: 'https://css-loaders.com/',
        type: 'link',
      },
    ],
  },
  {
    name: '🤖 AI',
    links: [
      {
        title: 'ChatGPT',
        desc: 'OpenAI旗下AI对话工具',
        icon: 'i-logos-openai-icon',
        href: 'https://chat.openai.com/',
        type: 'link',
      },
      {
        title: 'Bard',
        desc: '谷歌出品，为你提供创意启发和实用信息的好帮手',
        icon: 'i-logos-google-bard-icon',
        href: 'https://bard.google.com/',
        type: 'link',
      },
      {
        title: 'ToolAI',
        desc: '人工智能AI工具聚合网站，5771+ 人工智能平台和工具，每日更新',
        icon: 'i-logos-surrealdb-icon',
        href: 'https://www.toolai.io/',
        type: 'link',
      },
    ],
  },
]

export function useHomeLinks() {
  return {
    links: homeLinks,
  }
}
