<template>
    <div>
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(v,index) in bannerData" :key="index">
                <img :src="v.img" alt="" class="img">
            </van-swipe-item>   
        </van-swipe>
    </div>
</template>

<script>
export default {
        props:{
            bannerData:{
                type:Array
            }
        }
};
</script>

<style scoped>
.van-swipe {
  margin-top: 40px;
}
.van-swipe img {
  width: 100%;
  vertical-align: bottom;
}
</style>