<template>
  <div class="loading-container">
    <div style="height: 100px"></div>
    <div class="first-loading-wrp">
      <div class="loading-wrp">
        <span class="dot dot-spin">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </div>
    <h2 class="title">{{ systemName }}</h2>
  </div>
</template>

<script lang="ts" setup>
import { systemName } from "@/constants/system";
</script>

<style scoped lang="less">
.loading-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .first-loading-wrp {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .loading-wrp {
      display: flex;
      align-items: center;
      justify-content: center;
      .dot {
        position: relative;
        box-sizing: border-box;
        display: inline-block;
        height: 1em;
        width: 1em;
        font-size: 32px;
        transform: rotate(45deg);
        animation: antRotate 1.2s infinite linear;
        i {
          position: absolute;
          display: block;
          width: 14px;
          height: 14px;
          background-color: var(--ant-primary-color);
          border-radius: 100%;
          opacity: 0.3;
          transform: scale(0.75);
          transform-origin: 50% 50%;
          animation: antSpinMove 1s infinite linear alternate;
          &:nth-child(1) {
            top: 0;
            left: 0;
          }
          &:nth-child(2) {
            top: 0;
            right: 0;
            -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s;
          }
          &:nth-child(3) {
            right: 0;
            bottom: 0;
            -webkit-animation-delay: 0.8s;
            animation-delay: 0.8s;
          }
          &:nth-child(4) {
            bottom: 0;
            left: 0;
            -webkit-animation-delay: 1.2s;
            animation-delay: 1.2s;
          }
        }
      }
    }
  }
  .title {
    font-size: 28px;
    font-weight: 500;
    color: #646464;
    margin-top: 30px;
  }
}
@keyframes antRotate {
  to {
    -webkit-transform: rotate(405deg);
    transform: rotate(405deg);
  }
}

@-webkit-keyframes antRotate {
  to {
    -webkit-transform: rotate(405deg);
    transform: rotate(405deg);
  }
}

@keyframes antSpinMove {
  to {
    opacity: 1;
  }
}

@-webkit-keyframes antSpinMove {
  to {
    opacity: 1;
  }
}
</style>
