import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

const isLib = process.env.BUILD_MODE === 'lib'

export default defineConfig({
  plugins: [
    react(),
    ...(isLib ? [dts({ tsconfigPath: './tsconfig.lib.json', outDir: 'dist/lib' })] : []),
  ],
  ...(isLib && {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/lib.ts'),
        name: 'FlockDS',
        formats: ['es'],
        fileName: () => `index.js`,
      },
      rollupOptions: {
        external: (id) => !id.startsWith('.') && !id.startsWith('/') && !id.startsWith('\0'),
        output: {
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
      },
      outDir: 'dist/lib',
      sourcemap: true,
    },
  }),
})
