<template>
  <div class="tab-container">
    <div class="tab-list">
      <TabItem
          v-for="(item,index) in tab.tabs"
          :key="item.path"
          :icon="item.icon"
          :path="item.path"
          :name="item.name"
          :active="route.path === item.path"
          :showClose="index > 0"
      />
    </div>
    <div class="reload">
      <tooltip-container
          style="width: 40px"
          tooltipContent="刷新"
          @click="app.reloadPage"
      >
        <RedoOutlined/>
      </tooltip-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TabItem from "./components/TabItem.vue";
import {RedoOutlined} from "@ant-design/icons-vue";
import {useAppStore} from "@store/app";
import {useTab} from "@store/tab";
import {useRoute} from "vue-router";

const app = useAppStore();
const tab = useTab();
const route = useRoute();
</script>

<style scoped lang="less">
.tab-container {
  min-width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 16px;
  box-shadow: 0 1px 2px rgb(0 21 41 / 8%);
  position: relative;

  .tab-list {
    display: flex;
    align-items: center;
    height: 100%;
    box-sizing: border-box;
    padding-right: 28px;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .reload {
    position: fixed;
    right: 10px;
    top: 0;
    height: 100%;
    background-color: white;
  }
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  border-radius: 2px;
}

::-webkit-scrollbar-track-piece {
  background-color: #fff;
}

/* 滚动条的内层滑轨背景颜色 */

::-webkit-scrollbar-track {
  background-color: #fff;
}

/* 滚动条的外层滑轨背景颜色 */

::-webkit-scrollbar-thumb {
  background-color: #e4e7ed;
  border-radius: 2px;
}

/* 滚动条的内层滑块颜色 */

::-webkit-scrollbar-button {
  background-color: #fff;
  display: none;
}

/* 滑轨两头的监听按钮颜色 */
</style>
