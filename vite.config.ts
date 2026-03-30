import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// Set base to './' for GitHub Pages compatibility.
// If deploying to a project page (github.com/USER/REPO), this works as-is.
// If you need a specific sub-path, change base to '/<your-repo-name>/'
export default defineConfig({
  plugins: [react()],
  base: './',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
