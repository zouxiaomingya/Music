const proxy = require('http-proxy-middleware');

// 开发服务器的配置
const server_config = {
    host: '10.9.189.200',
    port: 8989,
    livereload: true,
    middleware: [
        proxy('/home', { // /home 这个是判断依据 当我们请求'http://localhost:9191/home/'的时候，这个代理就生效了
            target: 'https://c.y.qq.com', // 配置目标服务器 当前服务器回去请求 https://c.y.qq.com/
            changeOrigin: true,
            pathRewrite: {
                '^/home': ''
            }
        }),
        proxy('/hot', {
            target: 'https://c.y.qq.com',
            changeOrigin: true,
            pathRewrite: {
                '^/hot': ''
            }
        }),
        proxy('/search', {
            target: 'https://c.y.qq.com',
            changeOrigin: true,
            pathRewrite: {
                '^/search': ''
            }
        })
    ]
    // open: true,
    // 以gulp file.js文件路径为基准
    // directoryListing: true
}

// CommonJS
// 其实暴露的是module.exports这是一个对象
module.exports = server_config;