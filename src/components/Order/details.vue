<template>
  <!-- <div>订单详情页</div> -->
  <el-row :gutter="20">
    <el-col :span="6"
      ><div class="grid-content bg-purple">
        <h1>订单详情</h1>
        <p class="p1">现金收款</p>
        <p class="p2">￥1320.40</p>
        <div class="box1">
          <div>
            <p>收款笔数</p>
            <p>8</p>
          </div>
          <div>
            <p>单笔价格</p>
            <p>165.05</p>
          </div>
        </div>
      </div></el-col
    >
    <el-col :span="6"
      ><div class="grid-content bg-purple">
        <p class="p1">网银收款</p>
        <p class="p2">￥14360.00</p>
        <div class="box1">
          <div>
            <p>收款笔数</p>
            <p>52</p>
          </div>
          <div>
            <p>单笔价格</p>
            <p>276.12</p>
          </div>
        </div>
      </div></el-col
    >
    <el-col :span="6"
      ><div class="grid-content bg-purple">
        <p class="p1">退款订单</p>
        <p class="p2">5</p>
        <p style="margin-top: 15px">退款金额</p>
        <p>￥1230.00</p>
      </div></el-col
    >
    <el-col :span="6"
      ><div class="grid-content bg-purple">
        <p class="p1">订单问题</p>
        <p class="p2">3</p>
        <el-button type="primary">查看详情</el-button>
        <el-button>问题反馈</el-button>
      </div></el-col
    >
  </el-row>
  <el-row :gutter="20">
    <el-col :span="24"
      ><div class="grid-content bg-purple">
        <h1>订单搜索</h1>
        <div class="box">
          <div class="search-list">
            <div class="searchbox">
              <img src="../../assets/img/public/6.png" alt="" />
              <input type="text" placeholder="查询订单" />
              <div class="searchbtn">点击搜索</div>
            </div>
          </div>
          <Date></Date>
        </div></div
    ></el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="24"
      ><div class="grid-content bg-purple" style="height: 400px">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="num" label="订单号" :md="3" />
          <el-table-column prop="time" label="交易时间" :md="3" />
          <el-table-column prop="payment" label="支付方式" :md="3" />
          <el-table-column prop="money" label="订单金额" :md="3" />
          <el-table-column prop="discount" label="官方/商家优惠" :md="3" />
          <el-table-column prop="paid" label="实收金额" :md="3" />
          <el-table-column prop="put" label="打印" :md="3" />
          <el-table-column prop="return" label="退款" :md="3" />
        </el-table>
        <el-pagination
          :background="true"
          v-model:currentPage="currentPage1"
          :page-size="10"
          layout="total, prev, pager, next"
          :total="100"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          prev-text="上一页"
          next-text="下一页"
          style="margin-top: 20px"
        >
        </el-pagination></div
    ></el-col>
  </el-row>
</template>

<script>
import Date from "./date.vue";
import getTable from "../../mock/details/details.js";
import { ref, onMounted } from "vue";

export default {
  data() {
    return {};
  },
  components: {
    Date,
  },
  setup() {
    const current = ref(1);
    const pageSize = ref(6);
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
      current,
      pageSize,
      tableData,
      handleSizeChange,
      handleCurrentChange,
    };
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
  height: 128px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.search-list {
  min-height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .searchbox {
    display: flex;
    align-items: center;
    width: 400px;
    height: 35px;
    border: 2px solid rgb(52, 145, 252);
    border-radius: 15px;
    margin-top: 30px;

    img {
      width: 15px;
      height: 15px;
      margin: 5px 5px;
    }
    input {
      height: 26px;
      outline: none;
      width: 313px;
      margin-left: 5px;
      border: none;
    }
    .searchbtn {
      height: 26px;
      width: 60px;
      border-left: 2px solid rgb(52, 145, 252);
      line-height: 26px;
      text-align: center;
      color: #999;
      cursor: pointer;
    }
  }
}
.box {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
h1 {
  position: absolute;
  left: 30px;
  top: 10px;
  font-size: 14px;
}
.p1 {
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #555555;
  line-height: 33px;
  padding-top: 20px;
}
.p2 {
  margin: 4px auto;
  width: 150px;
  border-bottom: 1px dashed orange;
  font-size: 20px;
  font-weight: 600;
}
.box1 {
  display: flex;
  justify-content: space-evenly;
  margin-top: 15px;
}

/deep/ .el-pagination .el-pagination__total {
  display: none;
}
</style>
