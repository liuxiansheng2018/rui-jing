<template>
  <div class="header">
    <h1>金锐管理系统</h1>
    <div class="right">
      <img src="../../../assets/img/page/more.png" alt="" />
      <img src="../../../assets/img/page/set.png" alt="" />
      <div class="touxiang">
        <img src="../../../assets/img/setting/touxiang.png" alt="" />
        <img src="../../../assets/img/page/arrow.png" alt="" />
      </div>
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
}
.header {
  display: flex;
  justify-content: space-between;
  .right {
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
      margin-right: 42px;
      align-items: center;
    }
    .touxiang {
      img {
        width: 50px;
        height: 50px;
      }
      img:nth-of-type(2) {
        width: 8px;
        height: 8px;
      }
    }
  }
}
</style>
