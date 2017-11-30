import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import demo from '@/components/demo'
import top from '@/components/top.vue'
import account from '@/components/account/account_nav.vue'
import account_basic_info from '@/components/account_setting/account_basic_info.vue'
import account_qual_info from '@/components/account_setting/account_qual_info.vue'
import account_pwd_reset from '@/components/account_setting/account_pwd_reset.vue'

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
      component: account,
      redirect: { name: 'account_basic_info' },
      children: [
        {
          path: 'basic-info',
          name: 'account_basic_info',
          component: account_basic_info
        },
        {
          path: 'qual-info',
          name: 'account_qual_info',
          component: account_qual_info
        },
        {
          path: 'pwd-reset',
          name: 'account_pwd_reset',
          component: account_pwd_reset
        }
      ]
    }
  ]
})
