const search_template = require('../views/search.html');

const render = () => {
    $('#root').html(search_template);
}
module.exports = {
    render
}