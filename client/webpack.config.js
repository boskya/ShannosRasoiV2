var path = require('path');


module.exports = {
    context: __dirname,
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    module: {
      loaders: [
        {
          test: /.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
                  presets: ['es2015', 'react']
          }
        }
      ],
      resolve: {
        extensions: ['.js', '.jsx']
      }
    }
};
