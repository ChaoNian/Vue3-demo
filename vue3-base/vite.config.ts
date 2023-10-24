import { fileURLToPath, URL } from 'node:url'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// /** @type {import('vite').UserConfig} */
// export default {
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    DefineOptions(),
    vueJsx(),
  ],
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:`@import "./src/bem.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
