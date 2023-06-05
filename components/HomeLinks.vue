<script setup lang="ts">

const links = [
  {
    title: 'Vue',
    desc: '一款用于构建 Web 界面，易学易用，性能出色且功能丰富的框架。',
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
    desc: 'Intuitive, type safe, light and flexible Store for Vue',
    icon: 'i-logos-pinia',
    href: 'https://pinia.vuejs.org/',
  },
  {
    title: 'JavaScript 教程',
    desc: '以最新的 JavaScript 标准为基准。通过简单但足够详细的内容，为你讲解从基础到高阶的 JavaScript 相关知识。',
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
    desc: '智能压缩您的WebP、JPEG和PNG图片',
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
        <div v-for="item, idx in links" :key="idx" class="h-20 bg-gray-50 hover:bg-green-50 border border-transparent hover:border-green-200 rounded transition duration-500">
          <a class="flex h-full" :href="item.href" target="_blank" rel="noopener noreferrer">
            <i class="w-26px h-26px mx-2 mt-3" :class="item.icon" />
            <div class="flex-1">
              <h3 class="mt-3 mb-1 text-gray-600">{{ item.title }}</h3>
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
