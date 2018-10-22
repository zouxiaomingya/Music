
const search_template = require('../views/search.html');
const search_music_model = require('../models/get_data');
const render = () => {



    //存放搜索记录
    //取本地数据
    let history = {};
    let historyArr = [];
    if(localStorage.history){
        history = JSON.parse(localStorage.history);
        historyArr = [...Object.keys(history)];
    }

    //数据驱动

    //提取热门关键词
    async function fo(){
        let data = await search_music_model.music_list();
        let list = JSON.parse(data).data.hotkey;
        addSearchHotHtml(list);
        addSearchHistoryHtml(historyArr);
    }
    fo();

    //实时搜索

    //加入模板
    let _template = Handlebars.compile(search_template);
    let _html = _template();
    $('#root').html(_html);

    //页面加载完成，输入框获取焦点
    let input = document.getElementById("input-search");
    input.focus();
    input.addEventListener('focus',function(){
        isEmpty(input);
    });

    function getList(data){
        data.s.forEach(item=>{
            console.log(item);
        });
    }
    //输入框内容改变时
    input.addEventListener('input',function() {
        isEmpty(input);
        // getList({s:['d','f']});
        // let _script = document.createElement("script");
        // _script.src = `Http://suggestion.baidu.com/?wd=${input.value}&cb=getList`;
        // document.body.appendChild(_script);
        // _script.remove();
    });


    //函数防抖
    function debounce(callback,content) {
        let timer;
        return function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                callback();
            }, 500)
        }
    }

    //判断输入框是否为空
    function isEmpty(input){
        if(input.value !== ''){
            $('.search-hot').css({display: "none"});
            $('.search-history').css({display: "none"});
            $('.search-result').css({display: "none"});
            $('.search-relevant').css({display: "block"});
        } else{
            $('.search-hot').css({display: "block"});
            $('.search-history').css({display: "block"});
            $('.search-relevant').css({display: "none"});
            $('.search-result').css({display: "none"});
        }
    }

    //重置输入框
    $('.reset').tap(function(){
        input.value = '';
        input.focus();
    });

    //点击热门关键词
    $('.search-hot__list').on("tap",".hot-keywords",function(){
        addHistory($(this));
    });
    //点击历史搜索

    //点击历史搜索删除
    $('.search-history').on("tap",".delete-history__list",function(){
        deleteHistory($(this));
    });

    //热门搜索模板
    function addSearchHotHtml(list){
        let search_hot_html = '';
        for(let i=0;i<11;i++){
            search_hot_html += '<li class="hot-keywords">' + list[i].k + '</li>';
        }
        $('.search-hot__list').html(search_hot_html);
    }
    //历史搜索模板
    function addSearchHistoryHtml(list){
        let search_history_html = '';
        for(let i=0;i<list.length;i++){
            search_history_html += '<div class="search-history__list"><p class="search-history__keywords">' + list[i] + '</p> <p class="delete-history__list"></p> </div>';
        }
        $('.search-history').html(search_history_html);
        $('.load').css({display: 'none'});
    }

    //本地存储搜索历史记录
    function addHistory(ele){
        history[ele.html()] = ele.html();
        localStorage.history = JSON.stringify(history);
    }
    function deleteHistory(ele){
        delete history[ele.siblings().html()];
        localStorage.history = JSON.stringify(history);
        ele.parent().remove();
    }



};

module.exports = {
    render
};
