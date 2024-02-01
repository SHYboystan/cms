import { defineStore } from "pinia";
import { Login } from "@/api/login";
import { router } from "@/router";
import { message } from "ant-design-vue";

export const userStore = defineStore("user", {
  persist: true,
  state: () => ({
    userInfo: {},
    isLogin: false,
  }),
  getters: {},
  actions: {
    /*
     * 登录
     * */
    async login(params) {
      try {
        const data = await Login(params);
        if (data) {
          message.success("欢迎回来");
          this.setUserInfo(data);
          router.push("/");
        }
      } catch (err) {
        if (err) {
          message.error(err);
        }
      }
    },
    /*
     * 设置用户信息
     * */
    setUserInfo(userInfo) {
      this.userInfo = userInfo;
      this.isLogin = true;
    },
    /*
     * 清除用户信息
     * */
    clearUserInfo() {
      this.userInfo = {};
      this.isLogin = false;
    },
  },
});
