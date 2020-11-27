import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index.vue')
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('@/views/detail.vue')
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('@/views/product.vue')
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/cart.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('@/views/order.vue'),
    children: [
      {
        path: 'orderList',
        name: 'orderList',
        component: () => import('@/views/orderList.vue')
      },
      {
        path: 'orderConfirm',
        name: 'orderConfirm',
        component: () => import('@/views/orderConfirm.vue')
      },
      {
        path: 'orderPay',
        name: 'orderPay',
        component: () => import('@/views/orderPay.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
