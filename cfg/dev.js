const defaults = require('./defaults')
const {devOutput} = require("./defaults");

const config = {
    mode: 'development',
    resolve: defaults.resolve,
    plugins: defaults.devPlugins,
    module: {
        rules: defaults.devRules
    },
    optimization: defaults.devOptimization,
    output: devOutput
}

module.exports = config