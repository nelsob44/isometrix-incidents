import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import dayjs from "dayjs";

Vue.use(Vuex);

const baseURL = "https://localhost:5001";

const formatDate = (date) => {
  return dayjs.unix(date).format("DD/MM/YYYY");
};

export const store = new Vuex.Store({
  state: {
    record: {},
    records: [],
    isLoading: false,
    sortDescending: false,
  },

  mutations: {
    SET_RECORDS(state, payload) {
      state.records = payload;
    },
    SET_LOADING_STATUS(state, payload) {
      state.isLoading = payload;
    },
    SET_SORT_ORDER_TOGGLE(state, payload) {
      state.sortDescending = payload;
    },
  },

  actions: {
    async fetchRecords({ commit }) {
      commit("SET_LOADING_STATUS", true);
      const response = await axios.get(baseURL + "/IncidentTypes", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      const recordsWithUnixDate = response.data;
      const records = [];
      recordsWithUnixDate.map((rec) => {
        rec.dateModified = formatDate(rec.dateModified);
        rec.dateOriginal = formatDate(rec.dateOriginal);
        records.push(rec);
      });
      commit("SET_RECORDS", records);
      commit("SET_LOADING_STATUS", false);
    },
    sortIncidents({ commit, getters }) {
      let sortOrder = getters.getSortDirection;

      const currentRecords = getters.getRecords;
      if (sortOrder) {
        const records = currentRecords.sort((a, b) =>
          a.recordNumber > b.recordNumber ? 1 : -1
        );
        commit("SET_RECORDS", records);
      } else {
        const records = currentRecords.sort((a, b) =>
          b.recordNumber > a.recordNumber ? 1 : -1
        );
        commit("SET_RECORDS", records);
      }
      commit("SET_SORT_ORDER_TOGGLE", !sortOrder);
    },
  },

  getters: {
    getRecords(state) {
      return state.records;
    },
    getLoadingStatus(state) {
      return state.isLoading;
    },
    getSortDirection(state) {
      return state.sortDescending;
    },
  },
});
