import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Preference from '@/components/Preference'
import PreferenceCompleted from '@/components/PreferenceCompleted'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/preference',
      name: 'preference',
      component: Preference
    },
    {
      path: '/preferenceCompleted',
      name: 'preferenceCompleted',
      component: PreferenceCompleted
    }
  ]
})
