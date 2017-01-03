/**
 * Created by 谢成云 on 2017/1/1.
 */
$(function(){
    (function(){
        var a=0;
        var timer=null;
        var hasStarted=false;
        //鼠标滑入：显示和停止和 鼠标滑出：隐藏，播放
        $(".m-pic").hover(function(){
            stop();
        },function(){
            start();
        });
        //点击小按钮，图片进行左右切换效果
        $(".anniu li").click(function(){
            $(this).addClass("on").siblings().removeClass("on");
            var num=$(this).index();
            $(".pic").animate({marginLeft:-520*num},"slow");
        });
        //点击左右按钮，图片进行切换效果
        $(".pre").click(function(){
            pre();
        });
        $(".next").click(function(){
            next();
        });
        //开始播放
        start();
        //向上滑
        function pre(){
            a--;
            a=(a+5)%5;

            $(".pic").animate({marginLeft:-520*a},"slow");
            $(".anniu li").eq(a).addClass("on").siblings().removeClass("on");
        }
        //向下滑
        function next(){
            a++;
            a=a%5;
            $(".pic").animate({marginLeft:-520*a},"slow");
            $(".anniu li").eq(a).addClass("on").siblings().removeClass("on");
        }
        //开始播放
        function start(){
            if(!hasStarted){
                hasStarted=true;
                timer=setInterval(function(){
                    next();
                },3000);
            }
        }
        //关闭播放
        function stop(){
            clearInterval(timer);
            hasStarted = false;
        }
    })();
})();