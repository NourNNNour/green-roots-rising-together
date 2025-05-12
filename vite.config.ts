
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
      // Using standard React JSX transformation instead of Emotion
      jsxImportSource: undefined, // Remove emotion/react
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Disabled SSR features
  build: {
    target: 'esnext',
    outDir: 'dist',
    minify: mode === 'production',
    cssCodeSplit: true,
    reportCompressedSize: true, // Report gzipped file size
    chunkSizeWarningLimit: 1000, // Warn when chunks exceed 1MB
    rollupOptions: {
      output: {
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
