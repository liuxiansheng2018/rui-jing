<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <div class="set-text">设置</div>
          <div class="set-search">
            <img src="../../assets/img/customer/search.png" alt="" />
            <input type="text" placeholder="搜索设置" />
          </div>
          <ul class="set-list">
            <li>
              <img src="../../assets/img/setting/theme.png" alt="" />
              <span>主题</span>
            </li>
            <li>
              <img src="../../assets/img/setting/person.png" alt="" />
              <span>个人隐私</span>
            </li>
            <li>
              <img src="../../assets/img/setting/safe.png" alt="" />
              <span>个人安全</span>
            </li>
            <li>
              <img src="../../assets/img/setting/load.png" alt="" />
              <span>下载</span>
            </li>
            <li>
              <img src="../../assets/img/setting/night.png" alt="" />
              <span>夜间模式</span>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="grid-content bg-purple user">
          <div class="user-setting">
            <div>
              <img src="../../assets/img/setting/touxiang.png" alt="" />
            </div>
            <div>
              <h4>用户配置1</h4>
              <p>备份浏览数据，在所有设备上查看收藏内容、密码、历史 记录等。</p>
              <span>登录以同步数据</span>
            </div>
          </div>
          <div class="history">
            <p>历史记录</p>
            <ul>
              <li v-for="i in 4" :key="i">
                <img src="../../assets/img/setting/fire.png" alt="" />
                <span>https://www.zcool.com.cn/search/content?wordF</span>
                <span>[2110-2-11]</span>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
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
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #fff;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 620px;
  position: relative;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.user {
  height: 580px;
  background: transparent;
  .user-setting {
    height: 40%;
    margin-bottom: 20px;
    width: 100%;
    background: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 40px 0;
    div {
      display: flex;
      flex-direction: column;
      img {
        width: 100px;
        height: 100px;
      }
      h4 {
        text-align: left;
        font-size: 16px;
        margin-bottom: 20px;
      }
      p {
        font-size: 14px;
      }
      span {
        display: inline-block;
        width: 100px;
        height: 30px;
        background: #0379fd;
        color: #fff;
        line-height: 30px;
        border-radius: 5px;
        margin: 5% 0 0 70%;
        cursor: pointer;
      }
    }
  }
  .history {
    height: 56%;
    width: 100%;
    background: #fff;
    border-radius: 5px;
    padding: 8px;
    p {
      font-size: 16px;
      text-align: left;
    }
    ul {
      width: 100%;
      height: 80%;
      margin-top: 5%;
      display: flex;
      flex-direction: column;
      align-items: center;
      li {
        width: 60%;
        height: 15%;
        display: flex;
        justify-content: space-around;
        img {
          width: 20px;
          height: 20px;
        }
        span {
          font-size: 14px;
        }
        span:nth-of-type(2) {
          color: #999999;
        }
      }
    }
  }
}
.set-text {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  text-align: left;
}
.set-search {
  display: flex;
  align-items: center;
  width: 400px;
  height: 40px;
  border: 2px solid #1187ff;
  border-radius: 20px;
  position: absolute;
  top: 10%;
  left: 10%;
  img {
    width: 15px;
    height: 15px;
    margin: 5px 5px;
  }
  input {
    height: 26px;
    outline: none;
    width: 240px;
    margin-left: 5px;
    border: none;
  }
}
.set-list {
  height: 300px;
  position: absolute;
  top: 30%;
  left: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  li {
    width: 100px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  img {
    width: 20px;
    height: 20px;
  }
  span {
    display: inline-block;
    width: 60px;
    height: 20px;
    font-size: 14px;
  }
}
</style>
