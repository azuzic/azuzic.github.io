import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

//GLOBAL STORES
import { createPinia } from "pinia";

//JS SCREEN RESPONIVNESS
import { Vue3Mq } from "vue3-mq";

//GLOBAL STYLE
import "./style.css";

//PINIA AND VUE
const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);

app.use(Vue3Mq, {
	breakpoints: {
		xxs: 0,
		xs: 480,
		sm: 640,
		md: 768,
		md2: 860,
		lg: 1024,
		xl: 1280,
		xl2: 1536,
		xl3: 1680,
	},
});

app.mount("#app");
