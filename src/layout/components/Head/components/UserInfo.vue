<template>
  <div class="user-info">
    <tooltip-container
      :inverted="theme.header.inverted"
      style="width: 40px"
      tooltipContent="ceishi"
    >
      ceishi
    </tooltip-container>
    <a-dropdown>
      <tooltip-container
        :inverted="theme.header.inverted"
        class="dropdown-container"
      >
        <a-avatar size="small">
          <template #icon><UserOutlined /></template>
        </a-avatar>
        <span class="title">{{ user.userInfo.name }}</span>
      </tooltip-container>
      <template #overlay>
        <a-menu @click="userClick">
          <a-menu-item key="user">
            <a href="javascript:;">用户中心</a>
          </a-menu-item>
          <a-menu-item key="loginout">
            <a href="javascript:;">退出登录</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { UserOutlined, ExclamationCircleOutlined } from "@ant-design/icons-vue";
import { useThemeStore } from "@store/theme";
import { useRouter } from "vue-router";
import { userStore } from "@store/user";
import { Modal } from "ant-design-vue";
import { createVNode } from "vue";

const theme = useThemeStore();
const user = userStore();
const router = useRouter();

const userClick = (e) => {
  const { key } = e;
  if (key === "loginout") {
    Modal.confirm({
      title: "提示",
      icon: createVNode(ExclamationCircleOutlined),
      content: "您确定要退出登录吗？",
      okText: "确认",
      cancelText: "取消",
      onOk() {
        user.clearUserInfo();
        router.push("/login");
      },
    });
  }
};
</script>

<style scoped lang="less">
.user-info {
  height: 100%;
  display: flex;
  align-items: center;
  .dropdown-container {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 12px;
    box-sizing: border-box;
    cursor: pointer;
  }
  .title {
    padding-left: 8px;
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
