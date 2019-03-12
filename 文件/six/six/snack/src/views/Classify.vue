<template>
    <div>
        <Head msg="分类详情"></Head>
        <div id="main">
            <div class="aside">
                <div class="class" v-for="(v,index) in aside" :key="index" :class="{active:index==num}" @click="change(index)">
                    <p>{{v}}</p>
                </div>
            </div>
            <div class="content">
                <div class="main" v-for="(item,i) in itemDatas" :key="i">
                    <van-card :title="item.itemName" :price="item.itemPrice" :thumb="item.itemImage"/>
                </div>
                
            </div>
        </div>
        <Foot></Foot>
    </div>
</template>

<script>
    import Head from "../components/Head.vue";
    import Foot from "../components/Foot.vue";
    import mainApi from "../api/main.js";
    import {mapState} from "vuex";
    export default {
        data(){
            return {
                active:1,
                aside:[],
                data:[],
                index:0,
                num:0
            }
        },
        created() {
            this.getFloor();
        },
        methods:{
            getFloor(){
                  mainApi.getFloorData().then(res=>{
                      this.data=res.data;
                      res.data.forEach(item => {
                          this.aside.push(item.cate.cateName)
                      });
                  }) 
            },
            change(index){
                this.index=index;
                this.num=index;
            }
        },
        components:{
            Head,
            Foot
        },
        computed:{
            ...mapState(["itemData"]),
            itemDatas(){
                return this.data[this.index].data;
            }
        }
    }
</script>

<style scoped lang="less">
    #main{
        display: flex;
        margin-top: 40px;
        .aside{
            .class{
                width: 90px;
                height: 40px;
                line-height: 40px;
                text-align: center;
            }
            .active{
                font-size: 14px;
                color: #fff;
                background: skyblue;
                font-weight: bold;
            }
        }
        .content{
           
        }
    }
</style>