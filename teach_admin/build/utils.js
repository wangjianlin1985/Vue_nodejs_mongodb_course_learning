
// 设置babel-loader里的options配置
exports.getBabelOptions = () => {
    const Options = require('./options');
    let obj = Object.assign(
        {}, 
        {
            babelrc: false,
            cacheDirectory: true,
            plugins: ['transform-vue-jsx'],
        },
        Options.build.babel
    )
    if(!Options.build.babel.presets) {
        obj.presets = [
            [
                'vue-app',
                { ie: 9, uglify: true }
            ]
        ]
    }
    return obj;
}

//报错提示信息
exports.createNotifierTip = () => {
    const path = require('path');
    const notifier = require('node-notifier');
    const pkg = require('../package.json');
    return (severity, errors) => {
        if(severity !== 'error') {
            return
        }
        const error = errors[0];
        const filename = error.file.split('!').pop();

        notifier.notify({
            title: pkg.name,
            message: severity + ': ' + error.name,
            subtitle: filename || '',
            icon: path.join(__dirname, 'logo.png'),
        })
    }
}
