<template>
    <div>
        <Head msg="我的"></Head>
        <div class="top">
            <div class="content">
                <div class="img">
                    <img src="../../static/img/goods/head.jpg" alt="">
                </div>
                <p @click="fn">编辑</p>
            </div>
        </div>
        <div class="bottom">
            <div class="main">
                <div class="common">
                    <p>全部订单</p>  
                    <div>
                        <van-icon name="arrow" />
                    </div>
                </div>
                <div class="common">
                    <p>我的钱包</p>  
                    <div>
                        <van-icon name="arrow" />
                    </div>
                </div>
                <div class="common">
                    <p>我的地址</p>  
                    <div>
                        <van-icon name="arrow" />
                    </div>
                </div>
                <div class="common">
                    <p>关于我们</p>  
                    <div>
                        <van-icon name="arrow" />
                    </div>
                </div>
            </div>
        </div>
        <Foot></Foot>
    </div>
</template>

<script>
import Head from "../components/Head";
import Foot from "../components/Foot";
export default {
  data() {
    return {};
  },
  methods: {
      fn(){
          alert(1)
      }
  },
  components: {
    Head,
    Foot
  },
  computed: {}
};
</script>

<style scoped lang="less">
.top {
    background: rgba(39, 223, 255, 0.582);
    margin-top: 40px;
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        .img {
            width: 80px;
            border: 2px solid #ccc;
            border-radius: 50%;
            overflow: hidden;
            img {
            width: 100%;
            vertical-align: bottom;
            }
        }
        p{
            font-size: 20px;
            font-weight: bold;
        }
    }
}
.bottom{
    margin-bottom: 50px;
    .main{
        padding: 20px 10px;
        .common{
            border-bottom:1px solid #ccc;  
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
}
</style>