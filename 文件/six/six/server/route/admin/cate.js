const router=require('koa-router')();
let cateApi = require("../../api/cate");
router.prefix('/admin');//添加路由前缀
router.post('/cate', async (ctx,next)=>{
	//增加分类  act:add   edit  编辑  act:show  
	let params = ctx.request.body;

	if(params.act === 'add'){
		//添加分类功能
		let res =  await cateApi.add(params.cateName);
		ctx.body={
			ERROK:1,
			msg:"添加分类成功"
		}
	}else if(params.act === 'get'){
		//接收参数
//		ctx.body=params;
		let current = params.current?params.current:1;
		let pageSize = params.pageSize?params.pageSize:5;
		//后端应该返回 总条数 当前页的数据
		let res = await cateApi.list({current,pageSize});
		ctx.body={
			ERROK:1,
			msg:"success",
			data:res
		}
	}else if(params.act === 'edit'){
		let res =await cateApi.edit(params);
		ctx.body={
			ERROK:1,
			msg:"修改成功"
		}
	}else if(params.act === 'del'){
		let res= await cateApi.del(params.id);
		ctx.body={
			ERROK:1,
			msg:"删除成功"
		}
	}
});

module.exports=router;