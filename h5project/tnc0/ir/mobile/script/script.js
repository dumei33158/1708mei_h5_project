$(function(){
	$TNC.init();
});

$TNC={
	errormsg:[
		["网络连接错误！请稍后重试","Network connection error! <br/>Please try again later"],
		["未知错误","Unknown Error"],
		["请发出您的声音","Let us hear your voice!"],
		["不要超过140个字哟！","Not more than 140 words!"],
		["什么都没干","Done Nothing"],
		["我刚刚用了十五分钟{msg}，万万没想到与此同时…","I {msg} in the last 15 minutes,But never could have imagined in that same time…"]
	],
	getErrorTips:function(index){
		index= index ||0;
		var cur= !!$navLang && $navLang=="cn"? 0:1;
		return $TNC.errormsg[index][cur];
	},
	smartLen:function(str){
		str = str.replace(new RegExp("((news|telnet|nttp|file|http|ftp|https)://){1}(([-A-Za-z0-9]+(\\.[-A-Za-z0-9]+)*(\\.[-A-Za-z]{2,5}))|([0-9]{1,3}(\\.[0-9]{1,3}){3}))(:[0-9]*)?(/[-A-Za-z0-9_\\$\\.\\+\\!\\*\\(\\),;:@&=\\?/~\\#\\%]*)*","gi"),'填充填充填充填充填充填');
		return Math.ceil(($.trim(str.replace(/[^\u0000-\u00ff]/g,"aa")).length)/2);
	},
	smartCut:function(str,maxlen ){
		var _=this;
		if( _.smartLen(str) <= maxlen ){
		   return str;
		}else{
			for( var i=0,l=str.length;i<l;i++ ){
				var temp = str.substr(0,i);
				if( _.smartLen( temp ) >= maxlen ){
					return temp;
				}
			}
			return str;//fail silently
		}
	},
	userID:"",
	resizeHandler:function(e){
		var _w=window.innerWidth,
			_h=window.innerHeight;
		$("#main").css({height:_w>_h && _h<=500?_w:_h});
		//$(".elptpicwrapper");
		var tarh1=_h-500-170;
		tarh1= tarh1>=346?346:tarh1;

		$("#ending .bottomcase").css({height:_h-520,"padding-top":24});
		$("#ending .sharecover").css({"height":tarh1});
		//$("#ending .logocover").css({"height":tarh2,"padding-top":(_h-476)-tarh1-tarh2});
	},
	homeClock:function(s){
		if(!s){
			$(".timepointer").transition({"rotate":"0deg"},5000);
		}else{
			$(".timepointer").css({"rotate":"-90deg"});
		}
		return this;
	},
	setTimerClock:function(h,m,s){
		var val=[Math.floor(h/10),
				h%10,
				Math.floor(m/10),
				m%10,
				Math.floor(s/10),
				s%10];
		$(".timenum").each(function(index,elem){
			$(this).find(".innernum").eq(0).css({"margin-top":-134*val[index]});
			$(this).data("time",val[index]);
		});
		return this;
	},
	stopStatue:false,stopid:null,
	timerClock:function(add,during,easing,s){
		var _=this;
			clearTimeout(_.stopid);
			during =during || 300;
			s= s>=Math.PI? Math.PI :(s || 0);
			if(easing){
				during=during*(1-Math.sin(s));
				during=during<=10 ? 10:during;
			}
			$(".timenum").eq($(".timenum").size()-1).trigger((!!add?"addtime":"minustime"),during);
			var curtime=[];
			$(".timenum").each(function(i,el){
				curtime[i]= parseInt($(this).data("time")) || 0;
			});
			//停止事件
			if(curtime.join("")=="000000" || _.stopStatue){
				return _;
			}
			_.stopid=setTimeout(function(){
				_.timerClock(add,during,easing,s+0.001);
			},during+10);
		return _;
	},
	stopTimerClock:function(){
		this.stopStatue=true;
		clearTimeout(this.stopid);
		return this;
	},
	readyTimerClock:function(){
		this.stopStatue=false;
		return this;
	},
	bowenId:null,
	voiceBoWen:function(){
		var _=this;
		var $bowen=$(".voicequan").eq(0).clone(),
			$cover=$(".voicequan").parent();
		if($(".voicequan").size()>=6){return _;}
		$cover.append($bowen);
		$bowen.transition({width:400,height:400,"margin-left":-201,"bottom":-201,opacity:0},3000,function(){
			$(this).remove();
		});
		_.bowenId=setInterval(function(){
			_.voiceBoWen();
		},900);
	},
	clearBoWen:function(){
		var _=this;
		clearInterval(_.bowenId);
	},
	slidering:false,
	mainPageSlider:function(c,t,beback){
		c= c || $(".page").index($("http://www.tnc.org.cn/ir/mobile/script/.page.cur"));
		if(c==t){return;}
		if(t<0 || t>=$(".page").size()){return;}
		//if(!$TNC.slidering){
			//$TNC.slidering=true;
			if(beback==undefined || beback==null){beback=(c>t);}
			var $page=$(".page"),$cur=$("http://www.tnc.org.cn/ir/mobile/script/.page.cur");
			$page.eq(t).css({"y":beback?"-100%":"100%","x":"0%"}).transition({"y":"0%","x":"0%"},500,function(){
				
			});
			$cur.css({"y":"0%","x":"0%"}).transition({"y":beback?"100%":"-100%","x":"0%"},500,function(){
				//$TNC.slidering=false;
			});
			$cur.removeClass("cur");
			$page.eq(t).addClass("cur");
		//}
	},
	mainPageSliderLeft:function(c,t,beback){
		c= c || $(".page").index($("http://www.tnc.org.cn/ir/mobile/script/.page.cur"));
		if(c==t){return;}
		if(t<0 || t>=$(".page").size()){return;}
		//if(!$TNC.slidering){
			//$TNC.slidering=true;
			if(beback==undefined || beback==null){beback=(c>t);}
			//console.log(c+"-->"+t);
			var $page=$(".page"),$cur=$("http://www.tnc.org.cn/ir/mobile/script/.page.cur");
			$page.eq(t).css({"x":beback?"-100%":"100%","y":"0%"}).transition({"x":"0%","y":"0%"},500,function(){
				
			});
			$cur.css({"x":"0%","y":"0%"}).transition({"x":beback?"100%":"-100%","y":"0%"},500,function(){
				//$TNC.slidering=false;
			});
			$cur.removeClass("cur");
			$page.eq(t).addClass("cur");
		//}
	},
	renderFeaturePage:function(msg,callback){
		var _=this;
		msg=msg || $("#homepage .isay").val();
		$("#feature .idotxto").html(msg);
		var c=$(".page").index($("http://www.tnc.org.cn/ir/mobile/script/.page.cur"));
		_.mainPageSlider(c,1);
		_.renderFeatureFrame(0);
		_.clearBoWen();
		return _;
	},
	timerclockId:[],
	fpageIndex:-1,
	renderFeatureFrame:function(index,s){
		index=index || 0;
		var _=this;
		if(_.fpageIndex==index){return _;}		
		_.clearTimerclockId();
		var delaytime=200000;
		switch(index){
			case 0:
				//计时开始
				_.stopTimerClock().setTimerClock(0,15,0).readyTimerClock().timerClock(false,50); //  225秒走完
				$("#feature .tiptxt1").fadeIn(300);
				$("#feature .elptpicwrapper").fadeOut(200);
				delaytime=5000;
				break;
			case 1:
				_.stopTimerClock().setTimerClock(0,9,40).readyTimerClock().timerClock(false,50);//时间跳转
				$("#feature .tiptxt1").fadeOut(200);
				$("#feature .elptpicwrapper").eq(0).css({height:"100%"}).fadeIn(300);
				$("#feature .elptpicwrapper").not($("#feature .elptpicwrapper").eq(0)).fadeOut(200);
				delaytime=5000;
				break;
			case 2:
				_.stopTimerClock().setTimerClock(0,5,0).readyTimerClock().timerClock(false,50);//时间跳转
				$("#feature .tiptxt1").fadeOut(200);
				if(!!s){
					$("#feature .elptpicwrapper").eq(0).fadeOut(300);
					$("#feature .elptpicwrapper").eq(1).find(".elptpic").css({"top":0});
					$("#feature .elptpicwrapper").eq(1).css({"height":"0%","display":"block","top":0}).animate({"height":"100%"},1500);
					$("#feature .elptpicwrapper").eq(2).find(".elptpic").css({"top":"auto","bottom":0});
					$("#feature .elptpicwrapper").eq(2).css({"display":"block","top":"auto","bottom":0,"scale":1,"translateX":"0%"}).transition({"scale":0.35,"translateX":"-88%"},500,function(){
						$(this).css({"height":"100%","display":"none"});
					});
				}else{
					$("#feature .elptpicwrapper").eq(2).fadeOut(300);
					$("#feature .elptpicwrapper").eq(0).find(".elptpic").css({"top":0});
					$("#feature .elptpicwrapper").eq(0).css({"height":"100%","display":"block","top":0}).animate({"height":"0%"},500,function(){
						$(this).css({"height":"100%","display":"none"});
					});
					$("#feature .elptpicwrapper").eq(1).find(".elptpic").css({"top":"auto","bottom":0});
					$("#feature .elptpicwrapper").eq(1).css({"height":"0%","display":"block","top":"auto","bottom":0}).animate({"height":"100%"},1500);
				}
				delaytime=3000;
				break;
			case 3:
				_.stopTimerClock().setTimerClock(0,0,30).readyTimerClock().timerClock(false,50);//时间跳转
				$("#feature .tiptxt1").fadeOut(200);
				//if(!!s){
					$("#feature .elptpicwrapper").not($("#feature .elptpicwrapper").eq(2)).fadeOut(200);
					//$("#feature .elptpicwrapper").eq(2).fadeIn(300);
					$("#feature .elptpicwrapper").eq(2).find(".elptpic").css({"top":0});
					$("#feature .elptpicwrapper").eq(2).css({"display":"block","top":0,"scale":0.35,"x":"-88%"}).animate({"scale":1,"x":"0%"},500);
				//}else{
				//	$("#feature .elptpicwrapper").eq(0).fadeOut(300);
				//	$("#feature .elptpicwrapper").eq(1).find(".elptpic").css({"top":"auto","bottom":0});
				//	$("#feature .elptpicwrapper").eq(1).css({"height":"100%","display":"block","top":"auto","bottom":0}).animate({"height":"0%"},1500,function(){
				//		$(this).css({"height":"100%","display":"none"});
				//	});
				//	$("#feature .elptpicwrapper").eq(2).find(".elptpic").css({"top":0});
				//	$("#feature .elptpicwrapper").eq(2).css({"display":"block","top":0,"scale":0.35,"translateX":"-88%"}).animate({"scale":1,"translateX":"0%"},500);
				//}
				delaytime=3000;
				break;
			case 4:
				_.renderVoicePage(0);
				return _;
			default:
				break;
		}
		_.fpageIndex=index;
		$("#feature .dotxtcover").not($("#feature .dotxtcover").eq(index)).fadeOut(200);
		$("#feature .dotxtcover").eq(index).fadeIn(300);
		//20秒后 切换第二帧
		_.timerclockId[index+1]=setTimeout(function(){
			_.renderFeatureFrame(index+1);
		},delaytime);
		return _;
	},
	clearTimerclockId:function(index,s){
		var _=this;
		if(!!index || index==0){
			clearTimeout(_.timerclockId[index]);
		}else{
			for(var i=0;i<_.timerclockId.length;i++){
				if(i != s){
					clearTimeout(_.timerclockId[i]);					
				}
			}
		}
		return _;
	},
	renderVoicePage:function(){
		var _=this;
		var c=$(".page").index($("http://www.tnc.org.cn/ir/mobile/script/.page.cur"));
		$.ajax({
			url:'/ivory/mobile/template'http://www.tnc.org.cn/ir/mobile/script/,//test.json',
			data:{},
			type:"POST",
			dataType:"json",
			success:function(r){
				_.renderTemplateVoice(r);
				_.mainPageSlider(c,2);
				_.voiceBoWen();
				_.renderVoiceFrame(0);
			},
			error:function(){
				_.randerErrorPage(_.getErrorTips(0));
			}
		});
		return _;
	},
	curVoiceIndex:0,
	renderVoiceFrame:function(index){
		var _=this;
		if(_.curVoiceIndex==index){return;}
		$(".voiceitem").removeClass("cur");
		if(index==1){
			$("#voice .pitemtit").eq(0).fadeOut(200);
			$("#voice .pitemtit").eq(1).fadeIn(300);
			$("#voice .inputcover").eq(0).css({"x":"0%","y":"0%"}).transition({"x":"-100%","y":"0%"},500);
			$("#voice .inputcover").eq(1).css({"x":"100%","y":"0%"}).transition({"x":"0%","y":"0%"},500);
		}else{
			$("#voice .pitemtit").eq(1).fadeOut(200);
			$("#voice .pitemtit").eq(0).fadeIn(300);
			$("#voice .inputcover").eq(0).css({"x":"-100%","y":"0%"}).transition({"x":"0%","y":"0%"},500);
			$("#voice .inputcover").eq(1).css({"x":"0%","y":"0%"}).transition({"x":"100%","y":"0%"},500);
		}
		_.curVoiceIndex=index;
	},
	voiceitemId:null,
	renderTemplateVoice:function(array){
		$(".voiceitem .vicontxt").each(function(index,elem){
			$(this).html(array[index]);
		});
	},
	renderEndingPage:function(id){
		var _=this;
		_.clearBoWen();
		$("#yourid").html(id);
		var c=$(".page").index($("http://www.tnc.org.cn/ir/mobile/script/.page.cur")),t=$(".page").index($("#ending"));
		_.mainPageSlider(c,t);
	},
	errorTimeId:null,
	randerErrorPage:function(msg){
		var _=this;
		clearTimeout(_.errorTimeId);
		msg = msg || _.getErrorTips(1);
		var c=$(".page").index($("http://www.tnc.org.cn/ir/mobile/script/.page.cur")),t=$(".page").index($("#errorpage"));
		$("#errorpage .errortips").html(msg);
		_.mainPageSliderLeft(c,t);
		_.errorTimeId=setTimeout(function(){
			_.mainPageSliderLeft(t,c,true);
		}, 2000);
	},
	speakVoice:function(msg){
		var _=this;
		var id=_.userID || "";
		$.ajax({
			url:'/ivory/mobile/speak',
			data:{"rid":id,"content":msg},
			type:"POST",
			dataType:"json",
			success:function(r){
				if(r.ret==0){
					_.renderEndingPage(r.data.id);
				}else{
					_.randerErrorPage(r.msg);
				}
			},
			error:function(){
				_.randerErrorPage(_.getErrorTips(0));
			}
		});
	},
	cssInit:function(){
		var _=this;
		var _w=window.innerWidth,
			_h=window.innerHeight;
		var tarh=(_w>_h && _h<=500?_w:_h)*0.5-100;
		tarh=tarh>=408?408:tarh;
		$(".elptpic,.elptpiccover").css({height:tarh,width:tarh/408*584});
		$(".elptpiccover").css({"margin-left":-tarh/408*292});
		$(".timenum").each(function(index,elem){
			var maxlen=parseInt($(this).attr("relnum"));
			$(this).find(".innernum").css({height:134*(maxlen+1)});
		});
		return _;
	},
	eventInit:function(){
		var _=this;
		//$(window).on("resize",_.resizeHandler).trigger("resize");
		window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function(e){
			window.scrollTo(0,0);
		}, false);
		_.resizeHandler();

		//组织事件
		document.addEventListener("touchmove",function(e){
			//e =e ||window.event;
			//e.stopPropagation();
			//e.preventDefault();
			
		},false);

		$("http://www.tnc.org.cn/ir/mobile/script/.inputcover .isay").bind("keyup blur",function(e){
			var val=$(this).val(),
			 	reltxt=$(this).attr("reltxt"),
				$tips=$(this).parent().find(".inputtips");
			$tips.html($.trim(val)=='' ? reltxt:"");
		});
		//切换页面
		/*
		$("#main").hammer({}).on("swipeup", function(event) {
	        var index=$(".page").index($("http://www.tnc.org.cn/ir/mobile/script/.page.cur"));
	        _.mainPageSlider(index,index+1);
	    }).on("swipedown", function(event) {
	        var index=$(".page").index($("http://www.tnc.org.cn/ir/mobile/script/.page.cur"));
	        _.mainPageSlider(index,index-1);
	    });
*/		
		//首页 下翻按钮
		$("#homepage .btn_next,#homepage .btn_confirm").bind("click",function(e){
			//此处需要处理逻辑
			var msg=$("#homepage .isay").val() || _.getErrorTips(4);
			$.ajax({
				url:'/ivory/mobile/justdone',
				data:{"content":msg},
				type:"POST",
				dataType:"json",
				success:function(r){
					if(r.ret==0){
						_.userID=r.data.id;
						_.renderFeaturePage(msg);
						$("title").html(_.getErrorTips(5).replace(/{msg}/g,msg));
					}else{
						_.randerErrorPage(r.msg);
					}
				},
				error:function(){
					_.randerErrorPage(_.getErrorTips(0));
				}
			});
		});

		$("#voice .btn_confirm").bind("click",function(){
			var msg=$("#inputarea").val();
			if($.trim(msg)==""){
				_.randerErrorPage(_.getErrorTips(2));
			}else{
				_.speakVoice($.trim(msg));
			}
		});

		$("#feature").hammer({}).on("swipeup", function(event) {
	        //var index =_.fpageIndex || 0;
	        //_.renderFeatureFrame(4);
	        //_.renderVoicePage(0);
	    }).on("swipedown", function(event) {
	    	//var index =_.fpageIndex || 0;
	        //_.renderFeatureFrame((index-1<0?0:index-1),true);
	    });
	    $("#feature .btn_next").bind("click",function(e){
	    	var index =_.fpageIndex || 0;
	        _.renderFeatureFrame(index+1);
	    });

	    $("#voice").hammer({}).on("swipedown", function(event) {
	        _.renderFeaturePage();
	    }).on("swipeleft", function(event) {
	        _.renderVoiceFrame(1);
	    }).on("swiperight", function(event) {
	        _.renderVoiceFrame(0);
	    });

	    $(".voiceitem").bind("click",function(e){
	    	clearTimeout(_.voiceitemId);
	    	$(".voiceitem").removeClass("cur");
	    	$(this).addClass("cur");
	    	var msg=$(this).find(".vicontxt").html();
	    	_.voiceitemId=setTimeout(function(){
	    		_.speakVoice(msg);
	    	},500);
	    });
	    $("#voice .btn_other").bind("click",function(e){
	    	_.renderVoiceFrame(1);
	    });
	    $("#inputarea").bind("keyup blur",function(e){
	    	var val=$("#inputarea").val();
	    	var len=_.smartLen(val);
	    	if(len>140){
	    		$("#inputarea").val(_.smartCut(val,140));
	    		len=140;
	    		_.randerErrorPage(_.getErrorTips(3));
	    	}
			$(".inputsign span").html(len+"/140");
	    });


	    //计时器
	    $(".timenum").bind("addtime",function(e,during){  // +1
	    	var index=$(".timenum").index(this);
	    	var $this=$(this);
	    	var maxLen=parseInt($(this).attr("relnum"));
	    	var $innernum=$(this).find(".innernum").eq(0);
	    	var _topval=parseInt($innernum.css("margin-top").replace(/px$|em$/,"").replace("-",""));
	    	var curtime=Math.floor(_topval/134);
	    	during= during>=300? 300:(during<=10 ? 10:(during|| 300));
	    	if(curtime+1>maxLen){
	    		$(this).append($innernum.clone().css({"margin-top":0}));
	    		if(index-1>=0){
	    			$(".timenum").eq(index-1).trigger("addtime");
	    		}
	    	}
	    	$innernum.animate({"margin-top":-(curtime+1)*134},during,function(){
				if($this.find(".innernum").size()>1){ $this.find(".innernum").eq(0).remove();}
	    	});
	    	$this.data("time",(curtime+1)%10);
	    	//时区限制 
	    	//24小时制
	    	var val1=$(".timenum").eq(0).find(".innernum").eq(0).css("margin-top").replace(/px$|em$/,"").replace("-","");
	    	$(".timenum").eq(1).attr("relnum",Math.floor(val1/134)>=2?3:9).find(".innernum").css({height:134*((Math.floor(val1/134)>=2?3:9)+1)});
	    });
	    $(".timenum").bind("minustime",function(e,during){  // -1
	    	var index=$(".timenum").index(this);
	    	var $this=$(this);
	    	var maxLen=parseInt($(this).attr("relnum"));
	    	var $innernum=$(this).find(".innernum").eq(0);
	    	var _topval=parseInt($innernum.css("margin-top").replace(/px$|em$/,"").replace("-",""));
	    	var curtime=Math.floor(_topval/134);
	    	during= during>=300? 300:(during<=10 ? 10:(during|| 300));
	    	if(curtime-1<0){
	    		$(this).prepend($innernum.clone().css({"margin-top":-134*(maxLen+1)}));
	    		if(index-1>=0){
	    			$(".timenum").eq(index-1).trigger("minustime");
	    		}
	    	}

	    	$this.find(".innernum").eq(0).animate({"margin-top":-(curtime-1<0?maxLen:curtime-1)*134},during,function(){
				if($this.find(".innernum").size()>1){ $this.find(".innernum").eq(1).remove();}
	    	});
	    	$this.data("time",(curtime-1+10)%10);
	    	//时区限制
	    	//24小时制
	    	var val1=$(".timenum").eq(0).find(".innernum").eq(0).css("margin-top").replace(/px$|em$/,"").replace("-","");
	    	$(".timenum").eq(1).attr("relnum",Math.floor(val1/134)>=2?3:9).find(".innernum").css({height:134*((Math.floor(val1/134)>=2?3:9)+1)});
	    });
		return _;
	},

	init:function(){
		var _=this;
		return _.cssInit().eventInit().homeClock();
	}
}