const path = require('path');

module.exports = {
    entry: {
        index: './src_bundled/index.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../wwwroot/dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devtool: 'source-map',
};