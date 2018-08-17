import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import allImg from '@/components/view/allImg'
import catalog from '@/components/view/catalog'
import battleEl from '@/components/view/battleEl'
import tradelayout from '@/components/view/tradelayout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/allImg',
      name: 'allImg',
      component: allImg
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: catalog
    },
    {
      path: '/battleEl',
      name: 'battleEl',
      component: battleEl
    },
    {
      path: '/tradelayout',
      name: 'tradelayout',
      component: tradelayout
    }
  ]
})
