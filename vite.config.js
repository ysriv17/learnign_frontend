import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from "vite-plugin-mkcert";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),mkcert()],
  server: {
    https: {
      key: "./certs/yash.centroxy.key",
      cert: "./certs/yash.centroxy.crt",
    },
    host: "yash.centroxy", // Your custom domain
    //port : 443 // Default HTTPS port
    strictPort: true, // Ensures it only runs on 443
  }
})
