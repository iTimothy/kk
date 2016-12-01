import {INCREMENT_COUNT} from './events'

const mutations = {
    [INCREMENT_COUNT](state){
        state.count = state.count + 6;
    }
};

export default mutations;
