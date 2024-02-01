<template>
  <div class="error-page" id="login-svg">

  </div>
</template>

<script lang="ts" setup>
import bodymovin from "lottie-web";
import {defineProps, onMounted} from "vue";

const props = defineProps({
  path: String
})

const creatSvg = () => {
  const svgDom = document.getElementById("login-svg") as HTMLElement;
  if (svgDom) {
    const animationConfig = {
      container: svgDom, // 挂载DOM
      path: props.path,
      animType: "svg", // 渲染类型
      loop: true, // 是否循环播放
      autoplay: true, // 自动播放
    };
    bodymovin.loadAnimation(animationConfig as any);
  }
};

onMounted(() => {
  creatSvg();
});
</script>

<style scoped lang="less">
.error-page{
  width: 600px;
  height: 600px;
  margin: auto;
}
</style>
