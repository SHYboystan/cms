<template>
  <AdminLayout
    :mode="theme.layout.mode"
    :header-height="theme.header.height"
    :tab-visible="theme.tab.visible"
    :tab-height="theme.tab.height"
    :side-visible="sideVisible"
    :side-collapse="app.sideCollapse"
    :content-class="app.disableMainXScroll ? 'overflow-x-hidden' : ''"
    :side-width="sideWidth"
    :side-collapsed-width="sideCollapsedWidth"
    :footer-visible="theme.footer.visible"
  >
    <template #header>
      <Head v-bind="headerProps" />
    </template>
    <template #side>
      <Side />
    </template>
    <template #tab>
      <Tab />
    </template>
    <template #footer>
      <Foot />
    </template>
    <Content />
  </AdminLayout>
  <SettingsDrawer></SettingsDrawer>
</template>

<script lang="ts" setup>
import AdminLayout from "../components/AdminLayout/index.vue";
import SettingsDrawer from "./components/SettingsDrawer/index.vue";
import Side from "./components/Side/index.vue";
import Head from "./components/Head/index.vue";
import Tab from "./components/Tab/index.vue";
import Content from "./components/Content/index.vue";
import Foot from "./components/Foot/index.vue";

import { useThemeStore } from "@store/theme";
import { useAppStore } from "@store/app";
import { useLayout } from "@/layout/layout";
const theme = useThemeStore();
const app = useAppStore();

const { headerProps, sideVisible, sideWidth, sideCollapsedWidth } = useLayout();
</script>

<style scoped lang="less"></style>
