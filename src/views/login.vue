<template>
  <div>
    <el-card class="login-form-layout">
      <el-form autoComplete="on"
               :model="loginForm"
               :rules="loginRules"
               ref="loginForm"
               label-position="left">
        <div style="text-align: center">
          <svg-icon icon-class="login-mall" style="width: 56px;height: 56px;color: #409EFF"></svg-icon>
        </div>
        <h2 class="login-title color-main">mall-admin-web</h2>
        <el-form-item prop="name">
          <el-input name="name"
                    type="text"
                    v-model="loginForm.name"
                    autoComplete="on"
                    placeholder="admin">
          <span slot="prefix">
            <svg-icon icon-class="user" class="color-main"></svg-icon>
          </span>
          </el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input name="pwd"
                    :type="pwdType"
                    @keyup.enter.native="handleLogin"
                    v-model="loginForm.pwd"
                    autoComplete="on"
                    placeholder="admin">
          <span slot="prefix">
            <svg-icon icon-class="pwd" class="color-main"></svg-icon>
          </span>
            <span slot="suffix" @click="showPwd">
            <svg-icon icon-class="eye" class="color-main"></svg-icon>
          </span>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 60px;text-align: center">
          <el-button style="width: 45%" type="primary" :loading="loading" @click.native.prevent="handleLogin">
            登录
          </el-button>

        </el-form-item>
      </el-form>
    </el-card>

  </div>
</template>

<script>

import {login} from "../api/user";
import {setToken, setUid} from "../utils/auth";
import {Message} from "element-ui";

export default {
  name: 'login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value.length < 3) {
        callback(new Error('密码不能小于3位'))
      } else {
        callback()
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value.length < 3) {
        callback(new Error('密码不能小于3位'))
      } else {
        callback()
      }
    };
    return {
      loginForm: {
        name: '',
        pwd: '',
      },
      loginRules: {
        name: [{required: true, trigger: 'blur', validator: validateUsername}],
        pwd: [{required: true, trigger: 'blur', validator: validatePass}]
      },
      loading: false,
      pwdType: 'pwd',
      dialogVisible:false,
      supportDialogVisible:false
    }
  },
  created() {
    if(this.loginForm.name === undefined||this.loginForm.name==null||this.loginForm.name===''){
      this.loginForm.name = 'admin';
    }
    if(this.loginForm.pwd === undefined||this.loginForm.pwd==null){
      this.loginForm.pwd = '';
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'pwd') {
        this.pwdType = ''
      } else {
        this.pwdType = 'pwd'
      }
    },
    handleLogin() {
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      //     // let isSupport = getSupport();
      //     // if(isSupport===undefined||isSupport==null){
      //     //   this.dialogVisible =true;
      //     //   return;
      //     // }
      //     this.loading = true;
      //     this.$store.dispatch('Login', this.loginForm).then(() => {
      //       this.loading = false;
      //       setCookie("name",this.loginForm.name,15);
      //       setCookie("pwd",this.loginForm.pwd,15);
      //       this.$router.push({path: '/'})
      //     }).catch(() => {
      //       this.loading = false
      //     })
      //   } else {
      //     console.log('参数验证不合法！');
      //     return false
      //   }
      // })
      login(this.loginForm).then(res => {
        console.log(res)

        setToken(res.data.token);
        setUid(res.data.uid)
      });
      this.$router.push({ path: "/home" });
    },
  }
}
</script>

<style scoped>
.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
  border-top: 10px solid #409EFF;
}

.login-title {
  text-align: center;
}

.login-center-layout {
  background: #409EFF;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-top: 200px;
}
</style>
