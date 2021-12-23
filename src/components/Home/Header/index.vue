<template>
  <div class="header">
    <h1>金锐管理系统</h1>
    <div class="right">
      <p></p>
      <p></p>
      <div class="touxiang">
        <img src="" alt="" />
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
    justify-content: center;
    align-items: center;
    p {
      width: 38px;
      height: 38px;
      border: 1px solid #f3f3f3;
      margin-right: 42px;
      align-items: center;
    }
  }
}
</style>
