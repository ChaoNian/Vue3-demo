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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/slot',
      name: 'slot',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SlotView.vue')
    },
    {
      path: '/AsyncCompetent',
      name: 'AsyncCompetent',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AsyncCompetent.vue')
    },
    {
      path: '/DynamicsComponent',
      name: 'DynamicsComponent',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/dynamics/index.vue')
    },
    {
      path: '/SkeletonAndasyncCom',
      name: 'SkeletonAndasyncCom',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/skeletonAndasyncCom/index.vue')
    },
    {
      path: '/Transition',
      name: 'Transition',
      component: () => import('../views/transition.vue')
    },
    {
      path: '/TransitionGroup',
      name: 'TransitionGroup',
      component:() => import('../views/transition-group.vue')
    },
    {
      path: '/ComponentsEventBus',
      name: 'ComponentsEventBus',
      component:() => import('../views/componentsEventBus/index.vue')
    },
    {
      path: '/Directive',
      name: 'Directive',
      component:() => import('../views/directive/index.vue')
    },
    {
      path: '/Hooks',
      name: 'Hooks',
      component:() => import('../views/hooks/index.vue')
    },
    {
      path: '/GlobalProperties',
      name: 'GlobalProperties',
      component: () => import('../views/GlobalProperties.vue')
    }
  ]
})

export default router
