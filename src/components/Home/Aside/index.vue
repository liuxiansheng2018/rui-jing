<template>
  <div>
    <img class="img" src="../../../assets/img/page/touxiang.png" alt="" />
    <p style="font-size: 18px">张总</p>
    <p>店长</p>
  </div>
  <div class="Aside">
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from "../../../components/Home/Aside/Menu.vue";

export default {
  data() {
    return {};
  },
  components: {
    Menu,
  },
};
</script>

<style lang="less" scoped>
// .Aside {
//   background-color: rgb(84, 92, 100);
// }
.img {
  width: 150px;
  height: 100px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  color: #ffffff;
  padding: 5px;
}
</style>
