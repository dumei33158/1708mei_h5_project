/**
 * Created by Administrator on 2017/11/13.
 */
/*$('[class="D_clMap_r2img"]').mousemove(function(e){
    var e=e||window.event;

});*/
$('[class="D_clMap_r2img"]').mousemove(function(e){
    /*$('[class="D_clMap_r2line"]').css({
        background:"#ccc"
    });*/
    var e=e||window.event;
    var D_moveX=Math.floor(e.offsetX-$(this).outerWidth()/2);
    var D_n=$('[class="D_clMap_r2img"]')[0].offsetLeft;
   /* console.log(e.clientX);
    console.log(e.offsetX);
    console.log($(this).outerWidth());*/
    if(D_n>$('[class="D_clMap_r2line"]').outerWidth()-$(this).outerWidth()){
        D_n=$('[class="D_clMap_r2line"]').outerWidth()-$(this).outerWidth()
    }
    if(D_n<$(this).outerWidth()-5){
        D_n=$(this).outerWidth()-5;
    }
    $(this).css({
        left:D_n+D_moveX+"px"
    });
    $('[class="D_clMap_r2line_deepop"]').css({
        left:D_n+"px"
    })
});
$('[class="D_clMap_L1img"]').mousemove(function(e){
    var e=e||window.event;
    var D_moveY=Math.floor(e.offsetY-$(this).outerHeight()/2);
    var D_ln=$('[class="D_clMap_L1img"]')[0].offsetTop+D_moveY;
    if(D_ln>73){
        D_ln=73;
    }
    if(D_ln<29){
        D_ln=29;
    }
    $(this).css({
        top:D_ln+"px"
    });
    $('[class="D_clMap_L1line_deepop"]').css({
        top:D_ln-8+"px"
    })
});
$('.D_clMap_L1>li:first-child').click(function(){
    var D_nc=$('[class="D_clMap_L1img"]')[0].offsetTop;
    D_nc-=4;
    if(D_nc<29){
        D_nc=29;
    }
    $('[class="D_clMap_L1img"]').css({
        top:""+D_nc+"px"
    });
    $('[class="D_clMap_L1line_deepop"]').css({
        top:D_nc-8+"px"
    })
});
$('.D_clMap_L1>li:last-child').click(function(){
    var D_ncd=$('[class="D_clMap_L1img"]')[0].offsetTop;
    D_ncd+=5;
    if(D_ncd>73){
        D_ncd=73;
    }
    $('[class="D_clMap_L1img"]').css({
        top:""+D_ncd+"px"
    });
    $('[class="D_clMap_L1line_deepop"]').css({
        top:D_ncd-8+"px"
    })
});