<script setup lang="ts">
useHead({
  title: 'JSON Viewer',
})

definePageMeta({
  layout: 'fullscreen',
})

const sourceJson = ref('{ "name": "前端工具箱", "description": "功能丰富的前端工具箱", "star": 1024, "skills": ["format", "encrypt", "doc"], "weburl": "https://shanfenqi.com" }')
</script>

<template>
  <div class="h-full flex items-stretch justify-between bg-white dark:bg-gray-7">
    <div class="w-40% border-r">
      <!-- <div class="mb-4">
        <h4 class="mb-1 font-mono text-lg font-bold text-green-500">
          JSON Viewer
        </h4>
        <p class="text-xs text-gray-500">
          🎉 JSON 查看器，适用于浏览数据内容，支持标准 JSON 格式数据查看：左侧输入正确的 JSON 数据，右侧自动格式化查看格式，且支持折叠与条数统计。
        </p>
      </div> -->
      <textarea v-model="sourceJson" class="mb-3 h-full w-full resize-none bg-transparent p-3 outline-none" />
    </div>
    <div class="w-60% of-y-auto p-3">
      <JsonViewer :json="sourceJson" />
    </div>
  </div>
</template>
