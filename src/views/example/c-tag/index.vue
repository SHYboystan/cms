<template>
  <div>
    <template v-for="tag in tags" :key="tag.id">
      <a-tooltip v-if="tag.name.length > 20" :title="tag.name">
        <a-tag color="blue" :closable="!view" @close="handleClose(tag)">
          {{ `${tag.name.slice(0, 20)}...` }}
        </a-tag>
      </a-tooltip>
      <a-tag color="blue" v-else :closable="!view" @close="handleClose(tag)">
        {{ tag.name }}
      </a-tag>
    </template>

    <a-popover v-if="!view" v-model:visible="visible" trigger="click">
      <template #content>
        <AddTags @getSelectValue="getSelectValue" :sourceData="sourceData"></AddTags>
      </template>
      <a-button class="tag-button">
        <template #icon>
          <PlusCircleOutlined />
        </template>
        添加标签
      </a-button>
    </a-popover>
  </div>
</template>

<script lang="ts" setup>
import AddTags from './components/AddTag.vue';
import { PropType, ref, toRefs, watch,defineProps,defineEmits } from 'vue';


type TTagItem = {
  id: number;
  name: string;
  parentId: number;
  selectType?: number;
  check?: boolean;
  required?: boolean;
}

const props = defineProps({
  view: {
    type: Boolean,
    default: false,
  },
  sourceData: {
    type: Array as PropType<TTagItem[]>,
    default: () => [],
  },
  modelTag: {
    type: Array as PropType<number[]>,
    default: () => [],
  },
});
const { modelTag, sourceData } = toRefs(props);
const emit = defineEmits(['update:modelTag']);

const tags = ref<Array<TTagItem>>([]);
const visible = ref<boolean>(false);

const handleClose = (tag: TTagItem) => {
  let ids: number[] = [];
  tags.value = tags.value.filter((v: TTagItem) => v.id !== tag.id);
  tags.value.map(item => {
    ids.push(item.id);
  });
  emit('update:modelTag', ids);
};

const getSelectValue = (list: TTagItem[]) => {
  tags.value = list;
  let ids: number[] = [];
  list.map(item => {
    ids.push(item.id);
  });
  emit('update:modelTag', ids);
};

const initTree = () => {
  let tagIds = modelTag?.value;
  tags.value = [];
  if (tagIds) {
    sourceData?.value.map((item: TTagItem) => {
      item.check = tagIds.includes(item.id);
    });
    // 是否是回显
    let requiredArr = sourceData.value.filter(v => v.required);
    if (requiredArr && requiredArr.length) {
      // 如果包含 说明是回显 不包含 则需要默认选中一个
      requiredArr.map((item: TTagItem) => {
        let sourceChildren = sourceData.value.filter((v: TTagItem) => v.parentId === item.id);
        if (!sourceChildren.some(v => tagIds.includes(v.id))) {
          sourceChildren[0].check = true;
          emit('update:modelTag', [...tagIds, sourceChildren[0].id]);
        }
      });
    }
    tags.value = sourceData?.value.filter((v: TTagItem) => tagIds.includes(v.id));
  }
};

watch(
    [modelTag, sourceData],
    () => {
      initTree();
    },
    { immediate: true },
);
</script>

<style scoped lang="less">
.ant-tag {
  padding: 4px 7px;
  color: @primary-color;
  background-color: @primary-color-25;
  border-color: @primary-color;
  margin-bottom: 6px;
}

/deep/ .ant-tag-close-icon{
  color: @primary-color;
}
</style>
