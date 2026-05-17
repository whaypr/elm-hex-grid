import { defineConfig } from 'vite';
import elmPlugin from 'vite-plugin-elm';

export default defineConfig({
  plugins: [
    elmPlugin({
      // Disable `--optimize` so builds succeed when `Debug` calls exist.
      // Remove or set to true for production after removing Debug usage.
      optimize: false,
    }),
  ],
});
