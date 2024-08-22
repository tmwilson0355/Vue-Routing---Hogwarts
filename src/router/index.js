import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Curriculum from '@/views/Curriculum.vue'

const routes = []

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/curriculum',
      name: 'curriculum',
      component: Curriculum
    }
  ]
})

export default router
