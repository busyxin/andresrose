import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    ssr: {
      noExternal: [
        'react-icons',
        /^@chakra-ui\//,
        '@emotion/react',
        '@emotion/styled',
        'framer-motion',
      ],
    },
    css: {
      preprocessorOptions: {
        scss: {},
        sass: {
          loadPaths: ['node_modules'],
        },
      },
    },
  },
});
