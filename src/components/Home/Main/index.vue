<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="9"
        ><div class="grid-content bg-purple">
          <h4 class="grid-text">当日订单</h4>
          <div class="top-1">
            <div>
              <el-progress
                type="circle"
                :percentage="100"
                color="#057AFD"
                duration="0"
              >
                <template #default="{ percentage }">
                  <span class="percentage-value">{{ percentage + 236 }}</span>
                  <span class="percentage-labelc">较昨日增长</span>
                </template>
              </el-progress>
              <p>到店订单</p>
            </div>
            <div>
              <el-progress
                type="circle"
                :percentage="100"
                color="#FFB637"
                duration="0"
              >
                <template #default="{ percentage }">
                  <span class="percentage-value">{{ percentage }}%</span>
                  <span class="percentage-label">较昨日下降</span>
                </template>
              </el-progress>
              <p>外送订单</p>
            </div>
          </div>
        </div></el-col
      >
      <el-col :span="9"
        ><div class="grid-content bg-purple" id="csp"></div
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <div class="top-3-header">
            <span>2021年12月</span>
            <span>星期一</span>
          </div>
          <div class="top-3-main">
            <div class="top-3-img">
              <img src="../../../assets/img/首页/蓝色.png" alt="" />
              <p>18</p>
            </div>
            <p>十一月十五</p>
            <p>辛丑年【牛年】</p>
          </div>
        </div></el-col
      >
    </el-row>
    <el-row :gutter="20">
      <el-col :span="18"
        ><div class="grid-content bg-purple" id="csp2"></div
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <h4 class="grid-text">当日订单</h4>
          <p>同比增长<span>+6%</span></p>
          <div class="top-1">
            <div>
              <el-progress
                type="circle"
                :percentage="20"
                color="#057AFD"
                duration="0"
              >
                <template #default="{ percentage }">
                  <span class="percentage-value center-text"
                    >{{ percentage }}%</span
                  >
                </template>
              </el-progress>
              <p>上月新增</p>
            </div>
            <div>
              <el-progress
                type="circle"
                :percentage="26"
                color="#FFB637"
                duration="0"
              >
                <template #default="{ percentage }">
                  <span class="percentage-value center-text2"
                    >{{ percentage }}%</span
                  >
                </template>
              </el-progress>
              <p>本月新增</p>
            </div>
          </div>
        </div></el-col
      >
    </el-row>
    <el-row :gutter="20">
      <el-col :span="9"
        ><div class="grid-content bg-purple">
          <h4 class="grid-text">公司动态</h4>
          <ul class="buttom-1">
            <li v-for="(item, index) in 4" :key="index">
              <div></div>
              <p>新店新店新店新店新店新店新店新店新店新店新店</p>
              <span></span>
            </li>
          </ul></div
      ></el-col>
      <el-col :span="9"
        ><div class="grid-content bg-purple">
          <h4 class="grid-text">公司公告</h4>
          <p>国庆节放假安排和调整作息时间通知</p>
          <hr />
          <p>发布日期:2021-09-23 09:53</p>
          <div>
            各有关单位:<br />
            根据相关规定，国庆节放假时间和调整作息时间通知如下:
            一、国庆节放假日期安排:10月1日（星期五）至10月7日（星期四）放假调休，共7天。9月26日（星期日）、10月9日（星期六）上班。
            二、调整作息时间:自2021年10月1日起至2022年4月30日，上午8时30分至12时，下午14时至17时。
          </div>
        </div></el-col
      >
      <el-col :span="6"
        ><div class="grid-content bg-purple buttom-3">
          <h4 class="grid-text">今日交易额</h4>
          <h2>31500.30</h2>
          <span>收入明细</span>
          <span>支出明细</span>
          <ul>
            <li v-for="(item, index) in 3" :key="index">
              <span>+120元</span>
              <p><span>2021-9-9</span><span>13:12:21</span></p>
            </li>
          </ul>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
import { onMounted } from "vue";
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  setup() {
    const pie = () => {
      const csp = document.getElementById("csp");
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(csp);
      // 绘制图表
      myChart.setOption({
        title: {
          text: "消费群体",
          left: "left",
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "15-25岁" },
              { value: 735, name: "25-35岁" },
              { value: 580, name: "35-50岁" },
              { value: 484, name: "50岁以上" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    };
    const line = () => {
      const csp = document.getElementById("csp2");
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(csp);
      // 绘制图表
      myChart.setOption({
        title: {
          text: "客户数据",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          orient: "vertical",
          data: ["学生", "青年", "老年", "中老年"],
          left: "left",
          top: "15%",
        },
        grid: {
          left: "13%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },

        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "12月1号",
            "12月2号",
            "12月3号",
            "12月4号",
            "12月5号",
            "12月6号",
            "12月7号",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "学生",
            type: "line",
            stack: "Total",
            data: [640, 831, 540, 630, 510, 900, 1210],
          },
          {
            name: "青年",
            type: "line",
            stack: "Total",
            data: [706, 603, 970, 1100, 850, 900, 1310],
          },
          {
            name: "老年",
            type: "line",
            stack: "Total",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "中老年",
            type: "line",
            stack: "Total",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
        ],
      });
    };
    onMounted(() => {
      pie();
      line();
    });
  },
};
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.grid-content {
  border-radius: 4px;
  height: 190px;
}
.bg-purple {
  background: #fff;
}
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}
.top-1 {
  display: flex;
  justify-content: space-evenly;
}
.grid-text {
  text-align: left;
}
.top-3-img {
  position: relative;

  p {
    position: absolute;
    font-size: 60px;
    left: 111px;
    top: 18px;
    color: #fff;
  }
}
.top-3-header {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
}
.top-3-main {
  margin-top: 30px;
  p {
    margin: 5px;
  }
}
.center-text {
  color: #057afd;
}
.center-text2 {
  color: #ffb637;
}
.buttom-1 {
  margin-top: 20px;
  li {
    margin: 10px;
  }
}
.buttom-3 {
  h2 {
    font-size: 36px;
    margin-top: 30px;
  }
  span {
    margin: 5px;
  }
  ul {
    li {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      p {
        margin: 5px;
      }
    }
  }
}
</style>
