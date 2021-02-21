import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/LoginForm')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/products/add',
    name: 'AddProduct',
    component: () => import('../views/AddProduct')
  },
  {
    path: '/products/edit',
    name: 'EditProduct',
    component: () => import('../views/EditProduct')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.access_token) next({ name: 'Login' })
  if (to.name === 'Login' && localStorage.access_token) next({ name: 'Home' })
  else next()
})

export default router
