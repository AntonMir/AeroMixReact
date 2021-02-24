const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  return alias({
    '@components': './src/components',
    '@assets': './src/assets',
    '@store': './src/store',
    '@content': './src/components/content',
    '@mainPage': './src/components/content/mainPage',
    '@contacts': './src/components/content/mainPage/contacts',
    '@footer': './src/components/footer',
    '@header': './src/components/header',
  })(config)
}