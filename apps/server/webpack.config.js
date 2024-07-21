const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');

// TODO: Migrate to vite?
module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/server')
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: false,
      outputHashing: 'none',
      transformers: [{
        name: '@nestjs/graphql/plugin', options: {
          introspectComments: true
        }
      }]
    })
  ],
};
