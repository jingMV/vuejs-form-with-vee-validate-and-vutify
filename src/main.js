import Vue from 'vue'
//vuetify
import './plugins/vuetify'
import App from './App.vue'
//vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//components
import Home from './components/Home'
//VeeValidate
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);
//vue select region
import vueCountryRegionSelect from 'vue-country-region-select'
Vue.use(vueCountryRegionSelect)
//VUEXXXX
import { store } from './store/store'

export default Vue.extend({
  data: () => ({
    country: '',
    region: ''
  })
})


const routes = [
  {path: '/', component: Home}
]

const router = new VueRouter ({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
