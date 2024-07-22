import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue3 from "bootstrap-vue-3";
import { createI18n } from 'vue-i18n'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css"

// @ts-ignore
import ru from "/src/locales/ru"

const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'ru',
  messages: {
    ru
  }
})

const app = createApp(App);
app.use(store);
app.use(router);
app.use(BootstrapVue3);
app.use(i18n);
app.mount('#app');
