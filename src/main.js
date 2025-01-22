import { createApp } from 'vue'
import { createPinia } from 'pinia'
import LandingGlobal from './Plugins/LandingGlobal'
import App from './App.vue'
import router from './router'

const pinia = createPinia()

createApp(App)
.use(LandingGlobal)
.use(router)
.use(pinia)
.mount('#app')
