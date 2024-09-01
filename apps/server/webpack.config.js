const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');

/** @type {import('webpack-cli').ConfigOptions} */
module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/server'),
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets', './src/medusa-config.js'],
      optimization: false,
      outputHashing: 'none',
      transformers: [
        {
          name: '@nestjs/graphql/plugin',
          options: {
            introspectComments: true,
          },
        },
      ],
    }),
  ],
};
