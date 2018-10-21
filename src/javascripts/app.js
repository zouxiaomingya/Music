
const Router = require('./router');
// const search_controller = require('./controllers/search_controller');
// // 渲染视图
// search_controller.render();
// 启动路由
const home_tab = require('./controllers/home_tab');

home_tab.render();

const router = new Router({ initial: '#/home' });
window.router = router;
router.init();


// const list = require("../javascripts/models/home_music")
// async function music() {
//     var data =  await list.home_list()
//     console.log(data);
// }
// music();

