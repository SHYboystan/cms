<template>
  <ThemeItem title="布局模式">
    <a-space :wrap="true" :size="24" class="px-12px" align="center">
      <LayoutCard
        v-for="item in theme.layout.modeList"
        :key="item.value"
        :mode="item.value"
        :label="item.label"
        :checked="item.value === theme.layout.mode"
        @click="theme.setLayoutMode(item.value)"
      >
        <template v-if="item.value === 'vertical'">
          <div class="side"></div>
          <div class="main">
            <div class="top"></div>
            <div class="content"></div>
          </div>
        </template>
        <template v-if="item.value === 'vertical-mix'">
          <div class="side" style="width: 8px"></div>
          <div class="side" style="width: 16px"></div>
          <div class="main">
            <div class="top"></div>
            <div class="content"></div>
          </div>
        </template>
        <template v-if="item.value === 'horizontal'">
          <div class="top"></div>
          <div class="main">
            <div class="content"></div>
          </div>
        </template>
        <template v-if="item.value === 'horizontal-mix'">
          <div class="top"></div>
          <div class="main" style="flex-direction: row">
            <div class="content-mix"></div>
            <div class="content"></div>
          </div>
        </template>
      </LayoutCard>
    </a-space>
  </ThemeItem>
</template>

<script lang="ts" setup>
import ThemeItem from "../../ThemeItem.vue";
import LayoutCard from "./components/layout-card.vue";

import { useThemeStore } from "@store/theme";

const theme = useThemeStore();
</script>

<style scoped lang="less">
.px-12px {
  padding-left: 12px;
  padding-right: 8px;
  padding-bottom: 20px;
  margin-left: 12px;
}

.side {
  width: 18px;
  height: 100%;
  background-color: @primary-color;
  opacity: 0.5;
  border-radius: 4px;
}
.top {
  height: 16px;
  background-color: @primary-color;
  border-radius: 4px;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  grid-gap: 6px;
  gap: 6px;
  .top {
    height: 16px;
    background-color: @primary-color;
    border-radius: 4px;
  }
  .content {
    flex: 1;
    background-color: @primary-color;
    opacity: 0.25;
    border-radius: 4px;
  }
  .content-mix {
    width: 18px;
    background-color: @primary-color;
    opacity: 0.25;
    border-radius: 4px;
  }
}
</style>
