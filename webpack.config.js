const path = require('path')
const args = require('minimist')(process.argv.slice(2))

let env = args.env
const isProduction = env === 'dist'

configFile = 'dev'
if(isProduction) {
    configFile = 'dist'
}

module.exports = require(path.join(__dirname, `cfg/${configFile}`))