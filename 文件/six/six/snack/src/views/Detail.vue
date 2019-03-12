<template>
    <div>
        
        <HeadDetail msg="商品信息" @back="back"></HeadDetail>
        <div class="main">
            <div class="img">
                <img :src="msg.itemImage" alt="">
            </div>
            <p class="itemName">{{msg.itemName}}</p>
            <p class="itemPrice">{{msg.itemPrice|money}}</p>
        </div>
        <div class="bottom">
            <van-goods-action v-show="classs">
                <van-goods-action-mini-btn icon="cart" text="购物车" @click="onClickMiniBtn" />
                <van-goods-action-big-btn text="加入购物车" @click="onClickBigBtn" />
                <van-goods-action-big-btn text="立即购买" @click="onClickBigBtns" primary />
            </van-goods-action>
        </div>
                  <itemBuy v-show="show" :msg="msg" :actionType="actionType" @close="close" @done="done" @Out="Out">

            </itemBuy>
    </div>
</template>

<script>
    import HeadDetail from "../components/HeadDetail.vue";
    import {mapState} from "vuex";
    import moned from "../filters/money.js";
    import itemBuy from "../components/itemBuy.vue"
    export default {
        data(){
            return {
                msg:this.$route.params.itemName,
                show:false,
                actionType:'加入购物车',
                classs:true
            }
              
        },
        methods:{
           Out(){
               this.classs=true;
           },
           back(){
               this.$router.go(-1);
           },
            done(){
                this.show=false
            },
            // 进入购物车
            onClickMiniBtn(){
                this.$router.push({
                    name:"Cart"
                })
            },
            // 点击购买/加入购物车弹出弹出层
            onClickBigBtn(){
                this.show=true;
                this.classs=false;
                this.actionType="加入购物车"
            },
            onClickBigBtns(){
                this.show=true;
                this.actionType="立即购买"
            },
             close(){
                this.show=false;
                this.classs=true;
            },
        },
        components:{
            HeadDetail,
            itemBuy
        },
        computed:{
            ...mapState(["itemData"])
        }
    }
</script>

<style scoped lang="less">
    .main{
        margin-bottom: 50px;
        margin-top: 40px;
        .img{
            text-align: center;
        }
        p{
            padding:20px 20px;
        }
        p.itemName{
            color: rgba(255, 0, 234, 0.74);
            font-size: 16px;
        }
        p.itemPrice{
            color:red;
        }
        .back{
            position: fixed;
            top:0;
            left: 0;
            font-size: 20px;
            color: aquamarine;
            z-index: 50000;
        }
    }
</style>