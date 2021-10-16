<template>
  <div class="bg-yellow-300 h-full flex flex-col pb-5">
    <!-- <h1 class="w-full text-center">Welcome!</h1> -->

    <Card class="ml-10p w-80p mt-10 bg-blue-100">
      <template #title> Hello 👋🏼 </template>
      <template #content>
        <p>
          Welcome to the IsoMetrix front end assessment. To complete this
          assessment you will need to complete the user stories listed below
          along with accompanying tests. For more details refer to the provided
          documentation. To help you to get you started here are the links to
          the two pages you will need to access to:
        </p>
      </template>
      <template #footer>
        <Button class="m-1" @click="goToIncidentManagement()"
          >Incident Management</Button
        >
        <Button class="m-1" @click="goToAddIncident()">Add Incident</Button>
      </template>
    </Card>

    <Card
      v-for="story in userStories"
      :key="story.id"
      class="ml-10p w-80p mt-5 bg-blue-100"
    >
      <template #title> {{ story.title }}</template>
      <template #content>
        <p>{{ story.description }}</p>
      </template>
    </Card>
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
