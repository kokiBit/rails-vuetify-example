// const { environment } = require('@rails/webpacker')
// const vue =  require('./loaders/vue')
//
// environment.loaders.append('vue', vue)
// module.exports = environment

const { environment } = require('@rails/webpacker')
const merge = require('webpack-merge')
const vue =  require('./loaders/vue')
const myCssLoaderOptions = {
  modules: true,
  sourceMap: true,
  localIdentName: '[name]__[local]___[hash:base64:5]'
}

const CSSLoader = environment.loaders.get('sass').use.find(el => el.loader === 'css-loader')

CSSLoader.options = merge(CSSLoader.options, myCssLoaderOptions)
environment.loaders.append('vue', vue)
module.exports = environment
