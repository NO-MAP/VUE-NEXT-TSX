import { defineConfig } from 'vite'
import vueJsx from "@vitejs/plugin-vue-jsx"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx()],
  resolve: {
    alias: [{
      find: "@",
      replacement: "/src"
    }, {
      find: "@style",
      replacement: "/src/style"
    }]
  },
  server: {
    port: 9527
  },
})
