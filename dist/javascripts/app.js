!function(s){var t={};function a(e){if(t[e])return t[e].exports;var i=t[e]={i:e,l:!1,exports:{}};return s[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=s,a.c=t,a.d=function(s,t,e){a.o(s,t)||Object.defineProperty(s,t,{enumerable:!0,get:e})},a.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},a.t=function(s,t){if(1&t&&(s=a(s)),8&t)return s;if(4&t&&"object"==typeof s&&s&&s.__esModule)return s;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:s}),2&t&&"string"!=typeof s)for(var i in s)a.d(e,i,function(t){return s[t]}.bind(null,i));return e},a.n=function(s){var t=s&&s.__esModule?function(){return s.default}:function(){return s};return a.d(t,"a",t),t},a.o=function(s,t){return Object.prototype.hasOwnProperty.call(s,t)},a.p="",a(a.s=1)}([function(s,t,a){const e=a(8);s.exports={render:()=>{$("#root").html(e)}}},function(s,t,a){const e=a(2);a(0).render();const i=new e({initial:"#/home"});window.router=i,i.init()},function(s,t,a){const e=a(3);s.exports=class{constructor({initial:s}){this.routes=e,this.initial=s||"#/home"}init(){this.initialHash(),this.listenHashChange()}initialHash(){location.hash||(location.hash=this.initial)}switch(s){location.hash=s}refresh(){let s=location.hash;if(!this.routes[s])return location.hash=this.initial,!1;this.routes[s].render(),this.switchTab()}switchTab(){$(".nav-link").each(function(s){$(this).attr("path")===location.hash?$(this).addClass("active"):$(this).removeClass("active")})}listenHashChange(){window.addEventListener("load",this.refresh.bind(this)),window.addEventListener("hashchange",this.refresh.bind(this))}}},function(s,t,a){const e={"#/home":a(4),"#/hot":a(6),"#/search":a(0)};s.exports=e},function(s,t,a){const e=a(5);s.exports={render:()=>{let s=Handlebars.compile(e)();$("#root").html(s)}}},function(s,t){s.exports='<div class="home">    <div class="home-warp">        <p class="home-recommend__title">推荐歌单</p>        <div class="home-recommend__product">            <a href="" class="product-message">                <img class="product-img" src="http://p2.music.126.net/1CbAn1qn-zbcxKD2O37ycQ==/109951163605819623.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"                    alt="">                <p class="product-name">华语速爆新歌</p>                <span class="product-times">2.7亿</span>            </a>            <a href="" class="product-message">                <img class="product-img" src="http://p2.music.126.net/1CbAn1qn-zbcxKD2O37ycQ==/109951163605819623.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"                    alt="">                <p class="product-name">华语速爆新歌</p>                <span class="product-times">2.7亿</span>            </a>            <a href="" class="product-message">                <img class="product-img" src="http://p2.music.126.net/1CbAn1qn-zbcxKD2O37ycQ==/109951163605819623.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"                    alt="">                <p class="product-name">华语速爆新歌</p>                <span class="product-times">2.7亿</span>            </a>            <a href="" class="product-message">                <img class="product-img" src="http://p2.music.126.net/1CbAn1qn-zbcxKD2O37ycQ==/109951163605819623.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"                    alt="">                <p class="product-name">华语速爆新歌</p>                <span class="product-times">2.7亿</span>            </a>            <a href="" class="product-message">                <img class="product-img" src="http://p2.music.126.net/1CbAn1qn-zbcxKD2O37ycQ==/109951163605819623.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"                    alt="">                <p class="product-name">华语速爆新歌</p>                <span class="product-times">2.7亿</span>            </a>            <a href="" class="product-message">                <img class="product-img" src="http://p2.music.126.net/1CbAn1qn-zbcxKD2O37ycQ==/109951163605819623.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"                    alt="">                <p class="product-name">华语速爆新歌</p>                <span class="product-times">2.7亿</span>            </a>        </div>        <p class="home-recommend__title">最新音乐</p>        <div class="home-recommend__music">            <div class="list">                <a class="music-item" href="">                    <div class="warp">                        <div class="music-message">                            <p class="title">                                从无到有                                <span>(电视剧《创业时代》片asfffffdad asasdadasd)</span>                            </p>                            <p class="singer">                                <i>A</i>                                毛不易-从无到有                            </p>                        </div>                        <div class="palyer">                            <span class="bg"></span>                        </div>                    </div>                </a>                <a class="music-item" href="">                    <div class="warp">                        <div class="music-message">                            <p class="title">                                まっしろ                                <span>白皚 (日剧《无法成为野兽的我们》插曲)</span>                            </p>                            <p class="singer">                                <i>A</i>                                毛不易-从无到有                            </p>                        </div>                        <div class="palyer">                            <span class="bg"></span>                        </div>                    </div>                </a>            </div>        </div>    </div></div><footer class="footer">    <div class="warp">        <div class="logo-warp">            <img src="../../static/images/logo_big.jpg" alt="">            <span class="logoname">网易云音乐</span>        </div>        <p class="openapp">打开APP，发现更多好音乐 ></p>        <p class="copyright">网易公司版权所有©1997-2018 杭州乐读科技有限公司运营</p>    </div></footer>'},function(s,t,a){const e=a(7);s.exports={render:()=>{$("#root").html(e)}}},function(s,t){s.exports='<div class="home">    <div class="home-warp">        <p>adad</p>    </div></div>'},function(s,t){s.exports='<div class="search">    \x3c!-- 搜索框 --\x3e    <p>search!!!!!</p></div>'}]);