<template>
	<div>
		<Row>
        	<Col span="12">
        		  <Upload
			        type="drag"
			        action="/api/admin/item"
			        name="img"
					:before-upload="beforeUpload"
					:on-success="success"
			        >
			        <div style="padding: 20px 0">
			            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
			            <p>Click or drag files here to upload</p>
			        </div>
   				 </Upload>
        	</Col>
        	<Col span="12">
        		<img :src="imgUrl" style="height:120px" alt="" />
        	</Col>
    	</Row>
	    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
	        <FormItem label="商品名称" prop="itemName">
	            <Input v-model="formValidate.itemName" placeholder="请输入商品名字"></Input>
	        </FormItem>
	      	<FormItem label="商品价格" prop="itemPrice">
	            <Input v-model="formValidate.itemPrice" placeholder="请输入商品价格单位：元"></Input>
	        </FormItem>
	        <FormItem label="库存几件" prop="itemNum">
	            <Input v-model="formValidate.itemNum" placeholder="请输入库存件数"></Input>
	        </FormItem>
	       <FormItem label="所属分类" prop="cateId">
	            <Select v-model="formValidate.cateId" style="width:200px" placement="top">
			        <Option v-for="item in cateList" :value="item.id" :key="item.id">{{ item.cateName }}</Option>
			    </Select>
	        </FormItem>
	            <Button type="primary" @click="handleSubmit('formValidate')">上传</Button>
	            <Button @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
	        </FormItem>
	    </Form>
	</div>
</template>
<script>
	import itemApi from "@/api/item"
    export default {
        data () {
            return {
                formValidate: {
                  	itemName:"", 
                  	itemPrice:'',
                  	itemNum:'',
                  	cateId:''
                    
                },
                ruleValidate: {
                    itemName: [
                        { required: true, message: '不能为空', trigger: 'blur' }
                    ],
                     itemPrice: [
                        {required: true, message: '不能为空', trigger: 'blur' }
                    ],
                    itemNum: [
                        {required: true, message: '不能为空', trigger: 'blur' }
                    ]
                },
           	cateList:[],
           	imgUrl:""
            }
        },
      	created(){
      		//获取分类
      	itemApi.getCate({act:"getCate"}).then(res=>{
      			
      			this.cateList=res.data;
      		})
      	},
        methods: {
        	beforeUpload(file){
        		//图片上传的钩子
        		//利用filereadr
        		let fd=new FileReader();
        		fd.readAsDataURL(file);
        		let that=this;
        		fd.onload=function(){
        		that.imgUrl=this.result;
        		}
        	},
        	success(res){
        		//图片上传成功的回调
        		
        		Object.assign(this.formValidate,{"itemImage":res},{"act":"addItem"})
        		
        	},
            handleSubmit (name) {
            	
                this.$refs[name].validate((valid) => {
                    if (valid) {
                    let that=this;
 					itemApi.addItem(this.formValidate).then(res=>{
 						this.$Message.success({
 							content:res.data.msg,
							onClose(){
								that.$refs[name].resetFields();
								that.imgUrl="";
							}
 						});
 					});
                        
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
       
    }
</script>
