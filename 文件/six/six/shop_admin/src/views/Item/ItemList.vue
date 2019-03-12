
 <template>
 	<div>
 		<div>
 			<Row>
	 		<Col span="24">
	 			<Button type="success" @click="enterAdd">增加商品</Button>
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
	import itemApi from "@/api/Item"
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
    				title:"商品名称",
    				key:"itemName"
    			},
    			{
    				title:"库存件数",
    				key:"itemNum"
    			},
    			{
    				title:"商品价格",
    				key:"itemPrice"
    			}
    			
    			],

    			list:{
    				current:1,
    				pageSize:5,	
    			},
				modal1:false,
				index:0,
				
    		}
    	},
    	mounted(){
    		let params = Object.assign(this.list,{act:"get"});
			//提交action
			this.setItemList(params);
	
    	},
    	methods:{
    		edit(index){
    			this.$router.push({
    				name:"itemEdit",
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
    			let id=this.itemData[this.index].id;
    			itemApi.del({
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
    				name:"itemAdd"
    			});
    		},
    		change(n){
    			this.list.current=n;
    			let params = Object.assign(this.list,{act:"get"});
    			//提交action
    			this.setItemList(params);
    	
    		},
    		...mapActions(['setItemList'])
    	},
    	components:{
    		Table1
    	},
    	computed:{
    		...mapState(['itemListData']),
    		itemData(){
    			return this.itemListData.data;
    		},
    		total(){
    			return this.itemListData.total;
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