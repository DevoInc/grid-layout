import { resolve } from 'path';
import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({ rollupTypes: true }),
    visualizer({
      filename: 'dist/stats.html',
    }) as PluginOption,
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'GridLayout',
      fileName: 'GridLayout',
    },
    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime',
        '@dnd-kit/core',
        '@dnd-kit/utilities',
      ],
      output: {
        globals: {
          react: 'React',
          'react/jsx-runtime': 'react/jsx-runtime',
          '@dnd-kit/core': 'dndKitCore',
          '@dnd-kit/utilities': 'dndKitUtilities',
        },
      },
    },
  },
});
