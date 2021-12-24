<template>
  <h1>发票管理</h1>
  <div class="print-r">
    <div class="div1">
      <img src="../../assets/img/dingdan/1.png" alt="" />
    </div>
    <div style="margin-top: 10px">
      <p class="p1" style="color: #ffaf22">45</p>
      <p class="p2">较上月增涨</p>
      <p style="color: #ffaf22">+6%</p>
      <p class="p3">普通发票</p>
    </div>
    <div style="margin-top: 10px">
      <p class="p1" style="color: #0379fd">70</p>
      <p class="p2">较上月增涨</p>
      <p style="color: #0379fd">+8%</p>
      <p class="p3">电子发票</p>
    </div>
    <div style="margin-top: 10px">
      <p class="p1" style="color: #2fc258">13</p>
      <p class="p2">较上月增涨</p>
      <p style="color: #2fc258">+3%</p>
      <p class="p3">增值税专业发票</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.print-r {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .div1 {
    width: 70px;
    height: 60px;
    margin-top: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
h1 {
  display: flex;
  align-items: flex-start;
  margin-left: 30px;
  padding-top: 10px;
  font-size: 14px;
}
.p1 {
  font-size: 26px;
  font-family: Arial;
  font-weight: bold;
}
.p2 {
  color: #777777;
}
.p3 {
  margin-top: 5px;
  width: 120px;
  height: 20px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #555555;
}
</style>
