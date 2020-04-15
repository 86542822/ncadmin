import demoDemoList from 'modules/demo/pages/demo-list.vue';
// <!-- Don't touch me - import demo -->

// 404 页面
import notFound from 'common/components/notfound.vue';

import welcomePage from 'common/components/welcome.vue';
// 模块页面


// 根目录
const rootPath = '';

// 页面路由
const routes = [
  // 默认首页
  { path: '', redirect: { name: 'welcome' } },

  // 欢迎页
  { path: '/welcome', component: welcomePage, name: 'welcome' },

  { path: '/demo/demo-list', component: demoDemoList, name: 'demo-demo-list' },
  // <!-- Don't touch me - export demo -->
  
  // <!-- Don't touch me - export modules -->

].map(route => {
  route.path = rootPath + route.path;
  return route;
});

// 404 页
routes.push({ path: '*', component: notFound, name: 'notfound' });

export default routes;
