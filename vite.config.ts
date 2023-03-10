import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
const markdownWrapperClasses = 'prose prose-sm m-auto text-left'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    WindiCSS({
      safelist: markdownWrapperClasses,
    }),
  ],
  server: {
    fs: {
      strict: true,
    },
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
    ],
    exclude: [
      'vue-demi',
    ],
  },
})
