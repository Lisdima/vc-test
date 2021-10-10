const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let conf = {
  entry: {
    main: path.resolve(__dirname, "./src/main.js"),
  },
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "main.js",
    // publicPath: "/vc-test/",
  },
  devServer: {
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node-modules/,
        use: "babel-loader",
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
  ],
};

module.exports = (env, options) => {
  let isProd = options.mode === "production";
  conf.devtool = isProd ? false : "eval-cheap-module-source-map";
  conf.target = isProd ? "browserslist" : "web";
  return conf;
};
