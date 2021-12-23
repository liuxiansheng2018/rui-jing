<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="9"
        ><div class="grid-content bg-purple">
          <h4 class="grid-text">当日订单</h4>
          <div class="top-1">
            <div>
              <el-progress
                type="circle"
                :percentage="100"
                color="#057AFD"
                duration="0"
              >
                <template #default="{ percentage }">
                  <span class="percentage-value">{{ percentage + 236 }}</span>
                  <span class="percentage-labelc">较昨日增长</span>
                </template>
              </el-progress>
              <p>到店订单</p>
            </div>
            <div>
              <el-progress
                type="circle"
                :percentage="100"
                color="#FFB637"
                duration="0"
              >
                <template #default="{ percentage }">
                  <span class="percentage-value">{{ percentage }}%</span>
                  <span class="percentage-label">较昨日下降</span>
                </template>
              </el-progress>
              <p>外送订单</p>
            </div>
          </div>
        </div></el-col
      >
      <el-col :span="9"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="18"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="9"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="9"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
.grid-content {
  border-radius: 4px;
  height: 190px;
}
.bg-purple {
  background: #fff;
}
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}
.top-1 {
  display: flex;
  justify-content: space-evenly;
}
.grid-text {
  text-align: left;
}
</style>
