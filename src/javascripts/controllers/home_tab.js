const home_controller = require('./home_controller'); 
const hot_controller = require('./hot_controller'); 
const search_controller = require('./search_controller'); 


const render = () => {
    switchTab();
}

const switchTab = () => {
    $('.nav_item').on('tap', function () {
        let _controllers = [ home_controller, hot_controller, search_controller ];
            _controllers[$(this).index()].render();
        $(this).find('a').addClass('active').end().siblings().find('a').removeClass('active');
    }) 
}   

module.exports = {
    render
} 