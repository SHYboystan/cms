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
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <a-divider />
    <h1>打撒就好了打撒觉得啊</h1>
    <a-rate v-model:value="value" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
const router = useRouter();
const description = 'This is a description.';
const value = ref<number>(2);
</script>

<style scoped lang="scss"></style>
