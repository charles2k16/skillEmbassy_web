import Vue from 'vue';
import App from './App.vue';
import mixin from './mixins';
import router from './router';

// import Flutterwave from 'flutterwave-vue-v3';

// Vue.use(Flutterwave, {
//   publicKey: 'FLWPUBK-5ebd017ca95ff4070bc5f4a5929ae790-X',
// });

import 'material-icons/iconfont/material-icons.css';

import '@/assets/css/main.css';
import '@/plugins/element/index.js';

Vue.mixin(mixin);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
