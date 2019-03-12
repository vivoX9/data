
import cateApi from '@/api/Cate'
import itemApi from '@/api/Item'
const actions = {
	setCateList({commit},params){
		cateApi.list(params).then(res=>{
//			console.log(res.data.data);
			let data=res.data.data
			commit('setCateListData',data);
		});
	},
	setItemList({commit},params){
		itemApi.list(params).then(res=>{
		
			let data=res.data.data
			console.log(data);
			commit('setItemListData',data);
		});
	}
}
export default actions;


