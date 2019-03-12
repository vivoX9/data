const mutations={
    setItemData(state,data){
        state.itemData=data
    },
    setCartData(state,data){
        state.cartData.push(data);
    },
    setDefault(state,index){
		//设置默认地址
		let data=state.adressData;
		data.forEach((item)=>{
			item.default=false;
		})
		data[parseInt(index)].default=true;
    },
    addAddress(state,data){
        state.adressData.push(data);
        console.log(data)
	}
}


export default mutations;