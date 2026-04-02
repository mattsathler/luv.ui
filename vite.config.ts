import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig(({ mode }) => {
  if (mode === "lib") {
    return {
      plugins: [react()],
      build: {
        lib: {
          entry: "src/lib/index.ts",
          name: "LuvUI",
          fileName: "luv-ui",
        },
        rollupOptions: {
          external: ["react", "react-dom"],
        },
      },
    }
  }

  return {
    plugins: [react()],
  }
})