const index=require('koa-router')();
const main =require('./main');
index.get('/', async (ctx,next)=>{
	ctx.body='我是首页'
});
index.use(main.routes());
module.exports=index;