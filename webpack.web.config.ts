import type { Configuration } from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import stdLibBrowser from 'node-stdlib-browser';
// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
const { NodeProtocolUrlPlugin } = require('node-stdlib-browser/helpers/webpack/plugin');

const config: Configuration = {
  target: 'web',
  entry: {
    window: './src/window/window.ts'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(ico|md|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].[ext]' }
          }
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'window.html',
      template: './src/window/window.html'
    }),
    new MiniCssExtractPlugin({ filename: 'window.css' }),
    new NodePolyfillPlugin(),
    new NodeProtocolUrlPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      ...stdLibBrowser,
      'node:fs': false,
      'node:path': require.resolve('path-browserify'),
      'node:url': require.resolve('url/'),
      'node:process': require.resolve('process/browser'),
      'node:assert': require.resolve('assert/'),
      'node:crypto': require.resolve('crypto-browserify'),
      'node:os': require.resolve('os-browserify/browser'),
      'node:util': require.resolve('util/'),
      'fs/promises': false
    },
    fallback: {
      electron: false,
      fs: false
    }
  }
};

export default config;
