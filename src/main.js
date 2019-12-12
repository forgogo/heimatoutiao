import Vue from 'vue';
//引入vant
import 'vant/lib/index.css';

//引入默认样式
import '@/style/reset.css';

//引入路由模块
import router from '@/router/index.js'

//引入组件
import { Toast } from 'vant'
import { Button } from 'vant'
import App from './App.vue'
Vue.config.productionTip = false

//把Vant挂载到Vue上
// 将会在Vue实例上挂载成员，以$开头，如下面的use,将来可以this.$toast来使用
Vue.use(Toast);
Vue.use(Button);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
