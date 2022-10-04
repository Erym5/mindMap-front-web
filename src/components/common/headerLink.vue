<template>
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
</template>

<script>
export default {
  name: "headerLink",
  methods:{
    handleCommand(command) {
      this.$router.push({
        path:command
    })
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

.el-icon-arrow-down {
  font-size: 12px;
}
.user-logo {
  width: 25px;
  height: 25px;
}
</style>
