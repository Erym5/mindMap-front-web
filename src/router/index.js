import Vue from 'vue';
import Router from 'vue-router';
// import edit from '../views/edit';
import home from '../views/home';
import search from "../views/search";
import bookshelf from "../views/bookshelf";
import find from "../views/find";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path:'/home',
      name:'home',
      component:home
    },
    {
      path:'/search',
      name:'search',
      component:search
    },
    {
      path:'/bookshelf',
      name:'bookshelf',
      component:bookshelf
    },
    {
      path:'/find',
      name:'find',
      component:find
    },
    {
      path: '/edit:id',
      name: 'editor',
      component: () => import('../views/edit')
    },
    {
      path: '/edit',
      name: 'editor',
      component: () => import('../views/edit')
    },
    {
      path: '/edit/:id',
      name: 'mindMap',
      component: () => import('../views/edit')
    },
  ]
});
