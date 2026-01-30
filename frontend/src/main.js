import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORÁRIO !!!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFydGh1ciBDLiBGb250aXMiLCJlbWFpbCI6ImZvbnRpc0BleC5jb20uYnIiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNzY5NzI1NjEyLCJleHAiOjE3Njk5ODQ4MTJ9.8CgW9GFtrr1d09d9HOps-ejkjF1dW4r6vIbJrB2gWvs'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')