
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react({
      // Enable SWC's JSX Optimization
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: [
          ['@babel/plugin-syntax-import-assertions'],
        ]
      }
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Enable SSR features
  build: {
    ssr: mode === 'production', // Enable SSR build in production
    target: 'esnext',
    outDir: 'dist',
    minify: mode === 'production',
    cssCodeSplit: true,
    reportCompressedSize: true, // Report gzipped file size
    chunkSizeWarningLimit: 1000, // Warn when chunks exceed 1MB
    rollupOptions: {
      output: {
        // Ensure chunks work well with SSR
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // Split vendor chunks intelligently
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('@radix-ui')) {
              return 'vendor-radix';
            }
            return 'vendor';
          }
        },
        // Optimize chunk names for better caching
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]',
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: [], 
  },
}));
