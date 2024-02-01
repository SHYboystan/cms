<template>
  <div class="head-container">
    <TanBreadcrumb />
    <UserInfo />
  </div>
</template>

<script lang="ts" setup>
import TanBreadcrumb from "./components/Breadcrumb.vue";
import UserInfo from "./components/UserInfo.vue";
import { CodeSandboxCircleFilled } from "@ant-design/icons-vue";
</script>

<style scoped lang="less">
.head-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 2px rgb(0 21 41 / 8%);
}
</style>
