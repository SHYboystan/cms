<template>
  <div class="table-container">
    <a-card style="margin-bottom: 16px;">
      <a-form
        ref="formRef"
        name="advanced_search"
        class="ant-advanced-search-form"
        :model="formState"
        layout="inline"
        @finish="onFinish"
      >
        <a-form-item name="name">
          <a-input
            placeholder="姓名/年龄/地址"
            v-model:value="formState.name"
          ></a-input>
        </a-form-item>
        <a-form-item name="select" has-feedback>
          <a-select v-model:value="formState.select" placeholder="标签">
            <a-select-option value="china">China</a-select-option>
            <a-select-option value="usa">U.S.A</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit">搜索</a-button>
          <a-button style="margin: 0 8px" @click="() => formRef.resetFields()"
            >重置</a-button
          >
          <a style="font-size: 12px" @click="expand = !expand">
            <template v-if="expand">
              <UpOutlined />
            </template>
            <template v-else>
              <DownOutlined />
            </template>
            {{ expand ? "收起" : "展开" }}
          </a>
        </a-form-item>
      </a-form>
    </a-card>
    <a-card title="高级表格">
      <template #extra>
        <a-button type="primary" @click="refAddModal.open()">
          <template #icon><plus-outlined /></template>
          新建
        </a-button>
        <a-dropdown>
          <a-button style="margin: 0 10px">
            <ellipsis-outlined />
          </a-button>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a href="javascript:;">1st menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">2nd menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">3rd menu item</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
        <Reload @click="getTableData" />
        <ColumnsSetting v-model:columns="columns" />
        <SizeSetting v-model:size="size" />
      </template>
      <a-table
        :loading="loading"
        :pagination="pagination"
        :columns="columns"
        :size="size"
        :data-source="dataSource"
        @handleTableChange="handleTableChange">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span>
              <smile-outlined />
              姓名
            </span>
          </template>
        </template>
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <a>
              {{ record.name }}
            </a>
          </template>
          <template v-else-if="column.key === 'tags'">
            <span>
              <a-tag
                v-for="tag in record.tags"
                :key="tag"
                :color="
                  tag === 'loser'
                    ? 'volcano'
                    : tag.length > 5
                    ? 'geekblue'
                    : 'green'
                "
              >
                {{ tag.toUpperCase() }}
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'action'">
            <span>
              <a>Invite 一 {{ record.name }}</a>
              <a-divider type="vertical" />
              <a>Delete</a>
              <a-divider type="vertical" />
              <a class="ant-dropdown-link">
                More actions
                <down-outlined />
              </a>
            </span>
          </template>
        </template>
      </a-table>
    </a-card>
    <AddModal ref="refAddModal"></AddModal>
  </div>
</template>

<script lang="ts" setup>
import AddModal from "../modal/index.vue";
import ColumnsSetting from "./components/ColumnsSetting.vue";
import SizeSetting from "./components/SizeSetting.vue";
import Reload from "./components/Reload.vue";

import { reactive, ref } from "vue";
import type { FormInstance } from "ant-design-vue";
import { table } from "@/api/table";
import useTable from "@/hooks/useTable";

const expand = ref(false);
const refAddModal = ref();
const formRef = ref<FormInstance>();
const formState = reactive({});
const onFinish = (values: any) => {
  console.log("Received values of form: ", values);
  console.log("formState: ", formState);
  getTableData();
};

const columns = ref([
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "地址",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "标签",
    key: "tags",
    dataIndex: "tags",
  },
  {
    title: "操作",
    key: "action",
  },
])
const size = ref('default')
const Filter = reactive({
  a: 1
})

const { loading, pagination, handleTableChange, dataSource, getTableData } = useTable<any>(table, Filter);
</script>

<style scoped lang="less">
.table-container {
  padding: 10px;
  box-sizing: border-box;

  //background-color: hsl(218,22%,7%) !important;
  .ant-advanced-search-form {
    margin: 16px 0;
  }

  /deep/ .ant-card-body {
    padding: 0 16px;
  }

  /deep/ .ant-card-head {
    border-bottom: none;
  }
}
</style>
