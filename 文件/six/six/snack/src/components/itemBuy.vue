<template>
    <div>
        <div id="main">
            <div class="itemBuy">
                <div class="itemMsg">
                    <div class="top">
                        <div class="img">
                            <div class="img11">
                                <img :src="msg.itemImage" alt="">
                            </div>
                            <van-icon name="close" size="30px" @click="close"/>
                        </div>
                        <p class="itemName">
                            {{msg.itemName}}
                        </p>
                        <p class="itemPrice">
                            {{msg.itemPrice|money}}
                        </p>
                        <div class="count">
                            购买数量
                            <van-stepper v-model="value" />
                        </div>
                        

                    </div>
                
                </div>
            </div>
            <div class="bottom">
                <van-button size="large" type="danger" @click="action">{{actionType}}</van-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import moned from "../filters/money.js";
import { Dialog } from "vant";
export default {
  props: {
    msg: {
      type: Object
    },
    actionType: {
      type: String, //1是加入购物车 2是立刻购买
      default: "加入购物车"
    }
  },
  data() {
    return {
      value: 1
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    action() {
      if ((this.actionType = "加入购物车")) {
        this.msg.checked = true;
        let res = this.cartData.some(v => {
          return v.itemName == this.msg.itemName;
        });
        if (res) {
          Dialog.alert({
            title: "提醒",
            message: "购物车中已有此商品，请勿重复添加"
          }).then(() => {
            // on close
          });
        } else {
          this.setCartData(this.msg);
          Dialog.alert({
            title: "提醒",
            message: "添加成功"
          }).then(() => {
            // on close
          });
        }
        this.$emit("done");
        this.$emit("Out");
      } else {
        alert(1);
      }
    },
    ...mapMutations(["setCartData"])
  },
  computed: {
    ...mapState(["cartData"])
  }
};
</script>

<style scoped lang="less">
#main {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 195, 255, 0.5);
}
.itemBuy {
  padding: 20px 20px;
  .itemMsg {
    .top {
      .count {
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .itemName {
        color: rgba(255, 0, 234, 0.74);
      }
      .itemPrice {
        color: red;
      }
      .img {
        .img11 {
          border: 1px solid #ccc;

        }
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        img {
          width: 100px;
          vertical-align: bottom;
        }
      }
    }
  }
}
</style>