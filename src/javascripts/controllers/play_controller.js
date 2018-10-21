const play_template = require('../views/play.html');

const render = () => {
    // let _template = Handlebars.compile(play_template);
    // let _play = _template();
    $('#root').html(play_template);
}


module.exports = {
    render
}