



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
module.exports = {
    music_list
};