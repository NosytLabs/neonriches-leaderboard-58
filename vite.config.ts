
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { splitVendorChunkPlugin } from 'vite';

export default defineConfig(({ mode }: { mode: string }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
    mode === 'development' && componentTagger(),
    splitVendorChunkPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Improve chunk size and caching
    cssCodeSplit: true,
    chunkSizeWarningLimit: 500,
    sourcemap: mode === 'development',
    minify: mode === 'production' ? 'terser' : false,
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-components': [
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-avatar',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-hover-card',
            '@radix-ui/react-label',
            '@radix-ui/react-popover',
            '@radix-ui/react-tooltip',
          ],
          'icons': ['lucide-react'],
          'charts': ['recharts'],
          'forms': [
            'react-hook-form',
            '@hookform/resolvers',
            'zod'
          ],
          'animations': [
            'framer-motion'
          ]
        },
      },
    },
  },
  optimizeDeps: {
    // Include dependencies that need to be pre-bundled
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      'lucide-react',
      '@radix-ui/react-toast',
      'framer-motion',
      'recharts',
    ],
  },
  define: {
    // Any global constants to define for the application
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __MODE__: JSON.stringify(mode),
  },
}));
