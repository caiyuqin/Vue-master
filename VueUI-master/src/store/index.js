import Vue from 'vue'
import Vuex from 'vuex'
import Button from "./modules/button"

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		Button
	}
})