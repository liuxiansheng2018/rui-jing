<template>
  <el-row :gutter="20">
    <el-col :span="10"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="10"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
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
  min-height: 180px;
}
.bg-purple {
  background: #d3dce6;
}
</style>
