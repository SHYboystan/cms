<template>
  <div class="login-container">
    <div class="login-content">
      <div class="login-svg" id="login-svg"></div>
      <div class="login-form">
        <img src="../../assets/android.png" alt="">
        <div class="tip">一粥一饭，当思来处不易；</div>
        <div class="tip">半丝半缕，恒念物力维艰。</div>
        <div class="name">{{ systemName }}</div>
        <div class="form-container">
          <a-form
            :model="formState"
            name="basic"
            :label-col="{ span: 0 }"
            :wrapper-col="{ span: 24 }"
            autocomplete="off"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
          >
            <a-form-item
              name="username"
              :rules="[
                { required: true, message: 'Please input your username!' },
              ]"
            >
              <a-input
                size="large"
                placeholder="用户名(admin)"
                v-model:value="formState.username"
              >
                <template #prefix>
                  <UserOutlined class="site-form-item-icon" />
                </template>
              </a-input>
            </a-form-item>

            <a-form-item
              name="password"
              :rules="[
                { required: true, message: 'Please input your password!' },
              ]"
            >
              <a-input-password
                placeholder="密码(admin)"
                size="large"
                v-model:value="formState.password"
              >
                <template #prefix>
                  <LockOutlined class="site-form-item-icon" />
                </template>
              </a-input-password>
            </a-form-item>

            <div class="remember">
              <a-checkbox v-model:checked="formState.remember"
                >记住密码
              </a-checkbox>
              <a-button type="link">忘记密码</a-button>
            </div>

            <a-button
              :loading="loading"
              block
              type="primary"
              size="large"
              html-type="submit"
              >登 录
            </a-button>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import bodymovin from "lottie-web";
import { systemName } from "@/constants/system";
import { onMounted, reactive, ref, toRaw } from "vue";
import { userStore } from "@/store/user";

const user = userStore();

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const loading = ref(false);
const count = reactive({
  a: 1,
});

const formState = reactive<FormState>({
  username: "admin",
  password: "admin",
  remember: true,
});

const onFinish = async (values: any) => {
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
      animationData: require("@/assets/svg.json"),
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
    width: 63%;
    min-width: 1200px;
    height: 80%;
    min-height: 650px;
    border-radius: 10px;
    display: flex;
    align-items: center;

    .login-svg {
      width: 750px;
      height: 100%;
      min-height: 650px;
      flex-shrink: 0;
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 15px 0 0 15px;
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

    .name {
      font-size: 32px;
      color: @primary-color;
      text-align: center;
      margin-bottom: 10px;
      font-weight: 600;
      font-size: 38px;
      line-height: 1.23;
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
        // #e5e6eb #f2f3f5
        /deep/ .ant-btn-link {
          margin-right: 0;
          padding-right: 0 !important;
        }
      }
    }
  }
}
</style>
