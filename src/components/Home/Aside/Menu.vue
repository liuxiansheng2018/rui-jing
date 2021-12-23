<template>
  <el-row class="tac">
    <el-col :span="12">
      <h5>
        <div>touxiang</div>
        <p>张伟</p>
      </h5>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        router="true"
        unique-opened="true"
      >
        <el-sub-menu v-for="item in list" :key="item.id" :index="item.id">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ item.name }}</span>
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
                childUrl:""
              },
              {
                childName:"客户数据",
                childUrl:""
              },
              {
                childName:"客户数据",
                childUrl:""
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
            url:"/Index/Order"
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
            url:"/Index/Main"
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
            url:"/Index/Personal"
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
            url:"/Index/Main"
        },{
            id:6,
            name:"员工管理",
            child:[
              {
                childName:"会员中心",
                childUrl:""
              },
              {
                childName:"新增客户",
                childUrl:""
              },
              {
                childName:"客户挖掘",
                childUrl:""
              },
            ],
            url:"/Index/Main"
        },{
            id:7,
            name:"设置",
            child:[
              {
                childName:"会员中心",
                childUrl:""
              },
              {
                childName:"新增客户",
                childUrl:""
              },
              {
                childName:"客户挖掘",
                childUrl:""
              },
            ],
            url:"/Index/Main"
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
// deep .el-col-12 {
//   max-width: 100%;
//   width: 200px;
// }
// .el-row {
//   justify-content: center;
// }
.el-menu {
  width: 200px;
}
.el-menu-item-group__title {
  padding: 0, 0, 0, 0;
}
.el-sub-menu__title {
  height: 0;
  line-height: 40px;
}
/deep/ .el-aside::-webkit-scrollbar {
  display: none;
  width: 0 !important;
  height: 0;
}
</style>
