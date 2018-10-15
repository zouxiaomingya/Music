
// 提供职位信息数据
const home_list = () => {
    console.log('ok1')
    return $.ajax({
            type: "POST",
            url: '/music/weapi/personalized/newsong',
            success: (res) => {
               return res;
            }
        })
}
module.exports = {
    home_list
}