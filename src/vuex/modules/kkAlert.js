const CLOSE_KKALERT = 'CLOSE_KKALERT'
const OPEN_KKALERT = 'OPEN_KKALERT'

const state = {
    kkAlertState:false,
}

const getters = {
    getKkAlertState: state=> state.kkAlertState
}

const mutations = {
    [CLOSE_KKALERT](state){
        state.kkAlertState = false
    },
    [OPEN_KKALERT](state){
        state.kkAlertState = true
    }
}

export default {
    state,
    getters,
    mutations
}
