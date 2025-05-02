
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { splitVendorChunkPlugin } from 'vite';

export default defineConfig(({ mode }: { mode: string }) => ({
  plugins: [
    react({
      jsxImportSource: 'react',
    }),
    splitVendorChunkPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  esbuild: {
    jsxInject: `import React, { useState, useEffect, useRef, useCallback, useMemo, createContext, useContext } from 'react'`,
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment'
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react', 'framer-motion']
  },
}));
