<template>
  <div class="selection-group">
    <i class="el-icon-picture-outline" style="font-size: 23px;cursor: pointer;" @click="openModal"></i>
    <el-dropdown trigger="click" @command="handleLinkCommand">
  <span class="el-dropdown-link">
    图片<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
      <el-dropdown-menu slot="dropdown" class="selection-dropdown-list">
        <el-dropdown-item command="add">插入图片</el-dropdown-item>
        <el-dropdown-item command="remove">移除已有图片</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dialog title="图片" :visible.sync="visible" width="50%">

      <el-form
        method = "post"
        action = "http://localhost:4000/file/upload"
        enctype = "multipart/form-data"
        ref="form"
        label-position="right"
        :rules="rules"
        label-width="100px"
        :model="formData"
        target="frameName"
      >
<!--        <input type = "file" name = "file">-->
<!--        <input type = "submit" value ="提交">-->
        <input  type="file" name="upload-image" id="upload-image"
                accept=".jpg,.JPG,jpeg,JPEG,.png,.PNG,.gif,.GIF"
                @change="uploadImage($event)" />
        <img :src="formData.url" class="img-avatar">
        <el-form-item label="提示文本" prop="title">
          <el-input v-model="formData.title" placeholder="必填：鼠标在连接上悬停时提示文本" />
        </el-form-item>
      </el-form>
      <iframe src="" frameborder="0" name="frameName"></iframe>

      <div slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
import { uploadImg } from "../../../api/resource";

export default {
  name: 'imgUtil',
  data () {
    return {
      reslove: null,
      reject: null,
      visible: false,
      formData: {
        // url: '',
        // title: ''
      },
      rules: {
        url: [
          { required: true, trigger: 'blur' }
        ],
        title: [
          {message: '请输入标题', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters({
      'minder': 'getMinder',
    }),
  },
  methods: {
    openModal (options) {
      this.visible = true
      this.formData = {
        ...options
      }
      return new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
    },
    handleLinkCommand (command) {
      switch (command) {
        case 'add':
          this.addLinkModal()
          break
        case 'remove':
          this.removeHyperLick()
          break
        default:
          break
      }
    },
    uploadImage (e) {
      let file = e.target.files[0]
      let form = new FormData();

      form.append("file", file);
      uploadImg(form).then((res) => {
        this.formData.url = "http://localhost:4000/image?fileName=" + res.data
        console.log(res.data)
      })
    },
    addLinkModal () {
      this.openModal()
    },
    removeHyperLick () {
      this.minder.execCommand('Image', null)
    },
    handleSubmit () {
      console.log(this.formData.url)
      console.log(this.formData.title)
      this.minder.execCommand("Image",this.formData.url,this.formData.title)
      this.minder.execCommand("Image",this.formData.url,this.formData.title)
      // this.resolve({
      //   url: this.formData.url,
      //   title: this.formData.title
      // })
      // this.minder.execCommand('img', this.formData.url, this.formData.title)
      this.visible = false
      this.initData()
    },
    handleCancel () {
      // 重置填写内容
      this.initData()
      this.visible = false
    },
    handleClose (done) {
      // 重置填写内容
      this.initData()
      done()
    },
    initData () {
      this.formData = {
        url: '',
        title: ''
      }
    }
  }
}
</script>

<style scoped>
</style>
