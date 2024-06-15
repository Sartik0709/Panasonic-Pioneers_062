import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


<<<<<<< HEAD
=======

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
>>>>>>> f96e0e3ce3295b10e655e1694d3c5c31561a093c
