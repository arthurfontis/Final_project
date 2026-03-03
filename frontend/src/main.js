import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORÁRIO !!!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFydGh1ciBDLiBGb250aXMiLCJlbWFpbCI6ImZvbnRpc0BleC5jb20uYnIiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNzcyNDk0NzIxLCJleHAiOjE3NzI3NTM5MjF9.pNZipGs-Sb8ErtWlfM63-keMc83_EqwiW10ZmxiQ7Uo'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')