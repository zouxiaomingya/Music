
const Router = require('./router');
// const search_controller = require('./controllers/search_controller');
// // 渲染视图
// search_controller.render();
// 启动路由


const router = new Router({ initial: '#/home' });
window.router = router; 
router.init();

$('body').on('tap','.music-item',function(){
    let picUrl = $(this).attr('imgurl');
    let url = $(this).attr('url');
    let music = $(this).attr('music');
    let singer = $(this).attr('singer')
    localStorage.setItem("picUrl",picUrl);
    localStorage.setItem("url",url);
    localStorage.setItem("music",music);
    localStorage.setItem("singer",singer);
})

const menu_constroller = require('./controllers/menu_controller');
menu_constroller.render();


import BScroll from 'better-scroll';
// const BScroll = require('better-scroll')
let scroll = new BScroll('.wrapper'); 

 
