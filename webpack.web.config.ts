import type { Configuration } from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

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
        use: {
          loader: 'ts-loader',
          options: { configFile: 'tsconfig.web.json' }
        },
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
    new MiniCssExtractPlugin({ filename: 'window.css' })
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      'electron-store': path.resolve(__dirname, 'src/web/electron-store.ts'),
      'electron': path.resolve(__dirname, 'src/web/electron.ts')
    },
    fallback: {
      path: false,
      fs: false,
      crypto: false,
      assert: false,
      util: false,
      os: false,
      url: false
    }
  }
};

export default config;
