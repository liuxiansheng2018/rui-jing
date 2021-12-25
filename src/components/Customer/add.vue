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
            <div class="compare">较比上月</div>
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
                <div class="block">
                  <el-carousel height="300px">
                    <el-carousel-item v-for="item in tableData" :key="item.id">
                      <div class="inforlunbo" v-for="j in 2" :key="j">
                        <div class="card" v-for="i in 2" :key="i">
                          <div class="card-main">
                            <div class="card-img">
                              <img
                                src="../../assets/img/customer/photo.png"
                                alt=""
                              />
                              <p>姓名：{{ item.name }}</p>
                            </div>
                            <div class="card-infor">
                              <p>性别；{{ item.sex }}</p>
                              <p>电话：{{ item.regexp }}</p>
                              <p>职务：{{ item.industry }}</p>
                            </div>
                          </div>
                          <div class="infor-detail">查看详情</div>
                        </div>
                      </div>
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <p class="infor-text">客户反馈</p>
          <div class="evaluate-main">
            <ul class="evaluate">
              <el-carousel height="225px" direction="vertical" :autoplay="true">
                <el-carousel-item v-for="item in 3" :key="item">
                  <div>
                    <li class="evaluatelist" v-for="j in 3" :key="j">
                      <span>
                        <img src="../../assets/img/customer/photo.png" alt="" />
                      </span>
                      <span>味道很棒，很好吃，下次会带着朋友一起来 .....</span>
                    </li>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from "echarts";
import getTable from "../../mock/customer/add";
import { ref, onMounted } from "vue";
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

    let tableData = ref([]);
    onMounted(() => {
      tableData.value = getTable();
      console.log(tableData.value);
    });
    return { tableData };
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
        height: 100%;
        border: 1px solid #999999;
        border-radius: 5px;
        padding: 15px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
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
    margin-left: 50px;
    img {
      width: 40px;
      height: 55px;
      margin-right: 10px;
    }
    span:nth-of-type(2) {
      display: inline-block;
      width: 350px;
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
  width: 100%;
  height: 280px;
}
.percentage-value {
  width: 80px;
  font-size: 26px;
  border-bottom: 1px solid #0379fd;
  margin-left: 25px;
  margin-bottom: 10px;
  padding-bottom: 5px;
}

.el-carousel__item {
  display: flex;
  flex-direction: column;
}
.block {
  width: 100%;
}
.inforlunbo {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
}
/deep/.el-carousel__arrow--left {
  left: 0;
  top: 150px;
}
/deep/.el-carousel__arrow--right {
  right: 0;
  top: 150px;
}

.evaluate {
  /deep/.el-carousel__container {
    width: 400px;
    height: 225px;
  }
  .el-carousel__item {
    justify-content: center;
    align-items: center;
  }
}
.compare {
  font-size: 14px;
  margin-top: 20px;
}
</style>
