import Vue from 'vue'
import App from './App'
import { requestUtil } from './utils/requestUtil.js'

Vue.prototype.$requestUtil = requestUtil

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
