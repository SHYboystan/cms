<template>
  <ThemeItem title="界面功能">
    <a-space style="width: 100%" direction="vertical">
      <div class="switch-item">
        头部高度
        <a-input-number v-model:value="theme.header.height" />
      </div>
      <div class="switch-item">
        多页签高度
        <a-input-number v-model:value="theme.tab.height" />
      </div>
      <div class="switch-item">
        侧边栏展开宽度
        <a-input-number v-model:value="theme.side.width" />
      </div>
      <div class="switch-item">
        左侧混合侧边栏展开宽度
        <a-input-number :step="5" v-model:value="theme.side.mixWidth" />
      </div>
      <div class="switch-item">
        显示底部
        <a-switch v-model:checked="theme.footer.visible" />
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
