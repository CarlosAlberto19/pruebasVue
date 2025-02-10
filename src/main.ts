import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Si usas Vue Router

import './assets/main.css' // Opcional, si tienes estilos globales

const app = createApp(App)

app.use(router) // Si usas Vue Router
app.mount('#app')
