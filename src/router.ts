import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import(/* webpackChunkName: "demo" */ './views/Demo.vue'),
      children: [{
        path: 'icon',
        name: 'icon',
        component: () => import(/* webpackChunkName: "cell" */ './views/DemoIcon.vue'),
      }, {
        path: 'button',
        name: 'button',
        component: () => import(/* webpackChunkName: "button" */ './views/DemoButton.vue'),
      }, {
        path: 'indexed',
        name: 'indexed',
        component: () => import(/* webpackChunkName: "indexed" */ './views/DemoIndexedList.vue'),
      }, {
        path: 'tabbar',
        name: 'tabbar',
        component: () => import(/* webpackChunkName: "tabbar" */ './views/DemoTabbar.vue'),
      }, {
        path: 'popup',
        name: 'popup',
        component: () => import(/* webpackChunkName: "popup" */ './views/DemoPopup.vue'),
      }, {
        path: 'cell',
        name: 'cell',
        component: () => import(/* webpackChunkName: "cell" */ './views/DemoCell.vue'),
      }, {
        path: 'tab',
        name: 'tab',
        component: () => import(/* webpackChunkName: "tab" */ './views/DemoTab.vue'),
      }],
    },
  ],
});
