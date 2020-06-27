const path = require(`path`);
const pathMain = path.join(__dirname, `public`);
const MomentLocalesPlugin = require(`moment-locales-webpack-plugin`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: pathMain
  },
  devServer: {
    contentBase: pathMain,
    open: true,
    inline: true,
    port: 1337,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
        }
    ],
  },
  plugins: [
  ],
  devtool: `source-map`,
}
