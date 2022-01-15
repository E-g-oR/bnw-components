const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    plugins: [new VanillaExtractPlugin()],
};