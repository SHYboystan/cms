<template>
  <div class="login-container">
    <div class="login-content">
      <div class="login-left">
        <div class="name">
          <svg t="1686290946701" class="icon" viewBox="0 0 1024 1024" p-id="5384">
            <path
              d="M271.36 392.192l28.672 118.784-119.808 0 29.696-118.784 61.44 0zM943.104 0q32.768 0 56.832 23.552t24.064 57.344l0 862.208q0 33.792-24.064 57.344t-56.832 23.552l-863.232 0q-32.768 0-56.32-23.552t-23.552-57.344l0-862.208q0-33.792 23.552-57.344t56.32-23.552l863.232 0zM420.864 693.248l-120.832-392.192-119.808 0-120.832 392.192 91.136 0 29.696-90.112 91.136 0q20.48 2.048 25.6 6.144t12.288 21.504l21.504 62.464 90.112 0zM692.224 603.136l-120.832 0q-13.312 0-21.504-8.704t-8.192-22.016l0-271.36-90.112 0 0 302.08q0 37.888 24.064 64t66.048 26.112l150.528 0 0-90.112zM962.56 603.136l-120.832 0q-12.288 0-20.48-8.704t-8.192-22.016l0-271.36-90.112 0 0 302.08q0 37.888 24.064 64t66.048 26.112l149.504 0 0-90.112z"
              p-id="5385"></path>
          </svg>
          {{ systemName }}
        </div>
        <span class="des">适用于vue3的后台轻量管理系统</span>
        <div class="login-svg" id="login-svg"></div>
      </div>
      <div class="login-form">
        <div class="tip">一粥一饭，当思来处不易；</div>
        <div class="tip">半丝半缕，恒念物力维艰。</div>
        <div class="form-container">
          <a-form :model="formState" name="basic" :label-col="{ span: 0 }" :wrapper-col="{ span: 24 }" autocomplete="off"
            @finish="onFinish" @finishFailed="onFinishFailed">
            <a-form-item name="username" :rules="[
              { required: true, message: 'Please input your username!' },
            ]">
              <a-input size="large" placeholder="用户名(admin)" v-model:value="formState.username">
                <template #prefix>
                  <UserOutlined class="site-form-item-icon" />
                </template>
              </a-input>
            </a-form-item>

            <a-form-item name="password" :rules="[
              { required: true, message: 'Please input your password!' },
            ]">
              <a-input-password placeholder="密码(admin)" size="large" v-model:value="formState.password">
                <template #prefix>
                  <LockOutlined class="site-form-item-icon" />
                </template>
              </a-input-password>
            </a-form-item>

            <div class="remember">
              <a-checkbox v-model:checked="formState.remember">记住密码
              </a-checkbox>
              <a-button type="link">忘记密码</a-button>
            </div>

            <a-button :loading="loading" block type="primary" size="large" html-type="submit">登 录
            </a-button>

            <div class="remember" style="margin-top: 10px">
              <span>
                其他登录方式
                <a-button type="link"><alipay-circle-filled /></a-button>
                <a-button type="link"><wechat-filled /></a-button>
              </span>
              <a-button type="link">注册账号</a-button>
            </div>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import bodymovin from "lottie-web";
import { systemName } from "@/constants/system";
import svgData from '../../assets/svg.json'
import { onMounted, reactive, ref, toRaw } from "vue";
import { userStore } from "@/store/user";

const user = userStore();

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const loading = ref(false);

const formState = reactive<FormState>({
  username: "admin",
  password: "admin",
  remember: true,
});

const onFinish = async () => {
  loading.value = true;
  await user.login(toRaw(formState));
  loading.value = false;
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const creatSvg = () => {
  const svgDom = document.getElementById("login-svg") as HTMLElement;
  if (svgDom) {
    const animationConfig = {
      container: svgDom, // 挂载DOM
      // path: "../../src/assets/svg.json",
      animationData: svgData,
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
.login-container {
  background-color: @primary-color;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-content {
    width: 53%;
    min-width: 1000px;
    height: 60%;
    min-height: 650px;
    border-radius: 10px;
    display: flex;
    align-items: center;

    .login-left {
      width: 50%;
      height: 100%;
      background-color: #f2f3f5;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      padding-top: 30px;
      border-radius: 15px 0 0 15px;

      .login-svg {
        width: 100%;
        height: calc(100% - 100px);
        min-height: 500px;
        flex-shrink: 0;
      }

      .name {
        color: @primary-color;
        text-align: center;
        margin-bottom: 20px;
        font-weight: 600;
        font-size: 38px;
        line-height: 1.23;
        display: flex;
        align-items: center;

        .icon {
          width: 40px;
          height: 40px;
          fill: @primary-color;
          margin-right: 10px;
        }
      }

      .des {
        font-size: 24px;
        color: #909399;
      }
    }
  }

  .login-form {
    flex: 1;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0 15px 15px 0;


    .tip {
      width: 320px;
      margin-bottom: 50px;
      font-size: 24px;
      color: #909399;

      &:nth-child(2) {
        text-align: right;
        margin-top: -20px;
      }
    }

    .form-container {
      width: 320px;

      .ant-input-affix-wrapper,
      .ant-input:focus {
        border: none;
        border-bottom: 1px solid white !important;
        box-shadow: none;
      }

      /deep/ .ant-input-affix-wrapper {
        border: none;
        background-color: #f2f3f5;

        .ant-input {
          background-color: #f2f3f5;

          &:hover {
            background-color: #e5e6eb;
          }
        }

        &:hover {
          background-color: #e5e6eb;

          .ant-input {
            background-color: #e5e6eb;
          }
        }
      }

      .remember {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;

        /deep/ .ant-btn-link {
          margin-right: 0;
          padding-right: 0 !important;
        }
      }
    }
  }
}
</style>
