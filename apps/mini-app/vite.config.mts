/// <reference types='vitest' />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import codegen from 'vite-plugin-graphql-codegen';
import config from './graphql.codegen';
import basicSsl from '@vitejs/plugin-basic-ssl';

const ENV_PREFIXES = ['NX_PUBLIC_', 'VITE_'];
const root = __dirname;

export default defineConfig(({ mode }) => ({
  root,
  cacheDir: '../../node_modules/.vite/apps/mini-app',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: true,
  },

  plugins: [
    ...(mode === 'development'
      ? [
          codegen({
            config,
            runOnBuild: true,
          }),
        ]
      : []),
    react(),
    nxViteTsPaths(),
    basicSsl(),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  envPrefix: ENV_PREFIXES,

  build: {
    outDir: '../../dist/apps/mini-app',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
