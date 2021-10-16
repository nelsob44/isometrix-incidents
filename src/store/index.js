import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    record: {},
    records: [],
    isLoading: false,
  },

  mutations: {
    setRecords(state, payload) {
      state.records = payload;
    },
  },

  actions: {
    async fetchRecords({ commit }) {
      const response = await axios.get("https://localhost:5001/IncidentTypes", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      const records = response.data;
      commit("setRecords", records);
    },
  },

  getters: {
    getRecords(state) {
      return state.records;
    },
  },
});
