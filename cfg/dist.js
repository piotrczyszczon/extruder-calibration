const defaults = require('./defaults')
const {distOutput} = require("./defaults");

const config = {
    mode: 'production',
    resolve: defaults.resolve,
    plugins: defaults.distPlugins,
    module: {
        rules: defaults.distRules
    },
    optimization: defaults.distOptimization,
    output: distOutput
}

module.exports = config