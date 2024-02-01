<template>
  <ThemeItem title="主题模式">
    <a-space style="width: 100%" direction="vertical">
      <div class="switch-item">
        侧边栏深色
        <a-switch v-model:checked="theme.side.inverted" />
      </div>
      <div class="switch-item">
        头部深色
        <a-switch v-model:checked="theme.header.inverted" />
      </div>
      <div class="switch-item">
        底部深色
        <a-switch v-model:checked="theme.footer.inverted" />
      </div>
    </a-space>
  </ThemeItem>
</template>

<script lang="ts" setup>
import ThemeItem from "../../ThemeItem.vue";
import { useThemeStore } from "@store/theme";
import { ref } from "vue";

const theme = useThemeStore();

const visible = ref(false);
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
