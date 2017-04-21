const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    "./index.jsx",
  ],

  output: {
    filename: "bundle.min.js",
    path: path.resolve( __dirname, "dist" ),
    publicPath: "/",
  },

  context: path.resolve( __dirname, "src" ),

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
        exclude: /node_modules/,
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
        exclude: /node_modules/,
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
    extensions: [".webpack.js", ".web.js", ".js", ".jsx"]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],


  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  //externals: fs.readdirSync("node_modules")
  /*externals: {
       //"react": "react",
       //"react-dom": "reactDOM",
  },*/
};