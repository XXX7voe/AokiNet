import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    plugins:[
        createPersistedState({
            storage:window.localStorage,
            key:"history_record",
            render(state) {
                return state.history_record
            },
        })
    ]
})

