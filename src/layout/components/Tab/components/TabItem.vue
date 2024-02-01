<template>
  <a-dropdown :trigger="['contextmenu']">
    <div
      class="tab-item-container"
      @click="router.push({ path })"
      :class="active ? 'tab-primary' : ''"
    >
      <component class="tab-icon" :is="$antIcons[icon]" />
      <div class="name">{{ name }}</div>
      <CloseOutlined @click.stop="closeTab" v-if="showClose" class="tab-operation" />
    </div>
    <template #overlay>
      <a-menu @click="({ key: menuKey }) => onContextMenuClick(menuKey)">
        <a-menu-item key="removeOtherTab">关闭其他</a-menu-item>
        <a-menu-item key="removeLeftTab">关闭左侧</a-menu-item>
        <a-menu-item key="removeRightTab">关闭右侧</a-menu-item>
        <a-menu-item key="removeOtherTab">关闭所有</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts" setup>
import {
  CloseOutlined,
} from "@ant-design/icons-vue";
import { defineProps, withDefaults } from "vue";
import { useTab } from "@store/tab";
import { useRoute, useRouter } from "vue-router";

interface Props {
  active: boolean;
  showClose: boolean;
  name: string;
  icon: string;
  path: string;
}

const props = withDefaults(defineProps<Props>(), {
  active: false,
  showClose: true,
  icon: "",
  name: "",
  path: "",
});

const tab = useTab();
const route = useRoute();
const router = useRouter();

const onContextMenuClick = (menuKey) => {
  tab[menuKey](props.path, route.path);
};
const closeTab = () => {
  tab.removeTab(props.path,route.path)
}
</script>

<style scoped lang="less">
.tab-item-container {
  width: fit-content;
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid #e5e7eb;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
  padding: 4px 16px;
  border-radius: 4px;
  cursor: pointer;
  color: @t-text;

  &:hover {
    opacity: 0.8;
    border-color: @primary-color;
    color: @primary-color;
  }

  .tab-icon {
    margin-right: 8px;
    font-size: 18px;
  }

  .name {
    white-space: nowrap;
  }

  .tab-operation {
    margin-left: 8px;
    margin-top: 2px;

    &:hover {
      opacity: 0.8;
    }
  }
}

.tab-item-container + .tab-item-container {
  margin-left: 10px;
}

.tab-primary {
  background-color: @primary-color-25;
  color: @primary-color;
  border-color: @primary-color;
}
</style>
