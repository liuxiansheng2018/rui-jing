<template>
  <!-- <div>订单预约</div> -->
  <el-row :gutter="20">
    <el-col :span="12"
      ><div class="grid-content bg-purple">
        <h1>订单预约</h1>
        <p class="p1">个人预约</p>
        <div class="search-list">
          <div class="searchbox">
            <img src="../../assets/img/public/6.png" alt="" />
            <input type="text" placeholder="查询订单" />
            <div class="searchbtn">点击搜索</div>
          </div>
        </div>
      </div></el-col
    >
    <el-col :span="12"
      ><div class="grid-content bg-purple">
        <p class="p1">团购预约</p>
        <div class="search-list">
          <div class="searchbox" style="border-color: orangered">
            <img src="../../assets/img/public/6.png" alt="" />
            <input type="text" placeholder="查询订单" />
            <div class="searchbtn" style="border-left-color: orangered">
              点击搜索
            </div>
          </div>
        </div>
      </div></el-col
    >
  </el-row>
  <el-row :gutter="20">
    <el-col :span="12"
      ><div class="grid-content bg-purple" style="height: 410px">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="日期" :md="6" />
          <el-table-column prop="num" label="订单号" :md="6" />
          <el-table-column prop="time" label="支付时间" :md="6" />
          <el-table-column prop="money" label="消费金额" :md="6" />
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
    <el-col :span="12"
      ><div class="grid-content bg-purple" style="height: 410px">
        <El></El></div
    ></el-col>
  </el-row>
</template>

<script>
import El from "./el.vue";
import { getTable } from "../../mock/maa/maa.js";
import { ref, onMounted } from "vue";
export default {
  data() {
    return {};
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
  components: {
    El,
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
  justify-content: space-around;
  align-items: center;
  .searchbox {
    display: flex;
    align-items: center;
    width: 300px;
    height: 35px;
    border: 2px solid rgb(52, 145, 252);
    border-radius: 15px;
    position: absolute;
    top: 65px;

    img {
      width: 15px;
      height: 15px;
      margin: 5px 5px;
    }
    input {
      height: 26px;
      outline: none;
      width: 213px;
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
h1 {
  position: absolute;
  left: 30px;
  top: 10px;
  font-size: 14px;
}
.p1 {
  text-align: center;
  line-height: 60px;
}
/deep/ .el-pagination .el-pagination__total {
  display: none;
}
</style>
