<template>
  <div class="bg-yellow-300 h-full mx-10 my-4 flex flex-col">
    <!-- <h1 class="w-full text-center">Welcome!</h1> -->

    <v-card class="ml-10p w-80p bg-blue-100">
      <v-card-text class="text-2xl font-semibold">Hello 👋🏼</v-card-text>
      <v-card-text class="font-medium">
        <p>
          Welcome to the IsoMetrix front end assessment. To complete this
          assessment you will need to complete the user stories listed below
          along with accompanying tests. For more details refer to the provided
          documentation. To help you to get you started here are the links to
          the two pages you will need to access to:
        </p>
      </v-card-text>
      <p>
        <v-btn
          class="primary-class mx-2 mb-2"
          @click="goToIncidentManagement()"
          style="background-color: rgba(37, 99, 235, 0.7); color: #fff;"
          >Incident Management</v-btn
        >
        <v-btn
          class="mx-2 mb-2 primary-class"
          @click="goToAddIncident()"
          style="background-color: rgba(37, 99, 235, 0.7); color: #fff;"
          >Add Incident</v-btn
        >
      </p>
    </v-card>

    <v-card
      v-for="story in userStories"
      :key="story.id"
      class="ml-10p w-80p mt-5 bg-blue-100"
    >
      <v-card-text class="text-2xl font-semibold">
        {{ story.title }}</v-card-text
      >
      <v-card-text class="font-medium">
        <p>{{ story.description }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { userStories } from "../data";

import router from "../router";
export default {
  data: function() {
    return {
      userStories: userStories,
    };
  },

  methods: {
    goToIncidentManagement() {
      router.push({ path: "incidentmanagement" });
    },
    goToAddIncident() {
      router.push({ path: "addincident" });
    },
  },
};
</script>
