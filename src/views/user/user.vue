<template>
  <div>
    这里是用户
    这里是新用户


    爱了爱了
    <a-button type="primary" @click="router.push('analysis')"
      >分析页面</a-button
    >
    <a-button type="primary" @click="router.push('user')">用户页面</a-button>
    <a-steps
        :current="1"
        :items="[
      {
        title: 'Finished',
        description,
      },
      {
        title: 'In Progress',
        description,
        subTitle: 'Left 00:00:08',
      },
      {
        title: 'Waiting',
        description,
      },
    ]"
    ></a-steps>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
const description = 'This is a description.';
</script>

<style scoped lang="scss"></style>
