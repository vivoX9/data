import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:"Index",
      component:() => import('@views/Index')/*路由懒加载*/
    },
    {
      path:"/Detail",
      name:"Detail",
      component:() => import('@views/Detail')/*路由懒加载*/
    },
    {
      path:"/Cart",
      name:"Cart",
      component:() => import('@views/Cart')/*路由懒加载*/
    },
    {
      path:"/Classify",
      name:"Classify",
      component:() => import('@views/Classify')/*路由懒加载*/
    },
    {
      path:"/My",
      name:"My",
      component:() => import('@views/My')/*路由懒加载*/
    },
    {
      path:"/Pay",
      name:"Pay",
      component:() => import('@views/Pay')/*路由懒加载*/
    },
    {
      path:"/Adress",
      name:"Adress",
      component:() => import('@views/Adress')/*路由懒加载*/
    }
  ]
})
