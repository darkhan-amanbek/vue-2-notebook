const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundled.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      // custom docs block loader
      {
        resourceQuery: /blockType=docs/,
        loader: require.resolve("./docs-loader.js"),
      },
      // SASS and CSS files from Vue Single File Components:
      {
        test: /\.vue\.(s?[ac]ss)$/,
        use: [
          "vue-style-loader",
            {
              loader: "css-loader",
              options: {
                url: true,
                esModule: false,
              }
            },
          "sass-loader"],
      },
      // SASS and CSS files (standalone):
      {
        test: /(?<!\.vue)\.(s?[ac]ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", 
          "sass-loader"
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, // Convert images < 8kb to base64 strings
              name: "images/[name].[hash:7].[ext]", // Output path for images
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new CssMinimizerPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
