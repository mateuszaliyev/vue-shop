import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/cart",
    name: "Cart",
    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart.vue"),
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () =>
      import(/* webpackChunkName: "checkout" */ "../views/Checkout.vue"),
  },
  {
    path: "/summary",
    name: "Summary",
    component: () =>
      import(/* webpackChunkName: "summary" */ "../views/Summary.vue"),
  },
  {
    path: "/products/:id",
    name: "ProductCard",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/ProductCard.vue"),
  },
  {
    path: "/search/:query?",
    name: "Search",
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/Search.vue"),
  },
  {
    path: "/:category?/:subcategory?",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
];

const router = new VueRouter({
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
