import { GetterTree } from "vuex";

import { RootState } from "@/store/types";

const getters: GetterTree<RootState, RootState> = {
  getSidebarVisibility(state) {
    return state.sidebarVisibility;
  },
};

export default getters;
