
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { splitVendorChunkPlugin } from 'vite';

export default defineConfig(({ mode }: { mode: string }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    splitVendorChunkPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Add explicit jsx runtime configuration
  esbuild: {
    jsxImportSource: 'react',
    jsxInject: `import React from 'react'`
  },
}));
