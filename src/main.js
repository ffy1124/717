import Vue from 'vue';
import App from './App.vue';
import router from './router/config';
import MintUi from 'mint-ui';
import axios from './http/axios';
import message from './plugins/message/index';
import loading from './plugins/loading/index';
import store from './store/index';
import 'mint-ui/lib/style.css';
import './common/fonts/demo.css';
import './plugins/message/message.css';
import './common/css/bootstrap.min.css';
import './common/css/swiper.min.css';
import './common/css/font-awesome.min.css';
import './common/fonts/iconfont.css';
import './common/css/common.css';
import './common/css/reset.css';
Vue.use(message);
Vue.use(loading);
Vue.use(MintUi);
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
