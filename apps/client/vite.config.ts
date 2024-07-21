/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import * as path from 'node:path';
// import checker from 'vite-plugin-checker';
// import codegen from 'vite-plugin-graphql-codegen';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/client',

  server: {
    port: 4200,
    host: 'localhost'
  },

  preview: {
    port: 4300,
    host: 'localhost'
  },

  plugins: [
    react(),
    nxViteTsPaths(),
    // checker({
    //   typescript: {
    //     tsconfigPath: './tsconfig.app.json',
    //     buildMode: true,
    //     root: __dirname
    //   },
    //   terminal: false,
    //   overlay: { initialIsOpen: false },
    //   enableBuild: true
    // })
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: '../../dist/apps/client',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  resolve: {
    alias: {
      '@nestjs/graphql': path.resolve(
        __dirname,
        '../../node_modules/@nestjs/graphql/dist/extra/graphql-model-shim'
      )
    }
  }
});
