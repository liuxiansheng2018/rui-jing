<template>
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
        <div class="typeline">
          <div class="typetitle"><span>酒水类</span></div>
          <div class="shopbox">
            <div class="shop">
              <img src="../../assets/img/shop/shop1.png" alt="" />
              <div class="content">
                <div class="price">8.00<br />/瓶</div>
                <div class="name">啤酒</div>
              </div>
            </div>
            <div class="shop">
              <img src="../../assets/img/shop/shop1.png" alt="" />
              <div class="content">
                <div class="price">8.00<br />/瓶</div>
                <div class="name">啤酒</div>
              </div>
            </div>
            <div class="shop">
              <img src="../../assets/img/shop/shop1.png" alt="" />
              <div class="content">
                <div class="price">8.00<br />/瓶</div>
                <div class="name">啤酒</div>
              </div>
            </div>
            <div class="shop">
              <img src="../../assets/img/shop/shop1.png" alt="" />
              <div class="content">
                <div class="price">8.00<br />/瓶</div>
                <div class="name">啤酒</div>
              </div>
            </div>
            <div class="shop">
              <img src="../../assets/img/shop/shop1.png" alt="" />
              <div class="content">
                <div class="price">8.00<br />/瓶</div>
                <div class="name">啤酒</div>
              </div>
            </div>
          </div>
        </div>
      </div></el-col
    >
  </el-row>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.grid-content {
  border-radius: 10px;
  min-height: 80px;
  text-align: left;
  padding: 10px;
  color: #333;
}
.bg-purple-dark {
  background: #fff;
}

.search {
  .grid-content {
    position: relative;
  }
  span {
    font-weight: bold;
  }
  .searchbox {
    width: 300px;
    height: 30px;
    border: 2px solid rgb(52, 145, 252);
    border-radius: 15px;
    position: absolute;
    top: 50%;
    left: 100px;
    transform: translateY(-50%);
    img {
      width: 15px;
      height: 15px;
      margin: 5px 5px;
    }
    input {
      height: 26px;
      outline: none;
      position: absolute;
      top: 0;
      width: 213px;
      margin-left: 5px;
      border: none;
    }
    input::placeholder {
      color: #999;
    }
    .searchbtn {
      position: absolute;
      right: 0;
      top: 0;
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

.shoptype {
  .grid-content {
    margin-top: 20px;
    min-height: 420px;
  }
  .typeline {
    height: 80px;
    display: flex;

    .typetitle {
      height: 80px;
      width: 80px;
      line-height: 80px;
      text-align: center;
      span {
        display: inline-block;
        font-size: 20px;
        color: #555;
        border-bottom: 1px solid orange;
        line-height: 30px;
      }
    }
  }
  .shopbox {
    display: flex;
  }
  .shop {
    width: 150px;
    height: 100%;
    position: relative;
    font-size: 14px;
    color: #555;
    img {
      width: 100%;
      height: 100%;
    }
    .content {
      width: 50px;
      position: absolute;
      right: 0;
      top: 0;
      padding: 10px 0;
      .price {
        height: 28px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 4px;
      }
      .name {
        height: 28px;
        margin-top: 2px;
        text-align: center;
        // display: flex;
        // flex-direction: column;
        // justify-content: space-around;
        // align-items: center;
        overflow: hidden;
      }
    }
  }
}
</style>
