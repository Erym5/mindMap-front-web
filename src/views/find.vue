<template>
  <div>
    <el-container>
      <el-aside width="300px">
        <Nav></Nav>
      </el-aside>
      <el-container>
        <el-header>
          <headerLink></headerLink>
        </el-header>

        <el-main>
          <div id="backgroundImg"></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
<!--  <waiting></waiting>-->
</template>

<script>
import headerLink from "../components/common/headerLink";
import Nav from "../components/common/Nav";
export default {
  name: "find",
  components:{
    headerLink,
    Nav
  }
}
</script>

<style scoped>
#backgroundImg{
  background:url("../assets/img/building.jpeg");
  width:100%;
  height:100%;
  position:relative;
  background-size:100% 100%;
}
</style>
