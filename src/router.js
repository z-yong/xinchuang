import Vue from 'vue'
import Router from 'vue-router'
import shouye from './components/shouye.vue'
import win from './components/win.vue'
import core from './components/core.vue'
import about from './components/about.vue'
import phone from './components/phone.vue'
import details from './components/details'

import shouyeApp from './components-app/shouye'
import winApp from './components-app/win.vue'
import coreApp from './components-app/core.vue'
import aboutApp from './components-app/about.vue'
import phoneApp from './components-app/phone.vue'
import detailsApp from './components-app/details'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 默认
    {
      path: '',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'shouye',
      component: shouye
    },
    {
      path: '/win',
      name: 'win',
      component: win
    },
    {
      path: '/core',
      name: 'core',
      component: core
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/phone',
      name: 'phone',
      component: phone
    },
    {
      path: '/details/:id',
      name: 'details',
      component: details
    },
// app
    {
      path: '/indexapp',
      name: 'shouyeapp',
      component: shouyeApp
    },
    {
      path: '/winapp',
      name: 'winapp',
      component: winApp
    },

    {
      path: '/coreapp',
      name: 'coreapp',
      component: coreApp
    },
    {
      path: '/aboutapp',
      name: 'aboutapp',
      component: aboutApp
    },
    {
      path: '/phoneapp',
      name: 'phoneapp',
      component: phoneApp
    },
    {
      path: '/detailsapp/:id',
      name: 'detailsapp',
      component: detailsApp
    }
  ],































  // 每次跳转都是显示在顶部
  scrollBehavior: () =>{
      return {
        x: 0, y: 0
      }
  }
})
