const CopyPlugin = require("copy-webpack-plugin");
const {join} = require("path");

const environment = process.env.NODE_ENV || 'dev';


module.exports = {
  mode: "development", // エントリーポイントの.jsファイル
  entry: `./src/index.js`, // ファイルの出力設定
  output: {
    // 出力ファイルのディレクトリ名
    path: `${__dirname}/public`, // 出力ファイル名
    filename: "app.js",
  }, //webpack-dev-server設定
  devServer: {
    open: true,
    static: {
      directory: join(__dirname, 'public'),
    },
    compress: true,
    devMiddleware: {
      writeToDisk: true,
    }
  },
  module: {
    rules: [
      {test: /\.ejs$/, use: 'raw-loader'},
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
  //       {from: "src/lang", to: "./lang"},
  //       {from: "src/utils", to: "./utils"},
  //       {from: "vendor/", to: "./vendor/"},
        {from: "index.html", to: "./"},
      ],
    }),
  ],
};
