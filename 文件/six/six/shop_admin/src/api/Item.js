import axios from 'axios'
const URL="/api/admin/item";
async function getCate(params){
	let res= await axios.post(URL,params);
	return res;
	//增加分类
}
async function addItem(params){
	let res= await axios.post(URL,params);
	
	return res;
	//增加分类
}
async function list(params){
	let res= await axios.post(URL,params);
	return res;
// 	列表展示
}
async function edit(params){
	let res= await axios.post(URL,params);
	return res;
// 	编辑
}
 async function del(params){
	let res= await axios.post(URL,params);
	return res;
// 	删除
}
export default {
getCate,
addItem,
list,
edit,
del
}
