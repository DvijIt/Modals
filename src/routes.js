// default
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// pages
import NotFound from '@/pages/404'
import Home from '@/pages/Home'
import Modals from '@/pages/Modals'
import Login from '@/pages/Login'


export default new Router({
  routes: [
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/modals',
      name: 'modals',
      component: Modals
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})