<template>
  <div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <hr class="mt-20" /> -->
    <Table class="ml-4 pt-3" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Table from "./components/Table.vue";
import Grid from "./components/Grid.vue";

export default Vue.extend({
  name: "App",
  components: {
    //HelloWorld,
    Table
  }
});
</script>
