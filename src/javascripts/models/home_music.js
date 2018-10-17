

// 提供职位信息数据
const home_list =  () => {
    return  $.ajax({
        type: "GET",
        url: '/lagou/listmore.json?pageNo=2&pageSize=15',
        success: (res) => {
            console.log(123)
            return 'res'
        }
    })
}
module.exports = {
    home_list
}