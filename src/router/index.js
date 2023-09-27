import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/detail',
      name: 'detail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/detailpage.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contactpage.vue')
    },
    {
      path: '/addlocation',
      name: 'addlocation',
      component: () => import('../views/addlocationpage.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/loginpage.vue')
    },
    {
      path: '/imprint',
      name: 'imprint',
      component: () => import('../views/imprintpage.vue')
    },
    {
      path: '/legalnotice',
      name: 'legalnotice',
      component: () => import('../views/legalpage.vue')
    },
    {
      path: '/dataprotection',
      name: 'dataprotection',
      component: () => import('../views/datapage.vue')
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: () => import('../views/aboutpage.vue')
    }
  ]
})

export default router
