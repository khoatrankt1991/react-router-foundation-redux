var webpack = require('webpack');
const path =  require('path');

module.exports = {
    entry: [
            "script-loader!jquery/dist/jquery.min.js",
            "script-loader!foundation-sites/dist/js/foundation.min.js",
            "./app/app.js"
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    externals: {
        'jquery': 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery"
        })
    ],
    module: {
        rules: [
            {
                loader: "babel-loader",
                options: {
                    presets: ['es2015', 'react', 'stage-0']
                    },
                test: /\.jsx?$/,
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias : {
            "store" : path.resolve(__dirname, "app/store.js"),
            "Main" : path.resolve(__dirname, "app/components/Main.js"),
            "Nav" : path.resolve(__dirname, "app/components/Nav.js"),
            "Home" : path.resolve(__dirname, "app/components/Home.js"),
            "Page1" : path.resolve(__dirname, "app/components/Page1.js"),
            "Login" : path.resolve(__dirname, "app/components/Login.js"),
            "account/Account" : path.resolve(__dirname, "app/components/account/Account.js"),
            "account/SignIn" : path.resolve(__dirname, "app/components/account/SignIn.js"),
            "account/SignOut" : path.resolve(__dirname, "app/components/account/SignOut.js"),
            "account/SignUp" : path.resolve(__dirname, "app/components/account/SignUp.js"),
            "account/AccountInfo" : path.resolve(__dirname, "app/components/account/AccountInfo.js")
        }
    }
}