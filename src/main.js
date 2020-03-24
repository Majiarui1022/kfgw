// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

//jquery
import $ from 'jquery'

//公共CSS
import '../src/assets/style/public.scss'

//element ul
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

import 'swiper/dist/css/swiper.css';

/**@name接口请求 */
import conf from "./config/index.js";
import http from "./track/http.js";


//原型定义
Vue.prototype.$http = http
Vue.prototype.$conf = conf

//兼容IE
import "babel-polyfill"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
