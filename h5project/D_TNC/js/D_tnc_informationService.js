/**
 * Created by Administrator on 2017/11/12.
 */
$(".M_nav_left>li:not(:eq(0))").hover(
    function(){
        $(this).toggleClass("M_nav_left_li_hover");
        $(this).find("div").slideToggle("fast",function(){
            $(this).find("ul").slideToggle("slow")
        });
    }
);
$(".M_nav_right>li:first-child").hover(function(){
    $(this).toggleClass("M_nav_left_li_hover");
    $(this).find("div").slideToggle("fast")
});
$(".M_nav_right>li:last-child").mouseenter(function(){
    $(".M_share").slideDown();
});
$(".M_share").mouseleave(function(){
    $(this).slideUp();
});
var flag_nav=0;
$(window).scroll(function(){
    if(flag_nav==0){
        flag_nav=1;
        $(".M_nav").addClass("M_nav_disappear");
        setTimeout(function(){
            $(".M_nav").removeClass("M_nav_disappear");
            flag_nav=0;
        },1200)
    }
});

$(".D_tips>h1>a").mouseenter(function(e){
    var e=e||window.event;
    e.preventDefault();
    e.stopPropagation();
    $(".D_txt3").css({opacity:"1",transition:"all .9s"});
    $('.D_imA1 img').css({left:"30%",transition:"all .6s",transform:"rotate(720deg)"});
    $('.D_imA2 img').css({left:"35%",transition:"all .6s",transform:"rotate(780deg)"});
    $('.D_imA3 img').css({left:"30%",transition:"all .6s",transform:"rotate(740deg)"});
    $('.D_imA4 img').css({left:"70%",transition:"all .6s",transform:"rotate(750deg)"})
});
$(".D_tips>h1>a").mouseleave(function(e){
    var e=e||window.event;
    e.preventDefault();
    e.stopPropagation();
    $(".D_txt3").css({opacity:"1",transition:"all .9s"});
    $('.D_imA1 img').css({left:"-30px",transition:"all .6s",transform:"rotate(30deg)"});
    $('.D_imA2 img').css({left:"-25px",transition:"all .6s",transform:"rotate(20deg)"});
    $('.D_imA3 img').css({left:"-10px",transition:"all .6s",transform:"rotate(10deg)"});
    $('.D_imA4 img').css({left:"-30px",transition:"all .6s",transform:"rotate(0deg)"})
});

$(function(){
    $('#dowebok').fullpage({
        verticalCentered:false,//默认true内容居中，居左上对齐
        scrollingSpeed:2000,
        resize:true,
       /* anchors:["page1","page2","page3","page4","page5","page6","page7","page8","page9"],*/
        continuousVertical:false,
        loopHorizontal:true,
        navigation:true,
        navigationPosition:"left",
        autoScrolling:true,
        scrollBar:true,
        showActiveTooltip:true
        /*navigationTooltips:["page1","page2","page3","page4","page5","page6","page7","page8","page9"]*/
    })
});
$(window).scroll(function(){
    if($(window).scrollTop()>1000){
        $("#D_go_top").show();
    }else{
        $("#D_go_top").hide();
    }
});
$('#D_go_each>ul>li').click(function(e){
    e.preventDefault();
    e.stopPropagation();
     var D_j=$(this).index();
    $("body,html").animate({scrollTop:""+$("#D_page"+(D_j+1)+'').offset().top+""},"slow");
});
$(window).scroll(function(){
    $('#D_go_each>ul>li>a').each(function(i){
        if($(this).scrollTop()>$("#D_page"+(i+1)+'').offset().top){
            $('#D_go_each>ul>li>a').eq(i).toggleClass("D_active").siblings().removeClass("D_active");
        }
    });
});
$("#D_go_top").click(function(){
    $("body,html").animate({scrollTop:0},5000);
});
