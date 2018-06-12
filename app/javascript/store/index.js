import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  auth: false
}

export default new Vuex.Store({
  state
})
