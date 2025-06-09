// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/webp-gallery/", // GitHub repo 이름에 맞게 설정
  plugins: [react()],
});
