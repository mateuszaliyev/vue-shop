import { ActionTree } from "vuex";

import { RootState } from "@/store/types";
import { SET_SIDEBAR_VISIBILITY } from "@/store/mutation-types";

const actions: ActionTree<RootState, RootState> = {
  hideSidebar({ commit }) {
    commit(SET_SIDEBAR_VISIBILITY, false);
  },
  showSidebar({ commit }) {
    commit(SET_SIDEBAR_VISIBILITY, true);
  },
  toggleSidebar({ commit, state }) {
    commit(SET_SIDEBAR_VISIBILITY, !state.sidebarVisibility);
  },
};

export default actions;
