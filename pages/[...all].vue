<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="sfq-base-content" p="x4 y10" text="center gray-400">
    <div text-3xl>
      <div i-carbon-face-dissatisfied inline-block />
    </div>
    <div>Page Not Found</div>
    <div>
      <button m="3 t8" text-sm btn @click="router.back()">
        Back
      </button>
    </div>
  </div>
</template>
