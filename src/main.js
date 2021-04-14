// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {request} from './network/request.js'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import VueCookies from 'vue-cookies'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import animate from 'animate.css'
import '../node_modules/swiper/dist/css/swiper.css'
import '../src/assets/icons/iconfont.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueAxios from 'vue-axios'
import axios from 'axios';

Vue.use(VueAxios,axios)
Vue.use(Vant);
//将axios挂载到Vue原型
Vue.prototype.$request = request;
Vue.prototype.$cookie = VueCookies
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(ViewUI);
Vue.use(VueCookies)
Vue.use(animate)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
