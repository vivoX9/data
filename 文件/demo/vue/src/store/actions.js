import axios from "axios"
const actions = {
  reduceData({
    commit
  }, params) {
    async function reduce(params) {
      //   let res = await axios.post(url, params)
      let res = params
      return res
    }
    reduce(params).then(res => {
      let data = res
      commit("reduceData", data)
    })
  },
  addData({
    commit
  }, params) {
    async function add(params) {
      let res = params
      return res
    }
    add(params).then(res => {
      let data = res
      commit("addData", data)
    })
  }
}
export default actions
