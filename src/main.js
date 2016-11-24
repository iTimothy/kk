import Vue from 'vue'
import App from './App'
import router from './router/index'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true
const app = new Vue(Vue.util.extend({
  router
}, App)).$mount('#app')
