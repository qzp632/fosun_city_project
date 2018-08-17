import Vue from 'vue'
import Vuex from 'vuex'
import indexConfig from './modules/indexConfig'
import allimgConfig from './modules/allimgConfig'
import flags from './modules/flags'
import pathobj from './modules/pathobj'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    indexConfig,
    allimgConfig,
    flags,
    pathobj
  },
  getters
})

export default store
