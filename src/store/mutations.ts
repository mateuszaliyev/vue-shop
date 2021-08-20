import { MutationTree } from "vuex";

import { RootState } from "@/store/types";
import { SET_SIDEBAR_VISIBILITY } from "@/store/mutation-types";

const mutations: MutationTree<RootState> = {
  [SET_SIDEBAR_VISIBILITY](state, payload) {
    state.sidebarVisibility = payload;
  },
};

export default mutations;
