<template>
  <div>
    <el-container>
      <el-aside width="300px">
        <Nav></Nav>
      </el-aside>
      <el-container>
        <el-header>
          <headerLink></headerLink>
          <a href="https://github.com/Erym5/mindMap" style="font-size: larger;" target="_blank">项目地址</a>
        </el-header>

        <el-main>
          <div id="backgroundImg"></div>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import headerLink from "../components/common/headerLink";
import Nav from '../components/common/Nav';
export default {
name: "home",
  components:{
    headerLink,
    Nav
  }
}
</script>

<style scoped>
#backgroundImg{
  background:url("../assets/img/home.jpeg");
  width:100%;
  height:100%;
  position:relative;
  background-size:100% 100%;
}
</style>
