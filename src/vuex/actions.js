import {INCREMENT_COUNT} from './events'

const actions = {
    incrementAction({commit}){
        commit(INCREMENT_COUNT);
    }
}

export default actions
