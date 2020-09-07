const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        app: './src/ts/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/[name].bundle.js",
    },
    devServer: {
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.pug'
        }),
    ],
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // all files with a `.pug` extension will be handled by `pug-loader`
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
        ]
    }
};
module.exports = (env, argv) => {
    if (argv.mode === 'development') { }
    if (argv.mode === 'production') { }
    return config;
}

// module.exports = {
//     // devtool: "inline-source-map",
//     context: path.resolve(__dirname, 'src'),
//     // entry: "./src",
//     // output: {
//     //   filename: "dist"
//     // },
//     // resolve: {
//     //   // Add `.ts` and `.tsx` as a resolvable extension.
//     //   extensions: [".ts", ".tsx", ".js"]
//     // },
//     module: {
//       rules: [
//         // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
//         {
//             test: /\.tsx?$/,
//             loader: "ts-loader"
//         },
//         // {
//         //     test: /\.pug?$/,
//         //     loader: "pug-loader"
//         // }
//       ]
//     }
//   };