import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// GitHub Pages deploy bajo /mesa-chica-landing/
// Si querés deployar en dominio raíz (ej: mesachica.com.ar), cambiá base a "/"
export default defineConfig({
  plugins: [vue()],
  base: process.env.GITHUB_PAGES === "true" ? "/mesa-chica-landing/" : "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
