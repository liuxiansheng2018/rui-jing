<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="9"
        ><div class="grid-content bg-purple grid-height">
          <h3 class="bt">今日目标</h3>
          <ul class="today">
            <li v-for="(item, index) in 3" :key="index">
              <img src="@/assets/img/MyWord/web1.png" alt="" /><span
                >已完成</span
              >
              <p>
                <el-progress
                  :text-inside="true"
                  :stroke-width="15"
                  :percentage="50"
                />
              </p>
              <span>查看详情</span>
            </li>
          </ul>
        </div></el-col
      >
      <el-col :span="9"
        ><div class="grid-content bg-purple grid-height">
          <h3 class="bt">加急工作</h3>
          <ul class="Urgent">
            <li v-for="(item, index) in 3" :key="index">
              <img src="@/assets/img/MyWord/jiaji.png" alt="" />
              <p>食品供应来源的汇总及上次工作详情.....</p>
              <span>查看详情</span>
            </li>
          </ul>
        </div></el-col
      >
      <el-col :span="6"
        ><div class="grid-content bg-purple grid-height">
          <h3 class="bt">工作便签</h3>
          <ul class="Urgent">
            <li v-for="(item, index) in 3" :key="index">
              <img src="@/assets/img/MyWord/jiaji.png" alt="" />
              <p>食品供应来源的汇总及上次工作详情.....</p>
            </li>
          </ul>
        </div></el-col
      >
    </el-row>

    <el-row :gutter="20">
      <el-col :span="18"
        ><div class="grid-content bg-purple grid-height2">
          <h3 class="bt">本周工作</h3>
          <ul class="Theword">
            <li v-for="(item, index) in 7" :key="index">
              <img src="@/assets/img/MyWord/jiaji.png" alt="" />
              <p>食品供应来源的汇总及上次工作详情.....</p>
              <span>已完成</span>
              <span>查看详情</span>
            </li>
          </ul>
          <el-pagination
            layout="prev, pager, next"
            :total="100"
            style="margin-top: 10px"
            prev-text="上一页"
            next-text="下一页"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :background="true"
            v-model:currentPage="currentPage1"
            :page-size="10"
          >
          </el-pagination></div
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple grid-height2">
          <h3 class="bt">临时工作</h3>
          <ul class="temWord">
            <li v-for="(item, index) in 6" :key="index">
              <img src="@/assets/img/MyWord/dian.png" alt="" />
              <p>上级指示会议传达的相关情况 分享和.....</p>
              <span>2021.12.09</span>
            </li>
          </ul>
        </div></el-col
      >
    </el-row>
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
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  .grid-content {
    border-radius: 4px;
    padding: 5px;
  }
  .bg-purple {
    background: #fff;
  }
  .grid-height {
    height: 200px;
  }
  .grid-height2 {
    height: 400px;
  }
}
h3 {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: left;
}
.today {
  li {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    margin-top: 30px;
    img {
      height: 20px;
    }
    p {
      width: 230px;
      height: 15px;
      font-family: Microsoft YaHei;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    span {
      font-size: 14px;
      font-weight: 600;
      font-family: Microsoft YaHei;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.Urgent {
  li {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    margin-top: 30px;
  }
  span,
  p {
    font-size: 14px;
    font-weight: 500;
    font-family: Microsoft YaHei;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  img {
    width: 50px;
    height: 20px;
  }
}
.Theword {
  li {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    margin-top: 25px;
    span,
    p {
      font-size: 14px;
      font-weight: 500;
      font-family: Microsoft YaHei;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    img {
      width: 50px;
      height: 20px;
    }
  }
}
.temWord {
  li {
    display: flex;
    padding-left: 20px;
    position: relative;
    align-items: center;
    margin-top: 20px;
    img {
      width: 15px;
      height: 15px;
      margin-right: 12px;
    }
    p {
      font-size: 16px;
      text-align: left;
      font-weight: 600;
    }
    span {
      position: absolute;
      bottom: 0;
      right: 5px;
    }
  }
}
</style>
