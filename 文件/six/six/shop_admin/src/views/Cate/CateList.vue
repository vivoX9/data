
 <template>
 	<div>
 		<div>
 			<Row>
	 		<Col span="24">
	 			<Button type="success" @click="enterAdd">增加分类</Button>
	 		</Col>
	 	</Row>
	 	<Table1 :columns1="col1" :data="itemData" @edit="edit" @del="del"></Table1>
	 	<div><Page :total="total" :page-size="list.pageSize" show-sizer @on-change="change"/></div>
	 	
 		</div>
		<Modal
        v-model="modal1"
        title="是否确认删除"
        @on-ok="del1">
       	<div>你真的要删除我吗？不思考一下</div>
   		</Modal>
 	</div>
 </template>
<script>
	import Table1 from '@components/Table/Table1'
	import cateApi from "@/api/Cate"
	import {mapState,mapActions} from 'vuex'
    export default {
    	data(){
    		return{
    			col1:[
    			{
    				title:"序号",
    				key:"id"
    			},
    			{
    				title:"分类名称",
    				key:"cateName"
    			}
    			],

    			list:{
    				current:1,
    				pageSize:2,	
    			},
				modal1:false,
				index:0
    		}
    	},
    	mounted(){
    		let params = Object.assign(this.list,{act:"get"});
			//提交action
			this.setCateList(params);
	
    	},
    	methods:{
    		edit(index){
    			this.$router.push({
    				name:"cateEdit",
    				params:{
    					index:index
    				}
    			});
    		},
    		del(n){
    			this.modal1=true;
    			this.index=n;
    		},
    		del1(){
    			//先发送请求到数据库 成功回调中删除页面
    			let id=this.itemData[this.index].id;
    			cateApi.del({
    				id:id,
    				act:"del"
    			}).then(res=>{
    				//删除视图
    				this.itemData.splice(this.index,1);
    				this.$Message.success("删除成功");
    				
    			}).catch((err)=>console.log(err));
    		},
    		enterAdd(){
    			this.$router.push({
    				name:"cateAdd"
    			});
    		},
    		change(n){
    			this.list.current=n;
    			let params = Object.assign(this.list,{act:"get"});
    			//提交action
    			this.setCateList(params);
    	
    		},
    		...mapActions(['setCateList'])
    	},
    	components:{
    		Table1
    	},
    	computed:{
    		...mapState(['listData']),
    		itemData(){
    			return this.listData.data;
    		},
    		total(){
    			return this.listData.total;
    		}
    	}
    	
    }
</script>
<style scoped>
	.load{
		width:100%;
		height:200px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>