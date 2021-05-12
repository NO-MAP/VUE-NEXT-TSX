import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/pages/Login';
import NotFound from '@/pages/ErrorPages/NotFound';
import Forbidden from '@/pages/ErrorPages/Forbidden';
import Layout from '@/pages/Layout';
import Home from '@/views/Home';

const defaultRouters = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  }, {
    path: '/401',
    name: 'Forbidden',
    component: Forbidden
  }, {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
          title: "首页"
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
]

const routes = [
  ...defaultRouters
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
