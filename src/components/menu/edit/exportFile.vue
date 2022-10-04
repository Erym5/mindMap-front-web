<template>
  <div class="base-btn">
    <button @click="exportHandle(0)" class="base-btn" style="float:right;">导出</button>
  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
export default {
  name: "exportFile",
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      'minder': 'getMinder',
    }),
  },
  methods: {
    exportHandle() {
      console.log("导出")
      let that = this;

      that.minder.exportData('json').then(content => {
        // console.log(content)
        let contentJson = JSON.parse(content)
        let uri = 'data:application/json;charset=utf-8,' + encodeURIComponent(content)
        // console.log(uri)
        let element = document.createElement('a');
        element.setAttribute('href', uri)
        let filename = contentJson["root"]["data"]["text"] + '.km';
        console.log(filename)
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
      });
    }
  }
}

</script>

<style scoped>

</style>
