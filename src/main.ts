import Vue from "vue";
import App from "./App.vue";
import "./index.css";
import "ant-design-vue/lib/table/style/css"; // for css
import Table from "ant-design-vue"; // for js

Vue.config.productionTip = false;
Vue.use(Table);

new Vue({
  render: h => h(App)
}).$mount("#app");
