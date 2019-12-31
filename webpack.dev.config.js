/* eslint-disable */

require("dotenv").config();
const Dotenv = require("dotenv-webpack");
const express = require("express");
const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackExcludeAssetsPlugin = require("html-webpack-exclude-assets-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    modules: [
      path.resolve(__dirname, process.env.NODE_PATH || "./src"),
      path.resolve(__dirname, "./node_modules")
    ]
  },
  watchOptions: {
    ignored: /node_modules/,
    poll: true
  },
  devServer: {
    before(app) {
      app.use("/public", express.static(path.join(__dirname, "public")));
    },
    host: "localhost",
    bonjour: true,
    index: "index.html",
    open: true,
    disableHostCheck: true,
    port: 3000,
    historyApiFallback: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{ loader: "ts-loader" }, { loader: "eslint-loader" }]
      },
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }, { loader: "eslint-loader" }]
      },
      {
        test: /\.(md)?$/,
        exclude: /node_modules/,
        use: "raw-loader"
      },
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, { loader: "css-loader" }]
      },
      {
        test: /\.scss$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" }]
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              context: ""
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          "babel-loader",
          {
            loader: "react-svg-loader",
            options: {
              jsx: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: true, cleanAfterEveryBuildPatterns: ["build", "dist"] }),
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new HtmlWebpackPlugin({
      inject: true,
      title: "React Template",
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      excludeAssets: [/favicon/]
    }),
    new HtmlWebpackExcludeAssetsPlugin(),
    new Dotenv(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 1,
      name: false,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: "vendors",
          chunks: "all"
        },
        styles: {
          name: "default",
          test: /\.css$/,
          chunks: "all",
          enforce: true
        }
      }
    }
  }
};
