<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="24"
        ><div class="grid-content bg-purple grid-height">
          <h4>请假管理</h4>
          <form action="">
            <div class="leave-1">
              <span class="leaveprp"
                ><label for="">请假人:</label
                ><input type="text" name="" id="" value="张伟"
              /></span>
              <span class="leaveTime">
                <label for="">请假时间:</label>
                <div class="block">
                  <el-date-picker
                    v-model="value1"
                    type="datetimerange"
                    range-separator="To"
                    start-placeholder="Start date"
                    end-placeholder="End date"
                  >
                  </el-date-picker>
                </div>
              </span>
            </div>
            <div class="leave-2">
              <label for="">请假事:</label>
              <textarea cols="3" rows="">内容</textarea>
            </div>
            <button type="submit">申请</button>
          </form>
        </div></el-col
      >
    </el-row>

    <el-row :gutter="20">
      <el-col :span="24"
        ><div class="grid-content bg-purple grid-height">
          <h4>请假记录</h4>
          <div class="record">
            <table border="1">
              <tr>
                <td>姓名</td>
                <td>请假事由</td>
                <td>请假时间</td>
                <td>审批</td>
                <td>销假</td>
                <td>申请时间</td>
              </tr>
              <tr v-for="(item, index) in 4" :key="index">
                <td>张伟</td>
                <td>处理个人事务</td>
                <td>2021.12.9-2021.12.10</td>
                <td>已审批</td>
                <td>代销毁</td>
                <td>2021.12.08</td>
              </tr>
            </table>
            <el-pagination background layout="prev, pager, next" :total="100">
            </el-pagination>
          </div></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  setup() {
    const state = reactive({
      shortcuts: [
        {
          text: "Last week",
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            return [start, end];
          },
        },
        {
          text: "Last month",
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            return [start, end];
          },
        },
        {
          text: "Last 3 months",
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            return [start, end];
          },
        },
      ],
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: "",
    });

    return toRefs(state);
  },
});
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.bg-purple {
  background: #fff;
}
.grid-content {
  border-radius: 4px;
}
.grid-height {
  height: 300px;
}
h4 {
  font-size: 16px;
  text-align: left;
}
form {
  margin-top: 40px;
  padding: 0 50px;
  .leave-1 {
    display: flex;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    font-size: 14px;
    .leaveTime {
      display: flex;
      margin-right: 50px;
    }
    span {
      align-items: center;
      label {
        margin: 0 20px;
      }
    }
  }
  .leave-2 {
    font-size: 14px;
    display: flex;
    padding-left: 50px;
    margin-top: 20px;
    textarea {
      width: 90%;
      height: 100px;
    }
    label {
      margin: 0 20px;
    }
  }
  button {
    width: 100px;
    height: 25px;
    background-color: #0379fd;
    color: #fff;
    border: none;
    font-size: 16px;
    margin-top: 20px;
  }
}
.record {
  width: 100%;
  height: 250px;
  padding: 20px 100px 0;
  // margin-top: 30px;
  td {
    padding: 15px 60px;
  }
}
.el-pagination {
  margin-top: 5px;
}
</style>
