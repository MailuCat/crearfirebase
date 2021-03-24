import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import bootstrap from 'bootstrap'
// You can specify which plugins you need
import { Tooltip, Toast, Popover } from 'bootstrap';

import firebase from 'firebase'
import {firebaseConfig} from '@/config/configFirebase.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig)

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
