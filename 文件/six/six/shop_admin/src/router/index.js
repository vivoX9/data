import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
		{
			path: '/',
			component: ()=>import('@views/Index/Index'),
			children:[
				{
					path:"",
					name:"Welcome",
					component:()=>import('@views/Welcome/Welcome'),
				},
				{
					path:"cateList",
					name:"cateList",
					component:()=>import('@views/Cate/CateList'),
				},
				{
					path:"cateAdd",
					name:"cateAdd",
					component:()=>import('@views/Cate/CateAdd'),
				},
				{
					path:"cateEdit",
					name:"cateEdit",
					component:()=>import('@views/Cate/CateEdit'),
				},{
					path:"itemList",
					name:"itemList",
					component:()=>import('@views/Item/ItemList'),
				},
				{
					path:"itemAdd",
					name:"itemAdd",
					component:()=>import('@views/Item/ItemAdd'),
				},
				{
					path:"itemEdit",
					name:"itemEdit",
					component:()=>import('@views/Item/ItemEdit'),
				}
				
			]
		}
  ]
})
