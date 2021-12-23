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
    <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
  </el-row>
</template>

<script>
import purchase1 from "../../assets/img/shop/purchase1.png";
import purchase2 from "../../assets/img/shop/purchase2.png";
import purchase3 from "../../assets/img/shop/purchase3.png";
import purchase4 from "../../assets/img/shop/purchase4.png";
export default {
  // data() {
  //   return {};
  // },
  setup() {
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
    return { list };
  },
};
</script>

<style lang="less" scoped>
.grid-content {
  border-radius: 10px;
  min-height: 160px;
  background-color: #fff;
}
.search {
  .grid-content {
    min-height: 80px;
    margin-top: 10px;
  }
}
.shoptype {
  .grid-content {
    min-height: 280px;
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
    width: 80px;
    height: 80px;
    border: 3px solid rgb(250, 170, 51);
    border-radius: 50%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
    }
  }
  .btn {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 10px;
    width: 100%;
    .this {
      width: 60px;
      height: 24px;
      border-radius: 12px;
      background-color: rgb(76, 137, 252);
      color: #fff;
      text-align: center;
      line-height: 24px;
    }
    .all {
      width: 60px;
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
    height: 30px;
    border: 2px solid rgb(52, 145, 252);
    border-radius: 15px;
    position: absolute;
    top: 50%;
    left: 100px;
    transform: translateY(-50%);
    display: flex;
    img {
      width: 15px;
      height: 15px;
      margin: 5px 5px;
    }
    input {
      height: 26px;
      outline: none;
      // position: absolute;
      // top: 0;
      width: 263px;
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
