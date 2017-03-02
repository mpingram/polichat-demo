//const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

// const extractSass = new ExtractTextPlugin({
//     filename: "[name].[contenthash].css",
//     //disable: process.env.NODE_ENV === "development"
// });

module.exports = {
  entry: [
    "react-hot-loader/patch",
    // activate HMR for React

    "webpack-dev-server/client?http://localhost:8080",
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    "webpack/hot/only-dev-server",
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    "./index.jsx",
  ],

  output: {
    filename: "bundle.js",
    path: path.resolve( __dirname, "dist" ),
    publicPath: "/",
  },

  context: path.resolve( __dirname, "src" ),
  // Enable sourcemaps for debugging webpack's output.
  devtool: "inline-source-map",

  devServer: {
    hot: true,
    contentBase: path.resolve( __dirname, "dist" ),
    historyApiFallback: true
    //publicPath: "/",
  },

  module: {
    rules: [

      /* In production... 
      // All files with a .css extension will be compiled to .css and bundled separately from JS.
      { 
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            "css-loader",
            "sass-loader"
          ],
          fallback: "style-loader"
        })
      },
      */
      {
        test: /\.scss$/,
        include: /src/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader?modules&importLoaders=1" },
          { loader: "postcss-loader",
            options: {
              plugins: function(){
                return [
                  require("postcss-smart-import"),
                  require("precss"),
                  require("autoprefixer")
                ];
              }
            }
          },
          { loader: "sass-loader" }
        ]
      },
      { 
        test: /\.jsx?$/,
        include: /src/,
        use: [
          { loader: "babel-loader" },
        ]
      }
    ]
  },

  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["*", ".webpack.js", ".web.js", ".js", ".jsx"]
  },

  plugins: [
    //extractSass
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  //externals: fs.readdirSync("node_modules")
  externals: {
       //"react": "react",
       //"react-dom": "reactDOM",
  },
};

