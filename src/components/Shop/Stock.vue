<template>
  <el-row class="search">
    <el-col :span="24"
      ><div class="grid-content bg-purple-dark">
        <span>商品种类</span>
        <div class="box">
          <div class="searchbox">
            <img src="../../assets/img/shop/search.png" alt="" />
            <input type="text" placeholder="查询商品" />
            <div class="searchbtn">点击搜索</div>
          </div>
          <div class="searchtime">
            <span>日期</span>
            <div class="time-btn">
              <input type="date" />
            </div>
          </div>
        </div></div
    ></el-col>
  </el-row>
  <el-row class="shoptype">
    <el-col :span="24"
      ><div class="grid-content bg-purple-dark">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date">
            <template #header>
              <div class="header1">商品种类</div>
            </template>
          </el-table-column>
          <el-table-column prop="name">
            <template #header>
              <div class="header2">订单号</div>
            </template>
          </el-table-column>
          <el-table-column prop="address">
            <template #header>
              <div class="header2">入库时间</div>
            </template>
          </el-table-column>
          <el-table-column prop="address">
            <template #header>
              <div class="header2">采购方式</div>
            </template>
          </el-table-column>
          <el-table-column prop="address">
            <template #header>
              <div class="header2">订单金额</div>
            </template>
          </el-table-column>
          <el-table-column prop="address">
            <template #header>
              <div class="header2">现有数量</div>
            </template>
          </el-table-column>
          <el-table-column prop="address">
            <template #header>
              <div class="header2">存储方式</div>
            </template>
          </el-table-column>
          <el-table-column prop="address">
            <template #header>
              <div class="header2">已付款</div>
            </template>
          </el-table-column>
        </el-table>
      </div></el-col
    >
  </el-row>
</template>

<script>
export default {
  setup() {
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
    return { tableData };
  },
};
</script>

<style lang="less" scoped>
.grid-content {
  border-radius: 10px;
  min-height: 100px;
}
.bg-purple-dark {
  background: #fff;
}
.shoptype {
  .grid-content {
    margin-top: 20px;
    min-height: 500px;
  }
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
  .box {
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .searchbox {
      width: 350px;
      height: 40px;
      border: 2px solid rgb(52, 145, 252);
      border-radius: 20px;
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
    .searchtime {
      display: flex;
      align-items: center;
      span {
        font-size: 12px;
        color: #999;
        margin-right: 10px;
      }
      .time-btn {
        width: 150px;
        height: 40px;
        border: 2px solid #1187ff;
        border-radius: 20px;
        input {
          width: 120px;
          height: 35px;
          margin-left: 14px;
          outline: none;
          border: none;
        }
      }
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
