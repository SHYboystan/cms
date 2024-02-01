<template>
  <a href="/">
    <div
      class="title"
      :class="inverted ? 'dark' : ''"
      :style="{ height: theme.header.height + 'px' }"
    >
      <svg
          t="1686290946701"
          class="icon"
          viewBox="0 0 1024 1024"
          p-id="5384"
      >
        <path d="M271.36 392.192l28.672 118.784-119.808 0 29.696-118.784 61.44 0zM943.104 0q32.768 0 56.832 23.552t24.064 57.344l0 862.208q0 33.792-24.064 57.344t-56.832 23.552l-863.232 0q-32.768 0-56.32-23.552t-23.552-57.344l0-862.208q0-33.792 23.552-57.344t56.32-23.552l863.232 0zM420.864 693.248l-120.832-392.192-119.808 0-120.832 392.192 91.136 0 29.696-90.112 91.136 0q20.48 2.048 25.6 6.144t12.288 21.504l21.504 62.464 90.112 0zM692.224 603.136l-120.832 0q-13.312 0-21.504-8.704t-8.192-22.016l0-271.36-90.112 0 0 302.08q0 37.888 24.064 64t66.048 26.112l150.528 0 0-90.112zM962.56 603.136l-120.832 0q-12.288 0-20.48-8.704t-8.192-22.016l0-271.36-90.112 0 0 302.08q0 37.888 24.064 64t66.048 26.112l149.504 0 0-90.112z" p-id="5385"></path>
      </svg>
<!--      <CodeSandboxCircleFilled />-->
      <h2
        class="name"
        v-if="!app.sideCollapse || theme.layout.mode === 'horizontal-mix'"
      >
        {{ systemName }}
      </h2>
    </div>
  </a>
</template>

<script lang="ts" setup>
import { CodeSandboxCircleFilled } from "@ant-design/icons-vue";

import { useAppStore } from "@store/app";
import { useThemeStore } from "@store/theme";
import { defineProps, withDefaults } from "vue";
import { systemName } from "@/constants/system";

interface Props {
  inverted: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  inverted: false,
});

const app = useAppStore();
const theme = useThemeStore();
</script>

<style scoped lang="less">
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: @primary-color;
  .name {
    margin-bottom: 0;
    margin-left: 5px;
    color: @primary-color;
  }
  .icon{
    fill: @primary-color;
    width: 30px;
    height: 30px;
  }
}
.dark {
  background-color: @dark !important;
}
</style>
