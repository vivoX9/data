const index=require('koa-router')();
const cate=require('./cate');
const item=require('./item');
index.get('/admin', async (ctx,next)=>{
	ctx.body='后台管理的首页'

});

index.use(cate.routes());
index.use(item.routes());
module.exports=index;