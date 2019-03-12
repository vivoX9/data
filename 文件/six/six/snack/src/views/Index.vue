<template>
    <div>
    <!-- 头部 -->
        <Head></Head>
    <!-- 轮播 -->
        <Swiper :bannerData="bannerData"></Swiper>
    <!-- 主体 -->
        <div id="floor">
            <div class="floor" v-for="(item,index) in itemData" :key="index">
                 <div class="top">  
                    <div class="left">{{item.cate.cateName}}</div>
                    <div class="right">{{index+1}}F</div>
                </div>
                <div class="main">
                    <div class="content" v-for="(v,i) in item.data" :key="i" @click="enterDetail(v)">
                         <img v-lazy="v.itemImage" alt="">
                            <p class="name">{{v.itemName}}</p>
                        <div class="bottom">
                            <p class="price">{{v.itemPrice|money}}</p>
                            <p class="addCart" @click.stop="addCart(v)">
                                <van-icon name="cart" size="15px" color="red"/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>      
        </div>
    <!-- 底部 -->
        <Foot></Foot>
    </div>
</template>

<script>
import Head from "../components/Head";
import Foot from "../components/Foot";
import Swiper from "../components/Swiper";
import { mapActions, mapState, mapMutations } from "vuex";
import { Icon } from "vant";
import money from "../filters/money.js";
import { Dialog } from "vant";
export default {
  data() {
    return {
      bannerData: []
    };
  },
  created() {
    this.getBanner();
    this.getFloorData();
  },
  methods: {
    getBanner() {
      this.http("/api/bannerdata").then(res => {
        this.bannerData = res.data.data;
      });
    },
    addCart(item) {
      item.checked = true;
      let res = this.cartData.some((v) => {
        return v.itemName == item.itemName;
      });
      if (res) {
        Dialog.alert({
          title: "提醒",
          message: "购物车中已有此商品，请勿重复添加"
        }).then(() => {
          // on close
        });
      } else {
        this.setCartData(item);
        Dialog.alert({
          title: "提醒",
          message: "添加成功"
        }).then(() => {
          // on close
        });
      }
    },
    enterDetail(itemName) {
      this.$router.push({
        name: "Detail",
        params:{itemName:itemName}
      })
    },
    ...mapActions(["getFloorData"]),
    ...mapMutations(["setCartData"])
  },
  components: {
    Head,
    Swiper,
    Foot
  },
  computed: {
    itemData() {
      return this.$store.state.itemData;
    },
    ...mapState(["cartData"])
  }
};
</script>

<style scoped lang="less">
#floor {
  margin-bottom: 50px;
  .top {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    font-size: 12px;
    font-weight: bold;
    height: 30px;
    line-height: 30px;
  }
  .main {
    display: flex;
    flex-wrap: wrap;
    background: #ccc;
    .content {
      position: relative;
      width: 50%;
      display: flex;
      flex-direction: column;
      background: #fff;
      margin-bottom: 10px;
      .name {
        padding-left: 40px;
        color: rgba(255, 0, 234, 0.74);
        font-size: 12px;
      }
      img {
        width: 150px;
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        .price {
          padding-left: 20px;
          font-size: 14px;
          color: red;
        }
        .addCart {
          padding-right: 20px;
        }
      }
    }
  }
}
.content:nth-child(2n-1):after {
  content: "";
  display: block;
  width: 1px;
  height: 200px;
  background: #ccc;
  position: absolute;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>