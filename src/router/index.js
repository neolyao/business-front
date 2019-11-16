import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import GoodsList from '@/components/goods/goodslist'
import Shop from '@/components/goods/shop'
import orderList from '@/components/order/order-list'
import orderOneReturnGoods from '@/components/order/order-one-return-goods'
import orderOutOfStock from '@/components/order/order-out-of-stock'
import orderInvoice from '@/components/order/order-invoice'
import orderReturnGoods from '@/components/order/order-return-goods'
import orderDelayInReceiving from '@/components/order/order-delay-in-receiving'
import orderTestShipped from '@/components/order/order-test-shipped'
import inventoryLogList from '@/components/inventoryLog/inventoryLog-list'
import complaint from '@/components/complaint/complaint'

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
        },{
          path: '/shop',
          name: 'Shop',
          component: Shop
        },{
          path: '/orderList',
          name: 'OrderList',
          component: orderList
        },{
          path: '/orderOutOfStock',
          name: 'OrderOutOfStock',
          component: orderOutOfStock
        },{
          path: '/orderReturnGoods',
          name: 'OrderReturnGoods',
          component: orderReturnGoods
        },{
          path: '/orderOneReturnGoods',
          name: 'OrderOneReturnGoods',
          component: orderOneReturnGoods
        },{
          path: '/orderInvoice',
          name: 'OrderInvoice',
          component: orderInvoice
        },{
          path: '/orderDelayInReceiving',
            name: 'OrderDelayInReceiving',
          component: orderDelayInReceiving
        },{
          path: '/orderTestShipped',
          name: 'OrderTestShipped',
          component: orderTestShipped
        },{
          path: '/inventoryLogList',
          name: 'InventoryLogList',
          component: inventoryLogList
        },{
          path: '/complaint',
          name: 'complaint',
          component: complaint
        }
      ]
    }
  ]
})
