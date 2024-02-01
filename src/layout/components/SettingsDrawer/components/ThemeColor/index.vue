<template>
  <ThemeItem title="系统主题">
    <div class="theme-container">
      <div class="color-container">
        <a-tooltip
          v-for="color in theme.themeColorList"
          :key="color"
          class="setting-drawer-theme-color-colorBlock"
        >
          <template #title>{{ color }}</template>
          <a-tag :color="color" @click="theme.setThemeColor(color)">
            <CheckOutlined v-if="color === theme.themeColor" />
          </a-tag>
        </a-tooltip>
      </div>
      <div class="color-pick">
        <span>自定义颜色：{{ theme.themeColor }}</span>
        <input :value="theme.themeColor" type="color" @input="inputChange" />
      </div>
      <a-button block @click="visible = true">更多颜色</a-button>
    </div>
    <MoreColorModal v-model:visible="visible" />
  </ThemeItem>
</template>

<script lang="ts" setup>
import ThemeItem from "../../ThemeItem.vue";
import MoreColorModal from "./components/MoreColorModal.vue";
import { CheckOutlined } from "@ant-design/icons-vue";

import { useThemeStore } from "@/store/theme";
import { ref } from "vue";
const theme = useThemeStore();
const changeColor = (color: string) => {
  theme.setThemeColor(color);
};
const inputChange = (e) => {
  theme.setThemeColor(e.target.value);
};
const isCustomColor = ref(true);
const pureColor = ref("red");
const color = ref("red");
const visible = ref(false);
const gradientColor = ref(
  "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)"
);
</script>

<style scoped lang="less">
.theme-container {
  width: 100%;
  .setting-drawer-theme-color-colorBlock {
    width: 20px;
    height: 20px;
    border-radius: 2px;
    float: left;
    cursor: pointer;
    margin-right: 8px;
    margin-top: 8px;
    padding-left: 0;
    padding-right: 0;
    color: #fff;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      font-size: 14px;
    }
  }
  .custom-color {
    width: 100%;
    height: 20px;
  }

  .color-container {
    display: grid;
    grid-template-columns: repeat(8, minmax(0px, 1fr));
    gap: 12px 8px;
  }

  .color-pick {
    margin: 10px 0;
    box-sizing: border-box;
    padding-right: 5px;
    input {
      width: 100%;
      border: 1px solid rgb(224, 224, 230);
      box-sizing: border-box;
    }
    span {
      font-size: 12px;
    }
  }
}
</style>
