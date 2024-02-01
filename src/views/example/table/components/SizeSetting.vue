<template>
  <div class="size-container">
    <a-dropdown :trigger="['click']">
      <tooltip-container placement="top" tooltipContent="密度" class="size-icon">
        <column-height-outlined />
      </tooltip-container>
      <template #overlay>
        <a-menu @click="onClick">
          <a-menu-item
              v-for="item in sizeList"
              :key="item.key"
              :class="item.key === size ? 'size-active' : ''"
          >
            {{ item.name }}
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script lang="ts" setup>
import {defineEmits, defineProps, ref} from "vue";

const props = defineProps({
  size: String
})
const emit = defineEmits(['update:size']);
const sizeList = ref([
  {
    key: 'default',
    name: '默认'
  },
  {
    key: 'middle',
    name: '中等'
  },
  {
    key: 'small',
    name: '紧凑'
  },
])
const onClick = (e) => {
  const { key } = e;
  emit('update:size', key);
}
</script>

<style scoped lang="less">
.size-container{
  display: inline-block;
  height: 100%;
  vertical-align: bottom;
  .size-icon{
    width: 32px;
    height: 32px;
    font-size: 20px;
  }
}
</style>

<style lang="less">
.size-active{
  background-color: @primary-color-25 !important;
  span{
    color: @primary-color !important;
  }
}
</style>
