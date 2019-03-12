const koa = require('koa');
const app = new koa();
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const index = require('./route/index/index');
const admin=require('./route/admin/index');
const path=require('path');
const static = require('koa-static'); 
app.use(static(
    path.join( __dirname,  'public')
)) 
//session
app.keys = ['hdwidhiwdhwidhwidhiugfeudg'];
const CONFIG = {
    key: 'koa:sess', //cookie key (default is koa:sess)
    maxAge: 1200000, // cookie的过期时间 maxAge in ms (default is 1 days)
    overwrite: true, //是否可以overwrite    (默认default true)
    httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
    signed: true, //签名默认true
    rolling: false, //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
    renew: false, //(boolean) renew session when session is nearly expired,
};
app.use(session(CONFIG, app));
app.use(bodyParser()); //处理post请求 

app.use(index.routes(), index.allowedMethods());
app.use(admin.routes(), admin.allowedMethods());
app.listen("5519", () => console.log('启动了'));