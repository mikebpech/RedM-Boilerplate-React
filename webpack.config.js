const path = require('path');
const webpack = require('webpack');
const resolve = path.resolve;

// Env
const isProd = false;

// Plugins
let plugins = [
    new webpack.ProvidePlugin({
        '$': "jquery",
        'jQuery': "jquery",
        'window.jQuery': "jquery",
        'window.$': 'jquery'

    }),
    new webpack.DefinePlugin({
        "require.specified": "require.resolve"
    })
];

// Config
const config = {
    entry: {
        app: [
            'react-hot-loader/patch',
            './src/index'
        ]
    },
    devtool: isProd ? 'source-map' : 'eval',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'index.js',
        publicPath: '/'
    },
    plugins: plugins,
    module: {
        rules: [
            {
                test: /\.js$/,
                use: isProd ? 'babel-loader' : ['react-hot-loader/webpack', 'babel-loader'],
                include: [
                    path.join(__dirname, 'src'),
                ]
            },
            {
                test: /\.(scss|css)$/,
                loaders: [
                    'style-loader?sourceMap',
                    'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
                ]
            }
        ]
    }
};

module.exports = config;

