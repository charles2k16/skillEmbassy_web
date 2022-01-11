import Vue from 'vue';
import App from './App.vue';
import mixin from './mixins';
import router from './router';

import Flutterwave from 'flutterwave-vue-v3';

Vue.use(Flutterwave, {
  publicKey: 'FLWPUBK-d5779badebf4fe173a9b8a61c83a5b93-X',
});

import 'material-icons/iconfont/material-icons.css';

import '@/assets/css/main.css';
import '@/plugins/element/index.js';

Vue.mixin(mixin);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
