<template>
  <div class="workplace">
    <div class="welcome">欢迎回来，即时设计</div>
    <div class="title">
      <span>仪表盘</span>
      <a-range-picker v-model:value="value4" :format="dateFormat" />
    </div>
    <div class="content">
      <div class="left">
        <div class="card">
          <div class="nav">
            <span class="title">工作量</span>
            <a-button type="link">查看全部<right-outlined /></a-button>
          </div>
          <div class="box-container">
            <div class="box" v-for="item in 8">
              <a-progress
                :strokeWidth="3"
                type="circle"
                :percent="70"
                :width="70"
              />
              <div class="avatar">
                <a-avatar
                  :size="56"
                  src="https://img.js.design/assets/img/61c6d4997cecccedafe578e8.png"
                >
                </a-avatar>
              </div>
              <span class="name">张伟成</span>
              <span class="des">用户界面/交互设计师</span>
              <div class="level">中级</div>
            </div>
          </div>
        </div>

        <div class="card" style="background-color: transparent; padding: 0">
          <div class="nav">
            <span class="title">项目</span>
            <a-button type="link">查看全部<right-outlined /></a-button>
          </div>
          <div class="box1-container">
            <div class="box1" v-for="item in 3">
              <div class="left">
                <div class="top">
                  <a-avatar
                    shape="square"
                    :size="56"
                    src="https://img.js.design/assets/img/61c6d4997cecccedafe578e8.png"
                  >
                  </a-avatar>
                  <div class="intro">
                    <span>PN0001265</span>
                    <span class="des">医疗应用（iOS 原生）</span>
                  </div>
                </div>
                <div class="bottom">
                  <span>创建于 2020年9月12日</span>
                  <span>中</span>
                </div>
              </div>
              <div class="right">
                <div class="top">项目数据</div>
                <div class="bottom">
                  <div class="bottom-item">
                    <span>所有任务</span>
                    <span class="num">34</span>
                  </div>
                  <div class="bottom-item">
                    <span>当前任务</span>
                    <span class="num">13</span>
                  </div>
                  <div class="bottom-item">
                    <span>执行人</span>
                    <span class="num">13</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="card">
          <div class="nav">
            <span class="title">最近事件</span>
            <a-button type="link">查看全部<right-outlined /></a-button>
          </div>
          <div class="body">
            <div class="body-item">
              <div class="top">
                <div class="des">
                  新部门介绍，标题文字示例，最多两行折行显示
                </div>
                <arrow-up-outlined />
              </div>
              <div class="bottom">
                <span>今天 | 下午5:00</span>
                <div class="time">
                  <clock-circle-filled />
                  2h
                </div>
              </div>
            </div>
            <div class="body-item">
              <div class="top">
                <div class="des">
                  新部门介绍，标题文字示例，最多两行折行显示
                </div>
                <arrow-up-outlined />
              </div>
              <div class="bottom">
                <span>今天 | 下午5:00</span>
                <div class="time">
                  <clock-circle-filled />
                  2h
                </div>
              </div>
            </div>
            <div class="body-item">
              <div class="top">
                <div class="des">
                  新部门介绍，标题文字示例，最多两行折行显示
                </div>
                <arrow-up-outlined />
              </div>
              <div class="bottom">
                <span>今天 | 下午5:00</span>
                <div class="time">
                  <clock-circle-filled />
                  2h
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card" style="height: 538px;">
          <div class="nav">
            <span class="title">项目日志</span>
          </div>
          <div class="project">
            <div class="project-item">
              <div class="top">
                <a-avatar
                  :size="50"
                  src="https://img.js.design/assets/img/61c6d4997cecccedafe578e8.png"
                >
                </a-avatar>
                <div class="right">
                  <span class="name">段欣怡</span>
                  <span>用户界面/UI设计师</span>
                </div>
              </div>
              <div class="list">
                <ant-cloud-outlined />
                <span>将思维导图任务的状态更新为进行中</span>
              </div>
              <div class="list">
                <ant-cloud-outlined />
                <span>将思维导图任务的状态更新为进行中</span>
              </div>
            </div>
            <div class="project-item">
              <div class="top">
                <a-avatar
                  :size="50"
                  src="https://img.js.design/assets/img/61c6d4997cecccedafe578e8.png"
                >
                </a-avatar>
                <div class="right">
                  <span class="name">段欣怡</span>
                  <span>用户界面/UI设计师</span>
                </div>
              </div>
              <div class="list">
                <ant-cloud-outlined />
                <span>将思维导图任务的状态更新为进行中</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const value4 = ref("");
const dateFormat = "YYYY/MM/DD";
</script>

