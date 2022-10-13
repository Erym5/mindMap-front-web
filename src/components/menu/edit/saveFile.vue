<template>
  <div class="base-btn">
    <button @click="saveHandle()" class="base-btn" style="float:right;">保存</button>
  </div>
</template>

<script>

import {mapGetters} from "vuex";
import {mindMapSave, updateMap} from "../../../api/mindMap";
import {Message} from "element-ui";
export default {
  name: "saveFile",
  data() {
    return{
      // id: undefined
    }
  },
  inject: ['id'],
  computed: {
    ...mapGetters({
      'minder': 'getMinder',
    }),
  },
  methods: {
    saveHandle() {
      this.minder.exportData('json').then(content => {
        let json = JSON.parse(content)
        console.log(json)
        // console.log(this.id)
        if (this.id) {
          updateMap(json)
        } else {
          mindMapSave(json)
        }
        Message.success("保存完成")
      })
    },
  }
}

</script>

<style scoped>

</style>
