<script setup lang="ts">
import { navLists } from '~/config/nav'
import logo from '/favicon.svg'

const route = useRoute()
</script>

<template>
  <section class="sfq-header">
    <div class="sfq-header-inner px-6">
      <div class="logo">
        <NuxtLink to="/">
          <img :src="logo" alt="logo">
          <span>前端工具箱</span>
        </NuxtLink>
      </div>
      <nav class="menus">
        <div v-for="(item, index) in navLists" :key="index">
          <div v-if="item.children" class="menu-group">
            <button :class="route.fullPath.includes(item.path) ? '!border-b-1px !border-color-$s-text-primary' : ''">
              <span>{{ item.title }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="menu-text-icon">
                <path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z" />
              </svg>
            </button>
            <div class="menu-sub">
              <NuxtLink
                v-for="(sub, idx) in item.children"
                :key="idx"
                :to="`/${[item.path, sub.path].join('/')}`"
                class="menu-sub-item"
              >
                {{ sub.title }}
              </NuxtLink>
            </div>
          </div>
          <NuxtLink v-else :to="item.path" class="menu-item">
            {{ item.title }}
          </NuxtLink>
        </div>
      </nav>
      <div class="flex-auto" />
      <div class="flex items-center gap-2 text-sm text-gray-400">
        <!-- <span class="font-mono text-sm opacity-10">This domain name seeks cooperation or sale.</span> -->
        <DarkToggle />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sfq-header {
  width: 100%;
  height: var(--s-nav-height);
  background-color: var(--s-bg-nav);
  backdrop-filter: saturate(50%) blur(4px);
  // box-shadow: 0px 1px 4px rgba(0, 21, 41, 0.08);
  border-bottom: 1px solid var(--s-divider-light);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.sfq-header-inner {
  display: flex;
  height: var(--s-nav-height);
  align-items: center;
  margin: 0 auto;
  .logo {
    margin-right: 50px;
    user-select: none;
    a {
      display: flex;
      align-items: center;
    }
    img {
      display: block;
      width: 28px;
      margin-right: 8px;
    }
    span {
      font-size: 15px;
    }
  }
  .menus {
    display: flex;
    .menu-item {
      display: block;
      padding: 0 12px;
      line-height: calc(var(--s-nav-height) - 1px);
      font-size: 13px;
      font-weight: 500;
      color: var(--s-text-default);
      transition: color .25s;
      white-space: nowrap;
      &:hover {
        color: var(--s-text-primary);
      }
      &.router-link-exact-active {
        border-bottom: 1px solid var(--s-text-primary);
      }
    }
    .menu-group {
      position: relative;
      button {
        display: flex;
        align-items: center;
        padding: 0 12px;
        height: var(--s-nav-height);
        color: var(--s-text-default);
        background-color: transparent;
        cursor: pointer;
        transition: color .5s;
        span {
          display: block;
          font-size: 13px;
          font-weight: 500;
        }
        .menu-text-icon {
          display: block;
          margin-left: 4px;
          width: 14px;
          height: 14px;
          fill: currentColor;
        }
      }
      &:hover {
        button {
          color: var(--s-text-second);
        }
        .menu-sub {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
      }
    }
    .menu-sub {
      border-radius: 4px;
      padding: 12px 0;
      min-width: 180px;
      border: 1px solid var(--s-divider-nav-sub);
      background: var(--s-bg-nav-sub);
      box-shadow: 0 12px 32px rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 0, 0, .08);
      position: absolute;
      top: calc(var(--s-nav-height) / 2 + 15px);
      left: 0;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-4px);
      transition: opacity .25s, visibility .25s, transform .25s;
      & > a {
        display: block;
        padding: 0 18px;
        line-height: 28px;
        font-size: 13px;
        font-weight: 400;
        color: var(--s-text-default);
        white-space: nowrap;
        transition: color .25s;
        &:hover {
          color: var(--s-text-primary);
        }
      }
    }
  }
}
</style>
