/// <reference types='vitest' />

import * as path from "node:path";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const envDir = path.join(__dirname, "../../");
  const env = loadEnv(mode, envDir, "");

  return {
    plugins: [react(), tailwindcss()],
    server: {
      watch: {
        usePolling: true,
      },
      proxy: {
        "/api": {
          target: env.VITE_API_URL ?? "/",
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
