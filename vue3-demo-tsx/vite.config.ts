import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite' // https://www.npmjs.com/package/unplugin-auto-import
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue'],
      dts: 'src/auto-import.d.ts'
    })
  ],
  // css: {
  //   preprocessorOptions: {
  //       scss: {
  //           additionalData: "@import './src/bem.scss';"
  //       }
  //   }
  // },
  css:{
    preprocessorOptions:{
      scss:{
        // additionalData:`@import "@/assets/main.scss";`
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
