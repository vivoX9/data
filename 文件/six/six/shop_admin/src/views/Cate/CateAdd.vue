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
    export default {
        data () {
            return {
                formValidate: {
                    cateName: ''
                  
                    
                },
                ruleValidate: {
                    cateName: [
                        { required: true, message: '不能为空', trigger: 'blur' }
                    ]
                },
           
            }
        },
      
        methods: {
            handleSubmit (name) {
            	
                this.$refs[name].validate((valid) => {
                    if (valid) {
                    	let params = Object.assign(this.formValidate,{act:'add'})
                    	
                    	cateApi.add(params).then((res)=>{
                    		this.$Message.success(res.data.msg);
                    		this.formValidate.cateName="";
                    	}).catch(res=>{console.log(res)});
                        
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
