<template>
	
    <Table border :columns="columns7" :data="data"></Table>
</template>
<script>
    export default {
    	props:{
    		columns1:{
    			type:Array,
    			default:function(){
    				return [
                    {
                        title: '序号',
                        key: 'id'    
                    },
                    {
                        title: '分类名字',
                        key: 'cateName'
                    }
                	]
    			}
    		},
    		data:{
    			type:Array
    		}
    	},
        data () {
            return {
                columns7: [
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'info',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, [
                                h("Icon",{
                                	 props: {
                                        type: 'md-create',
                                     
                                    }
                              
                                })
                                ]),
                                h('Button', {
                                    props: {
                                        type: 'success',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, [
                                 h("Icon",{
                                	 props: {
                                        type: 'md-close',
                                
                                    }
                              
                                })
                                ])
                            ]);
                        }
                    }
                ]
                
            }
        },
        created(){
        	this.columns7=this.columns1.concat(this.columns7);
        },
        methods: {
            show (index) {
              	this.$emit('edit',index);
               
            },
            remove (index) {
                this.$emit('del',index);
            }
        }
    }
</script>
