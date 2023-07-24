<script setup lang="ts">
const { links: homeLinks } = useHomeLinks()
</script>

<template>
  <section v-for="item, index in homeLinks" :key="index" class="sfq-card">
    <div class="sfq-card-title">
      {{ item.name }}
    </div>
    <div class="lists">
      <div class="grid grid-cols-4 gap-4">
        <div v-for="link in item.links" :key="link.href" class="h-20 rounded bg-$s-bg-mute transition duration-500 hover:bg-green-50 dark:hover:bg-neutral-700">
          <a class="h-full flex" :href="link.href" target="_blank" rel="noopener noreferrer">
            <i class="mx-2 mt-3 h-26px w-26px" :class="link.icon" />
            <div class="flex-1">
              <h3 class="mb-1 mt-3 text-$s-text-default">{{ link.title }}</h3>
              <p class="link-desc pr-2">{{ link.desc }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
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
