import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'primeicons/primeicons.css';

// Cria e monta o aplicativo Vue com suporte ao Vue Router
const app = createApp(App);

// Configura o roteador
app.use(router);

// Monta o aplicativo na div com ID "app"
app.mount("#app");
