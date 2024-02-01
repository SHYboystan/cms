<template>
  <div>
    <a-modal v-model:visible="visible" :title="title" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <JsonCode :content="json" />
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import JsonCode from '../json-code/index.vue';

import useModal from "@/hooks/useModal";
import {defineExpose, ref} from "vue";

const title = ref('新建');
const json = ref('yarn run v1.22.0\n' +
    '$ eslint --format=pretty ./packages\n' +
    'Done in 9.70s.')

const { visible, openModal, closeModal} = useModal();
const handleOk = () => {
  closeModal();
}
const open = () => {
  openModal();
}
defineExpose({
  open,
})
</script>

<style scoped lang="scss">

</style>
