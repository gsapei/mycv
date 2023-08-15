import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  
  plugins: [
		vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['v-card-action'].includes(tag),
        }
      }
    }),
		vuetify({ autoImport: true }),
	],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/css/variables.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
