<template>
  <div
    class="t-drawer-container"
    :class="theme.side.inverted ? 't-drawer-container-dark' : ''"
    :style="drawerStyle"
  >
    <div class="drawer-title">
      {{ systemName }}
    </div>
    <TMenu
      key="nowPath"
      :path="nowPath"
      :inverted="theme.side.inverted"
      :routes="menuChildren"
      mode="inline"
    >
    </TMenu>
  </div>
</template>

<script lang="ts" setup>
import TMenu from "@/layout/components/common/TMenu.vue";

import { reactive, ref, defineExpose } from "vue";
import { useThemeStore } from "@store/theme";
import { systemName } from "@/constants/system";

const theme = useThemeStore();
const drawerStyle = reactive({});
const visible = ref(false);
const nowPath = ref("");
const menuChildren = ref([]);

const openDrawer = (children, path) => {
  menuChildren.value = [];
  nowPath.value = path;
  menuChildren.value = children;
  if (!visible.value) {
    drawerStyle.transform = "translateX(0)";
    visible.value = true;
  }
};
const closeDrawer = () => {
  drawerStyle.transform = "translateX(-100%)";
  setTimeout(() => {
    visible.value = false;
  }, 300);
};
defineExpose({
  openDrawer,
  closeDrawer,
});
</script>

<style scoped lang="less">
.t-drawer-container {
  position: absolute;
  width: 200px;
  right: -200px;
  top: 0;
  height: 100%;
  background-color: white;
  box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
  transform: translateX(-100%);
  z-index: -1;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  transition-property: transform;
  .drawer-title {
    width: 100%;
    text-align: center;
    font-size: 32px;
    color: @primary-color;
    border-bottom: 1px solid @primary-color;
  }
}
.t-drawer-container-dark {
  background-color: @dark;
  color: white;
}
</style>
