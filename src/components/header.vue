<template lang="html">
  <div>

    <header>
      <ul id="mind_tab">
        <li :class="{selected:switchShow.showEditMenu}">
          <a href="javascript:void(0)" class="btn-showEditMenu" @click="showMenu">思维导图</a>
        </li>
        <li :class="{selected:switchShow.showViewMenu}">
          <a href="javascript:void(0)" class="btn-showViewMenu" @click="showMenu">外观样式</a>
        </li>
        <li :class="{selected:switchShow.showSaveMenu}">
          <a href="javascript:void(0)" class="btn-showSaveMenu" @click="showMenu">文件管理</a>
        </li>
      </ul>
      <div id="mind_tab-content">
        <div class="mind-tab-panel" v-show="switchShow.showEditMenu">
          <edit-menu></edit-menu>
        </div>
        <div class="mind-tab-panel" v-show="switchShow.showViewMenu">
          <view-menu></view-menu>
        </div>
        <div class="mind-tab-panel" v-show="switchShow.showSaveMenu">
          <file-menu/>
        </div>
      </div>
    </header>
  </div>

</template>

<script>
  import editMenu from './menu/edit/editMenu'
  import viewMenu from './menu/edit/viewMenu'
  import fileMenu from "./menu/edit/fileMenu";

  export default {
    name: 'headerVue',
    data() {
      return {
        switchShow: {
          showEditMenu: true,
          showViewMenu: false,
          showSaveMenu: false,
        }
      }
    },
    components: {
      fileMenu,
      editMenu,
      viewMenu
    },
    methods: {
      showMenu: function (e) {
        for (var variable in this.switchShow) {
          if (this.switchShow.hasOwnProperty(variable)) {
            this.switchShow[variable] = false
          }
        }
        this['switchShow'][e.target.className.replace('btn-', '')] = true
      }
    }
  }
</script>

<style lang="scss">
  @import "../style/header";
</style>
