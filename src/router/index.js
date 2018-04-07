import Vue from 'vue'
import Router from 'vue-router'
import Products from '@/components/Products'
import Detail from '@/components/Detail'
import ShoppingCar from '@/components/ShoppingCar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    },
    {
      path: '/Products',
      name: 'Products',
      component: Products
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/ShoppingCar',
      name: 'ShoppingCar',
      component: ShoppingCar
    },
  ]
})
