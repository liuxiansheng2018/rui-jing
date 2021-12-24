<template>
  <h1>订单打印</h1>
  <div class="print-l">
    <div class="div1">
      <img src="../../assets/img/dingdan/2.png" alt="" />
    </div>
    <div style="margin-top: 30px">
      <p class="p1" style="color: #ffaf22">75</p>
      <p class="p2">较昨日增长</p>
      <p style="color: #ffaf22">
        +10%
        <span>
          <img src="../../assets/img/dingdan/3.png" alt="" />
        </span>
      </p>
      <p class="p3">美团订单</p>
    </div>
    <div style="margin-top: 30px">
      <p class="p1" style="color: #0379fd">62</p>
      <p class="p2">较昨日增长</p>
      <p style="color: #0379fd">
        +50%
        <span>
          <img src="../../assets/img/dingdan/4.png" alt="" />
        </span>
      </p>
      <p class="p3">饿了么订单</p>
    </div>
    <div style="margin-top: 30px">
      <p class="p1" style="color: #2fc258">712</p>
      <p class="p2">较上月降幅</p>
      <p style="color: #2fc258">
        -5%
        <span>
          <img src="../../assets/img/dingdan/5.png" alt="" />
        </span>
      </p>
      <p class="p3">本月订单</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.print-l {
  display: flex;
  justify-content: space-around;
  align-items: center;

  .div1 {
    width: 80px;
    height: 70px;
    margin-top: 40px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
h1 {
  position: absolute;
  left: 30px;
  top: 10px;
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
  width: 100px;
  height: 20px;
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #555555;
}
</style>
