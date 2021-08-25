import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/cart",
    name: "Cart",
    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart.vue"),
  },
  {
    path: "/products/:id",
    name: "ProductCard",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/ProductCard.vue"),
  },
  {
    path: "/:category?/:subcategory?",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior: (to) => {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
  },
});

export default router;
