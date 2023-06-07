// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@fortawesome/fontawesome-free/css/all.css'  

// Vuetify
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'

const themeBlue = {
  dark: false,
  colors: {
    primary: '#0479bf',
  },
}

const themeGreen = {
  dark: false,
  colors: {
    primary: '#2d6a4f',
  },
}

const themeGold = {
  dark: false,
  colors: {
    primary: '#e07f00',
  },
}

const themeBlack = {
  dark: false,
  colors: {
    primary: '#161617',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'themeBlue',
    themes: {
      themeBlue,
      themeGreen,
      themeGold,
      themeBlack
    },
  },
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
})
