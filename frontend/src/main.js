import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { createPinia } from 'pinia';  

createApp(App)
.use(vuetify)
.use(createPinia())
.mount('#app')
