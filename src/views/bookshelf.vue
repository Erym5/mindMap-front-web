<template>
  <div>
    <el-container>
      <el-aside width="300px">
        <Nav></Nav>
      </el-aside>
      <el-container>
        <el-header>
          <headerLink></headerLink>
          <el-row class="heading">
            <el-col :span="1">&nbsp</el-col>
            <el-col :span="23">
              <h3>我的书架</h3>
            </el-col>
          </el-row>
        </el-header>

        <el-main>
          <el-row v-for="(item, index) in dataShow" :key="index" class="mapList">
            <el-col :span="3">&nbsp</el-col>

            <el-col :span="15">
              <a href="javascript:void(0)" @click="mapDetail(item)">{{ item.title }}</a>
            </el-col>
            <el-col :span="6"><el-button class="demonstration" @click="deleteMap(item.mapId)">删除</el-button></el-col>
            <el-col :span="24"><br></el-col>
          </el-row>
          <el-row class="pageControl">
            <input type="button" value="首页" @click="firstPage">
            <input type="button" value="上一页" @click="prevPage">
            <input type="button" value="下一页" @click="nextPage">
            <input type="button" value="尾页" @click="lastPage">
          </el-row>
        </el-main>
      </el-container>
    </el-container>
<!--    <div>-->
<!--      <span>我的书架</span>-->
<!--      create document-->
<!--    </div>-->
  </div>
</template>

<script>
import headerLink from "../components/common/headerLink";
import Nav from "../components/common/Nav";
import event from "../utils/event";
import {getMaps, deleteMapById} from "../api/mindMap";

export default {
  name: "bookshelf",
  data() {
    return {
      data: [],
      // 所有页面的数据
      totalPage: [],
      // 每页显示数量
      pageSize: 8,
      // 共几页
      pageNum: 0,
      // 当前显示的数据
      dataShow: "",
      // 默认当前显示第一页
      currentPage: 0
    }
  },
  components:{
    headerLink,
    Nav
  },
  methods:{
    mapDetail(item) {
      this.$router.push({ path: "/edit/" + item.mapId });
    },
    nextPage() {
      if (this.currentPage === this.pageNum - 1) return ;
      this.dataShow = this.totalPage[++this.currentPage];
    },
    // 上一页
    prevPage() {
      if (this.currentPage === 0) return ;
      this.dataShow = this.totalPage[--this.currentPage];
    },
    firstPage() {
      if (this.currentPage === 0) return ;
      this.dataShow = this.totalPage[0];
    },
    lastPage() {
      if (this.currentPage === 0) return ;
      this.dataShow = this.totalPage[this.pageNum];
    },
    deleteMap(id) {
      deleteMapById(id).then(this.getData)
    },
    getData() {
      getMaps().then((res) => {
        this.data = res.data

        this.pageNum = Math.ceil(this.data.length / this.pageSize) || 1;
        for (let i = 0; i < this.pageNum; i++) {
          //分组数据
          this.totalPage[i] = this.data.slice(this.pageSize * i, this.pageSize * (i + 1))
          console.log(this.totalPage[i])
        }
        // 获取到数据后显示第一页内容
        this.dataShow = this.totalPage[this.currentPage];
      })
    },
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped>
.heading{
  position: relative;
  top: 20px;
}
.mapList{
  position: relative;
  top: 30px;
}
.pageControl{
  position: relative;
  top: 30px;
  left: 350px;
}
</style>
