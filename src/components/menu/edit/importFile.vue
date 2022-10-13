<template>
  <div class="base-btn">
    <button onclick="upload.click()" class="base-btn" style="float:right;">导入</button>
    <input  type="file" name="upload" id="upload"
            accept=".json,.km"
            @change="importHandle(0)"
            style="display: none;" />
  </div>

</template>

<script>
import {
  mapGetters
} from 'vuex'
export default {
  name: "importFile",
  data() {
    return {
      json: []
    };
  },
  computed: {
    ...mapGetters({
      'minder': 'getMinder',
    }),
  },
  methods: {
    importHandle(e) {
      console.log("导入")
      let file = document.querySelector('#upload').files[0]
      let reader=new FileReader();

      console.log(file)
      reader.onload = ((e) => {
        this.json = JSON.parse(e.target.result)
        console.log(JSON.parse(e.target.result))
        console.log(e.target.result)
        this.minder.importJson(this.json)
      });
      reader.readAsText(file,"utf8");//gbk编码
      console.log(this.json)
    }
  }
}

</script>

<style scoped>
.base-btn {
  display: inline-flex;
  cursor: pointer;
}
</style>
