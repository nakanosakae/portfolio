const path = require("path")

module.exports = {
    mode: "development",

    entry: "./src/entry.js",

    output:{
        filename: "bundle.js",
        path: path.join(__dirname, "public")
    },

    module:{
        rules:[
            {
                test:/\.js/,

                exclude:/node_modules/,

                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            presets:[["@babel/preset-env", {modules: false}]]
                        }
                    }
                ]
            },
            {
                test: /\.(sc|c)ss$/,
                use:[
                    "style-loader",
                    {
                        loader: "css-loader",
                        options:{
                            url: false
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/,
                loader: "url-loader"
            },
        ]
    }
}