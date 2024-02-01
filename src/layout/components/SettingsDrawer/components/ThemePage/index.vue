<template>
  <ThemeItem title="界面显示">
    <a-space style="width: 100%" direction="vertical">
      <div class="switch-item">
        面包屑
        <a-switch v-model:checked="theme.header.crumb.visible" />
      </div>
      <div class="switch-item">
        面包屑图标
        <a-switch v-model:checked="theme.header.crumb.showIcon" />
      </div>
      <div class="switch-item">
        多页签
        <a-switch v-model:checked="theme.tab.visible" />
      </div>
      <div class="switch-item">
        多页签风格
        <a-select
          v-model:value="theme.tab.mode"
          :size="size"
          style="width: 100px"
          :options="theme.tab.modeList"
        />
      </div>
      <div class="switch-item">
        页面切换动画
        <a-switch v-model:checked="theme.page.animate" />
      </div>
      <div class="switch-item">
        页面切换动画类型
        <a-select
          v-model:value="theme.page.animateMode"
          :size="size"
          style="width: 100px"
          :options="theme.page.animateModeList"
        />
      </div>
    </a-space>
  </ThemeItem>
</template>

<script lang="ts" setup>
import ThemeItem from "../../ThemeItem.vue";

import { useThemeStore } from "@store/theme";
const theme = useThemeStore();
</script>

<style scoped lang="less">
.switch-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: #333639;
}
</style>
