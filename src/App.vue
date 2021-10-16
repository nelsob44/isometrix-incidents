<template>
  <div id="app">
    <div class="flex flex-col h-screen">
      <div class="flex h-16">
        <Header />
      </div>
      <h1>Welcome</h1>
      <div class="flex-1 h-full flex flex-col overflow-y-auto">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
