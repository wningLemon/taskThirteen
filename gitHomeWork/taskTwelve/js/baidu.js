$(document).ready(function () {

    //取出之前的皮肤
    var localBackground = localStorage.getItem('background');
    if (localStorage) {
        document.body.style.background = localBackground;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'no-repeat';
    }
    document.body.style.background = getCookie('background');
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'no-repeat';

    //采用单例模式将事件模块化，清晰的绑定事件
    var  index={
        init:function (argument) {
            var me=this;
            me.render();
            me.bind();
        },
        render:function () {
            var me=this;
            me.login=$('#login');
            me.logindiv=$('#loginDiv');
            me.set=$('#set');
            me.setdiv=$('#setDiv');
            me.more=$('#more');
            me.morediv=$('#moreDiv');
        },
        bind:function () {
            var me=this;
            me.login.mouseover(function () {
                me.logindiv.show();
            });
            me.logindiv.mouseleave(function () {
                $(this).hide();
            });
            me.set.mouseover(function () {
                me.setdiv.show();
            });
            me.setdiv.mouseleave(function () {
                $(this).hide();
            });
            me.more.mouseover(function () {
                me.morediv.show();
            });
            me.morediv.mouseleave(function () {
                $(this).hide();
            });
        }
    };
    index.init();


    //点击皮肤设置皮肤
    $(".tools-hf").click(function () {
        $(".skin").slideDown(500);
    });

    //更改皮肤选项卡
    $(".skin-li").each(function (index) {
        $(this).click(function () {
            $("#skin-content>div").hide();
            $("#skin-content>div").eq(index).show();
            $(".skin-li").removeClass("skin-li-active");
            $(".skin-li").eq(index).addClass('skin-li-active');
        });
    });


    //取出皮肤图片的地址
    var len = $(".img-ul img").length;
    var aImgUrl = new Array();
    for (var i = 0; i < len; i++) {
        aImgUrl[i] = $(".img-ul img").eq(i).attr("src");
    }

    //设置选择皮肤后的勾选以及设置皮肤颜色
    $(".img-ul li").each(function (index) {
        $(this).click(function () {
            $(".select").each(function () {
                $(this).css("visibility", "hidden");
            });
            $(".select").eq(index).css("visibility", "visible");
            $("#s_skin_preview_skin").attr("src", aImgUrl[index]);
//          		$("#s_skin_preview_skin").css("width","262px");
            var strBack = "url(" + aImgUrl[index] + ")";
            document.body.style.background = strBack;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'no-repeat';
            setCookie('background', strBack, 86400);
            localStorage.setItem('background', strBack);
        });
    });

    $(".img-ul li").each(function (index) {
        $(this).hover(function () {
            $("#s_skin_preview_skin").attr("src", aImgUrl[index]);
        });
    });


    //收回皮肤设置
    $("#skin-return").click(function () {
        $(".skin").hide();
    });

    //取得cookie
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';'); //把cookie分割成组
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i]; //取得字符串
            while (c.charAt(0) == ' ') { //判断一下字符串有没有前导空格
                c = c.substring(1, c.length); //有的话，从第二位开始取
            }
            if (c.indexOf(nameEQ) == 0) { //如果含有我们要的name
                return unescape(c.substring(nameEQ.length, c.length)); //解码并截取我们要值
            }
        }
        return false;
    }

    //设置cookie
    function setCookie(name, value, seconds) {
        seconds = seconds || 0;
        var expires = "";
        if (seconds != 0) { //设置cookie生存时间
            var date = new Date();
            date.setTime(date.getTime() + (seconds * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        document.cookie = name + "=" + escape(value) + expires + "; path=/"; //转码并赋值
    }


    // 根据tab切换页面呈现不同的内容以及改变tab的样式
    $(".tab span").each(function (index) {
        $(this).click(function () {
            $("#tab-content>div").removeClass('div-show');
            $("#tab-content>div").eq(index).addClass('div-show');
            $(".tab span").removeClass('tab-active');
            $(".tab span").eq(index).addClass('tab-active');
            $(".care-icon").css("backgroundPosition", "-15px 0px");

        });
    });
    $(".tab-title:first").click(function () {
        $(".care-icon").css("backgroundPosition", "-140px 0px");
    });
});

		
		