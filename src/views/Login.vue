<template>
  <div id="app">
    <div class="container">
      <div class="close">
        <span class="iconfont iconicon-test"></span>
      </div>
      <div class="logo">
        <span class="iconfont iconnew"></span>
      </div>
      <div class="inputs">
        <!-- 输入用户名 -->
        <myinput placeholder="请输入用户名" :value="userobj.username" :rules='/^1\d{10}$/' @input='handleruserinput'></myinput>

        <!--输入密码 -->
        <myinput 
        placeholder="密码" 
        :value="userobj.password" 
        type="password"
        v-model="userobj.password"
        
        ></myinput>
      </div>
      <p class="tips">
        没有账号？
        <a href="#/register" class>去注册</a>
      </p>
      <hmbutton text="登陆" @click="logIn"></hmbutton>
    </div>
  </div>
</template>

<script>
import hmbutton from "@/components/hm_button.vue";
import myinput from "@/components/myinput.vue";
import { login } from '@/api/user.js'
export default {
  data() {
    return {
      userobj: {
        username: "111",
        password: "123"
      }
    };
  },
  components: {
    hmbutton,
    myinput
  },
  methods: {
        logIn () {
      login(this.userobj)
        .then(res => {
          console.log(res)
          if (res.data.message === '登录成功') {
            // 将当前的token存储，本地存储
            localStorage.setItem('heima_40_token', res.data.data.token)
            // 页面跳转
            this.$router.push({ path: `/personal/${res.data.data.user.id}` })
          } else {
            this.$toast.fail(res.data.message)
          }
        })
        .catch(err => {
          console.log(err)
          this.$toast.fail('登陆失败，请重试')
        })
    },
    handleruserinput(data){
      this.userobj.username = data
    }
  }
};
</script>

<style lang="less">
.container {
  padding: 20px;
}

.close {
  span {
    font-size: 27 / 360 * 100vw;
  }
}

.logo {
  display: flex;
  justify-content: center;

  span {
    display: block;
    font-size: 126 / 360 * 100vw;
    color: #d81e06;
  }
}

.inputs {
  input {
    margin-bottom: 20px;
  }
}

.tips {
  text-align: right;
  margin-bottom: 20px;

  a {
    color: #3385ff;
  }
}
</style>