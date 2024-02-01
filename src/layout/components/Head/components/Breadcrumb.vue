<template>
  <div class="t-breadcrumb" :class="theme.header.inverted ? 'dark' : ''">
    <div
      :style="{ width: theme.side.width + 'px', flexShrink: 0 }"
      v-if="theme.layout.mode.includes('horizontal')"
    >
      <Logo :inverted="theme.header.inverted" />
    </div>
    <tooltip-container
      :inverted="theme.header.inverted"
      v-if="
        theme.layout.mode !== 'horizontal' &&
        theme.layout.mode !== 'vertical-mix'
      "
      @click="app.toggleSideCollapse"
      style="width: 40px"
    >
      <MenuUnfoldOutlined v-if="app.sideCollapse" />
      <MenuFoldOutlined v-else />
    </tooltip-container>

    <a-breadcrumb
      v-if="theme.layout.mode !== 'horizontal' && theme.header.crumb.visible"
    >
      <a-breadcrumb-item>
        <div class="breadcrumb-box">
          <template v-if="theme.header.crumb.showIcon">
            <component :is="$antIcons[nowParentRoute.icon]" />
          </template>
          <a>{{ nowParentRoute.title }}</a>
        </div>
        <template #overlay>
          <a-menu>
            <a-menu-item :key="item.routePath" v-for="item in routeChildren">
              <a @click="router.push({ path: item.routePath })">{{
                item.meta.title
              }}</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <div class="breadcrumb-box">
          <template v-if="theme.header.crumb.showIcon">
            <component :is="$antIcons[route.meta.icon]" />
          </template>
          <span>{{ nowRoute }}</span>
        </div>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <TMenu
      :routes="routes"
      :inverted="theme.header.inverted"
      mode="horizontal"
      v-if="theme.layout.mode === 'horizontal'"
    ></TMenu>
  </div>
</template>

<script lang="ts" setup>
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FundFilled,
} from "@ant-design/icons-vue";
import Logo from "../../common/Logo.vue";
import TMenu from "../../common/TMenu.vue";

import { onMounted, ref, reactive } from "vue";
import { useAppStore } from "@store/app";
import { useThemeStore } from "@store/theme";
import { useRoute, useRouter } from "vue-router";
import { routes } from "@/router";

const app = useAppStore();
const theme = useThemeStore();
const route = useRoute();
const router = useRouter();

const routeChildren = ref([]);
// const nowParentRoute = ref();
const nowParentRoute = reactive({
  title: "",
  icon: "",
});
const nowRoute = ref();

onMounted(() => {
  const { matched } = route;
  if (matched && matched.length) {
    let children = matched[0].children;
    children.map((item) => {
      item.routePath = matched[0].path + "/" + item.path;
    });
    routeChildren.value = children;
    nowParentRoute.title = matched[0].meta.title;
    nowParentRoute.icon = matched[0].meta.icon;
    nowRoute.value = matched[1].meta.title;
  }
});
</script>

<style scoped lang="less">
.t-breadcrumb {
  height: 100%;
  display: flex;
  align-items: center;
  flex: 1;

  .breadcrumb-box {
    display: inline-flex;
    align-items: center;

    a,
    span {
      margin-left: 5px;
    }
  }

  .ant-menu-horizontal {
    width: 100%;
    height: 100%;

    /deep/ .ant-menu-item {
      display: flex;
      align-items: center;
    }

    /deep/ .ant-menu-submenu {
      .ant-menu-submenu-title {
        display: flex;
        align-items: center;
        height: 100%;
      }
    }
  }
}

.dark {
  background-color: @dark;

  /deep/ .ant-breadcrumb-link {
    color: white;

    a {
      color: white;
    }
  }

  /deep/ .anticon {
    color: white;
  }

  /deep/ .ant-breadcrumb-separator {
    color: white;
  }
}
</style>
