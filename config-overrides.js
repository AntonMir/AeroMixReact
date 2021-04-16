const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  return alias({
    '@components': './src/components',
    '@assets': './src/assets',
    '@img': './src/assets/img',
    '@store': './src/store',
    '@content': './src/components/content',
    '@halls': './src/components/content/halls',
    '@services': './src/components/content/services',
    '@mainPage': './src/components/content/mainPage',
    '@contacts': './src/components/content/mainPage/contacts',
    '@contactsContent': './src/components/content/mainPage/contacts/contactsContent',
    '@contactsBody': './src/components/content/mainPage/contacts/contactsContent/contactsBody',
    '@treiners': './src/components/content/treiners',
    '@footer': './src/components/footer',
    '@header': './src/components/header',
    '@data': './src/data',
    '@news': './src/components/content/mainPage/news',
    '@timetable': './src/components/content/timetable',
    '@pricetable': './src/components/content/pricetable',
  })(config)
}