import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	menuActive: false,
	submenuActive: false,
  },
  mutations: {
	toggleMenu (state){
		state.menuActive = !state.menuActive
		if (!state.menuActive) {
			state.submenuActive = false
		}
	},
	toggleSubmenu (state) {
		if (state.menuActive) {
			state.submenuActive = !state.submenuActive
		} else {
			state.submenuActive = false
		}
	}
  },
  actions: {
	toggleMenu(context) {
		context.commit('toggleMenu')
	},
	toggleSubMenu(context) {
		context.commit('toggleSubmenu')
	}
  },
  modules: {
  }
})
