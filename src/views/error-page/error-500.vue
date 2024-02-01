<template>
  <div class="container">
    <Error path="src/assets/error500.json"></Error>
  </div>
</template>

<script lang="ts" setup>
import Error from './error.vue'
</script>

<style scoped lang="less">
.container{
  width: 100%;
  height: 100%;
}
</style>
