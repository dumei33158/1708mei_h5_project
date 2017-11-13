function visibleCheck(){
    var contW=$(".hg_Nav .container").outerWidth();
    if(contW<=750){
        $(".gh-navbar1").hide();
        $(".gh-navbar2").hide();
    }else{
        var ST = document.body.scrollTop || document.documentElement.scrollTop;
        if(ST>=20) {
            $(".gh-navbar1").hide();
            $(".gh-navbar2").show();
        } else {
            $(".gh-navbar1").show();
            $(".gh-navbar2").hide();
        }
    }
}
window.onscroll= visibleCheck;
function menuTop () {
    var w = $(".gh_brand").height();
    $(".gh_brand").find("ul").css("top",w+"px");
}
window.onload=function(){
    menuTop ();
    visibleCheck();
};
$(window).resize(function(){
    visibleCheck();
    menuTop ();
});

var flag = 0;
$(".brand_icon").click(function () {
    if(flag==0){
        $(this).attr("src","images/navanniugb.jpg");
        $(this).next().slideDown();
        flag=1;
    } else{
        $(this).attr("src","images/navanniu.png");
        $(this).next().slideUp();
        flag=0;
    }
});
