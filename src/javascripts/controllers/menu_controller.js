const render = () => {
    let title = localStorage.getItem('home_title');
    let home_url = localStorage.getItem('home_url');
    let homt_num = localStorage.getItem('homt_num');

    $('.header-img').attr({
        'src': home_url
    });
    $('.i').html(homt_num);
    $('.header-title').html(title);
    $('.header-bg').css({
        backgroundImage :`url(${home_url})`
    })
    console.log(title, home_url, homt_num)
}
module.exports = {
    render
};