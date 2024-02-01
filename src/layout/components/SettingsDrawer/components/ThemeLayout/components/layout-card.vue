<template>
  <div
    class="layout-mode-card"
    :class="[checked ? 'border-primary' : 'border-transparent']"
  >
    <a-tooltip :placement="activeConfig.placement" trigger="hover">
      <div
        class="layout-mode-card-content"
        :class="[mode.includes('vertical') ? 'flex' : 'flex-col']"
      >
        <slot></slot>
      </div>
      <template #title>
        <span>{{ label }}</span>
      </template>
    </a-tooltip>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  /** 布局模式 */
  mode: ThemeKey.ThemeLayoutMode;
  /** 布局模式文本 */
  label: string;
  /** 选中状态 */
  checked: boolean;
}

const props = defineProps<Props>();

type LayoutConfig = Record<
  ThemeKey.ThemeLayoutMode,
  {
    placement: string;
    headerClass: string;
    menuClass: string;
    mainClass: string;
  }
>;

const layoutConfig: LayoutConfig = {
  vertical: {
    placement: "bottomLeft",
    headerClass: "",
    menuClass: "w-1/3 h-full",
    mainClass: "w-2/3 h-3/4",
  },
  "vertical-mix": {
    placement: "bottom",
    headerClass: "",
    menuClass: "w-1/4 h-full",
    mainClass: "w-2/3 h-3/4",
  },
  horizontal: {
    placement: "bottom",
    headerClass: "",
    menuClass: "w-full h-1/4",
    mainClass: "w-full h-3/4",
  },
  "horizontal-mix": {
    placement: "bottomRight",
    headerClass: "",
    menuClass: "w-full h-1/4",
    mainClass: "w-2/3 h-3/4",
  },
};

const activeConfig = computed(() => layoutConfig[props.mode]);
</script>

<style scoped lang="less">
.layout-mode-card {
  border: 2px solid #eeeeee;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    border-color: @primary-color;
  }
  .layout-mode-card-content {
    box-shadow: 0 1px 2.5px rgba(0, 0, 0, 0.18);
    width: 96px;
    height: 64px;
    border-radius: 4px;
    padding: 6px;
    grid-gap: 6px;
    gap: 6px;
  }
  .flex {
    display: flex;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
  }
}
.border-primary {
  border-color: @primary-color !important;
}
.border-transparent {
  border-color: transparent;
}
</style>
