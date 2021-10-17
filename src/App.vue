<template>
  <div id="app">
    <div class="flex flex-col h-screen">
      <div class="flex h-16">
        <Header />
      </div>
      <Breadcrumbs />
      <div class="flex-1 h-full flex flex-col overflow-y-auto">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Breadcrumbs from "./components/Breadcrumb.vue";

export default {
  name: "App",
  components: {
    Header,
    Breadcrumbs,
  },
};
</script>
<style>
.primary-class {
  background-color: rgba(37, 99, 235, 0.7);
}
</style>
