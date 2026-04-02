import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  build: {
    lib: {
      entry: "src/lib/index.ts",
      name: "LuvUI",
      fileName: "luv-ui",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  }
})
