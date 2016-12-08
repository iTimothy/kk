import {INCREMENT_COUNT} from './events'

const actions = {
    [INCREMENT_COUNT]({commit}){
        commit(INCREMENT_COUNT);
    }
}

export default actions
