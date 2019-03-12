<template>
    <div>
        <HeadDetail msg="订单详情" @back="back"></HeadDetail>
        <div class="main">
            <div class="adress" @click="choseAdress">
                <div class="icon">
                    <img src="../../static/img/goods/adress.png" alt="">
                </div>
                <div class="local">
                    {{Adress}}
                    <van-icon name="arrow"  class="arrow"/>
                </div>
                
            </div>
            <div class="list">
                <div class="item" v-for="(v,index) in itemMsg" :key="index">
                    <div class="img">
                        <img :src="v.itemImage" alt="">
                    </div>
                    <div class="detail">
                        <p class="name">商品名称:  {{v.itemName}}</p>
                        <p class="num">商品数量:  {{v.itemNum}}</p>
                        <p class="price">商品单价:  {{v.itemPrice|money}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="foot">
            <div class="content">
                <div class="total">
                总价格:{{total}}元
                </div>
                <div class="button" @click="buy">
                    结算
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeadDetail from "../components/HeadDetail";
import money from "../filters/money.js";
export default {
  data() {
    return {
        itemMsg:[],
        total:0,
        a:"安徽省合肥市 蜀腹黑无法黑发黑hi我我和我ID好物ID后父唯独外大河网对我的唯独发黑山粉区 "
    };
  },
  mounted() {
      this.itemMsg=this.$route.params.itemMsg;
      this.total=this.$route.params.total;
  },
  methods: {
    //点击结算
    buy(){
        alert("购买成功")
    },
    // 点击返回上一页
    back(){
        this.$router.go(-1)
    },
    choseAdress(){
        this.$router.push({
            name:"Adress"
        })
    }
  },
  components: {
    HeadDetail
  },
  computed: {
      Adress(){
          return this.defaultAdress[0].adress;
      },
      defaultAdress(){
          return this.$store.state.adressData.filter(item=>{
              return item.default==true;
          })
      }
  }
};
</script>

<style scoped lang="less">
.main {
  margin-top: 50px;
  margin-bottom: 40px;
  .adress {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    img {
      margin-right: 10px;
    }
    .local{
        .arrow{
            position: absolute;
            right: 10px;
            top:65px;
        }
    }
  }
  .list {
    .item {
      display: flex;
      align-items: center;
      padding: 10px 20px;
      margin-bottom: 30px;
      .img {
        border: 1px solid rgba(204, 204, 204, 0.3);
        margin-right: 10px;
        img {
          width: 100px;
        }
      }
      p {
        font-size: 14px;
      }
      p.name {
        color: rgba(255, 0, 234, 0.74);
      }
      p.price{
          color: red;
      }
    }
  }
}
.foot{
    position: fixed;
    bottom:0;
    left: 0;
    right: 0;
    background: rgba(214, 15, 15);
    padding: 10px 20px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    .content{
        display: flex;
        justify-content: space-between;
    }
}
</style>