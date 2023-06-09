import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { ProgressPlugin, WebpackPluginInstance } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { BuildOptions } from './types/config';

export const buildPlugins = ({ paths, isDev, apiUrl }: BuildOptions): WebpackPluginInstance[] => {
    const plugins: WebpackPluginInstance[] = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
        }),
        new ProgressPlugin(),

        new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }),
    ];

    if (isDev) {
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
        );
    }

    return plugins;
};
