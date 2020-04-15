// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './app';
import routes from './routes';
import storeOption from './store/index.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import exception from 'helper/exception.js';
import ncadminCore from "@danieldx/ncadmin-core";
import 'ace-builds/src-min-noconflict/ace.js';

import config from './config.js';
import common from './helper/common.js';
import jurgeLogin from "./helper/login.js";
Vue.prototype.$config = config;
Vue.prototype.$common = common;

// 判断是否登录
jurgeLogin(config);

// 扩展表单控件

// 扩展表单验证规则

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(ElementUI);

window.Vue = Vue;

Vue.use(ncadminCore, {
  ncformExtComponents: {
    // ncTimeRange,
  }, // 扩展控件
  ncformExtRules: [
    // { ncAjax: ncAjaxRule },
  ] // 扩展规则
});


// 创建一个路由对象用于管理页面的路由
const router = new VueRouter({
  mode: 'hash',
  routes: routes
});

// 创建一个 store 对象用于管理应用状态
const store = new Vuex.Store(storeOption);

Vue.use(exception, { store });

window.__lendApp__ = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
