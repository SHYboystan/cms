<template>
  <div class="tooltip-box" v-if="showTooltip">
    <a-tooltip :placement="placement" trigger="hover">
      <template #title>{{ tooltipContent }}</template>
      <div class="tooltip-container" :class="contentClassName">
        <slot></slot>
      </div>
    </a-tooltip>
  </div>
  <div v-else class="tooltip-container" :class="contentClassName">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, computed } from "vue";

interface Props {
  /** tooltip显示文本 */
  tooltipContent?: string;
  /** tooltip的位置 */
  placement?: string;
  /** class类 */
  contentClass?: string;
  /** 反转模式下 */
  inverted?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  tooltipContent: "",
  placement: "bottom",
  contentClass: "",
  inverted: false,
});
const showTooltip = computed(() => Boolean(props.tooltipContent));
const contentClassName = computed(
  () => `${props.contentClass} ${props.inverted ? "dark" : ""}`
);
</script>

<style scoped lang="less">
.tooltip-box {
  height: 100%;
}
.tooltip-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: #f6f6f6;
  }
}
.dark {
  background-color: @dark !important;
  color: white;
  &:hover {
    background-color: @primary-color !important;
  }
}
</style>
