import { Module } from "vuex";

type RootState = Record<string, unknown>;

interface IProduct {
  company: string;
  description: string;
  id: number;
  image: string;
  price: string;
  productName: string;
  shortDescription: string;
}

interface IProductState {
  error: string | null;
  loading: boolean;
  products: Array<IProduct>;
}

const productsModule: Module<IProductState, RootState> = {
  state: {
    error: null,
    loading: false,
    products: [],
  },

  getters: {
    getError(state) {
      return state.error;
    },

    getLoading(state) {
      return state.loading;
    },

    getProducts(state) {
      return state.products;
    },
  },

  actions: {
    async fetchProducts({ commit }) {
      commit("setLoading", true);

      try {
        const res = await fetch(
          "http://www.mocky.io/v2/5ab0d1882e0000e60ae8b7a6"
        );

        if (!res.ok) {
          commit("setLoading", false);
          commit("setError", "Couldn't reach API. Try again later");
        }

        const data: Array<IProduct> = await res.json();

        if (!data || !data.length) {
          commit("setLoading", false);
          commit("setError", "Received data is empty");
        }

        commit("setLoading", false);
        commit("setError", null);
        commit("setProducts", data);
        console.log(data);
      } catch (error) {
        console.error(error);
        commit("setLoading", false);
        commit("setError", "Internal Server Error");
      }
    },
  },

  mutations: {
    setError(state, value: string | null) {
      state.error = value;
    },

    setLoading(state, value: boolean) {
      state.loading = value;
    },

    setProducts(state, value: Array<IProduct>) {
      state.products = value;
    },
  },
};

export default productsModule;
