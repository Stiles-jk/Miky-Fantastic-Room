import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home/Home.vue"
import Login from "../views/Login/Login.vue"

const routes = [
  {
    path: '/login',
    name: "Login",
    component: Login
  }
  ,
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: "/user",
        name: "userInfo",
        component: () => import('../views/User/user-info.vue')
      },
      {
        path: "/chat",
        name: "chartRoom",
        component: () => import('../views/Chat/chat-room.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router