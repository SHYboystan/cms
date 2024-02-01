<template>
  <div class="columns-container">
    <a-popover trigger="click" placement="bottom">
      <template #content>
        <vue-draggable v-model="list" item-key="key">
          <template #item="{element}">
            <div class="columns-item" v-if="element.key">
              <holder-outlined/>
              <a-checkbox v-model:checked="element.checked">{{ element.title }}</a-checkbox>
            </div>
          </template>
        </vue-draggable>
      </template>
      <tooltip-container placement="top" tooltipContent="列设置" class="columns-icon">
        <setting-outlined/>
      </tooltip-container>
    </a-popover>
  </div>
</template>

<script lang="ts" setup>
import VueDraggable from 'vuedraggable';

import {defineEmits, defineProps, ref, watch} from 'vue'

interface Props {
  columns: any[];
}

const props = defineProps<Props>();

const emit = defineEmits(['update:columns'])

const list = ref(initList());

function initList() {
  return props.columns.map(item => ({...item, checked: true}));
}

watch(
    list,
    newVal => {
      const newColumns = newVal.filter(item => item.checked);

      const columns = newColumns.map(item => {
        const column = {...item};
        delete column.checked;

        return column;
      });

      emit('update:columns', columns);
    },
    {
      deep: true
    }
)
</script>

<style scoped lang="less">
.columns-container {
  display: inline-block;
  height: 100%;
  vertical-align: bottom;

  .columns-item {
    display: flex;
    align-items: center;
    height: 36px;
    padding: 0 12px;
    background-color: white;

    &:hover {
      background-color: @primary-color;
    }
  }

  .columns-icon {
    width: 32px;
    height: 32px;
    font-size: 20px;
  }
}
</style>

<style lang="less">
.columns-item {
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 12px;
  background-color: white;

  .ant-checkbox {
    margin-left: 10px;
  }

  &:hover {
    background-color: @primary-color-25;
  }
}
</style>
