const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "development", // 环境
  devtool: "source-map", // 工具 映射文件
  entry: "./src/index.js",
  // entry: "./src/index.js --entry --webpack.config.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "./js/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          // {
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions: {
          //       plugins: [require("postcss-preset-env")],
          //     },
          //   },
          // },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[name]_[hash:6][ext]",
        },
        // use: [
        //   {
        //     loader: "file-loader",
        //     options: {
        //       name: "./images/[name]_[contenthash:6].[ext]",
        //     },
        //   },
        // ],
        // type: "javascript/auto",
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
};
