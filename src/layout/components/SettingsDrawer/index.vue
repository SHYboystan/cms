<template>
  <a-drawer
    class="custom-drawer"
    v-model:visible="visible"
    width="330px"
    title="主题配置"
    :closable="false"
    placement="right"
    :z-index="999"
    :bodyStyle="{ paddingTop: 0 }"
  >
    <ThemeMode />
    <ThemeLayout />
    <ThemeColor />
    <ThemePageFuc />
    <ThemePage />
  </a-drawer>
  <div
    class="setting-drawer-index-handle"
    :style="{ right: visible ? '330px' : '0px' }"
    v-if="app.settingDrawerVisible"
    @click="onClose"
  >
    <CloseCircleFilled v-if="visible" style="color: #fff" />
    <SettingFilled v-else style="color: #fff" />
  </div>
</template>

<script lang="ts" setup>
import ThemeMode from "./components/ThemeMode/index.vue";
import ThemeColor from "./components/ThemeColor/index.vue";
import ThemeLayout from "./components/ThemeLayout/index.vue";
import ThemePage from "./components/ThemePage/index.vue";
import ThemePageFuc from "./components/ThemePageFuc/index.vue";
import { SettingFilled, CloseCircleFilled } from "@ant-design/icons-vue";

import { ref } from "vue";

import { useAppStore } from "@store/app";

const app = useAppStore();
const visible = ref(false);
const onClose = () => {
  visible.value = !visible.value;
};
</script>

<style scoped lang="less">
.setting-drawer-index-handle {
  position: fixed;
  right: 330px;
  z-index: 1000;
  top: 50%;
  transform: translateY(-50%);
  width: 42px;
  height: 42px;
  background-color: @primary-color;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  cursor: pointer;
  user-select: none;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  transition-property: right;
  &:hover {
    opacity: 0.8;
  }
}
</style>
