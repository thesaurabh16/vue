import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import JobDetails from '@/views/jobs/JobDetails.vue'
import JobsList from '@/views/jobs/JobsList.vue'
import NotFound from '@/views/NotFound.vue'
import Product from '@/views/Product.vue'
import Signup from '@/views/Signup.vue'
import RegistrationForm from '@/views/RegistrationForm.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/register',
    name: 'registration',
    component: RegistrationForm
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
    props:true
  },
  {
    path: '/about',
    name: 'about',
   component: AboutView
  },
  {
    path: '/jobs',
    name: 'job',
   component: JobsList
  },
  {
    path:'/jobs/:id',
    name:'JobDetails',
    component:JobDetails,
    props:true
  },
  //redirect
  {
    path:'/all-jobs',
    redirect:'/jobs'
  },
  //catchall-404
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component:NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
