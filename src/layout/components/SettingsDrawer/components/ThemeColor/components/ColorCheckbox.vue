<template>
  <div class="color-checkbox" :style="{ backgroundColor: color }">
    <CheckOutlined
      v-if="checked"
      :class="[iconClass, isWhite ? 'text-gray-700' : 'text-white']"
    />
  </div>
</template>

<script lang="ts" setup>
import { CheckOutlined } from "@ant-design/icons-vue";

import { computed } from "vue";

interface Props {
  /** 颜色 */
  color: string;
  /** 是否选中 */
  checked: boolean;
  /** 图标的class */
  iconClass?: string;
}
const props = withDefaults(defineProps<Props>(), {
  iconClass: "text-14px",
});
const whiteColors = ["#ffffff", "#fff", "rgb(255,255,255)"];
const isWhite = computed(() => whiteColors.includes(props.color));
</script>

<style scoped lang="less">
.color-checkbox {
  min-width: 20px;
  min-height: 20px;
  width: 100%;
  height: 36px;
  border-radius: 2px;
  --un-shadow: var(--un-shadow-inset) 0 1px 3px 0
      var(--un-shadow-color, rgba(0, 0, 0, 0.1)),
    var(--un-shadow-inset) 0 1px 2px -1px var(--un-shadow-color, rgba(0, 0, 0, 0.1));
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-gray-700 {
  color: gray;
  font-weight: 700;
}
.text-white {
  color: white;
}
</style>
