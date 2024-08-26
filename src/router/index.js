import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Curriculum from '@/views/Curriculum.vue'
import HouseView from '@/views/HouseView.vue'

// const routes = []

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
    },
    {
      path: '/house/:id',
      name: 'house',
      component: HouseView
    }
  ]
})

export default router
