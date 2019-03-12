import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import mutations from "./mutations"
import state from "./state"
import actions from "./actions"

export default new Vuex.Store({
	state,
	mutations,
    actions,
})