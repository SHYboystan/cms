<template>
  <SideMix v-if="theme.layout.mode === 'vertical-mix'"></SideMix>
  <VerticalSide v-else></VerticalSide>
</template>

<script lang="ts" setup>
import VerticalSide from "./components/VerticalSide.vue";
import SideMix from "./components/SideMix.vue";
import { useThemeStore } from "@store/theme";

const theme = useThemeStore();
</script>

<style scoped lang="less"></style>
