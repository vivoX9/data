const mutations = {
  reduceData(state, data) {
    // console.log(12)
    state.data1 -= 1
    state.data1 = Number(state.data1)
  },
  addData(state, data) {
    state.data1 += 1
    state.data1 = Number(state.data1)
  }
}
export default mutations
