const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  return alias({
    '@components': './src/components',
    '@assets': './src/assets',
    '@store': './src/store',
    '@content': './src/components/content',
    '@mainPage': './src/components/content/mainPage',
  })(config)
}