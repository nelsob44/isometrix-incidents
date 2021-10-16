import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      breadcrumbRoute: [{ label: "Home" }],
      title: "Home",
    },
  },
  {
    path: "/incidentmanagement",
    name: "IncidentManagement",
    meta: {
      breadcrumbRoute: [{ label: "Incident Management" }],
      title: "Incident Management",
    },
    component: () => import("../views/IncidentManagement.vue"),
  },
  {
    path: "/addincident",
    name: "AddIncident",
    meta: {
      breadcrumbRoute: [
        { label: "Incident Management" },
        { label: "Add Incident" },
      ],
      title: "Add Incident",
    },
    component: () => import("../views/AddIncident.vue"),
  },
];

let router = new Router({
  base: "/",
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
