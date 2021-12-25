<template>
  <el-row :gutter="20">
    <el-col :span="6" v-for="item in list" :key="item.id"
      ><div class="grid-content bg-purple purchase">
        <div class="title">{{ item.name }}</div>
        <div>
          <div class="purlogo" :style="{ 'border-color': item.color }">
            <img :src="item.url" alt="" />
          </div>
        </div>
        <div class="btn">
          <p class="this" :style="{ background: item.color }">本月消耗</p>
          <p class="all">累计消耗</p>
        </div>
      </div></el-col
    >
  </el-row>
  <el-row class="search">
    <el-col :span="24"
      ><div class="grid-content bg-purple-dark">
        <span>商品种类</span>
        <div class="searchbox">
          <img src="../../assets/img/shop/search.png" alt="" />
          <input type="text" placeholder="查询商品" />
          <div class="searchbtn">点击搜索</div>
        </div>
      </div></el-col
    >
  </el-row>
  <el-row class="shoptype">
    <el-col :span="24"
      ><div class="grid-content bg-purple-dark">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="type">
            <template #header>
              <div class="header1">商品种类</div>
            </template>
          </el-table-column>
          <el-table-column prop="num">
            <template #header>
              <div class="header2">订单号</div>
            </template>
          </el-table-column>
          <el-table-column prop="time">
            <template #header>
              <div class="header2">交易时间</div>
            </template>
          </el-table-column>
          <el-table-column prop="way">
            <template #header>
              <div class="header2">采购方式</div>
            </template>
          </el-table-column>
          <el-table-column prop="paid">
            <template #header>
              <div class="header2">订单金额</div>
            </template>
          </el-table-column>
          <el-table-column prop="regexp">
            <template #header>
              <div class="header2">商家电话</div>
            </template>
          </el-table-column>
          <el-table-column prop="form">
            <template #header>
              <div class="header2">订单回执</div>
            </template>
          </el-table-column>
          <el-table-column prop="money">
            <template #header>
              <div class="header2">已付款</div>
            </template>
          </el-table-column>
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
import purchase1 from "../../assets/img/shop/purchase1.png";
import purchase2 from "../../assets/img/shop/purchase2.png";
import purchase3 from "../../assets/img/shop/purchase3.png";
import purchase4 from "../../assets/img/shop/purchase4.png";
import getTable from "../../mock/shop/purchase";
import { onMounted, ref } from "vue";
export default {
  // data() {
  //   return {};
  // },
  setup() {
    const current = ref(1);
    const pageSize = ref(5);
    const tableData = ref([]);
    const list = [
      {
        id: 1,
        name: "畜肉类",
        url: purchase1,
        color: "#0379FD",
      },
      {
        id: 2,
        name: "禽肉类",
        url: purchase2,
        color: "#FFAF22",
      },
      {
        id: 3,
        name: "蔬菜类",
        url: purchase3,
        color: "#2FC258",
      },
      {
        id: 4,
        name: "酒水类",
        url: purchase4,
        color: "#765EFE",
      },
    ];

    onMounted(() => {
      tableData.value = getTable(pageSize.value, current.value);
    });
    const handleSizeChange = (val) => {
      console.log(`${val} items per page`);
    };
    const handleCurrentChange = (val) => {
      // console.log(`current page: ${val}`);
      current.value = val;
      tableData.value = getTable(pageSize.value, current.value);
    };
    return { list, tableData, handleSizeChange, handleCurrentChange };
  },
};
</script>

<style lang="less" scoped>
.grid-content {
  border-radius: 10px;
  min-height: 200px;
  background-color: #fff;
}
.search {
  .grid-content {
    min-height: 100px;
    margin-top: 10px;
  }
}
.shoptype {
  .grid-content {
    min-height: 300px;
    margin-top: 10px;
  }
}
.purchase {
  padding: 5px;
  color: #555;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .title {
    text-align: left;
    font-size: 14px;
    width: 100%;
  }
  .purlogo {
    width: 100px;
    height: 100px;
    border: 3px solid rgb(250, 170, 51);
    border-radius: 50%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
    }
  }
  .btn {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 10px;
    width: 100%;
    .this {
      width: 70px;
      height: 24px;
      border-radius: 12px;
      background-color: rgb(76, 137, 252);
      color: #fff;
      text-align: center;
      line-height: 24px;
    }
    .all {
      width: 70px;
      height: 24px;
      border-radius: 12px;
      background-color: rgb(197, 196, 196);
      color: #555;
      text-align: center;
      line-height: 24px;
    }
  }
}
.bg-purple:nth-of-type(4) {
  margin-right: 0;
}
.search {
  text-align: left;
  .grid-content {
    padding: 5px;
  }
  span {
    font-weight: bold;
    font-size: 14px;
    color: #555;
  }
  .searchbox {
    width: 350px;
    height: 40px;
    border: 2px solid rgb(52, 145, 252);
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 100px;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 15px;
      height: 15px;
      margin-left: 5px;
    }
    input {
      height: 36px;
      outline: none;
      // position: absolute;
      // top: 0;
      // width: 263px;
      flex: 1;
      margin-left: 5px;
      border: none;
    }
    input::placeholder {
      color: #999;
    }
    .searchbtn {
      // position: absolute;
      // right: 0;
      // top: 0;
      height: 36px;
      width: 60px;
      border-left: 2px solid rgb(52, 145, 252);
      line-height: 36px;
      text-align: center;
      color: #999;
      cursor: pointer;
    }
  }
}

.header1 {
  width: 80px;
  height: 24px;
  border-radius: 12px;
  background-color: #0379fd;
  text-align: center;
  color: #fff;
}
.header2 {
  width: 80px;
  height: 24px;
  border-radius: 12px;
  background-color: #d5d5d5;
  text-align: center;
  color: #555;
}
</style>
