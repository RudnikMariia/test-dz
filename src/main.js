import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue3 from "bootstrap-vue-3";
import { createI18n } from 'vue-i18n'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css"

import en from "/src/locales/en"

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en
  }
})

const app = createApp(App);
app.use(store);
app.use(router);
app.use(BootstrapVue3);
app.use(i18n);
app.mount('#app');
