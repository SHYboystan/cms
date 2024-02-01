<template>
  <div class="iframe-container">
    <iframe class="iframe-body" :src="src"></iframe>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from "vue";

interface Props {
  src: string;
}
const props = withDefaults(defineProps<Props>(), {
  src: "",
});
</script>

<style scoped lang="less">
.iframe-container {
  height: 100%;
  .iframe-body {
    width: 100%;
    height: 100%;
  }
}
</style>
