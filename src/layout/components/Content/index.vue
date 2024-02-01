<template>
  <router-view v-slot="{ Component, route }">
    <transition
      :name="theme.pageAnimateMode"
      mode="out-in"
      :appear="true"
      @before-leave="app.setDisableMainXScroll(true)"
      @after-enter="app.setDisableMainXScroll(false)"
    >
      <keep-alive :include="[]">
        <component
          :is="Component"
          v-if="app.reloadFlag"
          :key="route.fullPath"
          class="component-container"
        />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
import { useThemeStore } from "@store/theme";
import { useAppStore } from "@store/app";

const theme = useThemeStore();
const app = useAppStore();
</script>

<style scoped lang="less">
.component-container {
  height: 100%;
  background-color: white;
  flex-grow: 1;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  transition-property: color, background-color, border-color, outline-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
}
</style>
