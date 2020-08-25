import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    redirect: "/list",
    children: [
      {
        path: "list",
        name: "list",
        alias: "列表",
        icon: "point-gift-o",
        component: () => import("../lient/list.vue"),
      },
      {
        path: "actiov",
        name: "actiov",
        alias: "活动",
        icon: "underway-o",
        component: () => import("../lient/actiov.vue"),
      },
      {
        path: "cart",
        name: "cart",
        alias: "购物车",
        icon: "shopping-cart-o",
        component: () => import("../lient/cart.vue"),
      },
      {
        path: "my",
        name: "my",
        alias: "我的",
        icon: "manager-o",
        component: () => import("../lient/my.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
