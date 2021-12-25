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
        <el-progress
          type="circle"
          :percentage="100"
          status="success"
          color="#0379FD"
          :width="150"
        >
          <template #default>
            <div class="kaoqin">
              <p>4561</p>
              <span>在位人数</span>
            </div>
          </template>
        </el-progress>
      </div></el-col
    >
  </el-row>
  <el-row>
    <el-col :span="24"
      ><div class="grid-content bg-purple-dark">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="姓名" />
          <el-table-column prop="address" label="职务" />
          <el-table-column prop="address" label="性质" />
          <el-table-column prop="address" label="请假事由" width="180" />
          <el-table-column prop="address" label="请假时间" width="280" />
          <el-table-column prop="address" label="申请时间" width="180" />
          <el-table-column prop="address" label="行政部" />
          <el-table-column prop="address" label="审批" />
        </el-table></div
    ></el-col>
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
    const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
    ];
    return { week, personal, group, tableData };
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
        padding: 3px 8px;
        color: #fff;
        border-radius: 5px;
      }
    }
    .group {
      width: 115px;
      .img {
        width: 115px;
        height: 112px;
        img:nth-of-type(1) {
          width: 115px;
          height: 75px;
        }
      }
      // .grade {
      //   width: 80px;
      // }
    }
  }
  .kaoqin {
    p {
      font-size: 40px;
      font-weight: bold;
      color: #0379fd;
      letter-spacing: 5px;
      padding-bottom: 5px;
      padding-left: 5px;
      border-bottom: 1px solid #0379fd;
      text-align: center;
      margin: 10px 15px;
    }
    span {
      font-size: 14px;
      color: #333;
    }
  }
}

/deep/.el-table {
  tr {
    background-color: #ccc;
    td {
      text-align: center;
    }
  }
  .has-gutter {
    background-color: #81bcfe;
    th {
      text-align: center;
      background-color: #81bcfe;
      height: 100%;
      color: #fff;
    }
  }
}
/deep/.el-table__row--striped {
  background-color: #fff;
}
</style>
