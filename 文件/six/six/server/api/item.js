let db = require("../db/index");
async  function getCate(){
	let res = await db(`select * from snack_cate`);
	return res;
}
async  function addItem(params){
	let res = await db(`insert into snack_item (itemName,itemPrice,itemNum,itemImage,cateId) values (
		'${params.itemName}',
		${params.itemPrice},
		${params.itemNum},
		'${params.itemImage}',
		${params.cateId}
	)`);
	
	return res;
}
async  function list(params){
	//获取总页面
	let total = await db(`select count(*) as total from snack_item`);
	total=total[0].total;
	console.log(total)
	//分页数据
	let data=await db(`select * from snack_item limit ${(params.current-1)*params.pageSize},${params.pageSize}`);
	return {
		total,
		data
	}
}
async function edit(params){
	//更新数据
	let res=await db(`update snack_item set itemName='${params.itemName}',itemPrice=${params.itemPrice},itemNum=${params.itemNum},itemImage='${params.itemImage}',cateId=${params.cateId} where id=${params.id}`);
	return res;
}
async function del(id){
	let res=await db(`delete from snack_item where id=${id}`);
}
module.exports={
	getCate,
	addItem,
	list,
	edit,
	del
}
