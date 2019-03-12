const main=require('koa-router')();
const db = require('../../db/index');
main.post('/main', async (ctx,next)=>{
	let cates=await db("select * from snack_cate");
	let data=[];
	for(var i=0;i<cates.length;i++){
		let itemData=[];
		let datai={};
		itemData= await db(`select * from snack_item where cateId='${cates[i].id}'`);
		datai.cate={
			cateName:cates[i].cateName
		}
		datai.data=itemData;
		data.push(datai);
	}
	ctx.body=data;
});

module.exports=main;