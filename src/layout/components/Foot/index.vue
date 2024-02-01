<template>
  <div class="foot-container" :class="theme.footer.inverted ? 'dark' : ''">
    <span>Copyright ©2021 {{ systemName }}</span>
  </div>
</template>

<script lang="ts" setup>
import { useThemeStore } from "@store/theme";
import { systemName } from "@/constants/system";

const theme = useThemeStore();
</script>

<style scoped lang="less">
.foot-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.dark {
  background-color: @dark;
  color: white;
}
</style>
