<script setup lang="ts">
import { appName } from '~/constants/index'

useHead({
  title: `首页 | ${appName}`,
})
</script>

<template>
  <div class="sfq-base-content">
    <HomeLinks />
  </div>
</template>
