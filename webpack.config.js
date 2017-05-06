var webpack = require('webpack');
var path = require('path');
var SpritesmithPlugin = require('webpack-spritesmith');

var config = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        path:__dirname,
        filename: './dist/bundle.js'
    },

    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + 'dist/'
    },

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            }
            , {
                test: /\.png$/,
                loaders: [
                    'file-loader?name=./dist/img/[hash].[ext]'
                ]
            }
            , {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
        //webpack 1:
        // modulesDirectories: ["node_modules", "spritesmith-generated"],
        //webpack 2:
        modules: ["node_modules", "spritesmith-generated"]
    },
    plugins: [
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, 'src/ico'),
                glob: '*.png'
            },
            target: {
                image: path.resolve(__dirname, 'src/spritesmith-generated/sprite.png'),
                css: path.resolve(__dirname, 'src/spritesmith-generated/sprite.scss')
            },
            apiOptions: {
                cssImageRef: "./spritesmith-generated/sprite.png"
            }
        })
    ]
};
if (process.env.NODE_ENV === 'production') {
    config.devtool = false;
    config.plugins = [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({comments: false}),
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify('production')}
        })
    ];
};

module.exports = config;