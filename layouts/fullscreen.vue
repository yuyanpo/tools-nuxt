<template>
  <main class="sfq-container">
    <Header />
    <div class="sfq-full-content">
      <slot />
    </div>
    <Footer />
  </main>
</template>

<style lang="scss" scoped>
.sfq-container {
  padding-top: var(--s-nav-height);
}
</style>
