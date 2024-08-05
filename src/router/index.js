import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/availability/:weekId',
      name: 'availability',
      component: () => import('../views/AvailabilityView.vue')
    },
    {
      path: '/assignedShifts/:weekId',
      name: 'assignedShifts',
      component: () => import('../views/AssignedShiftsView.vue')
    },
    {
      path: '/summary/:weekId',
      name: 'summary',
      component: () => import('../views/SummaryView.vue')
    },
    {
      path: '/editAvailability/:weekId',
      name: 'editAvailability',
      component: () => import('../views/EditAvailabilityView.vue')
    }
    
  ]
})

export default router
