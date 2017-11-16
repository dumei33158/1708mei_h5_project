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
/*$(".D_content").animate({});*/
$(".D_inforBtn").click(function(){
    console.log(222);
    $(".D_iPicture").append($(".D_iPiCircle").clone(true));

});