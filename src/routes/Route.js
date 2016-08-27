import Home from './../pages/Home';

let routeConfig = {
  '/': { component: Home }
};


/**
 * 启动项目（通过路由）
 */
let start = (App, VueRouter, el) => {
  let router = new VueRouter({ history: true });

  router.map(routeConfig);

  router.redirect({
    '*': '/'
  });

  router.start(App, el);
};

export const Route = {
  start: start
};