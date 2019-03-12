<template>
    <div>
        <van-tabbar v-model="active" class="foot">
            <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="wap-nav"  to="Classify">分类</van-tabbar-item>
            <van-tabbar-item icon="cart"  to="Cart" :info="cartData.length">购物车</van-tabbar-item>
            <van-tabbar-item icon="contact" to="My">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  data() {
    return {
      active: 0
    };
  },
  methods:{
  },
  computed:{
    ...mapState(["cartData"])
  }
};
</script>

<style scoped>
</style>