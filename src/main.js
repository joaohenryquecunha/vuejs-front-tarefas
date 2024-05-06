import { createApp } from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.config.globalProperties.$axios = axios.create({
  baseURL: 'http://localhost:8000/api/',
});

app.use(router).mount('#app');
