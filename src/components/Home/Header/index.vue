<template>
  <div class="header">
    <h1>金锐管理系统</h1>
    <div class="right">
      <img class="img1" src="../../../assets/img/page/more.png" alt="" />
      <img class="img2" src="../../../assets/img/page/set.png" alt="" />
      <img class="img3" src="../../../assets/img/page/smalltx.png" alt="" />
      <img class="img4" src="../../../assets/img/page/arrow.png" alt="" />
    </div>
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
h1 {
  color: white;
  font-size: 20px;
  font-family: Microsoft YaHei;
  cursor: pointer;
}
.header {
  display: flex;
  justify-content: space-between;
  .right {
    width: 300px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .img1 {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
    .img2 {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
    .img3 {
      width: 80px;
      height: 50px;
      cursor: pointer;
    }
    .img4 {
      width: 15px;
      height: 8px;
      margin-top: 25px;
      cursor: pointer;
    }
  }
}
</style>
