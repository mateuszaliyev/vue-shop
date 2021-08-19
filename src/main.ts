import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";

import frag from "vue-frag";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import icons from "@/lib/fontawesome";

library.add(...icons);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.directive("frag", frag);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
