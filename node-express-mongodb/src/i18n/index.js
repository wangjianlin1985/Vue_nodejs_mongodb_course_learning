
const i18n = require('i18n');

i18n.configure({
    locales: ['zh', 'en'],
    fallbacks:{'nl': 'zh'},
    defaultLocale: 'zh',
    directory: __dirname + '/locales',
    // setting extension of json files - defaults to '.json' (you might want to set this to '.js' according to webtranslateit)
    extension: '.json',
    api: {
        '__': '$t',
        // '__': 't',  //now req.__ becomes req.t
    },
    register: global
});

// setLocale('zh'); 设置语言
// $t('home'); 获取对应语言的内容

module.exports = i18n;