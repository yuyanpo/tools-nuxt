<script setup lang="ts">
// import { useRuntimeConfig } from '#imports'

defineProps<{ id?: string }>()
// const heading = 2
// const { anchorLinks } = useRuntimeConfig().public.content
// const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>

<template>
  <h2 :id="id">
    <!-- <a v-if="id && generate" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else /> -->
    <slot />
  </h2>
</template>
