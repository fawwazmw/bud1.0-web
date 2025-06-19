// src/main.js

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Import AOS
import AOS from 'aos'
import 'aos/dist/aos.css' // Import CSS AOS

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Inisialisasi AOS saat aplikasi di-mount
app.use({
  install() {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      once: true, // Animasi hanya berjalan sekali
    });
  }
});

app.mount('#app')
