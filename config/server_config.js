
const proxy = require('http-proxy-middleware');

// 开发服务器的配置
const server_config = {
    host: 'localhost',
    port: 8989,
    livereload: true,
    middleware: [
        proxy('/music', { // /music 这个是判断依据 当我们请求'http://localhost:8080/music/abc'的时候，这个代理就生效了
            target: 'https://music.163.com',// 配置目标服务器 当前服务器回去请求 https://music.163.com/music/abc
            changeOrigin: true,
            pathRewrite: { // https://music.163.com/abc
                '^/music': ''
            }
        }),
        proxy('/api', {
            target: 'http://localhost:8989',
            changeOrigin: true,
        })
    ]
    // open: true,
    // 以gulp file.js文件路径为基准
    // directoryListing: true
}

// CommonJS
// 其实暴露的是module.exports这是一个对象
module.exports = server_config;