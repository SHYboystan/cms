<template>
  <div>
    这里是用户
    这里是新用户
    <a-button type="primary" @click="router.push('analysis')"
      >分析页面</a-button
    >
    <a-button type="primary" @click="router.push('user')">用户页面</a-button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style scoped lang="scss"></style>
