<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="9"
        ><div class="grid-content bg-purple">
          <h4>意见反馈</h4>
          <div class="top-1">
            <div class="img1">
              <img src="@/assets/img/WorkReport/wendang.png" alt="" />
            </div>
            <ul class="temWord">
              <li v-for="(item, index) in 3" :key="index">
                <p>火锅加盟网共有13个火锅加盟品牌均通过 1831加盟项目.....</p>
                <span>2021.12.09</span>
              </li>
            </ul>
          </div>
        </div></el-col
      >
      <el-col :span="9"
        ><div class="grid-content bg-purple">
          <div class="top-1 top-2">
            <div class="img1">
              <img src="@/assets/img/WorkReport/wendang2.png" alt="" />
            </div>
            <ul class="temWord">
              <li v-for="(item, index) in 3" :key="index">
                <p>火锅加盟网共有13个火锅加盟品牌均通过 1831加盟项目.....</p>
                <span>2021.12.09</span>
              </li>
            </ul>
          </div>
        </div></el-col
      >
      <el-col :span="6"
        ><div class="grid-content bg-purple top-3">
          <h3>意见反馈</h3>
          <span>35</span>
          <button>查看详情</button>
        </div></el-col
      >
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24"
        ><div class="grid-content bg-purple grid-height">
          <el-table :data="tableData" style="width: 100%" size="medium ">
            <el-table-column prop="date" label="部门" width="180" />
            <el-table-column prop="name" label="问题描述" width="180" />
            <el-table-column prop="name" label="问题分类" width="180" />
            <el-table-column prop="name" label="所在城市" width="180" />
            <el-table-column prop="name" label="解决问题" width="180" />
            <el-table-column prop="name" label="跟进人" width="180" />
            <el-table-column prop="address" label="是否解决" />
          </el-table>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000"
            style="margin-top: 10px"
          >
          </el-pagination></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
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
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
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
    margin-bottom: 0;
  }
}
.bg-purple {
  background: #fff;
}
.grid-content {
  border-radius: 4px;
  height: 150px;
}
.grid-height {
  height: 450px;
}
h4 {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: left;
}
.top-1 {
  display: flex;
  align-items: center;
  padding: 0 20px;
  .img1 {
    width: 70px;
    height: 80px;
    img {
      width: 100%;
    }
  }
}
.top-2 {
  padding-top: 18px;
}
.temWord {
  li {
    display: flex;
    padding-left: 20px;
    position: relative;
    align-items: center;
    margin-top: 10px;
    p {
      font-size: 12px;
      text-align: left;
      width: 250px;
      height: 24px;
    }
    span {
      position: absolute;
      top: 14px;
      right: 5px;
    }
  }
}
.top-3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 14px;
  }
  span {
    display: flex;
    width: 100px;
    height: 50px;
    font-size: 30px;
    border-bottom: 1px solid #ffaf22;
    justify-content: center;
    align-items: center;
  }
  button {
    margin-top: 10px;
    border-radius: 5px;
    background-color: #0379fd;
    width: 75px;
    height: 25px;
    font-size: 10px;
    color: #fff;
    border: none;
  }
}
</style>
