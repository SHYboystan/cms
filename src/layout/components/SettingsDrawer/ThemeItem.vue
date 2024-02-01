<template>
  <div class="item">
    <a-divider>{{ title }}</a-divider>
    <div class="item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "暂无",
  },
});
const { title } = toRefs(props);
</script>

<style scoped lang="less">
.item-content {
  height: auto;
}
</style>
