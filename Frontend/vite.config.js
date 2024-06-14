import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})



// vite.config.js
// export default {
//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://panasonic-pioneers-062.onrender.com',
//         changeOrigin: true,
//         rewrite: path => path.replace(/^\/api/, '')
//       }
//     }
//   }
// }
