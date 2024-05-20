const path = require("path");

module.exports = {
    entry: {
        InstanceButton: "./src/components/instance-button/instance-button.js",
        // Add more components here...
    },
    output: {
        filename: "instance-ui.js",
        path: path.resolve(__dirname, "dist"),
        library: {
            name: "[name]",
            type: "umd",
        },
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    mode: "development",
};
