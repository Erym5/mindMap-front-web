<template>
  <el-col :span="24">
    <el-menu
      default-active="$route.path"
      router
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/home">
        <i class="el-icon-location"></i>
        首页
      </el-menu-item>
      <el-menu-item index="/search">
        <i class="el-icon-search"></i>
        搜索
      </el-menu-item>
      <el-menu-item index="/edit">
        <i class="el-icon-edit"></i>
        <span slot="title">工作台</span>
      </el-menu-item>
      <el-menu-item index="/bookshelf">
        <i class="el-icon-files"></i>
        <span slot="title">藏书</span>
      </el-menu-item>
      <el-menu-item index="/find">
        <i class="el-icon-aim"></i>
        发现
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

<script>
export default {
  name:"Nav",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style>
.el-menu-vertical-demo{
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
