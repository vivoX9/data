<template>
    <div>
        <HeadDetail msg="地址详情" @back="back"></HeadDetail>
        <div class="list">
            <van-radio-group v-model="radio" @change="change">
				<van-cell-group>
					<van-cell v-for="(item,index) in adressData" :key="index" :title="item.adress" >
					    <van-radio name="1" />
					</van-cell>
				</van-cell-group>
			</van-radio-group>
        </div>
        <div class="addAdress" @click="add">
            <van-address-list/>
        </div>
        <div>
            <van-popup v-model="show" position="bottom">
                <van-area :area-list="areaList" @confirm="confirm" @cancel="cancel"/>
            </van-popup>
        </div>

    </div>
</template>

<script>
import HeadDetail from "../components/HeadDetail";
import Adress from "../api/adress.js";
import { mapState, mapMutations } from "vuex";
import del from "../filters/del.js";
import { Dialog } from "vant";

export default {
  data() {
    return {
      radio: 0,
      show: false,
      areaList: {}
    };
  },
  created() {
    //   取出默认地址的下标
    let index = 0;
    for (var i = 0; i < this.adressData.length; i++) {
      if (this.adressData[i].default == true) {
        index = i;
      }
    }
    this.radio = index;
    this.areaList = Adress;
  },

  methods: {
    // 点击返回上一页
    back() {
      this.$router.go(-1);
    },
    // 设置默认地址
    change(n) {
      //设为默认地址
      this.setDefault(n);
      this.$router.go(-1);
    },
    add() {
      this.show = true;
    },
    // 点击确定添加地址到state
    confirm(arr) {
      let adressx = arr[0].name + arr[1].name + arr[2].name;
      // 注意不能直接添加，adressData是个数组套json
      let adress = {
        name: adressx,
        default: false
      };
      this.addAddress(adressx);
    },
    // 点击取消隐藏
    cancel() {
      this.show = false;
    },
    onEdit() {},
    ...mapMutations(["setDefault","addAddress"])
  },
  components: {
    HeadDetail
  },
  computed: {
    ...mapState(["adressData"])
  }
};
</script>

<style scoped lang="less">
.list {
  margin-top: 50px;
  .dot {
    margin-right: 10px;
  }
  .adress {
    padding: 10px 20px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    .main {
      display: flex;
      align-items: center;
      .icon {
        margin-right: 10px;
      }
    }
  }
}
</style>