<template>
  <div class="tag-container">
    <div class="tag-title">标签</div>
    <div class="tag-body">
      <div class="tag-left scrollbar">
        <div
            class="tag-li"
            v-for="item in parentTags"
            @click="parentClick(item)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="tag-content scrollbar">
        <div
            class="tag-item"
            v-for="item in childrenTags"
            :class="item.check ? 'is-selected': ''"
            @click="childrenClick(item)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="select-tag">已选择 {{ hasSelect }} 个标签</div>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, ref,computed,toRefs,defineEmits} from "vue";

const props = defineProps({
  sourceData: Array
})
const { sourceData } = toRefs(props);
const emit = defineEmits(['getSelectValue']);

const parentTags = ref([])
const childrenTags = ref([])

const hasSelect = computed(() => sourceData.value.filter(v => v.check).length);

const parentClick = (item) => {
  const { id } = item;
  childrenTags.value = sourceData.value.filter(v => v.parentId === id);
}

const childrenClick = (item) => {
  item.check = !item.check;
  let filter = sourceData.value.filter(v => v.check);
  emit('getSelectValue',filter)
}

const init = () => {
  parentTags.value = sourceData.value.filter(v => v.parentId === 0)
  const id = parentTags.value[0].id;
  childrenTags.value = sourceData.value.filter((v) => v.parentId === id);
}

init();

</script>

<style scoped lang="less">
.tag-container{
  width: 560px;
  .tag-title{
    text-align: center;
    font-size: 16px;
    height: 36px;
    line-height: 36px;
    border-bottom: 1px solid #f0f0f2;
    font-weight: 600;
    color: #222226;
    margin-bottom: 8px;
  }
  .tag-body {
    width: 100%;
    max-height: 264px;
    overflow-y: auto;
    box-sizing: border-box;
    display: flex;

    .tag-left {
      padding-bottom: 12px;
      border: 0;
      background: #fff;
      width: 160px;
      flex-shrink: 0;
      box-sizing: border-box;
      overflow-y: auto;
      overflow-x: hidden;

      .tag-li {
        box-sizing: border-box;
        padding: 0 16px;
        border-radius: 4px;
        height: 30px;
        margin: 3px 5px 3px 0;
        font-weight: 400;
        font-size: 14px;
        line-height: 30px;
        color: #777888;
        text-align: left;
        cursor: pointer;
        white-space: nowrap; /*强制span不换行*/
        overflow: hidden; /*超出宽度部分隐藏*/
        text-overflow: ellipsis; /*超出部分以点号代替*/

        &:hover {
          color: @primary-color !important;
        }
      }
    }

    .tag-content {
      flex: 1;
      margin-left: 15px;
      flex-wrap: wrap;
      overflow-y: auto;
      overflow-x: hidden;

      .tag-item {
        width: fit-content;
        padding: 0 8px;
        height: 24px;
        background-color: #ebf2f7;
        border-radius: 2px;
        font-weight: 400;
        color: #507999;
        line-height: 24px;
        cursor: pointer;
        margin-right: 16px;
        margin-bottom: 10px;
        border: none;
        font-size: 13px;
        display: inline-block;
        user-select: none;
      }

      .is-selected {
        background: @primary-color;
        color: #fff;
      }
    }
  }
  .select-tag {
    width: 100%;
    height: auto;
    padding: 0 10px;
    text-align: right;
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>
