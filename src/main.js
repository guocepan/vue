import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
// Vue.use(axios);    这句话打死不能用，axios引入后就能用
Vue.prototype.axios = axios;  //这句话可以使用。
// Vue.prototype.$http = axios;
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
