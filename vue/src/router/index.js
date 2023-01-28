import { createRouter, createWebHistory } from 'vue-router'
import HomeHoge from '../views/HomeHoge.vue'
import AddProject from '../views/AddProject.vue'
import EditProject from '../views/EditProject.vue'

const routes = [
  {
    path: '/',
    name: 'HomeHoge',
    component: HomeHoge
  },
  {
    path: '/projects',
    name: 'AddProject',
    component: AddProject
  },
  {
    path: '/projects/:id',
    name: 'EditProject',
    component: EditProject,
    props: true //idをpropsとして使えるようになる
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
