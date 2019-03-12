const router=require('koa-router')();
let itemApi = require("../../api/item");
const multer = require('../../common/upload/multer');
router.prefix('/admin');//添加路由前缀
router.post('/item',multer.single('img'), async (ctx,next)=>{
	if(ctx.req.file){
		//拼接一个字段  
		let imgUrl="http://localhost:5519/uploads/"+ctx.req.file.filename;
		ctx.body=imgUrl;
	}
	let params = ctx.request.body;
	let act=params.act;
	switch(act){
		case "getCate":
		//将分类查找给你
		let res=await itemApi.getCate();
		ctx.body=res;
		break;
		case "addItem":
		//添加商品
		let res1 = await itemApi.addItem(params);
		ctx.body={
			ERROK:1,
			msg:"商品上传成功"
		}
		break;
		case "get":
		//分页展示
		let current = params.current?params.current:1;
		let pageSize = params.pageSize?params.pageSize:5;
		//后端应该返回 总条数 当前页的数据
		let res2 = await itemApi.list({current,pageSize});
		ctx.body={
			ERROK:1,
			msg:"success",
			data:res2
		}
		break;
		case "edit":
		let res3=await itemApi.edit(params);
		ctx.body={
			ERROK:1,
			msg:"success",
			data:res3
		}
		break;
		case "del":
		let res4=await itemApi.del(params.id);
		ctx.body={
			ERROK:1,
			msg:"删除成功"
		};
		break;
	}
});

module.exports=router;