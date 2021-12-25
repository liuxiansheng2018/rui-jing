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
  background-color: #333;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
  min-width: 1500px;
}

.el-aside {
  background-color: #333;
  color: var(--el-text-color-primary);
  text-align: center;
  overflow-x: hidden;
}

.el-main {
  background-color: #cfe7ff;
  color: var(--el-text-color-primary);
  height: 100%;
  min-width: 1300px;
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
</style>
