module.exports = function(api) {
    api.cache(true)

    const plugins = [
    ]

    return {
        presets: [
            ['@babel/preset-env', {modules: false}],
            ['@babel/preset-react', {'runtime': 'automatic'}],
            ['@babel/preset-typescript']
        ],
        plugins
    }
}