

const vuxLoader = require('vux-loader');
const path = require('path');

module.exports = {
    build: {
        // 针对build后分析并可视化构建后的打包文件，你可以基于分析结果来决定如何优化它，默认为false
        analyze: false,
        // 打包 进行扩展配置
        extend: (config, { isDev }) => {
            // config.devtool = 'eval-source-map';
            // console.log('isDev:' + isDev);
//          vuxLoader.merge(config, {
//              plugins: [
//                  {
//                      name: 'vux-ui'
//                  }, 
//                  {
//                      name: 'duplicate-style'
//                  },
//                  {
//                      name: 'i18n',
//                      vuxStaticReplace: false,
//                      staticReplace: false,
//                      extractToFiles: 'src/locales/components.yml',
//                      localeList: ['en', 'zh-CN']
//                  },
//                  {
//                      name: 'js-parser',
//                      fn: function (source) {
//                          console.log(source)
//                          console.log('-----------------------')
//                      return source.replace('black', 'white')
//                      }
//                  },
//                  {
//                      name: 'script-parser',
//                      fn: function (source) {
////                          console.log(source)
////                          console.log('-----------------------')
//                          return source.replace('VARIABLE', 'v2')
//                      }
//                  },
//              ]
//          })
        },
        //设置babel-loader里的include，默认为include为src目录
        babelLoaderInclude: [
            path.resolve(__dirname, './src'),
            path.resolve(__dirname, './node_modules/vux/src'),
        ],
        // js编译设置
        babel: {
            'plugins': [
                [
                    'component',
                    {
                        'libraryName': 'element-ui',
                        'styleLibraryName': 'theme-chalk'
                    }
                ]
            ]
        },
        // npm run build时设置访问路径，默认为'/'
        publicPath: '/teach_admin/dist/',
        // 默认:'vue', 'axios', 'vue-router', 'vuex', 'babel-polyfill' 合并打包第三方插件
        vendor: [],
        // 是否使用eslint, 默认使用
        useEslint: false
    },
    local: {
        host: 'localhost',
        port: 9000
    },
    proxy: {
        '/node': {
            target: 'http://localhost:4000/',
            changeOrigin: true,
            secure: false,
            //pathRewrite: { '^/te-admin' : '/' }
        },
        '/video': {
            target: 'http://localhost:4000/',
            changeOrigin: true,
            secure: false,
            //pathRewrite: { '^/src' : '/video/' }
        },
        '/txt': {
            target: 'http://localhost:4000/',
            changeOrigin: true,
            secure: false,
            //pathRewrite: { '^/src' : '/txt/' }
        },
        '/pdf': {
            target: 'http://localhost:4000/',
            changeOrigin: true,
            secure: false,
            //pathRewrite: { '^/src' : '/pdf/' }
        },
    },
}
