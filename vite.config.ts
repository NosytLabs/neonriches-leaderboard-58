
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      jsxImportSource: 'react',
      // Remove the emotion plugin configuration
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  server: {
    host: "::",
    port: 8080,
  }
}));
