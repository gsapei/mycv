import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { VueResponsiveness } from 'vue-responsiveness'

createApp(App)
.use(VueResponsiveness, {
  small: 0,
  medium: 800,
  large: 1234
})
.use(vuetify)
.mount('#app')
