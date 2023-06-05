<template>
  <main class="sfq-container">
    <Header />
    <slot />
    <Footer />
  </main>
</template>

<style lang="less" scoped>
.sfq-container {
  padding-top: var(--s-nav-height);
}
</style>
