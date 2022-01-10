const path = require('path')
const HTMLWebPackPlugin = require('html-webpack-plugin')
const CSSMiniExtractPlugin = require('mini-css-extract-plugin')

const mode = process.env.ENV_MODE = 'development' ? 'development' : 'production'

module.exports = {
    mode: mode,
    entry: './src/index.tsx',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname,'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 3001,
    },
    resolve: {
        extensions: ['.tsx','.ts','.js']
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: path.join(__dirname,'src', 'index.html')
        }),
        new CSSMiniExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-typescript']
                    },
                },
            },
            {
                test: /\.css$/,
                use: [CSSMiniExtractPlugin.loader, 'css-loader'],
            }
        ]
    }
}
