const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[name].[ext]'
    },
    module: {
        rules: [
            {
                test: /\.(s[ac]ss|css)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.svg$/i,
                type: "asset/inline"
            },
            {
                test: /\.(jpg|png)$/i,
                type: 'asset/resource'
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
    resolve: {
        alias: {
            'img': path.resolve(__dirname, 'src/assets/images'),
            'sass-general-components': path.resolve(__dirname, 'src/assets/sass/_general/components'),
            'sass-general-variables': path.resolve(__dirname, 'src/assets/sass/_general/variables/variables'),
        },
    },
};