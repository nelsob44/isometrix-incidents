<template>
  <v-simple-table>
    <template v-slot:default>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>
            <p>Record#</p>
            <p class="font-bold">{{ item.recordNumber }}</p>
          </td>
          <td>
            <p>What hppened?</p>
            <p class="font-bold">{{ item.description }}</p>
          </td>
          <td>
            <p>Date occurred:</p>
            <p>{{ item.dateOriginal }}</p>
            <p>Section:</p>
            <p class="font-bold">{{ item.section }}</p>
          </td>
          <td>
            <p>Impact Type:</p>
            <span v-for="type in item.impactTypes" :key="type.id">
              <v-btn
                class="ma-2 mr-2 mb-2"
                style="background-color: rgba(37, 99, 235, 0.7); color: #fff;"
                small
              >
                {{ type.name }}
              </v-btn>
            </span>
          </td>
          <td>
            <p>Event Type:</p>
            <span v-for="event in item.eventTypes" :key="event.id">
              <v-btn
                class="ma-2 mr-2 mb-2"
                style="background-color: rgba(37, 99, 235, 0.7); color: #fff;"
                small
              >
                {{ event.name }}
              </v-btn>
            </span>
          </td>
          <td>
            <p>
              <small>
                Action:
              </small>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="ma-2"
                    outlined
                    color="indigo"
                    small
                    style="color: #00ff00;"
                    v-bind="attrs"
                    v-on="on"
                  >
                    + Add
                  </v-btn>
                </template>
                <span>Action button</span>
              </v-tooltip>
            </p>
            <p>
              <small>Finding: </small>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="ma-2"
                    outlined
                    color="indigo"
                    small
                    style="color: #00ff00;"
                    v-bind="attrs"
                    v-on="on"
                  >
                    + Add
                  </v-btn>
                </template>
                <span>Finding button</span>
              </v-tooltip>
            </p>
          </td>
          <td>
            <div v-if="item.status > 2">
              <p class="green">Reported</p>
              <p>Modified: {{ item.dateModified }}</p>
            </div>
            <div v-else>
              <p class="amber">Under Investigation</p>
              <p>Modified: {{ item.dateModified }}</p>
            </div>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "RecordsView",
  components: {},
  props: {
    items: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  created() {
    console.log(this.items);
  },
};
</script>

<style scoped>
.green {
  color: #00ff00;
}
.amber {
  color: #ffd79f;
}
.primary-class {
  background-color: rgba(37, 99, 235, 0.7);
}
</style>
