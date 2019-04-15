import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/login'
import Layout from '@/views/layout'
import Project from '@/views/backend/project'
import Doc from '@/views/backend/doc'
import Workbench from '@/views/backend/workbench'

Vue.use(Router)

let router = new Router({
  routers: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/management',
      name: 'Management',
      component: Layout,
      children: [
        {
          path: '/project',
          name: 'Project',
          component: Project
        },
        {
          path: '/',
          name: 'Doc',
          component: Doc
        },
        {
          path: '/workbench',
          name: 'Workbench',
          component: Workbench
        }
      ]
    },
    {
      path: '*',
      component: '/'
    }
  ]
})

export default router
