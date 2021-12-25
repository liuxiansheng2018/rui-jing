<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div id="main"></div>
          <div class="process">
            <div>
              <el-progress
                :text-inside="true"
                :stroke-width="14"
                :percentage="30"
              />
              <p>较比上月+10%</p>
              <p>明星推广</p>
            </div>
            <div>
              <el-progress
                :text-inside="true"
                :stroke-width="14"
                :percentage="70"
                :color="customColor"
              />
              <p>较比上月+8%</p>
              <p>广告推广</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple grid-contenttwo">
          <div id="main1"></div>
          <div class="xianxia">
            <div>
              <img src="../../assets/img/customer/money.png" alt="" />
              <p>投入资金</p>
            </div>
            <div>
              <img src="../../assets/img/customer/num.png" alt="" />
              <p>推广次数</p>
            </div>
            <div>
              <img src="../../assets/img/customer/cust.png" alt="" />
              <p>客户新增</p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  <div class="schedule">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <div class="table">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column type="index" :index="indexMethod" />
              <el-table-column prop="name" label="姓名" />
              <el-table-column prop="industry" label="职务" />
              <el-table-column prop="num" label="会员号" />
              <el-table-column prop="date" label="注册时间" />
              <el-table-column prop="register" label="注册方式" />
              <el-table-column prop="regexp" label="电话" />
              <el-table-column prop="address" label="住址" />
              <el-table-column prop="schedule" label="注册进度" />
            </el-table>
          </div>
          <el-pagination
            background
            :total="80"
            v-model:currentPage="currentPage1"
            layout="prev, pager, next"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            prev-text="上一页"
            next-text="下一页"
            style="margin-top: 20px"
          >
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from "echarts";
import getTable from "../../mock/customer/CustomerMining";
import { ref, onMounted } from "vue";
export default {
  setup() {
    const customColor = "#FFAF22";
    onMounted(() => {
      // 基于准备好的dom，初始化echarts实例
      const main = document.getElementById("main");
      var myChart = echarts.init(main);
      // 绘制图表
      myChart.setOption({
        title: {
          text: "线上推广",
        },
        xAxis: {
          type: "category",
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
          },
        ],
      });
      // 基于准备好的dom，初始化echarts实例
      const main1 = document.getElementById("main1");
      var myChart1 = echarts.init(main1);
      // 绘制图表
      myChart1.setOption({
        title: {
          text: "线下推广",
        },
        grid: {
          bottom: "10%",
          backgroundColor: "green",
        },
        xAxis: {
          type: "category",
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
            type: "bar",
            color: "#2FC258",
          },
        ],
      });
    });

    const current = ref(1);
    const pageSize = ref(4);
    let tableData = ref([]);

    const handleSizeChange = (val) => {
      console.log(`${val} items per page`);
    };
    const handleCurrentChange = (val) => {
      // console.log(`current page: ${val}`);
      current.value = val;
      tableData.value = getTable(pageSize.value, current.value);
    };

    onMounted(() => {
      tableData.value = getTable(pageSize.value, current.value);
    });
    return {
      customColor,
      current,
      pageSize,
      tableData,
      handleSizeChange,
      handleCurrentChange,
    };
  },
  // data() {
  //   return {
  //     tableData: [
  //       {
  //         rank: "黄金",
  //         date: "2016-05-03",
  //         name: "张三",
  //         address: "No. 189, Grove St, Los Angeles",
  //         profession: "职业经理",
  //         vipnum: 123456,
  //         money: 11222,
  //         tel: 13322445566,
  //       },
  //       {
  //         rank: "白银",
  //         date: "2016-05-02",
  //         name: "李四",
  //         address: "No. 189, Grove St, Los Angeles",
  //         profession: "职业经理",
  //         vipnum: 123456,
  //         money: 13432,
  //         tel: 13322445566,
  //       },
  //       {
  //         rank: "青铜",
  //         date: "2016-05-04",
  //         name: "王五",
  //         address: "No. 189, Grove St, Los Angeles",
  //         profession: "职业经理",
  //         vipnum: 123456,
  //         money: 1128,
  //         tel: 13322445566,
  //       },
  //     ],
  //   };
  // },
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
  min-height: 300px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
#main {
  width: 600px;
  height: 200px;
}
.process {
  display: flex;
  height: 80px;
  width: 100%;
  justify-content: space-around;
  div {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  /deep/.el-progress-bar__outer {
    width: 200px;
  }
}
.grid-contenttwo {
  background: transparent;
  div {
    width: 100%;
    background: #fff;
    border-radius: 5px;
  }
  #main1 {
    height: 180px;
    margin-bottom: 20px;
  }
  .xianxia {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      align-items: center;
      img {
        width: 40px;
        height: 30px;
      }
    }
  }
}
</style>
