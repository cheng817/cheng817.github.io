
$(function(){
    //下拉菜单
    (function(){
        $('.header-rt li').each(function(){
            $(this).hover(function(){
                $(this).children('.header-bk').show();

            },function(){
                $(this).children('.header-bk').hide();
            });
        })
    })();
    //网址导航下拉框
    (function(){
        $('#wzdh').hover(function(){
            $('.navigation').show();
        },function(){
            $('.navigation').hide();
        });
        $('.navigation').hover(function(){
            $('.navigation').show();
        },function(){
            $('.navigation').hide();
        });
    })();
    //图片切换1
    (function(){
        var a=0;
        var timer=null;
        var hasStarted=false;
        //鼠标滑入：显示和停止和 鼠标滑出：隐藏，播放
        $(".switch-img").hover(function(){
            stop();
            $(".lr").show();
        },function(){
            $(".lr").hide();
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
    //商品二级分类菜单
    (function (){
        //遍历li
        $(".shopp").find("li").each(function () {
            //显示与隐藏
            $(this).hover(function(){
                $(this).children('.shopp-js').show();
            },function(){
                $(this).children('.shopp-js').hide();
            });
        })
    })();
    //图片切换2
    (function(){
        var a=0;
        var timer=null;
        var hasStarted=false;
        //鼠标滑入：显示和停止和 鼠标滑出：隐藏，播放
        $(".switch-pic").hover(function(){
            stop();
            $(".lr-img").show();
        },function(){
            $(".lr-img").hide();
            start();
        });
        //点击小按钮，图片进行左右切换效果
        $(".anniu-img li").click(function(){
            $(this).addClass("on").siblings().removeClass("on");
            var num=$(this).index();
            $(".pic-img").animate({marginLeft:-520*num},"slow");
        });
        //点击左右按钮，图片进行切换效果
        $(".pre-img").click(function(){
            pre();
        });
        $(".next-img").click(function(){
            next();
        });
        //开始播放
        start();
        //向上滑
        function pre(){
            a--;
            a=(a+6)%6;
            $(".pic-img").animate({marginLeft:-520*a},"slow");
            $(".anniu-img li").eq(a).addClass("on").siblings().removeClass("on");
        }
        //向下滑
        function next(){
            a++;
            a=a%6;
            $(".pic-img").animate({marginLeft:-520*a},"slow");
            $(".anniu-img li").eq(a).addClass("on").siblings().removeClass("on");
        }
        //开始播放
        function start(){
            if(!hasStarted){
                hasStarted=true;
                timer=setInterval(function(){
                    next();
                },3500);
            }
        }
        //关闭播放
        function stop(){
            clearInterval(timer);
            hasStarted = false;
        }
    })();
    //选项卡
    (function(){
        $(".notice-top li").mouseover(function(){
            //获取选项的索引值
            var index=$(this).index();
            //切换高亮
            $(this).addClass("sele").siblings().removeClass("sele");
            //选中选项时显示相应的内容，同时隐藏其他内容
            $(".notice-bottom > ul").eq(index).show().siblings().hide();
        });
    })();
    //显示隐藏图片中的a标签
    (function () {
        //遍历li
        $(".products-center li").each(function () {
            //显示与隐藏
            $(this).hover(function(){
                $(this).children('.products-js').show();
            },function(){
                $(this).children('.products-js').hide();
            });
        })
    })();
});