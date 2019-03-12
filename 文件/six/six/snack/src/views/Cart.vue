<template>
    <div>
        <Head msg="购物车"></Head>
        <div id="main">
            <div v-for="(v,index) in cartData" :key="index">
                <van-swipe-cell :right-width="65" :left-width="0">
			        <van-cell-group>
			            <div @click="checkState">
			    	        <van-checkbox v-model="v.checked"></van-checkbox>
			            </div>
                        <van-card class="content"
                            :title="v.itemName"
                            :num="v.itemNum"
                            :price="v.itemPrice"
                            :thumb="v.itemImage"
                        >   
                            <div slot="footer">
                                <van-button size="mini" @click="reduceNum(index)">-</van-button>
                                <van-button size="mini" @click="addNum(index)">+</van-button>
                            </div>
                        </van-card>
                    </van-cell-group>
                    <van-button size="small" type="danger" slot="right" style="margin-top:40px" @click="del(index)">删除</van-button>
				</van-swipe-cell>
            </div>
        </div>
        <!--提交订单 -->
        <van-submit-bar
            :price="totalPrice"
            button-text="提交订单"
            @submit="onSubmit"
        >
         <div @click="allChecked">
        <van-checkbox v-model="Allchecked">全选</van-checkbox>
        </div>
        </van-submit-bar>
        
        <Foot></Foot>
    </div>
</template>

<script>
import Head from "../components/Head";
import Foot from "../components/Foot";
import { SwipeCell } from "vant";
import { mapState } from "vuex";
export default {
  data() {
    return {
      imageURL: "../../static/img/goods/home_floor_one_2.jpg",
      num: 2,
      Allchecked: true,
      totalPrice: 0
    };
  },
  mounted() {
    this.calculate();
    this.isAllchecked();
  },
  methods: {
    // 提交订单
    onSubmit() {
      let checkeds = this.cartData.filter(item => {
        return item.checked == true;
      });
      this.$router.push({
        name: "Pay",
        params: {
          itemMsg: checkeds,
          total: this.totalPrice
        }
      });
    },
    // 点击重新计算价格
    checkState() {
      this.calculate();
      this.isAllchecked();
    },
    //增加商品数量
    addNum(index) {
      this.cartData[index].itemNum++;
      this.calculate();
    },
    // 减少商品数量
    reduceNum(index) {
      if (this.cartData[index].itemNum <= 1) {
        this.cartData[index].itemNum = 1;
        return;
      } else {
        this.cartData[index].itemNum--;
        this.calculate();
      }
    },
    //滑动删除
    del(index) {
      this.cartData.splice(index, 1);
      this.calculate();
    },
    // 判断是否全部选中
    isAllchecked() {
      this.Allchecked = this.cartData.every(item => {
        return item.checked == true;
      });
    },
    // 点击全选和取消全选
    allChecked(item) {
      if (this.Allchecked == true) {
        this.cartData.forEach(item => {
          return (item.checked = true);
        });
      } else {
        this.cartData.forEach(item => {
          return (item.checked = false);
        });
      }
      this.calculate();
    },
    // 计算价格
    calculate() {
      let subArr = this.cartData.filter((item, index) => {
        return item.checked == true;
      });
      this.totalPrice = 0;
      subArr.forEach(item => {
        this.totalPrice += item.itemPrice * item.itemNum;
      });
      this.totalPrice = this.totalPrice * 100; /*默认vant放大了100倍*/
    }
  },
  components: {
    Head,
    Foot
  },
  computed: {
    ...mapState(["cartData"])
  }
};
</script>

<style scoped lang="less">
#main {
  padding-top: 40px;
  padding-bottom: 100px;
  .van-submit-bar {
    bottom: 50px;
  }
  .van-cell-group {
    display: flex;
    align-items: center;
    padding-left: 10px;
  }
  .van-card {
    background: #fff;
  }
}
.van-submit-bar {
  bottom: 50px;
}
#main .van-swipe-cell__right {
  line-height: 110px;
}
#main .content {
  width: 330px;
}
</style>