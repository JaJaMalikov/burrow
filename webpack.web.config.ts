import type { Configuration } from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

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
    new webpack.ProvidePlugin({ process: 'process/browser' })
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      electron: path.resolve(__dirname, 'src/web/electron.ts'),
      'electron-store': path.resolve(__dirname, 'src/web/electron-store.ts'),
      'fs/promises': path.resolve(__dirname, 'src/web/fs.ts'),
      path: path.resolve(__dirname, 'src/web/path.ts'),
      url: path.resolve(__dirname, 'src/web/url.ts')
    },
    fallback: {
      process: require.resolve('process/browser')
    }
  }
};

export default config;
