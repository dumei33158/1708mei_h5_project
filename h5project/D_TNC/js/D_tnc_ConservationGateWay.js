/**
 * Created by Administrator on 2017/11/13.
 */
/*$(".D_cTable tr").each(function(i){
    $(".D_cTable tr").eq(i).find("td").each(function(j){
        $(this).eq(j).css({
            background:'url("../img/D_conser/D_cnav_icon'+j+'.png") no-repeat'
        })
    })
});*/
/*$(".D_cTable tr").each(function(i){
    $(".D_cTable td").each(function(){
        $(".D_cTable tr").append('<img src="../img/D_conser/D_cnav_icon'+i+'.png" alt=""/>')
    })
});*/
function D_picGo(){
var D_numf1=0;
$(".D_f1").mouseover(function(){
    D_numf1++;
    if(D_numf1>$(".D_cTable tr td").outerWidth()*2.3){
        D_numf1=$(".D_cTable tr td").outerWidth()*2.3
    }
    $(this).css({
        opacity:"1",
        left:""+D_numf1+"px"
    })
})
var D_cTimef1=setInterval('$(".D_f1").mouseover()');
var D_numf2=0;
$(".D_f2").mouseover(function(){
    D_numf2+=2;
    if(D_numf2>$(".D_cTable tr td").outerWidth()*3.3){
        D_numf2=$(".D_cTable tr td").outerWidth()*3.3
    }
    $(this).css({
        opacity:"1",
        left:""+D_numf2+"px"
    })
})
var D_cTimef2=setInterval('$(".D_f2").mouseover()');
var D_numf4=0;
$(".D_f4").mouseover(function(){
    D_numf4+=3;
    if(D_numf4>$(".D_cTable tr td").outerWidth()*4.3){
        D_numf4=$(".D_cTable tr td").outerWidth()*4.3
    }
    $(this).css({
        opacity:"1",
        left:""+D_numf4+"px"
    })
})
var D_cTimef4=setInterval('$(".D_f4").mouseover()');
var D_numf3=0;
$(".D_f3").mouseover(function(){
    D_numf3++;
    if(D_numf3>$(".D_cTable tr td").outerWidth()*.3){
        D_numf3=$(".D_cTable tr td").outerWidth()*.3
    }
    $(this).css({
        opacity:"1",
        left:""+D_numf3+"px"
    })
})
var D_cTimef3=setInterval('$(".D_f3").mouseover()');
var D_numf5=0;
$(".D_f5").mouseover(function(){
    D_numf5++;
    if(D_numf5>$(".D_cTable tr td").outerWidth()*.3){
        D_numf5=$(".D_cTable tr td").outerWidth()*.3
    }
    $(this).css({
        opacity:"1",
        left:""+D_numf5+"px"
    })
})
var D_cTimef5=setInterval('$(".D_f5").mouseover()');
var D_numf6=0;
$(".D_f6").mouseover(function(){
    D_numf6+=4;
    if(D_numf6>$(".D_cTable tr td").outerWidth()*5.3){
        D_numf6=$(".D_cTable tr td").outerWidth()*5.3
    }
    $(this).css({
        opacity:"1",
        left:""+D_numf6+"px"
    })
})
var D_cTimef6=setInterval('$(".D_f6").mouseover()');
var D_numf7=0;
$(".D_f7").mouseover(function(){
    D_numf7++;
    if(D_numf7>$(".D_cTable tr td").outerWidth()*.3){
        D_numf7=$(".D_cTable tr td").outerWidth()*.3
    }
    $(this).css({
        opacity:"1",
        left:""+D_numf7+"px"
    })
})
var D_cTimef7=setInterval('$(".D_f7").mouseover()');
var D_numf8=0;
$(".D_f8").mouseover(function(){
    D_numf8++;
    if(D_numf8>$(".D_cTable tr td").outerWidth()*1.3){
        D_numf8=$(".D_cTable tr td").outerWidth()*1.3
    }
    $(this).css({
        opacity:"1",
        left:""+D_numf8+"px"
    })
})
var D_cTimef8=setInterval('$(".D_f8").mouseover()');
var D_numf9=0;
$(".D_f9").mouseover(function(){
    D_numf9++;
    if(D_numf9>$(".D_cTable tr td").outerWidth()*1.3){
        D_numf9=$(".D_cTable tr td").outerWidth()*1.3
    }
    $(this).css({
        opacity:"1",
        left:""+D_numf9+"px"
    })
})
var D_cTimef9=setInterval('$(".D_f9").mouseover()');
var D_numf10=0;
$(".D_f10").mouseover(function(){
    D_numf10+=2;
    if(D_numf10>$(".D_cTable tr td").outerWidth()*2.3){
        D_numf10=$(".D_cTable tr td").outerWidth()*2.3
    }
    $(this).css({
        opacity:"1",
        left:""+D_numf10+"px"
    })
})
var D_cTimef10=setInterval('$(".D_f10").mouseover()');
var D_numf11=0;
$(".D_f11").mouseover(function(){
    D_numf11+=3;
    if(D_numf11>$(".D_cTable tr td").outerWidth()*6.3){
        D_numf11=$(".D_cTable tr td").outerWidth()*6.3
    }
    $(this).css({
        opacity:"1",
        left:""+D_numf11+"px"
    })
})
var D_cTimef11=setInterval('$(".D_f11").mouseover()');
var D_numf12=0;
$(".D_f12").mouseover(function(){
    D_numf12+=4;
    if(D_numf12>$(".D_cTable tr td").outerWidth()*7.4){
        D_numf12=$(".D_cTable tr td").outerWidth()*7.4
    }
    $(this).css({
        opacity:"1",
        left:""+D_numf12+"px"
    })
})
var D_cTimef12=setInterval('$(".D_f12").mouseover()');
var D_numf13=0;
$(".D_f13").mouseover(function(){
    D_numf13+=5;
    if(D_numf13>$(".D_cTable tr td").outerWidth()*6.4){
        D_numf13=$(".D_cTable tr td").outerWidth()*6.4
    }
    $(this).css({
        opacity:"1",
        left:""+D_numf13+"px"
    })
})
var D_cTimef13=setInterval('$(".D_f13").mouseover()');
var D_numf14=0;
$(".D_f14").mouseover(function(){
    D_numf14+=6;
    if(D_numf14>$(".D_cTable tr td").outerWidth()*7.3){
        D_numf14=$(".D_cTable tr td").outerWidth()*7.3
    }
    $(this).css({
        opacity:"1",
        left:""+D_numf14+"px"
    })
})
var D_cTimef14=setInterval('$(".D_f14").mouseover()');
var D_numf15=0;
$(".D_f15").mouseover(function(){
    D_numf15+=7;
    if(D_numf15>$(".D_cTable tr td").outerWidth()*8.3){
        D_numf15=$(".D_cTable tr td").outerWidth()*8.3
    }
    $(this).css({
        opacity:"1",
        left:""+D_numf15+"px"
    })
})
var D_cTimef15=setInterval('$(".D_f15").mouseover()');
var D_numf16=0;
$(".D_f16").mouseover(function(){
    D_numf16+=8;
    if(D_numf16>$(".D_cTable tr td").outerWidth()*9.1){
        D_numf16=$(".D_cTable tr td").outerWidth()*9.1
    }
    $(this).css({
        opacity:"1",
        left:""+D_numf16+"px"
    })
})
var D_cTimef16=setInterval('$(".D_f16").mouseover()');
var D_numf17=0;
$(".D_f17").mouseover(function(){
    D_numf17+=9;
    if(D_numf17>$(".D_cTable tr td").outerWidth()*9.9){
        D_numf17=$(".D_cTable tr td").outerWidth()*9.9
    }
    $(this).css({
        opacity:"1",
        left:""+D_numf17+"px"
    })
})
var D_cTimef17=setInterval('$(".D_f17").mouseover()');
var D_numf18=0;
$(".D_f18").mouseover(function(){
    D_numf18+=10;
    if(D_numf18>$(".D_cTable tr td").outerWidth()*10.9){
        D_numf18=$(".D_cTable tr td").outerWidth()*10.9
    }
    $(this).css({
        opacity:"1",
        left:""+D_numf18+"px"
    })
})
var D_cTimef18=setInterval('$(".D_f18").mouseover()');
}
D_picGo();

$(function(){
    setTimeout(function(){
        $(".D_cTable").animate({left:"-2000px"},4000,function(){
            $(this).css({opacity:0,transition:"all 5s"});
            /*$(".D_cTable img").css({height:"10px"});
            $('.D_cTable tr td').css({
                boxShadow:"3px -3px 3px 2px rgba(234,45,15,.75)"})*/
        });
    },2000);
});
$("#D_accordin .panel-title>a").css({
    fontSize:"20px",
    textDecoration:"none"
});
$("#D_accordin .panel-title>a>img").css({
    marginRight:"10px"
});

