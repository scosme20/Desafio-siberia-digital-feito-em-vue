import { createRouter, createWebHistory } from 'vue-router'
import Page1 from '@/views/Page1View.vue'
import Page2 from '@/views/Page2View.vue'

const routes = [
  { path: '/', component: Page1 },
  { path: '/result', component: Page2 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

