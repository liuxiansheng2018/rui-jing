<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
  <div class="schedule">
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
export default {
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
  min-height: 300px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
