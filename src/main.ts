import Vue from 'vue'
import i18n from '@/i18n'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'

import '@/utils/filters'
import '@/utils/directives'

Vue.config.productionTip = false

new Vue({
    i18n,
    store,
    router,
    render: h => h(App)
}).$mount('#app')
