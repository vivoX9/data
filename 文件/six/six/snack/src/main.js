// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import store from "./store"
import axios from 'axios'
//import "../static/js/flexible.js"
//引入mock.js
require("../mock.js");
Vue.use(Vant);

Vue.prototype.http=axios;


// 引入VUe懒加载
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/img/github.png',
  loading: '../static/img/github.png',
  attempt: 1,
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
