let db = require("../db/index");
async  function add(params){
	
	let res = await db(`insert into snack_cate (cateName) values ('${params}')`);
}

async  function list(params){
	//获取总页面
	let total = await db(`select count(*) as total from snack_cate`);
	total=total[0].total;
	//分页数据
	let data=await db(`select * from snack_cate limit ${(params.current-1)*params.pageSize},${params.pageSize}`);
	return {
		total,
		data
	}
}

async function edit(params){
	let res = await db(`update snack_cate set cateName='${params.cateName}' where id=${params.id}`);
	return res;
}
async function del(id){
	let res=await db(`delete from snack_cate where id=${id}`);
}
module.exports={
	add,
	list,
	edit,
	del
}
