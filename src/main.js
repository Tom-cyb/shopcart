import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { NavBar } from "vant";
import { Tabbar, TabbarItem, Sticky, PullRefresh, Card } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Sticky);
Vue.use(PullRefresh);
Vue.use(Card);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
