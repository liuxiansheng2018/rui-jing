<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple" id="main"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <p class="infor-text">本月涨幅</p>
          <div>
            <el-progress type="circle" :percentage="25">
              <template #default="{ percentage }">
                <div class="percentage-value">{{ percentage }}</div>
                <div class="percentage-label">
                  <span>+8%</span>
                  <img src="../../assets/img/customer/two-img.png" alt="" />
                </div>
              </template>
            </el-progress>
            <div>较比上月</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  <div class="infor">
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <p class="infor-text">客户信息</p>
          <div class="customer-infor">
            <ul class="cus-infor">
              <li class="linforlist">
                <div class="card" v-for="i in 4" :key="i">
                  <div class="card-main">
                    <div class="card-img">
                      <img src="../../assets/img/customer/photo.png" alt="" />
                      <p>姓名：小花</p>
                    </div>
                    <div class="card-infor">
                      <p>性别；女</p>
                      <p>电话：1321322324</p>
                      <p>职务：大家思考</p>
                    </div>
                  </div>
                  <div class="infor-detail">查看详情</div>
                </div>
                <!-- <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div> -->
              </li>
            </ul>
            <img src="../../assets/img/customer/left-arrow.png" alt="" />
            <img src="../../assets/img/customer/rigth-arrow.png" alt="" />
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <p class="infor-text">客户反馈</p>
          <div class="evaluate-main">
            <ul class="evaluate">
              <li class="evaluatelist" v-for="j in 3" :key="j">
                <span>
                  <img src="../../assets/img/customer/photo.png" alt="" />
                </span>
                <span>味道很棒，很好吃，下次会带着朋友一起来 .....</span>
              </li>
            </ul>
            <img
              src="../../assets/img/customer/bottom-arrow.png"
              alt=""
              class="arr"
            />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { onMounted } from "vue";
import * as echarts from "echarts";
export default {
  setup() {
    onMounted(() => {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "本月新增",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "12.1",
            "12.2",
            "12.3",
            "12.4",
            "12.5",
            "12.6",
            "12.7",
            "12.8",
            "12.9",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [200, 150, 380, 130, 180, 147, 260, 430, 320],
            type: "line",
            areaStyle: {},
          },
        ],
      };
      option && myChart.setOption(option);
    });
  },
};
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 20px;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #fff;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 250px;
  padding: 8px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.infor-text {
  font-size: 16px;
  text-align: left;
}
.infor {
  .grid-content {
    min-height: 350px;
  }
  .customer-infor {
    width: 850px;
    height: 300px;
    position: relative;
    > img {
      position: absolute;
      top: 100px;
      width: 20px;
      height: 60px;
      cursor: pointer;
    }
    img:nth-of-type(1) {
      left: 30px;
    }
    img:nth-of-type(2) {
      right: 40px;
    }
  }
  .cus-infor {
    width: 800px;
    height: 300px;
    margin-top: 5px;
    padding: 15px 40px;
    .linforlist {
      width: 700px;
      height: 280px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      margin-left: 40px;
      .card {
        width: 40%;
        height: 45%;
        border: 1px solid #999999;
        border-radius: 5px;
        padding-top: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .card-main {
          width: 100%;
          height: 80%;
          display: flex;
          justify-content: space-between;
        }
        .card-img {
          width: 40%;
          img {
            width: 50px;
            height: 70px;
          }
        }
        .card-infor {
          width: 60%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
        .infor-detail {
          width: 60px;
          height: 20px;
          background: #0379fd;
          border-radius: 10px;
          text-align: center;
          line-height: 20px;
          color: #fff;
        }
      }
    }
  }
}
.evaluate {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  .evaluatelist {
    width: 80%;
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: 55px;
      margin-right: 10px;
    }
    span:nth-of-type(2) {
      display: inline-block;
      width: 300px;
      height: 40px;
      background: #81bcfe;
      border-radius: 5px;
      color: #fff;
      line-height: 40px;
    }
  }
}
.evaluate-main {
  position: relative;
  height: 280px;
  .arr {
    width: 30px;
    height: 10px;
    position: absolute;
    bottom: 10px;
    left: 50%;
  }
}
.percentage-value {
  width: 80px;
  font-size: 26px;
  border-bottom: 1px solid #0379fd;
  margin-left: 25px;
  margin-bottom: 10px;
  padding-bottom: 5px;
}
</style>
