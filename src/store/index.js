import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	menuActive: false,
	submenuActive: [
		false, // [0] schedule
		false, // [1] safety
		false, // [2] admin
		false  // [3] catering
	],
  },
  mutations: {
	toggleMenu (state){
		state.menuActive = !state.menuActive
		if (!state.menuActive) {
			let arr = [false,false,false,false]
			state.submenuActive = arr
		}
	},
	setMenu (state, bool){
		state.menuActive = bool
		if (!state.menuActive) {
			let arr = [false,false,false,false]
			state.submenuActive = arr
		}
	},
	toggleSubmenu (state, index) {
		let arr = [false,false,false,false]
		if (state.menuActive) {
			arr[index] = !state.submenuActive[index]
			state.submenuActive = arr
		} else {
			state.submenuActive = arr
		}
		console.log(state.submenuActive)
	}
  },
  actions: {
	toggleMenu(context) {
		context.commit('toggleMenu')
	},
	toggleSubMenu(context, index) {
		// console.log('commiting: ' + index)
		context.commit('toggleSubmenu', index)
	}
  },
  getters: {
	submenus: (state) => (index) => {
		// console.log(index + ": " + state.submenuActive[index])
		return state.submenuActive[index]
	}
  },
  modules: {
  }
})
