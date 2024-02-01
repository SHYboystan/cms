<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    :mode="mode"
    :theme="inverted ? 'dark' : 'light'"
    :inline-collapsed="app.sideCollapse"
    @click="menuClick"
  >
    <template v-for="route in routes">
      <a-sub-menu
        :key="route.name"
        v-if="route.children && route.children.length"
      >
        <template #icon>
          <component :is="$antIcons[route.meta.icon]" />
        </template>
        <template #title>{{ route.meta.title }}</template>
        <a-menu-item
          :title="child.meta.title"
          :icons="child.meta.icon"
          :key="child.name"
          v-for="child in route.children"
        >
          <template #icon>
            <component :is="$antIcons[child.meta.icon]" />
          </template>
          {{ child.meta.title }}
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item
        :key="route.name"
        :title="route.meta.title"
        :icons="route.meta.icon"
        v-else
      >
        <template #icon>
          <component :is="$antIcons[route.meta.icon]" />
        </template>
        <span>{{ route.meta.title }}</span>
      </a-menu-item>
    </template>
  </a-menu>
</template>

<script lang="ts" setup>
import {
  PieChartOutlined,
  DesktopOutlined,
  InboxOutlined,
  MailOutlined,
  AppstoreOutlined,
} from "@ant-design/icons-vue";

import { defineProps, ref, withDefaults, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useThemeStore } from "@store/theme";
import { useAppStore } from "@store/app";
import { useTab } from "@store/tab";

interface Props {
  // 菜单模式
  mode: "inline" | "horizontal";
  inverted: boolean;
  routes: AuthRoute.Route[];
  path?: string;
}

const props = withDefaults(defineProps<Props>(), {
  mode: "inline",
  inverted: false,
});

const theme = useThemeStore();
const app = useAppStore();
const tab = useTab();
const router = useRouter();
const route = useRoute();

const selectedKeys = ref([]);
const openKeys = ref([]);

const menuClick = (e) => {
  const { item, key, keyPath } = e;
  console.log(item, "menuClick---item");
  console.log(key, "menuClick---key");
  console.log(keyPath, "menuClick---keyPath");
  let path = "/" + keyPath.join("/");
  if (keyPath.length < 2) {
    path = props.path + "/" + key;
  }
  let tabParams = {
    name: item.title,
    icon: item.icons,
    path,
  };
  tab.addTab(tabParams);
  router.push({ path });
};
const menuSelect = (e) => {
  const { item, key, selectedKeys } = e;
  console.log(item, "menuSelect----item");
  console.log(key, "menuSelect----key");
  console.log(selectedKeys, "menuSelect----selectedKeys");
};

const updateRoute = () => {
  const { matched } = route;
  if (matched && matched.length) {
    openKeys.value = [matched[0].name];
    selectedKeys.value = [matched[1].name];
    // 存入tab
    let tabParams = {
      name: matched[1].meta.title,
      icon: matched[1].meta.icon,
      path: matched[1].path,
    };
    tab.addTab(tabParams);
  }
};

onMounted(() => {
  updateRoute();
});
watch(route, () => {
  updateRoute();
});
</script>

<style scoped lang="less"></style>
