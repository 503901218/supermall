import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
// 设置可跳转的路由
const home=()=>import('../view/home/home.vue')
const category=()=>import('../view/category/category.vue')
const cart=()=>import('../view/cart/cart.vue')
const profile=()=>import('../view/profile/profile.vue')
const detail=()=>import('../view/detail/detail.vue')

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'home'
      // name: 'HelloWorld',
      // component: HelloWorld
    },
    {
      name:'home',
      path: '/home',
      component:home
    },
    {
      name:'category',
      path: '/category',
      component:category
    },
    {
      name:'cart',
      path: '/cart',
      component:cart
    },
    {
      name:'profile',
      path: '/profile',
      component:profile
    },
    {
      //动态传参
      path: '/detail/:id',
       component:detail,
    }
  ],
  mode:'history'
})

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}