import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import allImg from '@/components/view/allImg'
import catalog from '@/components/view/catalog'
import battleEl from '@/components/view/battleEl'
import tradelayout from '@/components/view/tradelayout'
import lamp from '@/components/view/lamp'
import team from '@/components/view/team'
import cpoperate from '@/components/view/cpoPerate'
import adminWork from '@/components/view/adminWork'
import bscale from '@/components/view/bScale'
import capability from '@/components/view/capability'
import continued from '@/components/view/continued'
import growUp from '@/components/view/growUp'
import footprints from '@/components/view/footprints'
import rymx from '@/components/view/rymx'
import projectData from '@/components/view/projectData'
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
    },
    {
      path: '/lamp',
      name: 'lamp',
      component: lamp
    },
    {
      path: '/team',
      name: 'team',
      component: team
    },
    {
      path: '/cpoperate',
      name: 'cpoperate',
      component: cpoperate
    },
    {
      path: '/adminWork',
      name: 'adminWork',
      component: adminWork
    },
    {
      path: '/bscale',
      name: 'bscale',
      component: bscale
    },
    {
      path: '/capability',
      name: 'capability',
      component: capability
    },
    {
      path: '/continued',
      name: 'continued',
      component: continued
    },
    {
      path: '/growUp',
      name: 'growUp',
      component: growUp
    },
    {
      path: '/footprints',
      name: 'footprints',
      component: footprints
    },
    {
      path: '/rymx',
      name: 'rymx',
      component: rymx
    },
    {
      path: '/projectData',
      name: 'projectData',
      component: projectData
    } 
  ]
})
