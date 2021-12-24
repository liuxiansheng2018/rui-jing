<template>
  <el-container>
    <el-header><Header></Header></el-header>
    <el-container>
      <el-aside width="200px"><Aside></Aside></el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "@/components/Home/Header/index.vue";
import Aside from "@/components/Home/Aside/index.vue";
// import Main from "@/components/Home/Main/index.vue";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Aside,
    // Main,
  },
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
  overflow-x: hidden;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  height: 100%;
  /* text-align: center; */
  /* line-height: 160px; */
}

.el-container {
  height: 720px;
  width: 100%;
  /* min-height: 720px; */
  height: 100%;
  min-height: 660px;
}

/* .el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
} */
</style>
