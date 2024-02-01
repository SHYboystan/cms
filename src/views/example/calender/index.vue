<template>
  <div class="calender-container">
    <div class="left">
      <div class="top">
        <span>员工</span>
        <div class="top-btn">
          <SearchOutlined />
        </div>
      </div>
      <div class="content">
        <div class="item" v-for="item in userList">
          <a-avatar
            :size="24"
            src="https://img.js.design/assets/img/61c6d4997cecccedafe578e8.png"
          >
          </a-avatar>
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="top">
        <div class="title">
          第{{ month + 1 }}个月
          <div class="opretions">
            <arrow-left-outlined @click="prve" />
            <arrow-right-outlined @click="next" />
          </div>
        </div>
        <div class="month">
          <div class="item" v-for="item in weekDays">
            <span>{{ item.day }}</span>
            <span class="week">{{ item.week }}</span>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="month" v-for="item in statusList">
          <div class="item" v-for="(citem, index) in item.children">
            <div
              class="progress"
              :style="{
                backgroundColor: citem.bgColor,
                height: citem.height + '%',
              }"
            ></div>
          </div>
        </div>
      </div>
      <div class="total">
        <div class="total-item">
          <span>病假</span>
          <div class="status">
            <a-badge
              color="rgba(109, 93, 211, 0.14)"
              status="error"
              text="已批准"
            />
            <a-badge
              color="rgba(21, 192, 230, 1)"
              status="error"
              text="审核中"
            />
          </div>
        </div>
        <div class="total-item">
          <span>远程办公</span>
          <div class="status">
            <a-badge
              color="rgba(246, 81, 96, 1)"
              status="processing"
              text="已批准"
            />
            <a-badge
              color="rgba(109, 93, 211, 1)"
              status="processing"
              text="审核中"
            />
          </div>
        </div>
        <div class="total-item">
          <span>调休</span>
          <div class="status">
            <a-badge
              color="rgba(246, 81, 96, 0.12)"
              status="error"
              text="已批准"
            />
            <a-badge
              color="rgba(21, 192, 230, 0.12)"
              status="error"
              text="审核中"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as dayjs from "dayjs";
import { onMounted, ref } from "vue";

type TDate = {
  day: number;
  week: string;
  bgColor: string;
  height: number;
};
const month = ref();
const days = ref<number>();
const weekDays = ref<TDate[]>([]);
const date = ref();

const weekDict = ["日", "一", "二", "三", "四", "五", "六"];
const userList = [
  "金金小张",
  "张伟成",
  "王一月",
  "李鹤轩",
  "甄博超",
  "于伟旗",
  "段欣怡",
  "严瑞元",
  "段康宇",
  "赵家恒",
  "苏慧婷",
];
const colorList = [
  "rgba(109, 93, 211, 0.14)",
  "rgba(21, 192, 230, 1)",
  "rgba(246, 81, 96, 1)",
  "rgba(109, 93, 211, 1)",
  "rgba(246, 81, 96, 0.12)",
  "rgba(21, 192, 230, 0.12)",
];
const statusList = ref<{ name: string; children: TDate[] }[]>([]);

const getTime = () => {
  // 获取当前月
  date.value = dayjs(month.value + 1 + "/01").day();
  days.value = dayjs(month.value).daysInMonth();
  
  if (days.value) {
    for (let i = 0; i < days.value; i++) {
      let params = {
        day: i + 1,
        week: weekDict[(date.value + i - 1) % 7],
        bgColor: colorList[Math.floor(Math.random() * 5) % 6],
        height: Math.random() * 100,
      };
      weekDays.value.push(params);
    }

    for (let i = 0; i < userList.length; i++) {
      let status: { name: string; children: TDate[] } = {
        name: userList[i],
        children: [],
      };
      for (let i = 0; i < days.value; i++) {
        let statusParams: TDate = {
          day: i + 1,
          week: weekDict[(date.value + i - 1) % 7],
          bgColor: colorList[Math.floor(Math.random() * 5) % 6],
          height: Math.random() > 0.5 ? Math.random() * 100 : 0,
        };
        status.children.push(statusParams);
      }
      statusList.value.push(status);
    }
  }
};

const prve = () => {
  if (month.value > 0) {
    init();
    month.value--;
    getTime();
  }
};

const next = () => {
  if (month.value < 11) {
    init();
    month.value++;
    getTime();
  }
};

const init = () => {
  statusList.value = [];
  weekDays.value = [];
  days.value = [];
};

onMounted(() => {
  month.value = dayjs().month();
  getTime();
});
</script>

<style scoped lang="less">
.calender-container {
  width: 1360px;
  height: 100%;
  border-radius: 24px;
  display: flex;
  .left {
    width: 240px;
    height: 100%;
    flex-shrink: 0;
    box-sizing: border-box;
    border-right: 1px solid rgba(230, 235, 245, 1);
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 92px;
      padding: 0 24px;
      box-sizing: border-box;
      border-bottom: 1px solid rgba(230, 235, 245, 1);
      .top-btn {
        width: 44px;
        height: 44px;
        border-radius: 14px;
        background: rgba(244, 249, 253, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
      }
    }
    .content {
      .item {
        display: flex;
        align-items: center;
        height: 52px;
        padding: 0 24px;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(230, 235, 245, 1);
        span {
          margin-left: 10px;
        }
      }
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    .top,
    .bottom {
      height: 92px;
      border-bottom: 1px solid rgba(230, 235, 245, 1);
      .title {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 23.17px;
        color: rgba(10, 22, 41, 1);
        position: relative;
        padding: 11px 0 15px 0;
        box-sizing: border-box;
        .opretions {
          position: absolute;
          right: 28px;
          top: 0;
          padding: 11px 0 15px 0;
        }
      }
      .month {
        display: flex;
        align-items: center;
        width: fit-content;
        .item {
          width: 28px;
          height: 40px;
          border-radius: 7px;
          background: rgba(244, 249, 253, 1);
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0px;
          line-height: 15.23px;
          color: rgba(125, 133, 147, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 5px 0;
          box-sizing: border-box;
          margin: 0 4px;
          .week {
            font-size: 11px;
            line-height: 15.93px;
            color: rgba(125, 133, 148, 1);
          }
        }
      }
    }
    .top {
      flex-shrink: 0;
      .opretions {
        .anticon {
          margin-left: 10px;
        }
      }
    }
    .bottom {
      flex: 1;
      border-bottom: none;
      height: 100%;
      padding: 4px 0;
      .month {
        .item {
          height: 44px;
          position: relative;
          .progress {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            border-radius: 7px;
          }
        }
      }
      .month + .month {
        margin-top: 8px;
      }
    }
    .total {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      border-top: 1px solid rgba(230, 235, 245, 1);
      padding: 11px 27px;
      box-sizing: border-box;
      .total-item {
        .status {
          margin-top: 13px;
          .ant-badge + .ant-badge {
            margin-left: 13px;
          }
        }
      }
      .total-item + .total-item {
        margin-left: 150px;
      }
    }
  }
}
</style>
