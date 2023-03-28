import { defineConfig } from 'vite';
import vuePlugin from '@vitejs/plugin-vue';
import vueJsxPlugin from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vuePlugin(), vueJsxPlugin()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve('src') },
      { find: /^~/, replacement: '' },
    ],
  },
});
