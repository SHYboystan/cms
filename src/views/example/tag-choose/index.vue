<template>
  <div class="c-tag-container">
    <CTag v-model:modelTag="tagIds" :sourceData="sourceData" />
  </div>
</template>

<script lang="ts" setup>
import CTag from '../c-tag/index.vue'
import {ref} from "vue";
const tagIds = ref([11,12])
const sourceData = ref([
  {
    id: 1,
    name: '不良人',
    parentId: 0,
  },
  {
    id: 2,
    name: '幻音坊',
    parentId: 0,
  },
  {
    id: 3,
    name: '玄冥教',
    parentId: 0,
  },
  {
    id: 4,
    name: '通文馆',
    parentId: 0,
  },
  {
    id: 5,
    name: '饶江',
    parentId: 0,
  },
  {
    id: 6,
    name: '漠北',
    parentId: 0,
  },
  {
    id: 7,
    name: '殇组织',
    parentId: 0,
  },
  {
    id: 8,
    name: '蜀',
    parentId: 0,
  },
  {
    id: 9,
    name: '吴',
    parentId: 0,
  },
  {
    id: 11,
    name: '李星云',
    parentId: 1,
  },
  {
    id: 12,
    name: '姬如雪',
    parentId: 1,
  },
  {
    id: 13,
    name: '张子凡',
    parentId: 1,
  },
  {
    id: 15,
    name: '段成天',
    parentId: 1,
  },
  {
    id: 16,
    name: '袁天罡',
    parentId: 1,
  },
  {
    id: 17,
    name: '上官云雀',
    parentId: 1,
  },
  {
    id: 18,
    name: '温涛',
    parentId: 1,
  },
])
</script>

<style scoped lang="less">
.c-tag-container{
}
</style>
