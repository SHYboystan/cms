<template>
  <div>
    <a-card title="Default size card" style="width: 300px">
      <template #extra><a href="#">more</a></template>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </a-card>

    <div style="background: #ececec; padding: 30px">
      <a-card title="Card title" :bordered="false" style="width: 300px">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </a-card>
    </div>

    <a-card title="Card Title">
      <a-card-grid style="width: 25%; text-align: center">Content</a-card-grid>
      <a-card-grid style="width: 25%; text-align: center" :hoverable="false">Content</a-card-grid>
      <a-card-grid style="width: 25%; text-align: center">Content</a-card-grid>
      <a-card-grid style="width: 25%; text-align: center">Content</a-card-grid>
      <a-card-grid style="width: 25%; text-align: center">Content</a-card-grid>
      <a-card-grid style="width: 25%; text-align: center">Content</a-card-grid>
      <a-card-grid style="width: 25%; text-align: center">Content</a-card-grid>
      <a-card-grid style="width: 25%; text-align: center">Content</a-card-grid>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">

</style>
