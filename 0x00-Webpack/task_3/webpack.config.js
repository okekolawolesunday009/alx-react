const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    header: path.resolve(__dirname, "modules/header/header.js"),
    body: path.resolve(__dirname, "modules/body/body.js"),
    footer: path.resolve(__dirname, "modules/footer/footer.js"),
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js", // Generate filenames with the format 'name_of_the_file.bundle.js'
    publicPath: "/", // Specify the public path for asset loading
  },
  devtool: 'inline-source-map', // Support inline source mapping for easier debugging
  devServer: {
    static: {
      directory: './deploy', // Specify the content base directory
    },
    open: false, // Disable browser opening
    port: 8564, // Set the port to 8564
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jp?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Add CleanWebpackPlugin to clean the build folder on each build
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', // Split all chunks
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
	  name: 'vendors',
          priority: -10, // Prioritize splitting vendor modules
          filename: 'vendors.bundle.js', // Specify filename for vendor bundle
        },
      },
    },
  },
};

