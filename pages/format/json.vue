<script setup lang="ts">
import '~/styles/json-format.scss'

const sourceJson = ref('{ "name": "闪·芬奇123", "description": "五彩缤纷工具箱", "star": 1024, "skills": ["format", "encrypt", "doc"], "weburl": "https://shanfenqi.com" }')
const { $json2HTML } = useNuxtApp()

const html = computed(() => {
  return $json2HTML(sourceJson.value)
})
</script>

<template>
  <div class="mb-4">
    <h4 class="mb-1 font-mono text-lg font-bold text-green-500">
      Json Viewer
    </h4>
    <p class="text-xs text-gray-500">
      🎉 JSON 查看器，适用于浏览数据内容，支持标准 JSON 格式数据查看：左侧输入正确的 JSON 数据，右侧自动格式化查看格式，且支持折叠与条数统计。
    </p>
  </div>
  <div class="flex">
    <div class="w-50%">
      <textarea
        v-model="sourceJson"
        resize="none"
        class="min-h-300px w-full border border-gray-300 rounded p-2 text-sm leading-6 text-gray-500 outline-none focus:border-blue-500"
      />
    </div>
    <div class="w-50%">
      <client-only>
        <div class="json-format" v-html="html" />
        <template #fallback>
          <span class="p-4 text-sm text-gray-400">loading...</span>
        </template>
      </client-only>
    </div>
  </div>
</template>
