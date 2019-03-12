<template>
	<div>
		
	    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
	        <FormItem label="分类名称" prop="cateName">
	            <Input v-model="formValidate.cateName" placeholder="请输入分类名字"></Input>
	        </FormItem>
	      
	            <Button type="primary" @click="handleSubmit('formValidate')">上传</Button>
	            <Button @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
	        </FormItem>
	   </Form>
	</div>
</template>
<script>
	import cateApi from "@/api/Cate"
	import {mapState} from 'vuex'
    export default {
        data () {
            return {
                formValidate: {
                    cateName: '',
                  	id:0
                    
                },
                ruleValidate: {
                    cateName: [
                        { required: true, message: '不能为空', trigger: 'blur' }
                    ]
                },
           
            }
        },
      	mounted(){
		this.formValidate=this.listData.data[this.$route.params.index];
      	},
        methods: {
            handleSubmit (name) {
            	
                this.$refs[name].validate((valid) => {
                    if (valid) {
                    	let params = Object.assign(this.formValidate,{act:'edit'})
                    
                    	cateApi.edit(params).then((res)=>{
                    	let that=this;
                  		this.$Message.success(
                  			{
                  				content:res.data.msg,
                  				onClose(){
                  					that.$router.go(-1);
                  				}
                  			}
                  		);
                    		
                    		
                    	}).catch(res=>{console.log(res)});
                        
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        },
       computed:{
       	...mapState(['listData'])
       }
    }
</script>
