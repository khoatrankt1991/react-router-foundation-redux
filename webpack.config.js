const path =  require('path');
module.exports = {
    entry: "./app/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                options: {
                    presets: ['es2015', 'react']
                    },
                test: /\.jsx?$/,
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias : {
            "Main" : path.resolve(__dirname, "app/components/Main.js"),
            "Nav" : path.resolve(__dirname, "app/components/Nav.js"),
            "Home" : path.resolve(__dirname, "app/components/Home.js"),
            "Page1" : path.resolve(__dirname, "app/components/Page1.js")
        }
    }
}