import { createRouter, createWebHistory } from 'vue-router'
import Tarjeta from '../components/Tarjeta.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Tarjeta,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
