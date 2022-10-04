<template>
  <div class="menu-container">
    <import-file></import-file>
    <save-file/>
    <export-file/>
  </div>
</template>

<script>
import ImportFile from "./importFile";
import SaveFile from "./saveFile";
import ExportFile from "./exportFile";
export default {
  name: "fileMenu",
  components: {ExportFile, SaveFile, ImportFile}
}
</script>

<style scoped>

</style>
