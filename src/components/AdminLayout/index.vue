<template>
  <div class="t-container">
    <div class="t-container-header" :style="headerStyle">
      <slot name="header"></slot>
    </div>
    <div class="t-container-tab" :style="tabStyle" v-if="tabVisible">
      <slot name="tab"></slot>
    </div>
    <aside v-if="sideVisible" class="t-container-side" :style="sideStyle">
      <slot name="side"></slot>
    </aside>
    <div
      class="t-container-content"
      :class="contentClass"
      :style="contentStyle"
    >
      <div class="t-container-content-body">
        <slot></slot>
      </div>
    </div>
    <div class="t-container-footer" :style="footStyle" v-if="footerVisible">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed, toRefs, withDefaults } from "vue";

interface Props {
  // 布局模式
  mode: ThemeKey.ThemeLayoutMode;
  // 头部高度
  headerHeight: number;
  // 标签栏是否显示
  tabVisible: boolean;
  // 标签栏高度
  tabHeight: number;
  // 侧边栏是否显示
  sideVisible: boolean;
  // 侧边栏是否展开
  sideCollapse: boolean;
  // 侧边栏宽度
  sideWidth: number;
  // 侧边栏收起时候宽度
  sideCollapsedWidth: number;
  // 底部是否显示
  footerVisible: boolean;
  // 主体内容样式名
  contentClass?: string;
}
const props = withDefaults(defineProps<Props>(), {
  mode: "vertical",
  headerHeight: 0,
  tabVisible: true,
  tabHeight: 0,
  sideVisible: true,
  sideCollapse: true,
  sideWidth: 220,
  sideCollapsedWidth: 64,
  footerVisible: true,
});
const {
  mode,
  sideWidth,
  headerHeight,
  sideCollapse,
  sideCollapsedWidth,
  sideVisible,
  tabHeight,
  tabVisible,
} = toRefs(props);
const headerStyle = computed(() => {
  if (mode.value.includes("vertical")) {
    if (sideCollapse.value) {
      return `padding-left:${
        sideCollapsedWidth.value
      }px;z-index:${802};height:${headerHeight.value}px`;
    } else {
      return `padding-left:${sideWidth.value}px;z-index:${802};height:${
        headerHeight.value
      }px`;
    }
  } else {
    return `padding-left:${0}px;z-index:${804};height:${headerHeight.value}px`;
  }
});
const sideStyle = computed(() => {
  if (mode.value.includes("vertical")) {
    if (mode.value === "vertical-mix") {
      return `padding-top:${0}px;width:${sideWidth.value}px`;
    }
    if (sideCollapse.value) {
      return `padding-top:${0}px;width:${sideCollapsedWidth.value}px`;
    } else {
      return `padding-top:${0}px;width:${sideWidth.value}px`;
    }
  } else {
    if (mode.value === "horizontal-mix") {
      if (sideCollapse.value) {
        return `padding-top:${headerHeight.value}px;width:${sideCollapsedWidth.value}px`;
      } else {
        return `padding-top:${headerHeight.value}px`;
      }
    }
    return `padding-top:${headerHeight.value}px`;
  }
});
const tabStyle = computed(() => {
  if (!sideVisible.value) {
    return `padding-left:${0}px;top:${headerHeight.value}px;height:${
      tabHeight.value
    }px`;
  }
  if (sideCollapse.value) {
    return `padding-left:${sideCollapsedWidth.value}px;top:${headerHeight.value}px;height:${tabHeight.value}px`;
  } else {
    return `padding-left:${sideWidth.value}px;top:${headerHeight.value}px;height:${tabHeight.value}px`;
  }
});
const contentStyle = computed(() => {
  let newTabHeight = tabHeight.value;
  if (!tabVisible.value) {
    newTabHeight = 0;
  }
  if (!sideVisible.value) {
    return `padding-left:${0}px;padding-top:${
      headerHeight.value + newTabHeight
    }px`;
  }
  if (sideCollapse.value) {
    return `padding-left:${sideCollapsedWidth.value}px;padding-top:${
      headerHeight.value + newTabHeight
    }px`;
  } else {
    return `padding-left:${sideWidth.value}px;padding-top:${
      headerHeight.value + newTabHeight
    }px`;
  }
});

const footStyle = computed(() => {
  if (!sideVisible.value) {
    return `padding-left:${0}px;`;
  }
  if (sideCollapse.value) {
    return `padding-left:${sideCollapsedWidth.value}px;`;
  } else {
    return `padding-left:${sideWidth.value}px;`;
  }
})
</script>

<style scoped lang="less">
.transition-mix {
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  transition-property: padding-left;
}
.t-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  &-header {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 802;
    flex-shrink: 0;
    width: 100%;
    height: 56px;
    padding-left: 200px;
    transform: translateX(0px);
    box-sizing: border-box;
    background-color: white;
    .transition-mix();
  }
  &-side {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 220px;
    z-index: 803;
    box-sizing: border-box;
    padding-top: 0;
    .transition-mix();
    transition-property: all;
  }
  &-tab {
    position: fixed;
    left: 0;
    top: 56px;
    z-index: 801;
    width: 100%;
    height: 44px;
    padding-left: 200px;
    transform: translateX(0px);
    background-color: white;
    flex-shrink: 0;
    box-sizing: border-box;
    .transition-mix();
  }
  .overflow-x-hidden {
    overflow: hidden;
  }
  &-content {
    padding-top: 100px;
    padding-bottom: 0;
    padding-left: 200px;
    overflow: visible;
    flex-grow: 1;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    .transition-mix();
    .t-container-content-body {
      padding: 16px;
      height: 100%;
      min-height: 100%;
      flex-grow: 1;
      box-sizing: border-box;
      background-color: rgba(246, 249, 248, 1);
    }
  }
  &-footer {
    position: static;
    left: 0;
    bottom: 0;
    flex-shrink: 0;
    box-sizing: border-box;
    width: 100%;
    height: 48px;
    padding-left: 200px;
    .transition-mix();
  }
}
</style>
