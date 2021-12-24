<template>
  <el-row :gutter="20">
    <el-col :span="9"
      ><div class="grid-content bg-purple performance">
        <div class="title">个人绩效</div>
        <div class="box">
          <div class="personal" v-for="item in personal" :key="item.id">
            <div class="img">
              <img :src="item.url" alt="" />
              <img :src="item.img" alt="" />
            </div>
            <div :style="{ background: item.color }" class="grade">
              {{ item.grade }}
            </div>
          </div>
        </div>
      </div></el-col
    >
    <el-col :span="9"
      ><div class="grid-content bg-purple performance">
        <div class="title">小组绩效</div>
        <div class="box">
          <div class="personal group" v-for="item in group" :key="item.id">
            <div class="img">
              <img :src="item.url" alt="" />
              <img :src="item.img" alt="" />
            </div>
            <div :style="{ background: item.color }" class="grade">
              {{ item.grade }}
            </div>
          </div>
        </div>
      </div></el-col
    >
    <el-col :span="6"
      ><div class="grid-content bg-purple performance">
        <div class="title">
          今日考勤
          <span>星期{{ week }}</span>
        </div>
      </div></el-col
    >
  </el-row>
  <el-row>
    <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
  </el-row>
</template>

<script>
import one from "../../assets/img/customer/one.png";
import two from "../../assets/img/customer/two.png";
import three from "../../assets/img/customer/three.png";
import personalimg from "../../assets/img/check/personalimg.png";
import groupimg from "../../assets/img/check/groupimg.png";

export default {
  setup() {
    const week = (() => {
      switch (new Date().getDay()) {
        case 0:
          return "日";
        case 1:
          return "一";
        case 2:
          return "二";
        case 3:
          return "三";
        case 4:
          return "四";
        case 5:
          return "五";
        case 6:
          return "六";
      }
    })();
    const personal = [
      {
        id: 3,
        grade: "本月第三名",
        color: "#2FC258",
        img: three,
        url: personalimg,
      },
      {
        id: 1,
        grade: "本月销冠",
        color: "#0379FD",
        img: one,
        url: personalimg,
      },
      {
        id: 2,
        grade: "本月第二名",
        color: "#FFAF22",
        img: two,
        url: personalimg,
      },
    ];
    const group = [
      {
        id: 3,
        grade: "本月第三名",
        color: "#2FC258",
        img: three,
        url: groupimg,
      },
      {
        id: 1,
        grade: "本月销冠",
        color: "#0379FD",
        img: one,
        url: groupimg,
      },
      {
        id: 2,
        grade: "本月第二名",
        color: "#FFAF22",
        img: two,
        url: groupimg,
      },
    ];
    return { week, personal, group };
  },
};
</script>

<style lang="less" scoped>
.grid-content {
  border-radius: 10px;
  min-height: 200px;
}
.bg-purple {
  background: #fff;
}
.bg-purple-dark {
  min-height: 500px;
  background-color: #fff;
  margin-top: 20px;
}
.performance {
  .title {
    font-size: 14px;
    color: #333;
    text-align: left;
    padding: 5px;
    span {
      font-size: 12px;
      float: right;
    }
  }
  .box {
    height: 150px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .personal {
      width: 80px;
      height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .img {
        position: relative;
        width: 80px;
        height: 117px;
        img:nth-of-type(1) {
          width: 80px;
          height: 100px;
        }
        img:nth-of-type(2) {
          width: 40px;
          height: 40px;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .grade {
        display: inline-block;
        padding: 3px;
        color: #fff;
        border-radius: 5px;
      }
    }
    .group {
      width: 100px;
      .img {
        width: 100px;
        img:nth-of-type(1) {
          width: 100px;
          height: 80px;
        }
      }
      .grade {
        width: 80px;
      }
    }
  }
}
</style>
