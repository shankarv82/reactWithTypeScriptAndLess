const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './index.html',
});

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            // { test: /\.less$/, use: [
            //     { loader: 'style-loader' }, 
            //     { loader: 'css-loader', options: { sourceMap: true, modules: true } }, 
            //     { loader: 'less-loader', options: { sourceMap: true } }] 
            // },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: "[local]___[hash:base64:5]"
                        }
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [ htmlWebpackPlugin ]
};
