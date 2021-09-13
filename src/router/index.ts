import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: 'Home - Find VUElly' },
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/game',
    name: 'Game',
    meta: { title: 'Exp - Find VUElly' },
    component: () => import('@/views/Game.vue'),
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
