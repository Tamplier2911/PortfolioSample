const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // entry
  entry: "./src/index.js",

  // output
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./build"),
    publicPath: "",
  },

  // mode
  mode: "development",

  // dev server
  devServer: {
    contentBase: path.resolve(__dirname, "./build"),
    index: "index.html",
    port: 3000,
    proxy: {
      "/static": "http://localhost:5000",
      "/api": "http://localhost:5000",
    },
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ["file-loader"],
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
    ],
  },

  // pulgins
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*",
        path.join(process.cwd(), "build/**/*"),
      ],
    }),
    new HtmlWebpackPlugin({
      title: "Portfolio",
      template: "./public/index.html",
      description: "Having fun, building apps.",
    }),
  ],
};
