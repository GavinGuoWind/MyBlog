// 不作为Main组件的子页面展示的页面单独写，如下
// export const page404 = {
//   path: '/*',
//   name: 'error_404',
//   meta: {title: '404-页面不存在'},
//   component: resolve => {
//     require(['./pages/error_page/404.vue'], resolve);
//   }
// };

export const index = {
  path: '/',
  name: 'index',
  meta: {title: '首页'},
  redirect: '/list',
  component: resolve => {
    require(['./pages/main.vue'], resolve)
  },
  children: [{
    path: '/detail/*',
    name: 'detail',
    meta: {title: '详细內容'},
    component: resolve => {
      require(['./pages/detail/detail.vue'], resolve)
    }
  }, {
    path: '/list',
    name: 'list',
    meta: {title: '文章列表'},
    component: resolve => {
      require(['./pages/list/list.vue'], resolve)
    }
  }]
}

// export const content = {
//   path: '/content/*',
//   name: 'content',
//   meta: {title: '內容'},
//   component: resolve => {
//     require(['./pages/mainComponents/content.vue'], resolve);
//   }
// };

// 所有上面定义的路由都要写在下面的routers里
export const routers = [index]
