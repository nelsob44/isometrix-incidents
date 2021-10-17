<template>
  <div class="w-90p ml-5p p-0 my-4 mx-10 shadow-lg h-full">
    <div
      class="flex bg-isogray-3 items-center h-10"
      style="background-color: #d3d3d3;"
    >
      <h1 class="ml-4 font-bold flex-1">Add Incident</h1>
      <div class="icon-container bg-green cursor-pointer">
        <v-btn
          class="ma-2"
          style="background-color: rgba(37, 99, 235, 0.7); color: #fff;"
        >
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M10,2C8.89,2 8,2.89 8,4V7C8,8.11 8.89,9 10,9H11V11H2V13H6V15H5C3.89,15 3,15.89 3,17V20C3,21.11 3.89,22 5,22H9C10.11,22 11,21.11 11,20V17C11,15.89 10.11,15 9,15H8V13H16V15H15C13.89,15 13,15.89 13,17V20C13,21.11 13.89,22 15,22H19C20.11,22 21,21.11 21,20V17C21,15.89 20.11,15 19,15H18V13H22V11H13V9H14C15.11,9 16,8.11 16,7V4C16,2.89 15.11,2 14,2H10M10,4H14V7H10V4M5,17H9V20H5V17M15,17H19V20H15V17Z"
            />
          </svg>
        </v-btn>
      </div>
      <div class="icon-container bg-green cursor-pointer" @click="onClose()">
        <v-btn class="ma-2" style="background-color: #ff3333; color: #fff;">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z"
            />
          </svg>
        </v-btn>
      </div>
    </div>
    <div>
      <v-container fluid>
        <form @submit.prevent="submit">
          <v-row align="center">
            <v-col class="d-flex" cols="12">
              <v-text-field
                v-model="description"
                label="What Happened?"
                required
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col class="d-flex" cols="12" sm="6">
              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="dateFormatted"
                    hint="MM/DD/YYYY format"
                    persistent-hint
                    v-bind="attrs"
                    @blur="date = parseDate(dateFormatted)"
                    v-on="on"
                    outlined
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  no-title
                  @input="menu1 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>

            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                :items="items"
                outlined
                label="Section"
                v-model="section"
              ></v-select>
            </v-col>

            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                :items="items"
                label="Impact Type"
                outlined
                multiple
                chips
                v-model="impactTypes"
              ></v-select>
            </v-col>

            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                :items="items"
                label="Event Type"
                multiple
                chips
                outlined
                v-model="eventTypes"
              ></v-select>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                :items="items"
                label="Status"
                outlined
                v-model="status"
              ></v-select>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col>
              <v-spacer></v-spacer>
              <div class="object-right">
                <v-btn
                  type="submit"
                  style="background-color: rgba(37, 99, 235, 0.7); color: #fff;"
                >
                  Confirm
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </form>
      </v-container>
    </div>
  </div>
</template>

<script>
import router from "../router";

export default {
  data: (vm) => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    description: "",
    impactTypes: [],
    dateOriginal: "",
    eventTypes: [],
    section: "",
    status: "",
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    dateFormatted: vm.formatDate(
      new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10)
    ),
    menu1: false,
  }),
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },

  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    },
  },
  methods: {
    submit() {
      console.log(this.description);
      console.log(this.impactTypes);
      console.log(this.dateOriginal);
      console.log(this.eventTypes);
      console.log(this.section);
      console.log(this.status);
      console.log(this.computedDateFormatted);
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    onClose() {
      router.push({ path: "incidentmanagement" });
    },
  },
};
</script>
