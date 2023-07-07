import './assets/main.css'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Toaster from "@meforma/vue-toaster";
import { toaster } from './plugins/toaster';

// createApp(App).use(Toaster).mount("#app");
const app = createApp(App)
app.use(createPinia())
app.use(ToastPlugin);
app.use(Toaster);


toaster.show(`Hey! Welcome to sample website.`);

app.use(router)

app.mount('#app')
