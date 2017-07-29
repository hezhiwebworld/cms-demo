import Vue from 'vue'
import Router from 'vue-router'


import Pos from '@/components/page/Pos'
import Params from '@/components/params/params'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pos',
      component: Pos
    },
    {
      path: '/params/:newsId/:titleId',
      component: Params
    }
  ]
})
