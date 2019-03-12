<template>
    <div>
        <header id="head">
            {{msg}}
        </header>
    </div>
</template>

<script>
    export default {
        props:{
            msg:{
                type:String,
                default:"零食商店"
            }
        },
        data(){
            return {
             
            }
        }
    }
</script>

<style scoped lang="less">
// js中引入css文件@import url(路径)
    #head{
        height: 40px;
        line-height: 40px;
        width: 100%;
        color: #fff;
        font-size: 14px;
        background: rgba(214, 15, 15);
        position: fixed;
        left: 0;
        top: 0;
        text-align: center;
        z-index: 100;
    }
</style>