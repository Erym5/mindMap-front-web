<template>
  <div>
    <headerLink></headerLink>
    <editor></editor>
  </div>

</template>

<script>
import headerLink from "../components/common/headerLink";
import editor from '../components/editor';
import {getMap} from "../api/mindMap";

export default {
  name: "edit",
  provide() {
    return{
      id: this.id
    }
  },
  data() {
    return{
      id: this.$route.params.id
    }
  },
  components: {
    headerLink,
    editor
  },
  mounted() {
    // getMap(this.$route.params.id).then((res) => {
    //   console.log(this.$route.params.id)
    //   this.edit.json = res.data.content
    //   console.log(this.json)
    // })
  }
}
</script>

<style>

</style>
