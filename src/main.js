import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { VueResponsiveness, Presets } from 'vue-responsiveness'
loadFonts()

createApp(App)
.use(VueResponsiveness, {
  small: 0,
  medium: 800,
  large: 1234
})
.use(vuetify)
.mount('#app')
