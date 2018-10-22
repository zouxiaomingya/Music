



// 提供音乐信息数据
const music_list =  () => {
    return  $.ajax({
        type: "GET",
        url: '/search/splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381',
        dataType : "JSON",
        success: (res) => {
            return res;
        }
    })
};

const get_homt_img =  () => {
    return  $.ajax({
        type: "GET",
        url: '/home/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
        dataType : "JSON",
        success: (res) => {
            return res;
        }
    })
};


const get_hot_list =  () => {
    return  $.ajax({
        type: "GET",
        url: '/static/mock/list.json',
        dataType : "JSON",
        success: (res) => {
            return res;
        }
    })
};
module.exports = {
    music_list,
    get_homt_img,
    get_hot_list
};