<template>
  <div class="w-90p ml-5p p-0 my-4 mx-10 shadow-lg h-full">
    <div class="flex bg-isogray-3 items-center h-10">
      <h1 class="ml-4 font-bold flex-1">Incident Management</h1>
      <div class="icon-container bg-green cursor-pointer" @click="sortData()">
        <v-btn
          class="ma-2"
          style="background-color: rgba(37, 99, 235, 0.7); color: #fff;"
        >
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M15,19.88C15.04,20.18 14.94,20.5 14.71,20.71C14.32,21.1 13.69,21.1 13.3,20.71L9.29,16.7C9.06,16.47 8.96,16.16 9,15.87V10.75L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L15,10.75V19.88M7.04,5L11,10.06V15.58L13,17.58V10.05L16.96,5H7.04Z"
            />
          </svg>
        </v-btn>
      </div>
      <div class="icon-container bg-green cursor-pointer" @click="onClickAdd()">
        <v-btn class="ma-2" style="background-color: #00ff00; color: #fff;">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
            />
          </svg>
        </v-btn>
      </div>
    </div>
    <div class="mb-4">
      <nav class="px-4 flex justify-between bg-blue-500 h-8 w-full"></nav>
    </div>
    <RecordsView
      v-if="products.length"
      :items="products"
      :isLoading="isLoading"
    ></RecordsView>
    <div v-if="isLoading">
      <v-skeleton-loader
        v-bind="attrs"
        type="table-heading, list-item-two-line, image, table-tfoot"
      ></v-skeleton-loader>
    </div>
  </div>
</template>

<script>
import RecordsView from "../components/RecordsView.vue";
import router from "../router";
import { store } from "../store";

export default {
  name: "IncidentManagement",
  components: {
    RecordsView,
  },
  data: () => {
    return {
      attrs: {
        class: "mb-6",
        boilerplate: true,
        elevation: 2,
      },
    };
  },
  computed: {
    products() {
      return store.getters.getRecords;
    },
    isLoading() {
      return store.getters.getLoadingStatus;
    },
  },

  created() {
    store.dispatch("fetchRecords");
  },
  methods: {
    onClickAdd() {
      router.push({ path: "addincident" });
    },
    sortData() {
      store.dispatch("sortIncidents");
    },
  },
};
</script>
