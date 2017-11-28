import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import demo from '@/components/demo'
import top from '@/components/top.vue'
import cell from '@/components/cell.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'top',
      component: top
    },
    {
      path: '/cell',
      name: 'cell',
      component: cell
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    }
  ]
})
