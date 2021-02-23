<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <hr />
    <Grid />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Grid from "./components/Grid.vue";

export default Vue.extend({
  name: "App",
  components: {
    HelloWorld,
    Grid
  }
});
</script>
