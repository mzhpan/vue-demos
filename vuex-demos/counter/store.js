/**
 * Created by xulingming on 2017/6/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object
// each Vuex instance is just a single state tree.
const state = {
    count: 0
}

const mutations = {
    increment (state) {
        state.count++;
    },

    decrement (state) {
        "use strict";
        state.count--;
    }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
    increment: ({commit}) => commit('increment'),
    decrement: ({commit}) => commit('decrement'),
    incrementIfOdd: ({commit, state}) => {
        if ((state.count + 1) % 2 === 0) {
            commit('decrement')
        }
    },
    incrementAsync: ({commit}) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('increment')
                resolve()
            }, 1000)
        })
    }
}

// getters are functions
const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
