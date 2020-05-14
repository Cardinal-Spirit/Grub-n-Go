import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import MyIngredients from '../views/MyIngredients.vue'
import MyShoppingList from '../views/MyShoppingList.vue'
import Recipes from '../views/Recipes.vue'
import * as firebase from "firebase/app"
import "firebase/auth"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/MyIngredients',
    name: 'MyIngredients',
    component: MyIngredients,
    meta: {requiresAuth: true}
  },
  {
    path: '/MyShoppingList',
    name: 'MyShoppingList',
    component: MyShoppingList,
    meta: {requiresAuth: true}
  },
  {
    path: '/Recipes',
    name: 'Recipes',
    component: Recipes,
    meta: {requiresAuth: true}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=> {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuth = firebase.auth().currentUser;
  if(requiresAuth && !isAuth){
    alert("Login is required to access this.")
    next("/Login");
  }else{
    next();
  }
})

export default router
