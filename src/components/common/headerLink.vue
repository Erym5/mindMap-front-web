<template>
  <div>
    <div class="user">
      <el-button @click="login">登录</el-button>
      <el-button @click="logout">登出</el-button>
    </div>

  <el-dropdown class="header-link" @command="handleCommand">
    <span class="el-dropdown-link">
      <img class="user-logo"
           src="~@/assets/img/userLogo.png"
           alt=""
      >
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="/home">首页</el-dropdown-item>
      <el-dropdown-item command="/search">搜索</el-dropdown-item>
      <el-dropdown-item command="/edit">工具台</el-dropdown-item>
      <el-dropdown-item command="/bookshelf">藏书</el-dropdown-item>
      <el-dropdown-item command="/find">发现</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
  </div>
</template>

<script>
import {removeToken, removeUid} from "../../utils/auth";
import {Message} from "element-ui";

export default {
  name: "headerLink",
  methods: {
    handleCommand(command) {
      this.$router.push({
        path: command
      })
    },
    login() {
      this.$router.push({
        path: "/login"
      })
    },
    logout(){
      removeToken();
      removeUid();
      Message.info("账户已退出")
    }
  }
}

</script>

<style lang="less" scoped>
.header-link{
  //cursor: pointer;
  color: #409EFF;
  display: flex;
  //align-items: center;
  position: fixed;
  right: 0px;
  top: 0px;
}
.user{
  display: flex;
  //align-items: center;
  position: fixed;
  right: 100px;
  top: 0px;
}

.el-icon-arrow-down {
  font-size: 12px;
}
.user-logo {
  width: 25px;
  height: 25px;
}
</style>
