/* eslint-disable */
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

var commonResolve = {
    modulesDirectories: ['shared', 'node_modules'],
    extensions: ['', '.js', '.jsx', '.json']
};

var commonLoaders = [
    {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
            cacheDirectory: true,
            presets: ['react', 'es2015', 'stage-0'],
            plugins: [
                'transform-decorators-legacy', //decorator是es7的提案，如果要是用的话，需要用用非官方插件：transform-decorators-legacy
                'transform-react-constant-elements',
                'transform-react-inline-elements',
                'lodash'
            ]
        }
    },
    {
        test: /\.json$/,
        loader: 'json'
    },
    {
        test: /\.(png|jpg|jpeg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url'
    },
    {
        test: /\.(woff|woff2|ttf|eot|svg)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
    }
];

module.exports = [
    {
        name: 'Client side',
        entry: {
           
            auth: ['./lib/client/auth.js'],
          
        },
        output: {
            path: './public/assets',
            filename: '[name].js',
            publicPath: '/public/'
        },
        resolve: commonResolve,
        plugins: [
            new webpack.NoErrorsPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.OccurenceOrderPlugin(),//为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
            new webpack.optimize.CommonsChunkPlugin('common.js', ['admin', 'auth', 'public']), //提取公共模块
            new CopyWebpackPlugin([
                {context: 'assets', from: '**/*', to: '../'} //   `to` is relative to output.path
            ]),
            new webpack.optimize.UglifyJsPlugin({
                mangle: true,
                minimize: true,
                sourceMap: false,
                output: {
                    comments: false
                },
                compress: {
                    sequences: true,
                    dead_code: true,
                    conditionals: true,
                    booleans: true,
                    unused: true,
                    if_return: true,
                    join_vars: true,
                    drop_console: true,
                    warnings: false
                }
            }),
            new webpack.optimize.DedupePlugin(),
            new ExtractTextPlugin('[name].css', {allChunks: true})
        ],
        module: {
            loaders: commonLoaders.concat(
                {
                    test: /\.less$/,
                    loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[hash:base64:5]!postcss!less', {
                        publicPath: '../css/'
                    })
                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract('style', 'css!postcss', {
                        publicPath: '../css/'
                    })
                }
            )
        },
        postcss: function () {
            return [autoprefixer];
        }
    },
    {
        name: 'Server side',
        entry: './app.js',
        output: {
            path: path.join(__dirname, '..', '..', 'build'),
            filename: 'app.js'
        },
        target: 'node',  // 忽略内部路径模块  像 path, fs 等
        externals: [nodeExternals()], // 忽略 node_modules 模块 wen jian
        node: {
            console: false,
            global: false,
            process: false,
            Buffer: false,
            __filename: false,
            __dirname: false,
            setImmediate: false
        },
        resolve: commonResolve,
        plugins: [
            new webpack.NoErrorsPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.OccurenceOrderPlugin(),//按发生次数分配模块和块ID。 使用的Id通常获得较低（较短）的ID。 这使得ids可预测，减少总文件大小，并建议。
            new webpack.optimize.DedupePlugin(),  //删除重复
            new ExtractTextPlugin('[name].css', {allChunks: true})   //使用 extract-text-webpack-plugin就可以把css从js中独立抽离出来
        ],
        module: {
            loaders: commonLoaders.concat(
                {
                    test: /\.less$/,
                    loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[hash:base64:5]!postcss!less')  //
                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract('css!postcss') //
                }
            )
        },
        postcss: function () {
            return [autoprefixer];
        }
    }
];
