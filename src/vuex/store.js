import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

import nav from './modules/nav'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules: {
        nav
    }
})
