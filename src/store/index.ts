import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lang: 'en',
        processing: false
    },
    mutations: {
        changeLang (state, lang): void {
            state.lang = lang
        }
    },
    actions: {},
    modules: {}
})
