import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App";
import router from "./router";
import "ant-design-vue/dist/antd.css";
import "./style/index.scss";
import "./router/router-permission";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
