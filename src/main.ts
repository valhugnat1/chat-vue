import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App)
.use(Toast, {
  transition: "Vue-Toastification__bounce",
  position: "top-center",
  timeout: 10000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: 'button',
  icon: true,
  rtl: false
})


app.use(router)
app.mount('#app')

