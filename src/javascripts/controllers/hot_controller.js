const hot_template = require('../views/hot.html');

const render = () => {
    $('#root').html(hot_template);
}

module.exports = {
    render
}

