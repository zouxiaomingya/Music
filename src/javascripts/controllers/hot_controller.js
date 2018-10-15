const profile_template = require('../views/hot.html');

const render = () => {
    $('.home-container main').html(profile_template);
}

module.exports = {
    render
}