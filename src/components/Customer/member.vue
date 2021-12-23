<template>
  <div class="vip-center">
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item, index) in list" :key="index">
        <div class="grid-content bg-purple">
          <div class="vipc1">{{ item.vipc }}</div>
          <div class="center1">
            <div class="cimg">
              <img :src="item.img" alt="" />
              <p>{{ item.text }}</p>
            </div>
            <div class="center1-1">
              <div class="center1-1-1">
                <div>
                  <p :style="{ color: item.color }">25</p>
                  <span>新增会员</span>
                </div>
                <div>
                  <div class="cimg1">
                    <span :style="{ color: item.color }">+10%</span>
                    <img :src="item.img1" alt="" />
                  </div>
                  <span>较上月</span>
                </div>
              </div>
              <div class="center1-1-2">
                <p :style="{ color: item.color }">1260</p>
                <span>现有会员</span>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div class="vipc2">会员总数</div>
          <div class="sum1">
            <h4>4561</h4>
            <p>+8%</p>
            <p>较上月</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  <div class="vip-search">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <p>会员查询</p>
          <div class="search-list">
            <div class="searchbox">
              <img src="../../assets/img/customer/search.png" alt="" />
              <input type="text" placeholder="查询会员号" />
              <div class="searchbtn">点击搜索</div>
            </div>
            <div class="searchrank">
              <span>会员等级</span>
              <div class="rank-btn">
                <select name="" id="">
                  <option value="">白银会员</option>
                  <option value="">青铜会员</option>
                  <option value="">黄金会员</option>
                </select>
              </div>
            </div>
            <div class="searchtime">
              <span>充值时间</span>
              <div class="time-btn">
                <input type="date" />
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  <div class="vip-rank">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <div class="table">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="rank" label="等级" width="180" />
              <el-table-column prop="name" label="姓名" width="180" />
              <el-table-column prop="profession" label="行业" />
              <el-table-column prop="vipnum" label="会员号" />
              <el-table-column prop="date" label="注册时间" />
              <el-table-column prop="money" label="账户余额" />
              <el-table-column prop="tel" label="电话" />
              <el-table-column prop="address" label="住址" />
            </el-table>
          </div>
          <div class="table-page">
            <el-pagination
              layout="prev, pager, next"
              :total="80"
            ></el-pagination>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import img1 from "../../assets/img/customer/three.png";
import img2 from "../../assets/img/customer/two.png";
import img3 from "../../assets/img/customer/one.png";
import oneimg1 from "../../assets/img/customer/one-img.png";
import twoimg2 from "../../assets/img/customer/two-img.png";
import threeimg3 from "../../assets/img/customer/three-img.png";
export default {
  setup() {
    const list = [
      {
        vipc: "会员中心",
        img: img1,
        img1: threeimg3,
        text: "青铜会员",
        color: "#2fc258",
      },
      {
        vipc: "",
        img: img2,
        img1: twoimg2,
        text: "白银会员",
        color: "#0379FD",
      },
      {
        vipc: "",
        img: img3,
        img1: oneimg1,
        text: "黄金会员",
        color: "#FFAF22",
      },
    ];
    return { list };
  },
  data() {
    return {
      tableData: [
        {
          rank: "黄金",
          date: "2016-05-03",
          name: "张三",
          address: "No. 189, Grove St, Los Angeles",
          profession: "职业经理",
          vipnum: 123456,
          money: 11222,
          tel: 13322445566,
        },
        {
          rank: "白银",
          date: "2016-05-02",
          name: "李四",
          address: "No. 189, Grove St, Los Angeles",
          profession: "职业经理",
          vipnum: 123456,
          money: 13432,
          tel: 13322445566,
        },
        {
          rank: "青铜",
          date: "2016-05-04",
          name: "王五",
          address: "No. 189, Grove St, Los Angeles",
          profession: "职业经理",
          vipnum: 123456,
          money: 1128,
          tel: 13322445566,
        },
      ],
    };
  },
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
  min-height: 180px;
  padding: 8px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.vip-search .grid-content {
  min-height: 120px;
}
.vip-rank {
  .grid-content {
    min-height: 280px;
  }
  .el-row {
    margin-bottom: 0;
  }
}
.vipc1,
.vipc2 {
  height: 30px;
  text-align: left;
  font-size: 16px;
}
.center1,
.center1-1-1 {
  display: flex;
}
.center1 {
  min-height: 130px;
  .cimg {
    width: 100px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .center1-1-1 {
    min-width: 180px;
    min-height: 40px;
    justify-content: space-around;
    margin-bottom: 40px;
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      .cimg1 {
        display: flex;
        flex-direction: row;
        img {
          width: 8px;
          height: 8px;
          margin-left: 5px;
        }
      }
    }
    p {
      font-size: 20px;
    }
    div:nth-of-type(2) {
      p {
        font-size: 14px;
      }
    }
  }
  .center1-1-2 {
    min-height: 40px;
    p {
      font-size: 20px;
    }
  }
}
.sum1 {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 120px;
  h4 {
    width: 80px;
    min-height: 50px;
    line-height: 50px;
    font-size: 30px;
    border-bottom: 1px solid #0379fd;
    font-weight: normal;
    color: #0379fd;
  }
  p:nth-of-type(1) {
    color: #0379fd;
    font-weight: bold;
    letter-spacing: 3px;
  }
  p:nth-of-type(2) {
    font-size: 12px;
  }
}
.vip-search {
  p {
    font-size: 16px;
    text-align: left;
  }
  .search-list {
    min-height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .searchbox {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 400px;
      height: 40px;
      border: 2px solid #1187ff;
      border-radius: 20px;
      img {
        width: 15px;
        height: 15px;
        margin: 10px;
      }
      input {
        height: 35px;
        outline: none;
        width: 250px;
        margin-left: 5px;
        border: none;
      }
      .searchbtn {
        height: 40px;
        width: 60px;
        padding-left: 5px;
        border-left: 2px solid #1187ff;
        line-height: 40px;
        text-align: center;
        color: #999;
        cursor: pointer;
        letter-spacing: 1px;
      }
    }
    .searchrank {
      display: flex;
      align-items: center;
      span {
        font-size: 14px;
        color: #555555;
        margin-right: 10px;
      }
      .rank-btn {
        width: 150px;
        height: 40px;
        border: 2px solid #1187ff;
        border-radius: 20px;
        select {
          width: 100px;
          height: 35px;
          border: none;
        }
      }
    }
    .searchtime {
      display: flex;
      align-items: center;
      span {
        font-size: 14px;
        color: #555555;
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
          outline: none;
          border: none;
        }
      }
    }
  }
}
</style>
