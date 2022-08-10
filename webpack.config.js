const path = require("path");

module.exports = {
    entry: "./game/index.js",
    output: {
        filename: "game.js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "source-map"
}