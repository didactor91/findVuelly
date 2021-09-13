import { RouteConfig } from 'vue-router'

const expRoutes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Landing',
    meta: { title: 'Landing - 360 Tour' },
    component: () => import('../views/TheLandingComponent.vue')
  },
  {
    path: '/experience',
    name: 'Experience',
    meta: { title: 'Experience - 360 Tour' },
    component: () =>
      process.env.VUE_APP_EXP_ENABLED == 'true'
        ? import('../views/TheWallComponent.vue')
        : import('../views/TheLandingComponent.vue')
  }
]

export default expRoutes