<style scoped lang="less">
.workplace {
  width: 1220px;
  margin: 0 auto;
  background: #f3f9fd !important;
  padding: 30px;
  box-sizing: border-box;
  .welcome {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.17px;
    color: rgba(125, 133, 146, 1);
  }
  .title {
    font-size: 36px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 52.13px;
    color: rgba(10, 22, 41, 1);
    .flex-space-between();
    box-sizing: border-box;
  }
  .content {
    display: flex;
    .left {
      .card {
        width: 781px;
        height: 470px;
        opacity: 1;
        border-radius: 24px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.1);
        padding: 18px;
        box-sizing: border-box;
        margin-top: 20px;
        .nav {
          font-size: 16px;
          font-weight: 400;
          letter-spacing: 0px;
          line-height: 23.17px;
         .flex-space-between();
          padding: 0 20px;
          .title {
            font-size: 22px;
            font-weight: 500;
            letter-spacing: 0px;
            line-height: 31.86px;
            color: rgba(10, 22, 41, 1);
          }
        }
        .box-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .box {
            width: 175px;
            height: 180px;
            margin-top: 16px;
            opacity: 1;
            border-radius: 24px;
            background: rgba(244, 249, 253, 1);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            padding: 18px;
            box-sizing: border-box;
            font-size: 15;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 23.17px;
            color: rgba(10, 22, 41, 1);
            position: relative;
            .avatar {
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              top: 25px;
            }
            .level {
              width: 46px;
              height: 19px;
              font-size: 12px;
              font-weight: 500;
              letter-spacing: 0px;
              line-height: 17.38px;
              color: rgba(125, 133, 146, 1);
              border: 1px solid rgba(125, 133, 146, 1);
              border-radius: 4px;
              text-align: center;
            }
          }
        }

        .box1-container {
          .box1 {
            width: 781px;
            height: 148px;
            opacity: 1;
            border-radius: 24px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.1);
            display: flex;
            align-items: center;
            margin-top: 10px;
            .left {
              width: 50%;
              height: 100%;
              padding: 24px 27px;
              box-sizing: border-box;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: space-between;
              border-right: 1px solid rgba(228, 230, 232, 1);
              .top {
                display: flex;
                align-items: center;
                .intro {
                  height: 100%;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  margin-left: 30px;
                  font-size: 14px;
                  font-weight: 400;
                  letter-spacing: 0px;
                  line-height: 16.41px;
                  color: rgba(145, 146, 158, 1);
                  .des {
                    font-size: 18px;
                    font-weight: 400;
                    letter-spacing: 0px;
                    line-height: 26.06px;
                    color: rgba(10, 22, 41, 1);
                  }
                }
              }
              .bottom {
                width: 100%;
                font-size: 14px;
                font-weight: 400;
                letter-spacing: 0px;
                line-height: 20.27px;
                color: rgba(125, 133, 146, 1);
                display: flex;
                align-items: center;
                justify-content: space-between;
              }
            }
            .right {
              padding: 36px 44px;
              box-sizing: border-box;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              height: 100%;
              width: 50%;
              .top {
                font-size: 16px;
                font-weight: 400;
                letter-spacing: 0px;
                line-height: 23.17px;
                color: rgba(10, 22, 41, 1);
              }
              .bottom {
                margin-top: 26px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                .bottom-item {
                  font-size: 14px;
                  font-weight: 400;
                  letter-spacing: 0px;
                  line-height: 20.27px;
                  color: rgba(145, 146, 158, 1);
                  display: flex;
                  flex-direction: column;
                  .num {
                    font-size: 16px;
                    font-weight: 400;
                    letter-spacing: 0px;
                    line-height: 18.75px;
                    color: rgba(10, 22, 41, 1);
                  }
                }
              }
            }
          }
        }
      }
    }
    .right {
      margin-left: 40px;
      .card {
        width: 339px;
        height: 470px;
        opacity: 1;
        border-radius: 24px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.1);
        padding: 18px;
        box-sizing: border-box;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        .nav {
          font-size: 16px;
          font-weight: 400;
          letter-spacing: 0px;
          line-height: 23.17px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          .title {
            font-size: 22px;
            font-weight: 500;
            letter-spacing: 0px;
            line-height: 31.86px;
            color: rgba(10, 22, 41, 1);
          }
        }
        .body {
          .body-item {
            border-left: 4px solid rgba(63, 140, 255, 1);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 10px 20px;
            box-sizing: border-box;
            margin-top: 24px;
            .top,
            .bottom {
              display: flex;
              align-items: center;
            }
            .top {
              display: flex;
              align-items: flex-start;
              justify-content: space-between;
              color: rgba(255, 189, 33, 1);
              .des {
                width: 185px;
                height: 44px;
                font-size: 16px;
                font-weight: 400;
                letter-spacing: 0px;
                line-height: 23.17px;
                color: rgba(10, 22, 41, 1);
              }
            }
            .bottom {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-top: 15px;
              font-size: 14px;
              font-weight: 400;
              letter-spacing: 0px;
              line-height: 20.27px;
              color: rgba(145, 146, 158, 1);
              .time {
                width: 88px;
                height: 36px;
                opacity: 1;
                border-radius: 8px;
                background: rgba(244, 249, 253, 1);
                text-align: center;
                line-height: 36px;
              }
            }
          }
        }

        .project-item {
          .top {
            display: flex;
            margin-top: 31px;
            .right {
              display: flex;
              flex-direction: column;
              margin-left: 18px;
            }
          }
          .list {
            margin-top: 16px;
            width: 291px;
            height: 78px;
            opacity: 1;
            border-radius: 14px;
            background: rgba(244, 249, 253, 1);
            font-size: 16px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 23.17px;
            color: rgba(10, 22, 41, 1);
            display: flex;
            align-items: center;
            padding: 15px;
            box-sizing: border-box;
            span {
              margin-left: 18px;
            }
          }
        }
      }
    }
  }
}
</style>
