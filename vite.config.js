import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:     resolve(__dirname, 'index.html'),
        about:    resolve(__dirname, 'about_me.html'),
        resume:   resolve(__dirname, 'resume.html'),
        contact:  resolve(__dirname, 'contact.html'),
        projects: resolve(__dirname, 'projects.html'),
      },
    },
  },
})
