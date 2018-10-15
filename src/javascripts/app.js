console.log(112123133)

const Router = require('./router');
const search_controller = require('./controllers/search_controller');
// 渲染视图
search_controller.render();
// 启动路由
const router = new Router({ initial: '#/home' });
window.router = router;
router.init();


// const list = require('../models/home_music');
const list = require("../javascripts/models/home_music")
console.log(list.home_list())