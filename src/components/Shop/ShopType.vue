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
            <div class="shop" v-for="item in jiushui" :key="item.id">
              <img src="../../assets/img/shop/shopjiushui.png" alt="" />
              <div class="content">
                <div class="price">{{ item.price }}<br />/瓶</div>
                <div class="name">{{ item.name }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="typeline">
          <div class="typetitle"><span>肉类</span></div>
          <div class="shopbox">
            <div class="shop" v-for="item in rou" :key="item.id">
              <img src="../../assets/img/shop/shoprou.png" alt="" />
              <div class="content">
                <div class="price">{{ item.price }}<br />/份</div>
                <div class="name">{{ item.name }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="typeline">
          <div class="typetitle"><span>生鲜类</span></div>
          <div class="shopbox">
            <div class="shop" v-for="item in rou" :key="item.id">
              <img src="../../assets/img/shop/shopshengxian.png" alt="" />
              <div class="content">
                <div class="price">{{ item.price }}<br />/份</div>
                <div class="name">{{ item.name }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="typeline">
          <div class="typetitle"><span>蔬菜类</span></div>
          <div class="shopbox">
            <div class="shop" v-for="item in rou" :key="item.id">
              <img src="../../assets/img/shop/shopshucai.png" alt="" />
              <div class="content">
                <div class="price">{{ item.price }}<br />/瓶</div>
                <div class="name">{{ item.name }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="pagination">
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
          </el-pagination>
        </div></div
    ></el-col>
  </el-row>
</template>

<script>
import {
  getjiushui,
  getrou,
  getshengxian,
  getshucai,
} from "../../mock/shop/shoptype";
import { onMounted, ref } from "vue";
export default {
  setup() {
    const current = ref(1);
    const pageSize = ref(5);
    const jiushui = ref([]);
    const rou = ref([]);
    const shengxian = ref([]);
    const shucai = ref([]);

    onMounted(() => {
      jiushui.value = getjiushui(pageSize.value, current.value);
      rou.value = getrou(pageSize.value, current.value);
      shengxian.value = getshengxian(pageSize.value, current.value);
      shucai.value = getshucai(pageSize.value, current.value);
    });
    const handleSizeChange = (val) => {
      console.log(`${val} items per page`);
    };
    const handleCurrentChange = (val) => {
      // console.log(`current page: ${val}`);
      current.value = val;
      jiushui.value = getjiushui(pageSize.value, current.value);
      rou.value = getrou(pageSize.value, current.value);
      shengxian.value = getshengxian(pageSize.value, current.value);
      shucai.value = getshucai(pageSize.value, current.value);
    };
    return {
      jiushui,
      rou,
      shengxian,
      shucai,
      handleSizeChange,
      handleCurrentChange,
    };
  },
};
</script>

<style lang="less" scoped>
.grid-content {
  border-radius: 10px;
  min-height: 100px;
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
    width: 400px;
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
      // width: 213px;
      flex: 1;
      margin-left: 10px;
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

.shoptype {
  .grid-content {
    margin-top: 20px;
    min-height: 520px;
  }
  .typeline {
    height: 120px;
    display: flex;

    .typetitle {
      height: 120px;
      width: 120px;
      line-height: 120px;
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
    width: 200px;
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
        height: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // margin-bottom: 4px;
      }
      .name {
        height: 40px;
        margin-top: 10px;
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
.pagination {
  width: 100%;
  text-align: center;
}
</style>
