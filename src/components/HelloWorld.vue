<template>
  <div class="flex justify-center mt-3 ">
    <table class="space-y-3 text-center shadow-lg">
      <tr class="m-2 bg-gray-200 border-collapse">
        <th class="px-8 py-4 text-left bg-blue-100 rounded-l-xl">Company</th>
        <th class="px-8 py-4 text-left bg-blue-100">Contact</th>
        <th class="px-8 py-4 text-left bg-blue-100 rounded-r-xl">Country</th>
      </tr>
      <tr class="my-2 bg-gray-200 border-collapse ">
        <td class="px-8 py-4 rounded-l-xl">Alfreds Futterkiste</td>
        <td class="px-8 py-4 ">Dante Sparks</td>
        <td class="px-8 py-4 rounded-r-xl">Italy</td>
      </tr>
      <tr class="my-2 bg-gray-200 border-collapse">
        <td class="px-8 py-4 rounded-l-xl">Centro comercial Moctezuma</td>
        <td class="px-8 py-4 ">Neal Garrison</td>
        <td class="px-8 py-4 rounded-r-xl">Spain</td>
      </tr>
      <tr class="bg-gray-200 border-collapse">
        <td class="px-8 py-4 rounded-l-xl">Ernst Handel</td>
        <td class="px-8 py-4 ">Maggie O'Neill</td>
        <td class="px-8 py-4 rounded-r-xl">Austria</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",
  props: {
    msg: String
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-blue {
  @apply my-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
}
</style>
