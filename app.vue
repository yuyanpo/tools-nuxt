<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${appName}` : appName
  },
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: var(--s-black);
  color: rgba(255, 255, 255, 0.5);
}
</style>
