import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { NavBar } from "vant";
import { Tabbar, TabbarItem, Sticky, PullRefresh, Card } from "vant";
import {
  ShareSheet,
  Checkbox,
  CheckboxGroup,
  Button,
  SubmitBar,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Stepper,
  IndexBar,
  IndexAnchor,
} from "vant";
Vue.use(Stepper);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(GoodsAction);
Vue.use(GoodsActionIcon);
Vue.use(GoodsActionButton);
Vue.use(ShareSheet);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Sticky);
Vue.use(PullRefresh);
Vue.use(Card);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Button);
Vue.use(SubmitBar);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
