
const render = () => {
    //播放界面初始化

    let music_name = localStorage.getItem('music');
    let picUrl = localStorage.getItem('picUrl');
    let singer = localStorage.getItem('singer');

    $('.playRotate').attr({
        'src': picUrl
    });
    $('.play-lyrics__top--music').html(music_name);
    $('.play-lyrics__top--singer').html(singer);
    $('.filter-bg').css({
        backgroundImage :`url(${picUrl})`,
        backgroundSize: "20rem 20rem"
    })
    console.log(music,picUrl,singer,'asda')

    // $('#audio').attr({src:localStorage.picUrl});

    //创建一个音乐类
    class Music{
        constructor(src){
            this.audio = document.getElementById("audio");
            this.src = src;
        }
        //初始化
        init(){
            this.audio.volume = 0.8;
            this.play();
        }
        //播放
        play(){
            this.audio.play();
            //播放时移除暂停图标，并旋转图片
            $('.play-circle').removeClass('isPlay');
            $('.playRotate').css({"animation-play-state" : "running"});
            $('.play-circle__bg').removeClass('pauseRotate');
        }
        //暂停
        pause(){
            this.audio.pause();
            //暂停时添加暂停图标，并停止旋转图片
            $('.play-circle').addClass('isPlay');
            $('.playRotate').css({"animation-play-state" : "paused"});
            $('.play-circle__bg').addClass('pauseRotate');
        }
        //判断是否在播放
        isplay(){
            if(this.audio.paused){
                this.play();
            } else{
                this.pause();
            }
        }

    }
    let music = new Music();
    music.init();

    $('.play-circle').tap(function(){
        music.isplay();

    })


};

module.exports = {
    render
}