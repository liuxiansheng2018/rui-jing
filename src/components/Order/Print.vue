<template>
  <!-- <div>订单打印</div> -->
  <el-row :gutter="20">
    <el-col :span="12"
      ><div class="grid-content bg-purple">
        <Print></Print></div
    ></el-col>
    <el-col :span="12"
      ><div class="grid-content bg-purple">
        <Print1></Print1></div
    ></el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="24"
      ><div class="grid-content bg-purple" style="height: 500px">
        <div class="search-list">
          <div class="searchbox">
            <img src="../../assets/img/public/6.png" alt="" />
            <input type="text" placeholder="查询订单" />
            <div class="searchbtn">点击搜索</div>
          </div>
        </div>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="num" label="订单号" :md="3" />
          <el-table-column prop="time" label="交易时间" :md="3" />
          <el-table-column prop="payment" label="支付方式" :md="3" />
          <el-table-column prop="money" label="订单金额" :md="3" />
          <el-table-column prop="discount" label="已优惠" :md="3" />
          <el-table-column prop="paid" label="订单金额" :md="3" />
          <el-table-column prop="put" label="发票" :md="3" />
          <el-table-column prop="return" label="打印" :md="3" />
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
import Print from "./print-left.vue";
import Print1 from "./print-right.vue";
import getTable from "../../mock/print/print.js";
import { ref, onMounted } from "vue";

export default {
  data() {
    return {};
  },
  components: {
    Print,
    Print1,
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

/deep/ .el-pagination .el-pagination__total {
  display: none;
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
</style>
