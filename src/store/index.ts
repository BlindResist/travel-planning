import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [
        createPersistedState({
            storage: window.sessionStorage
        })
    ],
    state: {
        lang: 'en',
        processing: false,
        languages: ['ru', 'en'],
        openedRoutes: [
            {
                id: '0',
                name: 'First route',
                selected: false
            },
            {
                id: '1',
                name: 'Second route',
                selected: false
            }
        ]
    },
    mutations: {
        changeLang (state, lang): void {
            state.lang = lang
        },
        processing (state, status: boolean): void {
            state.processing = status
        }
    }
})
