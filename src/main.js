import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VuePapaParse from 'vue-papa-parse';

createApp(App).use(store).use(VuePapaParse).use(router).mount("#app");
