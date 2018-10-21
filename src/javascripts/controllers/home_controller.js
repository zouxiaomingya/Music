
const home_template = require('../views/home.html');

const render = () => {
    // 初始加载一下 首页的框架
    let _template = Handlebars.compile(home_template);
    let _html = _template();
    $('#root').html(_html);
};

module.exports = {
    render
}