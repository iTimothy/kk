const SHOW_NAV = 'SHOW_NAV'
const HIDE_NAV = 'HIDE_NAV'

const state = {
    navState:true,
}

const getters = {
    getNavState: state=> state.navState
}

const mutations = {
    [HIDE_NAV](state){
        state.navState = false
    },
    [SHOW_NAV](state){
        state.navState = true
    }
}

const actions = {
    showNav({commit}){
        commit('SHOW_NAV')
    },
    hideNav({commit}){
        commit('HIDE_NAV')
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
