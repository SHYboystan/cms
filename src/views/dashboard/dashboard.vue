<template>
  <div class="dashbord-container">
    <div class="nav">
      <span class="title">Dashboard</span>
      <a-input
        style="width: 350px"
        v-model:value="userName"
        size="large"
        placeholder="Search for transaction, item, etc"
      >
        <template #prefix>
          <search-outlined />
        </template>
      </a-input>
    </div>
    <div class="content">
      <div class="left">
        <div class="top">
          <div
            class="item"
            :class="item.id > 1 ? 'item-active' : ''"
            v-for="item in itemList"
            :key="item.id"
          >
            <div class="item-title">{{ item.title }}</div>
            <div class="item-money">{{ item.money }}</div>
            <div class="item-des">{{ item.des }}</div>
          </div>
        </div>
        <div class="mid">
          <span class="title">Analitcs Report</span>
          <div class="charts"></div>
        </div>
        <div class="bottom">
          <span class="title">Activity Summary</span>
          <div class="charts"></div>
        </div>
      </div>
      <div class="right">
        <div class="account">
          <span class="title">My Account Bank</span>
          <div class="body">
            <div class="top">
              <span>Chase</span>
              <a-button size="small"> CHASE </a-button>
            </div>
            <div class="bottom">
              <div class="item">
                <span class="title">Transaction</span>
                <span>73</span>
              </div>
              <div class="item">
                <span class="title">Total Balance:</span>
                <span>$74,330</span>
              </div>
            </div>
          </div>
          <a-button>
            <template #icon>
              <plus-outlined />
            </template>
            Add New Card
          </a-button>
        </div>
        <div class="target">
          <span class="title">Target</span>
          <div class="item" :key="item.id" v-for="item in targetLits">
            <div class="img">
              <a-progress :width="48" :status="item.processColor" type="circle" :percent="item.process" />
            </div>
            <div class="mid">
              <span class="title">{{  item.name  }}</span>
              <span>{{  item.time  }}</span>
            </div>
            <right-outlined />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const userName = ref("");
const itemList = ref([
  {
    id: 1,
    title: "Total Earning",
    money: "$ 120,000",
    des: "Increase From Target",
  },
  {
    id: 2,
    title: "Invoices",
    money: "$ 16,500",
    des: "Decrease From Target",
  },
  {
    id: 3,
    title: "Total Spending",
    money: "$ 48,670",
    des: "Increase From Target",
  },
  {
    id: 4,
    title: "Balance",
    money: "$ 74,330",
    des: "Increase From Target",
  },
]);
const targetLits = ref([
  {
    name: 'Sale of goods',
    time: '1 month later',
    process: 60,
    processColor: 'active',
    id: 1
  },
  {
    name: 'Property rental',
    time: '3 month later',
    process: 70,
    processColor: 'success',
    id: 2
  },
  {
    name: 'Design services',
    time: '1 month later',
    process: 43,
    processColor: 'exception',
    id: 3
  },
  {
    name: 'Service',
    time: '4 month later',
    process: 10,
    processColor: 'normal',
    id: 4
  },
])
</script>

<style scoped lang="less">
.dashbord-container {
  // padding: 40px;
  background: rgba(248, 249, 253, 1) !important;
  box-sizing: border-box;
  width: 1250px;
  margin: 0 auto;
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      font-size: 36px;
      font-weight: 700;
      letter-spacing: -0.72px;
      color: rgba(0, 0, 0, 1);
    }
    .ant-input-affix-wrapper {
      border-radius: 8px;
    }
  }
  .content {
    display: flex;
    margin-top: 47px;
    .left {
      flex: 1;
      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .item {
          width: 215px;
          height: 150px;
          opacity: 1;
          border-radius: 12px;
          background: rgba(48, 77, 175, 1);
          box-shadow: 20px 20px 40px -12px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-around;
          padding: 24px;
          box-sizing: border-box;
          &-title {
            font-size: 16px;
            font-weight: 400;
            letter-spacing: -0.32px;
            color: rgba(255, 255, 255, 1);
          }
          &-money {
            font-size: 28px;
            font-weight: 700;
            letter-spacing: 0px;
            color: rgba(255, 255, 255, 1);
          }
          &-des {
            font-size: 10px;
            font-weight: 400;
            letter-spacing: 0px;
            color: rgba(255, 255, 255, 0.6);
          }
        }
        .item + .item {
          margin-left: 20px;
        }
        .item-active {
          background-color: white;
          box-shadow: 4px 4px 20px -10px rgba(0, 0, 0, 0.1);
          .item-title {
            color: rgba(109, 125, 147, 1);
          }
          .item-money {
            color: rgba(109, 125, 147, 1);
          }
          .item-des {
            color: rgba(109, 125, 147, 0.6);
          }
        }
      }
      .mid,
      .bottom {
        margin-top: 40px;
        .title {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.48px;
          color: rgba(0, 0, 0, 1);
        }
        .charts {
          margin-top: 20px;
          width: 100%;
          height: 400px;
          opacity: 1;
          border-radius: 12px;
          background: rgba(255, 255, 255, 1);
          border: 1px solid rgba(109, 125, 147, 0.15);
          box-shadow: 4px 4px 20px -10px rgba(0, 0, 0, 0.1);
        }
      }
    }
    .right {
      margin-left: 45px;
      width: 22%;
      flex-shrink: 0;
      .account {
        width: 100%;
        height: 344px;
        opacity: 1;
        border-radius: 12px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(109, 125, 147, 0.15);
        box-shadow: 4px 4px 20px -10px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .title {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0px;
          color: rgba(0, 0, 0, 1);
        }
        .body {
          width: 250px;
          height: 139px;
          opacity: 1;
          border-radius: 12px;
          background: linear-gradient(
            222.85deg,
            rgba(48, 77, 175, 1) 0%,
            rgba(48, 61, 175, 1) 100%
          );
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
          margin: 25px 0 35px 0;
          padding: 20px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .top,
          .bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .top {
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 0.32px;
            color: rgba(255, 255, 255, 1);
          }
          .bottom {
            .item {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              font-size: 20px;
              font-weight: 700;
              letter-spacing: 0px;
              color: rgba(255, 255, 255, 1);
              .title {
                font-size: 10px;
                font-weight: 400;
                letter-spacing: 0px;
                color: rgba(255, 255, 255, 1);
              }
            }
          }
        }
      }
      .target {
        width: 100%;
        height: 475px;
        opacity: 1;
        border-radius: 12px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(109, 125, 147, 0.15);
        box-shadow: 4px 4px 20px -10px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 25px 0;
        box-sizing: border-box;
        margin-top: 45px;
        .title {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0px;
          color: rgba(0, 0, 0, 1);
        }
        .item {
          width: 250px;
          height: 70px;
          opacity: 1;
          border-radius: 6px;
          background: rgba(255, 255, 255, 1);
          border: 0.5px solid rgba(109, 125, 147, 0.15);
          box-shadow: 4px 4px 20px -10px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: rgba(109, 125, 147, 1);
          padding: 11px 18px;
          box-sizing: border-box;
          .img {
            width: 48px;
            height: 48px;
          }
          .mid {
            display: flex;
            flex-direction: column;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0px;
            color: rgba(109, 125, 147, 1);
            .title {
              font-size: 12px;
              font-weight: 700;
              letter-spacing: 0px;
              color: rgba(0, 0, 0, 1);
            }
          }
        }
      }
    }
  }
}
</style>
