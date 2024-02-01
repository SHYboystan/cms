<template>
  <div class="side-container">
    <Logo
      :inverted="theme.side.inverted"
      v-if="theme.layout.mode === 'vertical'"
    />
    <TMenu
      :routes="routes"
      :inverted="theme.side.inverted"
      mode="inline"
    ></TMenu>
  </div>
</template>

<script lang="ts" setup>
import Logo from "../../common/Logo.vue";
import TMenu from "../../common/TMenu.vue";

import { useThemeStore } from "@store/theme";
import { routes } from "@/router";

const theme = useThemeStore();
</script>

<style scoped lang="less">
.side-container {
  height: 100%;
  box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
}

.ant-menu-inline {
  width: 100%;
  height: 100%;
}

.ant-menu.ant-menu-inline-collapsed {
  width: 64px;
  height: 100%;
}

/deep/ .ant-menu-item {
  margin-top: 0;
}
</style>
