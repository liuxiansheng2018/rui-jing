<template>
  <el-row class="tac">
    <el-col :span="12">
      <!-- <h5>Custom colors</h5> -->

      <el-menu
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        router="true"
        :unique-opened="true"
      >
        <!-- <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>首页</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">当日订单</el-menu-item>
            <el-menu-item index="1-2">客户数据</el-menu-item>
            <el-menu-item index="1-3">消息公告</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><location /></el-icon>
            <span>订单</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">订单预约</el-menu-item>
            <el-menu-item index="1-2">订单打印</el-menu-item>
            <el-menu-item index="1-3">订单详情</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><location /></el-icon>
            <span>商品管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">当日订单</el-menu-item>
            <el-menu-item index="1-2">客户数据</el-menu-item>
            <el-menu-item index="1-3">消息公告</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><location /></el-icon>
            <span>个人中心</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">我的工作</el-menu-item>
            <el-menu-item index="1-2">请假管理</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <el-icon><location /></el-icon>
            <span>客户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">会员中心</el-menu-item>
            <el-menu-item index="1-2">新增客户</el-menu-item>
            <el-menu-item index="1-3">客户挖掘</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="6">
          <template #title>
            <el-icon><location /></el-icon>
            <span>员工管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">当日订单</el-menu-item>
            <el-menu-item index="1-2">客户数据</el-menu-item>
            <el-menu-item index="1-3">消息公告</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="7">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">当日订单</el-menu-item>
            <el-menu-item index="1-2">客户数据</el-menu-item>
            <el-menu-item index="1-3">消息公告</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu> -->
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
                childName:"订单预约",
                childUrl:""
              },
              {
                childName:"订单打印",
                childUrl:""
              },
              {
                childName:"订单详情",
                childUrl:""
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
</style>
