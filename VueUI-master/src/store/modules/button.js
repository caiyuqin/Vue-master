/*import * as types from '../mutation-types'*/
const state = {
	target: "",
	id: "",
	dropmark: "",
}
const getters = {
	newTarget: state => state.target,
	newId: state => state.id,
	newMark: state => state.dropmark
}
const mutations = {
	modalChange(state, payload) {
		state.target = payload.modaltarget,
			state.id = payload.modalId

	},
	dropOpen(state, payload) {
		state.dropmark = payload
	}
}

export default {
	state,
	getters,
	mutations
}