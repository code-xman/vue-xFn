import Vue from 'vue'
import Vuex from 'vuex'
import menuData from './menuData.js'
import assetsData from './assetsData.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuData,
    assetsData
  },
  mutations: {},
  actions: {}
})
