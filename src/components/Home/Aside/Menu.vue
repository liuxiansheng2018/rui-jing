<template>
  <div>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
<<<<<<< HEAD
          background-color="#333"
=======
          background-color="#333333"
>>>>>>> b6bcd3c40220a1912c22a9822e91cfdcf84450f9
          class="el-menu-vertical-demo"
          default-active="1"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
          router="true"
          :unique-opened="true"
        >
          <el-sub-menu v-for="item in list" :key="item.id" :index="item.id">
            <template #title>
              <el-icon><location /></el-icon>
              <span
                ><el-menu-item :index="item.url">{{
                  item.name
                }}</el-menu-item></span
              >
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="value in item.child"
                :index="value.childUrl"
                :key="value.childName"
                >{{ value.childName }}</el-menu-item
              >
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="js">

import { defineComponent } from "vue";
import {
  Location,
//   Document,
//   Menu as IconMenu,
//   Setting,
} from "@element-plus/icons-vue";

export default defineComponent({
  data(){
    return{

      list:[
        {
            id:1,
            name:"首页",
            child:[
              {
                childName:"当日订单",
                childUrl:"/Index/Main"
              },

            ],
            url:"/Index/Main"

        },
        {
            id:2,
            name:"订单",
            child:[
              {
                childName:"订单预约",
                childUrl:"/Index/Order/Maa"
              },
              {
                childName:"订单打印",
                childUrl:"/Index/Order/Print"
              },
              {
                childName:"订单详情",
                childUrl:"/Index/Order/details"
              },
            ],
            url:"/Index/Order/Maa"
        },{
            id:3,
            name:"商品管理",
            child:[
               {
                childName:"商品种类",
                childUrl:"/Index/Shop/ShopType"
              },
              {
                childName:"商品采购",
                childUrl:"/Index/Shop/Purchase"
              },
              {
                childName:"库存",
                childUrl:"/Index/Shop/Stock"
              },
            ],
            url:"/Index/Shop/ShopType"
        },{
            id:4,
            name:"个人中心",
            child:[
              {
                childName:"我的工作",
                childUrl:"/Index/Personal/MyWord"
              },
              {
                childName:"请假管理",
                childUrl:"/Index/Personal/leave"
              },
            ],
            url:"/Index/Personal/MyWord"
        },{
            id:5,
            name:"客户管理",
            child:[
              {
                childName:"会员中心",
                childUrl:"/Index/Customer/member"
              },
              {
                childName:"新增客户",
                childUrl:"/Index/Customer/add"
              },
              {
                childName:"客户挖掘",
                childUrl:"/Index/Customer/CustomerMining"
              },
            ],
            url:"/Index/Customer/member"
        },{
            id:6,
            name:"员工管理",
            child:[
              {
                childName:"工作汇报",
                childUrl:"/Index/Staff/WorkReport"
              },
              {
                childName:"考勤",
                childUrl:"/Index/Staff/Check"
              },

            ],
            url:"/Index/Staff/WorkReport"
        },{
            id:7,
            name:"设置",

            url:"/Index/setUp"
        },
      ]
    }
  },
  components: {
    Location,
    // Document,
    // Setting,
    // IconMenu,
  },
  setup() {
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      handleOpen,
      handleClose,
    };
  },
});
</script>

<style lang="less" scoped>
.el-menu {
  width: 200px;
}

// /deep/ .el-aside::-webkit-scrollbar {
//   display: none !important;
//   width: 0 !important;
//   height: 0;
// }

.el-col-12 {
  max-width: 100%;
}
// .el-row {
//   justify-content: center;
// }
.el-menu-item-group__title {
  padding: 0, 0, 0, 0;
}
.el-sub-menu__title {
  height: 0;
  line-height: 40px;
}
.el-menu {
  width: 200px;
}
</style>
