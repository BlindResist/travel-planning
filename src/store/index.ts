import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { IRoute, IRootState } from '@/types/types'

Vue.use(Vuex)

const store: StoreOptions<IRootState> = {
    plugins: [
        createPersistedState({
            storage: window.sessionStorage
        })
    ],
    state: {
        lang: 'en',
        processing: false,
        languages: ['ru', 'en'],
        routes: [
            // {
            //     id: '0',
            //     name: 'First route',
            //     opened: false,
            //     selected: false,
            //     costs: 200000,
            //     date: [1625153594, 1625153594]
            // },
            // {
            //     id: '1',
            //     name: 'Second route',
            //     opened: false,
            //     selected: false,
            //     costs: 250000,
            //     date: [1625153594, 1625153594]
            // }
        ]
    },
    mutations: {
        changeLang (state, lang): void {
            state.lang = lang
        },
        processing (state, status: boolean): void {
            state.processing = status
        },
        openRoute (state, id): void {
            if (state.routes?.length) {
                state.routes.forEach((item: IRoute): void => {
                    if (item.id === id) item.opened = true
                })
            }
        },
        closeRoute (state, id): void {
            if (state.routes?.length) {
                state.routes.forEach((item: IRoute): void => {
                    if (item.id === id) {
                        item.opened = false
                        item.selected = false
                    }
                })
            }
        },
        selectRoute (state, id): void {
            if (state.routes?.length) {
                state.routes.forEach((item: IRoute): void => {
                    if (id === null) {
                        item.selected = false
                        return
                    }

                    item.selected = item.id === id
                })
            }
        }
    }
}

export default new Vuex.Store<IRootState>(store)
