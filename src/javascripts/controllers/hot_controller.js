const hot_template = require('../views/hot.html');
const get_data = require('../models/get_data');


var get_hot_list;
const render = async () => {
    // 初始加载一下 首页的框架
    $('#root').html(' <p style="text-align:center">数据加载中,请稍等</p> ');
    if (!get_hot_list) {
        get_hot_list = await get_data.get_hot_list();
    }
    var cutlist = JSON.parse(get_hot_list).album;
    let _template = Handlebars.compile(hot_template);
    for(var i in cutlist){
        var b = parseInt(i)+1;
        var a = b<10?('0'+b):b;
        cutlist[i].id = a;
    }
    // 将handlebar模板编译成html格式的字符串
    let _html = _template({
        hot_list: cutlist
    });
    $('#root').html(_html);


    
};

module.exports = {
    render
}