import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// 导入Config
import { AppConf } from './config/config';
window.AppConf = AppConf;
// 导入Lodash
import 'lodash';
// 注册路由
Vue.use(VueRouter);
// 注册Resource
Vue.use(VueResource);

// 创建根APP
import appHeader from './components/AppHeader';
import appSidebar from './components/AppSidebar';
let App = Vue.extend({
  components: {
    appHeader,
    appSidebar
  }
});

//启动应用
import { Route } from './routes/Route';
Route.start(App, VueRouter, document.querySelector('body'));