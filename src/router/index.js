import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

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
