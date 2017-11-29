import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import demo from '@/components/demo'
import top from '@/components/top.vue'
import account from '@/components/account/account_nav.vue'

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
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/account',
      name: 'account',
      component: account
    }
  ]
})