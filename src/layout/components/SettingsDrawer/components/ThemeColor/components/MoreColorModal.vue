<template>
  <a-modal
    :body-style="{ padding: '0 20px' }"
    :footer="null"
    width="650px"
    v-model:visible="modalVisible"
  >
    <template #title>
      <span class="title">中国传统颜色</span>
    </template>
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane
        v-for="item in traditionColors"
        :key="item.label"
        :name="item.label"
        :tab="item.label"
      >
        <a-row :gutter="16">
          <a-col :span="3" v-for="i in item.data" :key="i.label">
            <color-checkbox
              class="!w-full !h-36px !rounded-4px"
              :color="i.color"
              :checked="i.color === theme.themeColor"
              icon-class="text-20px"
              @click="theme.setThemeColor(i.color)"
            />
            <p class="text-center">{{ i.label }}</p>
          </a-col>
        </a-row>
      </a-tab-pane>
    </a-tabs>
  </a-modal>
</template>

<script lang="ts" setup>
import ColorCheckbox from "./ColorCheckbox.vue";

import { defineEmits, defineProps, ref, computed } from "vue";
import { useThemeStore } from "@store/theme";

import { traditionColors } from "@/settings/color";

interface Props {
  visible: boolean;
}
const props = defineProps<Props>();
const modalVisible = computed({
  get: () => props.visible,
  set: (v) => emits("update:visible", v),
});
const emits = defineEmits(["update:visible"]);

const theme = useThemeStore();

const activeKey = ref("红色系");
</script>

<style scoped lang="less">
.title {
  color: @primary-color;
  font-weight: bolder;
}
.text-center {
  text-align: center;
}
</style>
