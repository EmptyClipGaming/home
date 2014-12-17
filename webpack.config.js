module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname + "/public/js",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "jsx-loader"}
    ]
  }
};