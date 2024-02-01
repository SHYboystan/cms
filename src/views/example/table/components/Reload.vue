<template>
  <div class="reload-container">
    <tooltip-container placement="top" tooltipContent="刷新" class="reload-icon">
      <redo-outlined />
    </tooltip-container>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="less">
.reload-container{
  display: inline-block;
  height: 100%;
  vertical-align: bottom;
  .reload-icon{
    width: 32px;
    height: 32px;
    font-size: 20px;
  }
}
</style>
