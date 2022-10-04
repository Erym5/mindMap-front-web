<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <el-container>
      <el-aside width="300px" class="el-aside">
        <Nav></Nav>
      </el-aside>
        <el-main>
          <headerLink></headerLink>
          <div style="overflow: hidden" class="search">
            <el-row >
              <el-col :span="4">&nbsp</el-col>
              <el-col :span="14">
                <input
                  v-model="keyword"
                  class="search-input"
                  type="text"
                  placeholder="请输入关键字"
                  maxlength="20"
                  width="100px"
                  v-on:keyup.enter="searchByK">
              </el-col>
              <el-col :span="2">
                <el-button type="primary" icon="el-icon-search" @click="searchByK()">搜索</el-button>
              </el-col>
              <el-col :span="1">
                &nbsp
              </el-col>
              <el-col :span="3">
                <a href="https://book.douban.com/" target="_blank">豆瓣发现更多</a>
              </el-col>
            </el-row>
            <el-row v-for="(item, index) in books.slice (0, 4)" :key="index" class="bookList">
              <el-col :span="2">&nbsp</el-col>
              <el-col :span="3">
                <a href="javascript:void(0)" @click="bookDetail(item.id)">
                  <el-image style="width: 100px; height: 100px" :src="item.picUrl" class="demonstration"/>
                </a>
              </el-col>
              <el-col :span="13">
                <span style="" class="demonstration">
                  <br>
                  <a href="javascript:void(0)" @click="bookDetail(item.id)">{{ item.bookName }}</a>
                  <br><br>
                  <p>{{item.authorName}}</p>
                </span>
              </el-col>
              <el-col :span="6"><el-button class="demonstration" @click="bookDetail(item.id)">转存</el-button></el-col>
              <el-col :span="24"><br></el-col>
            </el-row>
            <!--        v-on:keyup.enter="searchByK"-->
            <!--        v-model="keyword">-->

          </div>
          <div id="test" style="display: none"></div>
        </el-main>
      </el-container>
    <div >

<!--      <el-image style="width: 100px; height: 100px; float:left" :src="url" />-->
    </div>
  </div>
</template>

<script>
import headerLink from "../components/common/headerLink";
import Nav from "../components/common/Nav"
import axios from "axios";
import { findBookByText } from "@/api/book"
import {getMaps, getMap, updateMap, mindMapSave, mindMapCreate} from "@/api/mindMap"
import {Message} from "element-ui";
// import Editor from "../script/editor";
export default {
  name: "search",
  components:{
    Nav,
    headerLink,
  },
  data() {
    return{
      keyword: "",
      books: [],
      jsonOfMap: [],
      jsonOfDetail: [],
    }
  },
  methods:{
    searchByK() {
      let that = this
      findBookByText(this.keyword).then((res) => {
        that.books = JSON.parse(JSON.stringify(res.data))
      })
    },
    bookDetail(bookId) {
      const that = this
      mindMapCreate(bookId).then((res) => {
        that.jsonOfMap = JSON.stringify(res.data)
        console.log(that.jsonOfMap)
        that.jsonOfMap = JSON.parse(that.jsonOfMap)
        console.log(that.jsonOfMap)
      })
      setTimeout(() => {
        this.$set(this.jsonOfMap.root.data, "id", (+new Date() * 1e6 + Math.floor(Math.random() * 1e6)).toString(36))
        console.log(this.jsonOfMap)
        mindMapSave(this.jsonOfMap)
        console.log(this.jsonOfMap)
        Message.success("转存完成")
      }, 1000)
      },
  },
  mounted() {

  }
}
</script>

<style>
.bookList{
  position: relative;
  top: 30px;
  /*left: -50px*/
}
.search{
  position: relative;
  top: 90px;
  /*left: 200px*/
}
.search-input{
  width: 98%;
  height:35px;
}

</style>
