import Vue from "vue"
export default Vue.filter("money",(n)=>{
    return "￥"+n
})