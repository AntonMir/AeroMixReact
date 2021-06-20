const {alias, aliasJest, configPaths} = require('react-app-rewire-alias');

const aliasPaths = configPaths('./alliasPath.json');

module.exports = alias(aliasPaths);
// не пойму все, нафига нужен aliasJest
// module.exports.jest = aliasJest(aliasPaths);


// ранее:
// alliasPath.json отсутствовал
// старый конфиг выглядет так:

// const {alias} = require('react-app-rewire-alias')

// module.exports = function override(config) {
//   return alias({
//     '@components': './src/components',
//     '@assets': './src/assets',
//     '@img': './src/assets/img',
//     '@store': './src/store',
//     '@content': './src/components/content',
//     '@halls': './src/components/content/halls',
//     '@services': './src/components/content/services',
//     '@mainPage': './src/components/content/mainPage',
//     '@contacts': './src/components/content/mainPage/contacts',
//     '@contactsContent': './src/components/content/mainPage/contacts/contactsContent',
//     '@contactsBody': './src/components/content/mainPage/contacts/contactsContent/contactsBody',
//     '@treiners': './src/components/content/treiners',
//     '@services': './src/components/content/services',
//     '@footer': './src/components/footer',
//     '@header': './src/components/header',
//     '@data': './src/data',
//     '@news': './src/components/content/mainPage/news',
//     '@timetable': './src/components/content/timetable',
//     '@pricetable': './src/components/content/pricetable',
//   })(config)
// }