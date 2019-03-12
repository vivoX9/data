import Vue from 'vue'
Vue.filter('del',(n)=>{
	//判断文本的length，超出删除后面该成省略号
	if(n.length>=16){
		let str= n.substr(0,16)+"...";
		return str;
	}
	return n;
});

