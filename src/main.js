import { createApp } from "vue";
import App from "./router/App.vue";
import router from "./router";
import "./styles/main.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
