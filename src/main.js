import { createApp } from 'vue';
import App from './App.vue';
import './assets/base.css'

const components = import.meta.globEager('./components/*.vue');

const myApp = createApp(App);

Object.entries(components).forEach(([path, component]) => {
  myApp.component(
    path
      .split('/')
      .pop()
      .replace(/\.\w+$/, ''),
    component.default
  );
});

myApp.mount('#app');
