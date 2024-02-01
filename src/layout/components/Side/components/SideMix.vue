<template>
  <div
    @mouseleave="pCloseDrawer"
    class="mix-container"
    :class="theme.side.inverted ? 'mix-container-dark' : ''"
  >
    <div class="mix-container-logo">
      <svg
          t="1686290946701"
          class="icon"
          viewBox="0 0 1024 1024"
          p-id="5384"
      >
        <path d="M271.36 392.192l28.672 118.784-119.808 0 29.696-118.784 61.44 0zM943.104 0q32.768 0 56.832 23.552t24.064 57.344l0 862.208q0 33.792-24.064 57.344t-56.832 23.552l-863.232 0q-32.768 0-56.32-23.552t-23.552-57.344l0-862.208q0-33.792 23.552-57.344t56.32-23.552l863.232 0zM420.864 693.248l-120.832-392.192-119.808 0-120.832 392.192 91.136 0 29.696-90.112 91.136 0q20.48 2.048 25.6 6.144t12.288 21.504l21.504 62.464 90.112 0zM692.224 603.136l-120.832 0q-13.312 0-21.504-8.704t-8.192-22.016l0-271.36-90.112 0 0 302.08q0 37.888 24.064 64t66.048 26.112l150.528 0 0-90.112zM962.56 603.136l-120.832 0q-12.288 0-20.48-8.704t-8.192-22.016l0-271.36-90.112 0 0 302.08q0 37.888 24.064 64t66.048 26.112l149.504 0 0-90.112z" p-id="5385"></path>
      </svg>
    </div>
    <div class="mix-container-item-box">
      <div
        class="mix-container-item"
        :class="activePath === item.path ? 'item-active' : ''"
        v-for="item in routes"
        :key="item.path"
        @click="menuClick(item)"
      >
        <span class="item-icon">
          <component :is="$antIcons[item.meta.icon]" />
        </span>
        <span>{{ item.meta.title }}</span>
      </div>
    </div>
    <SideDrawer ref="vmSideDrawer" />
  </div>
</template>

<script lang="ts" setup>
import SideDrawer from "./SideDrawer.vue";

import { useRoute } from "vue-router";
import { routes } from "@/router";
import { ref, onMounted, watch } from "vue";
import { useThemeStore } from "@store/theme";

const route = useRoute();
const theme = useThemeStore();
const activePath = ref();
const vmSideDrawer = ref(null);
const menuClick = (item) => {
  vmSideDrawer.value.openDrawer(item.children || [], item.path);
};
const pCloseDrawer = () => {
  vmSideDrawer.value.closeDrawer();
};
const updateActive = () => {
  const { matched } = route;
  activePath.value = matched[0].path;
};
onMounted(() => {
  updateActive();
});
watch(route, () => {
  updateActive();
});
</script>

<style scoped lang="less">
.mix-container {
  width: 100%;
  height: 100%;
  padding: 0 4px;
  box-sizing: border-box;
  position: relative;
  background-color: white;
  &-logo {
    width: 100%;
    font-size: 32px;
    padding: 12px 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    color: @primary-color;
    .icon{
      fill: @primary-color;
      width: 30px;
      height: 30px;
    }
  }
  &-item-box {
    overflow-x: hidden;
    overflow-y: auto;
  }
  &-item {
    width: 100%;
    font-size: 12px;
    padding-bottom: 12px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: @t-text;
    cursor: pointer;
    user-select: none;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    transition-property: color, background-color, border-color, outline-color,
      text-decoration-color, fill, stroke;
    &:hover {
      color: @primary-color;
    }
    .item-icon {
      font-size: 24px;
      margin-bottom: 5px;
    }
  }
  .item-active {
    color: @primary-color !important;
    //background-color: @primary-color-25;
  }
}
.mix-container-dark {
  background-color: @dark;
  .mix-container-item {
    color: white;
  }
  //.item-active{
  //  background-color: @primary-color-25;
  //}
}
</style>
