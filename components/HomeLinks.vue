<script setup lang="ts">
const links = [
  {
    title: 'Vue',
    desc: '一款用于构建 Web 界面，易学易用，性能出色且功能丰富的框架',
    icon: 'i-logos-vue',
    href: 'https://cn.vuejs.org/',
  },
  {
    title: 'Vite',
    desc: '下一代的前端工具链，为开发提供极速响应',
    icon: 'i-logos-vitejs',
    href: 'https://cn.vitejs.dev/',
  },
  {
    title: 'Pinia',
    desc: 'Pinia 是 Vue 的专属状态管理库，类型安全、可扩展性以及模块化设计',
    icon: 'i-logos-pinia',
    href: 'https://pinia.vuejs.org/zh/',
  },
  {
    title: 'JavaScript 教程',
    desc: '以最新的 JavaScript 为基准。通过简单、详细的内容，讲解 JavaScript 相关知识',
    icon: 'i-logos-javascript',
    href: 'https://zh.javascript.info/',
  },
  {
    title: 'W3school',
    desc: '基础 Web 技术教程、在线手册',
    icon: 'i-logos-w3c',
    href: 'https://www.w3school.com.cn/',
  },
  {
    title: 'TinyPNG',
    desc: '智能压缩您的WebP、JPEG和PNG图片，拥有良好的压缩率',
    icon: 'i-logos-imagemin',
    href: 'https://tinify.cn/',
  },
  {
    title: 'AST Explorer',
    desc: 'AST 在线语法解析，可以选择不同的语言、不同的编译器',
    icon: 'i-logos-aws-elastic-cache',
    href: 'https://astexplorer.net/',
  },
]
</script>

<template>
  <section class="sfq-card">
    <div class="sfq-card-title">
      🛵 导航
    </div>
    <div class="lists">
      <div class="grid grid-cols-4 gap-4">
        <div v-for="item, idx in links" :key="idx" class="h-20 rounded bg-$s-bg-mute transition duration-500 hover:bg-green-50 dark:hover:bg-neutral-700">
          <a class="h-full flex" :href="item.href" target="_blank" rel="noopener noreferrer">
            <i class="mx-2 mt-3 h-26px w-26px" :class="item.icon" />
            <div class="flex-1">
              <h3 class="mb-1 mt-3 text-$s-text-default">{{ item.title }}</h3>
              <p class="link-desc pr-2">{{ item.desc }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
.link-desc {
  font-size: 12px;
  height: 3em;
  line-height: 1.5em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
