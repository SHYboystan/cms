<template>
  <pre class="pre-container">
    <code>
      {{ content }}
    </code>
  </pre>
</template>

<script lang="ts" setup>
import {defineProps} from "vue";

defineProps({
  content: String
})
</script>

<style scoped lang="less">
.pre-container{
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: rgb(246, 248, 250);
  border-radius: 3px;
  width: min-content;
  code{

  }
}
</style>
