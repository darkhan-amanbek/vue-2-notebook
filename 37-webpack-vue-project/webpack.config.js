const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundled.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        oneOf: [
          // this matches `<style module>`
          {
            resourceQuery: /module/,
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  url: true,
                  esModule: false,
                  modules: {
                    mode: "local",
                    auto: true,
                    exportGlobals: true,
                    localIdentName: "[local]_[hash:base64:5]",
                    localIdentContext: path.resolve(__dirname, "src"),
                    localIdentHashSalt: "my-custom-hash",
                    namedExport: true,
                    exportLocalsConvention: "as-is",
                    exportOnlyLocals: false,
                    getJSON: ({ resourcePath, imports, exports, replacements }) => {},
                  },
                }
              },
              "sass-loader"
            ]
          },
          // this matches plain `<style>` or `<style scoped>`
          {
            use: [
              "vue-style-loader",
              {
                loader: "css-loader",
                options: {
                  url: true,
                  esModule: false,
                }
              },
              "sass-loader"
            ]
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Convert images < 8kb to base64 strings
              name: 'images/[name].[hash:7].[ext]', // Output path for images
              esModule: false,
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  }
}