
const search_template = require('../views/search.html');
const search_music_model = require('../models/search_music');
const render = () => {

    let _template = Handlebars.compile(search_template);
    let _html = _template();
    $('#root').html(_html);

    //页面加载完成，输入框获取焦点
    $('#input-search').focus();
    //
    console.log("ok");

    async function fo(){
        let data = await search_music_model.music_list();
        console.log(data);
    }
    fo();
};

module.exports = {
    render
};
