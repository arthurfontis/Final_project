import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORÁRIO !!!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFydGh1ciBDLiBGb250aXMiLCJlbWFpbCI6ImZvbnRpc0BleC5jb20uYnIiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNzY5NjUwNTc5LCJleHAiOjE3Njk5MDk3Nzl9.sM5k0w8IqgJpFDCZaWz80lHw72vfGp2EOO5qKH4AsxI'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')