import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import GoodsList from '@/components/goods/goodslist'
import Shop from '@/components/goods/shop'
import orderList from '@/components/order/order-list'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children:[
        {
          path:'/list',
          name:'GoodsList',
          component:GoodsList
        },
        {
          path: '/shop',
          name: 'Shop',
          component: Shop
        },
        {
          path: '/orderList',
          name: 'OrderList',
          component: orderList
        }
      ]
    }
  ]
})
