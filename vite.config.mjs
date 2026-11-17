import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// Tests render each SVG icon as its file name, so they can tell icons apart.
const svgFileNames = () => ({
  name: 'svg-file-names',
  enforce: 'pre',
  load(id) {
    if (!id.endsWith('.svg?react')) return null;
    const name = path.basename(id.replace('?react', ''));
    return `import { createElement } from 'react';
export default (props) => createElement('svg', props, ${JSON.stringify(name)});`;
  },
});

export default defineConfig({
  plugins: [
    react(),
    process.env.VITEST
      ? svgFileNames()
      : svgr({ svgrOptions: { titleProp: true, ref: true } }),
  ],
  server: { port: 3000 },
  build: { outDir: 'build' },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: 'src/setupTests.jsx',
  },
});
