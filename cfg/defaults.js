const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin')
const path = require('path')

const SOURCE_PATH = path.join(__dirname, '/../src')
const DIST_PATH = path.join(__dirname, '/../dist')
const ASSETS_PATH = path.join(__dirname, '/../assets')
const ASSETS = 'assets'
const INCLUDE_SOURCE = [SOURCE_PATH]

const htmlWebpackPluginCfg = {
    template: `${SOURCE_PATH}/index-template.html`,
    templateParameters: {
        faviconPath: `${ASSETS}/favicon.ico`
    },
    filename: 'index.html'
}

const htmlWebpackPlugin = new HtmlWebpackPlugin(htmlWebpackPluginCfg)
const copyWebpackPlugin = new CopyWebpackPlugin({
        patterns: [
            {
                from: ASSETS_PATH,
                to: './assets'
            }
        ]
    }
)
const devPlugins = [
    htmlWebpackPlugin,
    copyWebpackPlugin
]

const distPlugins = [
    htmlWebpackPlugin,
    copyWebpackPlugin
]

const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    use: ['babel-loader'],
    include: INCLUDE_SOURCE
}

const javascriptLoaders = [
    babelLoader
]

const styleLoader = {
    loader: 'style-loader'
}

const cssLoader = {
    loader: 'css-loader',
    options: {
        importLoaders: 1
    }
}

const postCssLoader = {
    loader: 'postcss-loader'
}

const styleLoaders = [
    {
        test: /\.css$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
            styleLoader,
            cssLoader,
            postCssLoader
        ],
        sideEffects: true
    },
    {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
            styleLoader,
            cssLoader,
            postCssLoader,
            "sass-loader"
        ],
        sideEffects: true
    }
]

const imageLoaders = [
    {
        test: /\.(png|jpg|gif)$/,
        type: 'asset/resource'
    }
]

const fontLoaders = [
    {test: /\.eot&/, use: ['url-loader?limit=10000&mimeType=application/vnd.ms-fontobject']},
    {test: /\.woff&/, use: ['url-loader?limit=10000&mimeType=application/font-woff']},
    {test: /\.woff2&/, use: ['url-loader?limit=10000&mimeType=application/font-woff2']},
    {test: /\.ttf&/, use: ['url-loader?limit=10000&mimeType=application/font-sfnt']},
    {test: /\.svg&/, use: ['url-loader?limit=10000&mimeType=application/svg+xml']},
]

const devRules = [
    ...javascriptLoaders,
    ...styleLoaders,
    ...imageLoaders,
    ...fontLoaders
]

const distRules = [
    ...javascriptLoaders,
    ...styleLoaders,
    ...imageLoaders,
    ...fontLoaders
]

const devOptimization = {
    minimize: false
}

const distOptimization = {
    minimize: true
}

const resolve = {
    modules: [SOURCE_PATH, 'node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
        assets: `${SOURCE_PATH}/../assets`
    },
    plugins: [

    ]
}

const output = {
    path: `${DIST_PATH}`,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[hash].js'
}

const devOutput = {
    ...output
}

const distOutput = {
    ...output
}

module.exports = {
    devPlugins,
    devRules,
    devOptimization,
    devOutput,
    distPlugins,
    distRules,
    distOptimization,
    distOutput,
    resolve
}