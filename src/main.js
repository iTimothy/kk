import Vue from 'vue'
import App from './App'
import router from './router/index'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import store from './vuex/store'

Vue.use(VueResource)
Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true

const app = new Vue(Vue.util.extend({
  router,
  store
}, App)).$mount('#app')
