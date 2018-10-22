const home_template = require('../views/home.html');
const get_data = require('../models/get_data');

var home_img;
var home_music_list
const render = async () => {
    var all_obj = {};
    // 初始加载一下 首页的框架
    $('#root').html(' <p style="text-align:center">数据加载中,请稍等</p> ');
    if (!home_img) {
        home_img = await get_data.get_homt_img();
    }
    var cutlist = JSON.parse(home_img).data.slider;
    //随便获取的接口里没有这些数据 在获取到的接口数据里面在追加一下需要的东西
    var myarr = [
        ['论贝斯如何优雅地抢镜', '104.8万'],
        ['街角上有一颗燥热的心','18.8万'],
        ['2018网络红歌','465.9万'],
        ['欧美·耳朵怀孕 | 盘点那些流行歌手','387.1万'],
        ['这都是什么神仙翻唱','625.1万']
    ]
    for (var i in cutlist) {
        cutlist[i].title = myarr[i][0];
        cutlist[i].num = myarr[i][1];
    }

    all_obj.img = cutlist;


    //这是另外一个接口 
    if (!home_music_list) {
        home_music_list = await get_data.get_hot_list();
    }
    var cut_music_list = JSON.parse(home_music_list).album;
    //将两组数据都放进all_obj 对象里面
    all_obj.music = cut_music_list;
    let _template = Handlebars.compile(home_template);
    // 将handlebar模板编译成html格式的字符串
    let _html = _template({
        alldata: all_obj
    });
    $('#root').html(_html);

    $('.product-message').on('tap',function(){
        let url = $(this).find('.product-img').attr('src');
        let title = $(this).find('.product-name').html();
        let num = $(this).find('.product-times').html();
        localStorage.setItem('home_url',url)
        localStorage.setItem('home_title',title)
        localStorage.setItem('homt_num',num)
    })
};

module.exports = {
    render
}