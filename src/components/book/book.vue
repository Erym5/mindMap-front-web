<div class="demo-image">
<div class="block" v-for="fit in fits" :key="fit">
  <span class="demonstration">{{ fit }}</span>
  <el-image
    style="width: 100px; height: 100px"
    :src="url"
    :fit="fit"></el-image>
</div>
</div>

<script>
export default {
  name: "book",
  data() {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  }
}
</script>
