<template>
  <div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-forward</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs",
  data: () => {
    return {
      items: [
        {
          text: "Home",
          disabled: false,
          to: "/",
        },
        {
          text: "Incident Management",
          disabled: false,
          to: "incidentmanagement",
        },
        {
          text: "Add Incident",
          disabled: false,
          to: "addincident",
        },
      ],
    };
  },
};
</script>
