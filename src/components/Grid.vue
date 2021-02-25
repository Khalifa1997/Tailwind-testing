<template>
  <div class="bg-white">
    <div class="mt-20 mx-16">
      <div class="mb-3">
        <input
          type="text"
          placeholder="Site"
          v-model="siteSearch"
          class="px-2 py-1 placeholder-grayLight text-grayLight relative font-sans bg-baseWhite rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-2/12"
        />
      </div>
      <button
        class="rounded-full px-4 py-1 capitalize text-sm cursor-pointer bg-tearLight font-sans text-baseWhite font-extralight m-2"
      >
        Round button
      </button>
      <button
        class="rounded-sm px-7 py-2 capitalize text-sm cursor-pointer bg-tearLight text-baseWhite font-sans m-2"
      >
        Primary button
      </button>
      <input class="rounded-full bg-Silver h-9 px-2" />

      <div class="container flex justify-center items-center">
        <div class="relative">
          <select
            name="cars"
            id="cars"
            style="-webkit-appearance:none;-moz-appearance: none; appearance: none;"
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <div class="absolute right-1 top-0 ">
            <i
              class="fa fa-sort-numeric-down text-grayLight hover:text-grayMedium "
            ></i>
          </div>
        </div>
      </div>
      <div
        class="container flex justify-center items-center relative rounded-full bg-Silver h-9 w-2/12"
      >
        <span class="ml-5">
          <i class="fa fa-search text-grayLight z-20 hover:text-grayMedium"></i>
        </span>
        <span class=" pl-3 overflow-x-hidden">
          <input
            class=" bg-Silver outline-none"
            placeholder="Search Devices..."
          />
        </span>
      </div>
      <br />
      <label class="rounded-xl border-grayDark border px-3 py-1 text-grayMedium"
        >label</label
      >
    </div>
    <div
      class="grid self-center justify-center grid-cols-5 grid-rows-2 gap-y-2 lg:max-w-lg md:max-w-lg mt-3 ml-3"
    >
      <div
        class="col-span-5 grid grid-cols-5  hover:bg-lightSilver rounded-xl px-2"
      >
        <div>
          <h1 class="text-xl text-left text-grayMedium">Hostname</h1>
        </div>
        <div>
          <h1 class="text-xl  text-left text-grayMedium">Model</h1>
        </div>
        <div>
          <h1 class="text-xl  text-left text-grayMedium">Site</h1>
        </div>
        <div>
          <h1 class="text-xl  text-left text-grayMedium">Date</h1>
        </div>
        <div>
          <h1 class="text-xl  text-left text-grayMedium">Price</h1>
        </div>
      </div>
      <div
        v-for="item in this.filterItemsbySite"
        :key="item"
        class="col-span-5 grid grid-cols-5 bg-lightSilver px-2"
      >
        <div>
          <h1 class="text-left text-tearLight">{{ item.hostname }}</h1>
        </div>
        <div>
          <h1 class="text-left text-grayDark">{{ item.model }}</h1>
        </div>
        <div>
          <h1 class="text-left text-grayDark">{{ item.role }}</h1>
        </div>
        <div>
          <h1 class="text-left text-grayDark">{{ item.site }}</h1>
        </div>
        <div>
          <h1 class="text-left text-grayDark">{{ item.status }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      items: [
        {
          hostname: "Host1",
          model: "model1",
          site: "site1",
          role: "role1",
          status: "status1"
        },
        {
          hostname: "Host2",
          model: "model2",
          site: "site2",
          role: "role2",
          status: "status2"
        },
        {
          hostname: "Host3",
          model: "model3",
          site: "site3",
          role: "role3",
          status: "status3"
        }
      ],
      siteSearch: "" as string
    };
  },
  computed: {
    filterItemsbySite() {
      if (this.siteSearch.length === 0 || !this.siteSearch.trim()) {
        return this.$data.items;
      }

      return this.$data.items.filter((e: any) =>
        e.site.toLowerCase().includes(this.siteSearch.toLowerCase())
      );
    }
  }
});
</script>

<style scoped></style>
