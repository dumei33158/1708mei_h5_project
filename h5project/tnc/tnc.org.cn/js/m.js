/* jquery.nicescroll 3.5.1 InuYaksa*2013 MIT http://areaaperta.com/nicescroll */(function(e){var z=!1,E=!1,L=5E3,M=2E3,y=0,N=function(){var e=document.getElementsByTagName("script"),e=e[e.length-1].src.split("?")[0];return 0<e.split("/").length?e.split("/").slice(0,-1).join("/")+"/":""}(),H=["ms","moz","webkit","o"],v=window.requestAnimationFrame||!1,w=window.cancelAnimationFrame||!1;if(!v)for(var O in H){var F=H[O];v||(v=window[F+"RequestAnimationFrame"]);w||(w=window[F+"CancelAnimationFrame"]||window[F+"CancelRequestAnimationFrame"])}var A=window.MutationObserver||window.WebKitMutationObserver||
!1,I={zindex:"auto",cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"#424242",cursorwidth:"5px",cursorborder:"1px solid #fff",cursorborderradius:"5px",scrollspeed:60,mousescrollstep:24,touchbehavior:!1,hwacceleration:!0,usetransition:!0,boxzoom:!1,dblclickzoom:!0,gesturezoom:!0,grabcursorenabled:!0,autohidemode:!0,background:"",iframeautoresize:!0,cursorminheight:32,preservenativescrolling:!0,railoffset:!1,bouncescroll:!0,spacebarenabled:!0,railpadding:{top:0,right:0,left:0,bottom:0},disableoutline:!0,
horizrailenabled:!0,railalign:"right",railvalign:"bottom",enabletranslate3d:!0,enablemousewheel:!0,enablekeyboard:!0,smoothscroll:!0,sensitiverail:!0,enablemouselockapi:!0,cursorfixedheight:!1,directionlockdeadzone:6,hidecursordelay:400,nativeparentscrolling:!0,enablescrollonselection:!0,overflowx:!0,overflowy:!0,cursordragspeed:0.3,rtlmode:!1,cursordragontouch:!1,oneaxismousemode:"auto"},G=!1,P=function(){if(G)return G;var e=document.createElement("DIV"),c={haspointerlock:"pointerLockElement"in document||
"mozPointerLockElement"in document||"webkitPointerLockElement"in document};c.isopera="opera"in window;c.isopera12=c.isopera&&"getUserMedia"in navigator;c.isoperamini="[object OperaMini]"===Object.prototype.toString.call(window.operamini);c.isie="all"in document&&"attachEvent"in e&&!c.isopera;c.isieold=c.isie&&!("msInterpolationMode"in e.style);c.isie7=c.isie&&!c.isieold&&(!("documentMode"in document)||7==document.documentMode);c.isie8=c.isie&&"documentMode"in document&&8==document.documentMode;c.isie9=
c.isie&&"performance"in window&&9<=document.documentMode;c.isie10=c.isie&&"performance"in window&&10<=document.documentMode;c.isie9mobile=/iemobile.9/i.test(navigator.userAgent);c.isie9mobile&&(c.isie9=!1);c.isie7mobile=!c.isie9mobile&&c.isie7&&/iemobile/i.test(navigator.userAgent);c.ismozilla="MozAppearance"in e.style;c.iswebkit="WebkitAppearance"in e.style;c.ischrome="chrome"in window;c.ischrome22=c.ischrome&&c.haspointerlock;c.ischrome26=c.ischrome&&"transition"in e.style;c.cantouch="ontouchstart"in
document.documentElement||"ontouchstart"in window;c.hasmstouch=window.navigator.msPointerEnabled||!1;c.ismac=/^mac$/i.test(navigator.platform);c.isios=c.cantouch&&/iphone|ipad|ipod/i.test(navigator.platform);c.isios4=c.isios&&!("seal"in Object);c.isandroid=/android/i.test(navigator.userAgent);c.trstyle=!1;c.hastransform=!1;c.hastranslate3d=!1;c.transitionstyle=!1;c.hastransition=!1;c.transitionend=!1;for(var h=["transform","msTransform","webkitTransform","MozTransform","OTransform"],l=0;l<h.length;l++)if("undefined"!=
typeof e.style[h[l]]){c.trstyle=h[l];break}c.hastransform=!1!=c.trstyle;c.hastransform&&(e.style[c.trstyle]="translate3d(1px,2px,3px)",c.hastranslate3d=/translate3d/.test(e.style[c.trstyle]));c.transitionstyle=!1;c.prefixstyle="";c.transitionend=!1;for(var h="transition webkitTransition MozTransition OTransition OTransition msTransition KhtmlTransition".split(" "),q=" -webkit- -moz- -o- -o -ms- -khtml-".split(" "),t="transitionend webkitTransitionEnd transitionend otransitionend oTransitionEnd msTransitionEnd KhtmlTransitionEnd".split(" "),
l=0;l<h.length;l++)if(h[l]in e.style){c.transitionstyle=h[l];c.prefixstyle=q[l];c.transitionend=t[l];break}c.ischrome26&&(c.prefixstyle=q[1]);c.hastransition=c.transitionstyle;a:{h=["-moz-grab","-webkit-grab","grab"];if(c.ischrome&&!c.ischrome22||c.isie)h=[];for(l=0;l<h.length;l++)if(q=h[l],e.style.cursor=q,e.style.cursor==q){h=q;break a}h="url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"}c.cursorgrabvalue=h;c.hasmousecapture="setCapture"in e;c.hasMutationObserver=!1!==A;return G=
c},Q=function(k,c){function h(){var d=b.win;if("zIndex"in d)return d.zIndex();for(;0<d.length&&9!=d[0].nodeType;){var c=d.css("zIndex");if(!isNaN(c)&&0!=c)return parseInt(c);d=d.parent()}return!1}function l(d,c,g){c=d.css(c);d=parseFloat(c);return isNaN(d)?(d=u[c]||0,g=3==d?g?b.win.outerHeight()-b.win.innerHeight():b.win.outerWidth()-b.win.innerWidth():1,b.isie8&&d&&(d+=1),g?d:0):d}function q(d,c,g,f){b._bind(d,c,function(b){b=b?b:window.event;var f={original:b,target:b.target||b.srcElement,type:"wheel",
deltaMode:"MozMousePixelScroll"==b.type?0:1,deltaX:0,deltaZ:0,preventDefault:function(){b.preventDefault?b.preventDefault():b.returnValue=!1;return!1},stopImmediatePropagation:function(){b.stopImmediatePropagation?b.stopImmediatePropagation():b.cancelBubble=!0}};"mousewheel"==c?(f.deltaY=-0.025*b.wheelDelta,b.wheelDeltaX&&(f.deltaX=-0.025*b.wheelDeltaX)):f.deltaY=b.detail;return g.call(d,f)},f)}function t(d,c,g){var f,e;0==d.deltaMode?(f=-Math.floor(d.deltaX*(b.opt.mousescrollstep/54)),e=-Math.floor(d.deltaY*
(b.opt.mousescrollstep/54))):1==d.deltaMode&&(f=-Math.floor(d.deltaX*b.opt.mousescrollstep),e=-Math.floor(d.deltaY*b.opt.mousescrollstep));c&&(b.opt.oneaxismousemode&&0==f&&e)&&(f=e,e=0);f&&(b.scrollmom&&b.scrollmom.stop(),b.lastdeltax+=f,b.debounced("mousewheelx",function(){var d=b.lastdeltax;b.lastdeltax=0;b.rail.drag||b.doScrollLeftBy(d)},120));if(e){if(b.opt.nativeparentscrolling&&g&&!b.ispage&&!b.zoomactive)if(0>e){if(b.getScrollTop()>=b.page.maxh)return!0}else if(0>=b.getScrollTop())return!0;
b.scrollmom&&b.scrollmom.stop();b.lastdeltay+=e;b.debounced("mousewheely",function(){var d=b.lastdeltay;b.lastdeltay=0;b.rail.drag||b.doScrollBy(d)},120)}d.stopImmediatePropagation();return d.preventDefault()}var b=this;this.version="3.5.1";this.name="nicescroll";this.me=c;this.opt={doc:e("body"),win:!1};e.extend(this.opt,I);this.opt.snapbackspeed=80;if(k)for(var p in b.opt)"undefined"!=typeof k[p]&&(b.opt[p]=k[p]);this.iddoc=(this.doc=b.opt.doc)&&this.doc[0]?this.doc[0].id||"":"";this.ispage=/BODY|HTML/.test(b.opt.win?
b.opt.win[0].nodeName:this.doc[0].nodeName);this.haswrapper=!1!==b.opt.win;this.win=b.opt.win||(this.ispage?e(window):this.doc);this.docscroll=this.ispage&&!this.haswrapper?e(window):this.win;this.body=e("body");this.iframe=this.isfixed=this.viewport=!1;this.isiframe="IFRAME"==this.doc[0].nodeName&&"IFRAME"==this.win[0].nodeName;this.istextarea="TEXTAREA"==this.win[0].nodeName;this.forcescreen=!1;this.canshowonmouseevent="scroll"!=b.opt.autohidemode;this.page=this.view=this.onzoomout=this.onzoomin=
this.onscrollcancel=this.onscrollend=this.onscrollstart=this.onclick=this.ongesturezoom=this.onkeypress=this.onmousewheel=this.onmousemove=this.onmouseup=this.onmousedown=!1;this.scroll={x:0,y:0};this.scrollratio={x:0,y:0};this.cursorheight=20;this.scrollvaluemax=0;this.observerremover=this.observer=this.scrollmom=this.scrollrunning=this.checkrtlmode=!1;do this.id="ascrail"+M++;while(document.getElementById(this.id));this.hasmousefocus=this.hasfocus=this.zoomactive=this.zoom=this.selectiondrag=this.cursorfreezed=
this.cursor=this.rail=!1;this.visibility=!0;this.hidden=this.locked=!1;this.cursoractive=!0;this.overflowx=b.opt.overflowx;this.overflowy=b.opt.overflowy;this.nativescrollingarea=!1;this.checkarea=0;this.events=[];this.saved={};this.delaylist={};this.synclist={};this.lastdeltay=this.lastdeltax=0;this.detected=P();var f=e.extend({},this.detected);this.ishwscroll=(this.canhwscroll=f.hastransform&&b.opt.hwacceleration)&&b.haswrapper;this.istouchcapable=!1;f.cantouch&&(f.ischrome&&!f.isios&&!f.isandroid)&&
(this.istouchcapable=!0,f.cantouch=!1);f.cantouch&&(f.ismozilla&&!f.isios&&!f.isandroid)&&(this.istouchcapable=!0,f.cantouch=!1);b.opt.enablemouselockapi||(f.hasmousecapture=!1,f.haspointerlock=!1);this.delayed=function(d,c,g,f){var e=b.delaylist[d],h=(new Date).getTime();if(!f&&e&&e.tt)return!1;e&&e.tt&&clearTimeout(e.tt);if(e&&e.last+g>h&&!e.tt)b.delaylist[d]={last:h+g,tt:setTimeout(function(){b.delaylist[d].tt=0;c.call()},g)};else if(!e||!e.tt)b.delaylist[d]={last:h,tt:0},setTimeout(function(){c.call()},
0)};this.debounced=function(d,c,g){var f=b.delaylist[d];(new Date).getTime();b.delaylist[d]=c;f||setTimeout(function(){var c=b.delaylist[d];b.delaylist[d]=!1;c.call()},g)};this.synched=function(d,c){b.synclist[d]=c;(function(){b.onsync||(v(function(){b.onsync=!1;for(d in b.synclist){var c=b.synclist[d];c&&c.call(b);b.synclist[d]=!1}}),b.onsync=!0)})();return d};this.unsynched=function(d){b.synclist[d]&&(b.synclist[d]=!1)};this.css=function(d,c){for(var g in c)b.saved.css.push([d,g,d.css(g)]),d.css(g,
c[g])};this.scrollTop=function(d){return"undefined"==typeof d?b.getScrollTop():b.setScrollTop(d)};this.scrollLeft=function(d){return"undefined"==typeof d?b.getScrollLeft():b.setScrollLeft(d)};BezierClass=function(b,c,g,f,e,h,l){this.st=b;this.ed=c;this.spd=g;this.p1=f||0;this.p2=e||1;this.p3=h||0;this.p4=l||1;this.ts=(new Date).getTime();this.df=this.ed-this.st};BezierClass.prototype={B2:function(b){return 3*b*b*(1-b)},B3:function(b){return 3*b*(1-b)*(1-b)},B4:function(b){return(1-b)*(1-b)*(1-b)},
getNow:function(){var b=1-((new Date).getTime()-this.ts)/this.spd,c=this.B2(b)+this.B3(b)+this.B4(b);return 0>b?this.ed:this.st+Math.round(this.df*c)},update:function(b,c){this.st=this.getNow();this.ed=b;this.spd=c;this.ts=(new Date).getTime();this.df=this.ed-this.st;return this}};if(this.ishwscroll){this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"};f.hastranslate3d&&f.isios&&this.doc.css("-webkit-backface-visibility","hidden");var s=function(){var d=b.doc.css(f.trstyle);return d&&"matrix"==d.substr(0,
6)?d.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/):!1};this.getScrollTop=function(d){if(!d){if(d=s())return 16==d.length?-d[13]:-d[5];if(b.timerscroll&&b.timerscroll.bz)return b.timerscroll.bz.getNow()}return b.doc.translate.y};this.getScrollLeft=function(d){if(!d){if(d=s())return 16==d.length?-d[12]:-d[4];if(b.timerscroll&&b.timerscroll.bh)return b.timerscroll.bh.getNow()}return b.doc.translate.x};this.notifyScrollEvent=document.createEvent?function(b){var c=document.createEvent("UIEvents");
c.initUIEvent("scroll",!1,!0,window,1);b.dispatchEvent(c)}:document.fireEvent?function(b){var c=document.createEventObject();b.fireEvent("onscroll");c.cancelBubble=!0}:function(b,c){};f.hastranslate3d&&b.opt.enabletranslate3d?(this.setScrollTop=function(d,c){b.doc.translate.y=d;b.doc.translate.ty=-1*d+"px";b.doc.css(f.trstyle,"translate3d("+b.doc.translate.tx+","+b.doc.translate.ty+",0px)");c||b.notifyScrollEvent(b.win[0])},this.setScrollLeft=function(d,c){b.doc.translate.x=d;b.doc.translate.tx=-1*
d+"px";b.doc.css(f.trstyle,"translate3d("+b.doc.translate.tx+","+b.doc.translate.ty+",0px)");c||b.notifyScrollEvent(b.win[0])}):(this.setScrollTop=function(d,c){b.doc.translate.y=d;b.doc.translate.ty=-1*d+"px";b.doc.css(f.trstyle,"translate("+b.doc.translate.tx+","+b.doc.translate.ty+")");c||b.notifyScrollEvent(b.win[0])},this.setScrollLeft=function(d,c){b.doc.translate.x=d;b.doc.translate.tx=-1*d+"px";b.doc.css(f.trstyle,"translate("+b.doc.translate.tx+","+b.doc.translate.ty+")");c||b.notifyScrollEvent(b.win[0])})}else this.getScrollTop=
function(){return b.docscroll.scrollTop()},this.setScrollTop=function(d){return b.docscroll.scrollTop(d)},this.getScrollLeft=function(){return b.docscroll.scrollLeft()},this.setScrollLeft=function(d){return b.docscroll.scrollLeft(d)};this.getTarget=function(b){return!b?!1:b.target?b.target:b.srcElement?b.srcElement:!1};this.hasParent=function(b,c){if(!b)return!1;for(var g=b.target||b.srcElement||b||!1;g&&g.id!=c;)g=g.parentNode||!1;return!1!==g};var u={thin:1,medium:3,thick:5};this.getOffset=function(){if(b.isfixed)return{top:parseFloat(b.win.css("top")),
left:parseFloat(b.win.css("left"))};if(!b.viewport)return b.win.offset();var d=b.win.offset(),c=b.viewport.offset();return{top:d.top-c.top+b.viewport.scrollTop(),left:d.left-c.left+b.viewport.scrollLeft()}};this.updateScrollBar=function(d){if(b.ishwscroll)b.rail.css({height:b.win.innerHeight()}),b.railh&&b.railh.css({width:b.win.innerWidth()});else{var c=b.getOffset(),g=c.top,f=c.left,g=g+l(b.win,"border-top-width",!0);b.win.outerWidth();b.win.innerWidth();var f=f+(b.rail.align?b.win.outerWidth()-
l(b.win,"border-right-width")-b.rail.width:l(b.win,"border-left-width")),e=b.opt.railoffset;e&&(e.top&&(g+=e.top),b.rail.align&&e.left&&(f+=e.left));b.locked||b.rail.css({top:g,left:f,height:d?d.h:b.win.innerHeight()});b.zoom&&b.zoom.css({top:g+1,left:1==b.rail.align?f-20:f+b.rail.width+4});b.railh&&!b.locked&&(g=c.top,f=c.left,d=b.railh.align?g+l(b.win,"border-top-width",!0)+b.win.innerHeight()-b.railh.height:g+l(b.win,"border-top-width",!0),f+=l(b.win,"border-left-width"),b.railh.css({top:d,left:f,
width:b.railh.width}))}};this.doRailClick=function(d,c,g){var f;b.locked||(b.cancelEvent(d),c?(c=g?b.doScrollLeft:b.doScrollTop,f=g?(d.pageX-b.railh.offset().left-b.cursorwidth/2)*b.scrollratio.x:(d.pageY-b.rail.offset().top-b.cursorheight/2)*b.scrollratio.y,c(f)):(c=g?b.doScrollLeftBy:b.doScrollBy,f=g?b.scroll.x:b.scroll.y,d=g?d.pageX-b.railh.offset().left:d.pageY-b.rail.offset().top,g=g?b.view.w:b.view.h,f>=d?c(g):c(-g)))};b.hasanimationframe=v;b.hascancelanimationframe=w;b.hasanimationframe?b.hascancelanimationframe||
(w=function(){b.cancelAnimationFrame=!0}):(v=function(b){return setTimeout(b,15-Math.floor(+new Date/1E3)%16)},w=clearInterval);this.init=function(){b.saved.css=[];if(f.isie7mobile||f.isoperamini)return!0;f.hasmstouch&&b.css(b.ispage?e("html"):b.win,{"-ms-touch-action":"none"});b.zindex="auto";b.zindex=!b.ispage&&"auto"==b.opt.zindex?h()||"auto":b.opt.zindex;!b.ispage&&"auto"!=b.zindex&&b.zindex>y&&(y=b.zindex);b.isie&&(0==b.zindex&&"auto"==b.opt.zindex)&&(b.zindex="auto");if(!b.ispage||!f.cantouch&&
!f.isieold&&!f.isie9mobile){var d=b.docscroll;b.ispage&&(d=b.haswrapper?b.win:b.doc);f.isie9mobile||b.css(d,{"overflow-y":"hidden"});b.ispage&&f.isie7&&("BODY"==b.doc[0].nodeName?b.css(e("html"),{"overflow-y":"hidden"}):"HTML"==b.doc[0].nodeName&&b.css(e("body"),{"overflow-y":"hidden"}));f.isios&&(!b.ispage&&!b.haswrapper)&&b.css(e("body"),{"-webkit-overflow-scrolling":"touch"});var c=e(document.createElement("div"));c.css({position:"relative",top:0,"float":"right",width:b.opt.cursorwidth,height:"0px",
"background-color":b.opt.cursorcolor,border:b.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":b.opt.cursorborderradius,"-moz-border-radius":b.opt.cursorborderradius,"border-radius":b.opt.cursorborderradius});c.hborder=parseFloat(c.outerHeight()-c.innerHeight());b.cursor=c;var g=e(document.createElement("div"));g.attr("id",b.id);g.addClass("nicescroll-rails");var l,k,x=["left","right"],q;for(q in x)k=x[q],(l=b.opt.railpadding[k])?g.css("padding-"+k,l+"px"):b.opt.railpadding[k]=
0;g.append(c);g.width=Math.max(parseFloat(b.opt.cursorwidth),c.outerWidth())+b.opt.railpadding.left+b.opt.railpadding.right;g.css({width:g.width+"px",zIndex:b.zindex,background:b.opt.background,cursor:"default"});g.visibility=!0;g.scrollable=!0;g.align="left"==b.opt.railalign?0:1;b.rail=g;c=b.rail.drag=!1;b.opt.boxzoom&&(!b.ispage&&!f.isieold)&&(c=document.createElement("div"),b.bind(c,"click",b.doZoom),b.zoom=e(c),b.zoom.css({cursor:"pointer","z-index":b.zindex,backgroundImage:"url("+N+"zoomico.png)",
height:18,width:18,backgroundPosition:"0px 0px"}),b.opt.dblclickzoom&&b.bind(b.win,"dblclick",b.doZoom),f.cantouch&&b.opt.gesturezoom&&(b.ongesturezoom=function(d){1.5<d.scale&&b.doZoomIn(d);0.8>d.scale&&b.doZoomOut(d);return b.cancelEvent(d)},b.bind(b.win,"gestureend",b.ongesturezoom)));b.railh=!1;if(b.opt.horizrailenabled){b.css(d,{"overflow-x":"hidden"});c=e(document.createElement("div"));c.css({position:"relative",top:0,height:b.opt.cursorwidth,width:"0px","background-color":b.opt.cursorcolor,
border:b.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":b.opt.cursorborderradius,"-moz-border-radius":b.opt.cursorborderradius,"border-radius":b.opt.cursorborderradius});c.wborder=parseFloat(c.outerWidth()-c.innerWidth());b.cursorh=c;var m=e(document.createElement("div"));m.attr("id",b.id+"-hr");m.addClass("nicescroll-rails");m.height=Math.max(parseFloat(b.opt.cursorwidth),c.outerHeight());m.css({height:m.height+"px",zIndex:b.zindex,background:b.opt.background});m.append(c);
m.visibility=!0;m.scrollable=!0;m.align="top"==b.opt.railvalign?0:1;b.railh=m;b.railh.drag=!1}b.ispage?(g.css({position:"fixed",top:"0px",height:"100%"}),g.align?g.css({right:"0px"}):g.css({left:"0px"}),b.body.append(g),b.railh&&(m.css({position:"fixed",left:"0px",width:"100%"}),m.align?m.css({bottom:"0px"}):m.css({top:"0px"}),b.body.append(m))):(b.ishwscroll?("static"==b.win.css("position")&&b.css(b.win,{position:"relative"}),d="HTML"==b.win[0].nodeName?b.body:b.win,b.zoom&&(b.zoom.css({position:"absolute",
top:1,right:0,"margin-right":g.width+4}),d.append(b.zoom)),g.css({position:"absolute",top:0}),g.align?g.css({right:0}):g.css({left:0}),d.append(g),m&&(m.css({position:"absolute",left:0,bottom:0}),m.align?m.css({bottom:0}):m.css({top:0}),d.append(m))):(b.isfixed="fixed"==b.win.css("position"),d=b.isfixed?"fixed":"absolute",b.isfixed||(b.viewport=b.getViewport(b.win[0])),b.viewport&&(b.body=b.viewport,!1==/fixed|relative|absolute/.test(b.viewport.css("position"))&&b.css(b.viewport,{position:"relative"})),
g.css({position:d}),b.zoom&&b.zoom.css({position:d}),b.updateScrollBar(),b.body.append(g),b.zoom&&b.body.append(b.zoom),b.railh&&(m.css({position:d}),b.body.append(m))),f.isios&&b.css(b.win,{"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"}),f.isie&&b.opt.disableoutline&&b.win.attr("hideFocus","true"),f.iswebkit&&b.opt.disableoutline&&b.win.css({outline:"none"}));!1===b.opt.autohidemode?(b.autohidedom=!1,b.rail.css({opacity:b.opt.cursoropacitymax}),b.railh&&b.railh.css({opacity:b.opt.cursoropacitymax})):
!0===b.opt.autohidemode||"leave"===b.opt.autohidemode?(b.autohidedom=e().add(b.rail),f.isie8&&(b.autohidedom=b.autohidedom.add(b.cursor)),b.railh&&(b.autohidedom=b.autohidedom.add(b.railh)),b.railh&&f.isie8&&(b.autohidedom=b.autohidedom.add(b.cursorh))):"scroll"==b.opt.autohidemode?(b.autohidedom=e().add(b.rail),b.railh&&(b.autohidedom=b.autohidedom.add(b.railh))):"cursor"==b.opt.autohidemode?(b.autohidedom=e().add(b.cursor),b.railh&&(b.autohidedom=b.autohidedom.add(b.cursorh))):"hidden"==b.opt.autohidemode&&
(b.autohidedom=!1,b.hide(),b.locked=!1);if(f.isie9mobile)b.scrollmom=new J(b),b.onmangotouch=function(d){d=b.getScrollTop();var c=b.getScrollLeft();if(d==b.scrollmom.lastscrolly&&c==b.scrollmom.lastscrollx)return!0;var g=d-b.mangotouch.sy,f=c-b.mangotouch.sx;if(0!=Math.round(Math.sqrt(Math.pow(f,2)+Math.pow(g,2)))){var n=0>g?-1:1,e=0>f?-1:1,h=+new Date;b.mangotouch.lazy&&clearTimeout(b.mangotouch.lazy);80<h-b.mangotouch.tm||b.mangotouch.dry!=n||b.mangotouch.drx!=e?(b.scrollmom.stop(),b.scrollmom.reset(c,
d),b.mangotouch.sy=d,b.mangotouch.ly=d,b.mangotouch.sx=c,b.mangotouch.lx=c,b.mangotouch.dry=n,b.mangotouch.drx=e,b.mangotouch.tm=h):(b.scrollmom.stop(),b.scrollmom.update(b.mangotouch.sx-f,b.mangotouch.sy-g),b.mangotouch.tm=h,g=Math.max(Math.abs(b.mangotouch.ly-d),Math.abs(b.mangotouch.lx-c)),b.mangotouch.ly=d,b.mangotouch.lx=c,2<g&&(b.mangotouch.lazy=setTimeout(function(){b.mangotouch.lazy=!1;b.mangotouch.dry=0;b.mangotouch.drx=0;b.mangotouch.tm=0;b.scrollmom.doMomentum(30)},100)))}},g=b.getScrollTop(),
m=b.getScrollLeft(),b.mangotouch={sy:g,ly:g,dry:0,sx:m,lx:m,drx:0,lazy:!1,tm:0},b.bind(b.docscroll,"scroll",b.onmangotouch);else{if(f.cantouch||b.istouchcapable||b.opt.touchbehavior||f.hasmstouch){b.scrollmom=new J(b);b.ontouchstart=function(d){if(d.pointerType&&2!=d.pointerType)return!1;b.hasmoving=!1;if(!b.locked){if(f.hasmstouch)for(var c=d.target?d.target:!1;c;){var g=e(c).getNiceScroll();if(0<g.length&&g[0].me==b.me)break;if(0<g.length)return!1;if("DIV"==c.nodeName&&c.id==b.id)break;c=c.parentNode?
c.parentNode:!1}b.cancelScroll();if((c=b.getTarget(d))&&/INPUT/i.test(c.nodeName)&&/range/i.test(c.type))return b.stopPropagation(d);!("clientX"in d)&&"changedTouches"in d&&(d.clientX=d.changedTouches[0].clientX,d.clientY=d.changedTouches[0].clientY);b.forcescreen&&(g=d,d={original:d.original?d.original:d},d.clientX=g.screenX,d.clientY=g.screenY);b.rail.drag={x:d.clientX,y:d.clientY,sx:b.scroll.x,sy:b.scroll.y,st:b.getScrollTop(),sl:b.getScrollLeft(),pt:2,dl:!1};if(b.ispage||!b.opt.directionlockdeadzone)b.rail.drag.dl=
"f";else{var g=e(window).width(),n=e(window).height(),h=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),l=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),n=Math.max(0,l-n),g=Math.max(0,h-g);b.rail.drag.ck=!b.rail.scrollable&&b.railh.scrollable?0<n?"v":!1:b.rail.scrollable&&!b.railh.scrollable?0<g?"h":!1:!1;b.rail.drag.ck||(b.rail.drag.dl="f")}b.opt.touchbehavior&&(b.isiframe&&f.isie)&&(g=b.win.position(),b.rail.drag.x+=g.left,b.rail.drag.y+=g.top);
b.hasmoving=!1;b.lastmouseup=!1;b.scrollmom.reset(d.clientX,d.clientY);if(!f.cantouch&&!this.istouchcapable&&!f.hasmstouch){if(!c||!/INPUT|SELECT|TEXTAREA/i.test(c.nodeName))return!b.ispage&&f.hasmousecapture&&c.setCapture(),b.opt.touchbehavior?(c.onclick&&!c._onclick&&(c._onclick=c.onclick,c.onclick=function(d){if(b.hasmoving)return!1;c._onclick.call(this,d)}),b.cancelEvent(d)):b.stopPropagation(d);/SUBMIT|CANCEL|BUTTON/i.test(e(c).attr("type"))&&(pc={tg:c,click:!1},b.preventclick=pc)}}};b.ontouchend=
function(d){if(d.pointerType&&2!=d.pointerType)return!1;if(b.rail.drag&&2==b.rail.drag.pt&&(b.scrollmom.doMomentum(),b.rail.drag=!1,b.hasmoving&&(b.lastmouseup=!0,b.hideCursor(),f.hasmousecapture&&document.releaseCapture(),!f.cantouch)))return b.cancelEvent(d)};var t=b.opt.touchbehavior&&b.isiframe&&!f.hasmousecapture;b.ontouchmove=function(d,c){if(d.pointerType&&2!=d.pointerType)return!1;if(b.rail.drag&&2==b.rail.drag.pt){if(f.cantouch&&"undefined"==typeof d.original)return!0;b.hasmoving=!0;b.preventclick&&
!b.preventclick.click&&(b.preventclick.click=b.preventclick.tg.onclick||!1,b.preventclick.tg.onclick=b.onpreventclick);d=e.extend({original:d},d);"changedTouches"in d&&(d.clientX=d.changedTouches[0].clientX,d.clientY=d.changedTouches[0].clientY);if(b.forcescreen){var g=d;d={original:d.original?d.original:d};d.clientX=g.screenX;d.clientY=g.screenY}g=ofy=0;if(t&&!c){var n=b.win.position(),g=-n.left;ofy=-n.top}var h=d.clientY+ofy,n=h-b.rail.drag.y,l=d.clientX+g,k=l-b.rail.drag.x,r=b.rail.drag.st-n;b.ishwscroll&&
b.opt.bouncescroll?0>r?r=Math.round(r/2):r>b.page.maxh&&(r=b.page.maxh+Math.round((r-b.page.maxh)/2)):(0>r&&(h=r=0),r>b.page.maxh&&(r=b.page.maxh,h=0));if(b.railh&&b.railh.scrollable){var m=b.rail.drag.sl-k;b.ishwscroll&&b.opt.bouncescroll?0>m?m=Math.round(m/2):m>b.page.maxw&&(m=b.page.maxw+Math.round((m-b.page.maxw)/2)):(0>m&&(l=m=0),m>b.page.maxw&&(m=b.page.maxw,l=0))}g=!1;if(b.rail.drag.dl)g=!0,"v"==b.rail.drag.dl?m=b.rail.drag.sl:"h"==b.rail.drag.dl&&(r=b.rail.drag.st);else{var n=Math.abs(n),
k=Math.abs(k),x=b.opt.directionlockdeadzone;if("v"==b.rail.drag.ck){if(n>x&&k<=0.3*n)return b.rail.drag=!1,!0;k>x&&(b.rail.drag.dl="f",e("body").scrollTop(e("body").scrollTop()))}else if("h"==b.rail.drag.ck){if(k>x&&n<=0.3*k)return b.rail.drag=!1,!0;n>x&&(b.rail.drag.dl="f",e("body").scrollLeft(e("body").scrollLeft()))}}b.synched("touchmove",function(){b.rail.drag&&2==b.rail.drag.pt&&(b.prepareTransition&&b.prepareTransition(0),b.rail.scrollable&&b.setScrollTop(r),b.scrollmom.update(l,h),b.railh&&
b.railh.scrollable?(b.setScrollLeft(m),b.showCursor(r,m)):b.showCursor(r),f.isie10&&document.selection.clear())});f.ischrome&&b.istouchcapable&&(g=!1);if(g)return b.cancelEvent(d)}}}b.onmousedown=function(d,c){if(!(b.rail.drag&&1!=b.rail.drag.pt)){if(b.locked)return b.cancelEvent(d);b.cancelScroll();b.rail.drag={x:d.clientX,y:d.clientY,sx:b.scroll.x,sy:b.scroll.y,pt:1,hr:!!c};var g=b.getTarget(d);!b.ispage&&f.hasmousecapture&&g.setCapture();b.isiframe&&!f.hasmousecapture&&(b.saved.csspointerevents=
b.doc.css("pointer-events"),b.css(b.doc,{"pointer-events":"none"}));return b.cancelEvent(d)}};b.onmouseup=function(d){if(b.rail.drag&&(f.hasmousecapture&&document.releaseCapture(),b.isiframe&&!f.hasmousecapture&&b.doc.css("pointer-events",b.saved.csspointerevents),1==b.rail.drag.pt))return b.rail.drag=!1,b.cancelEvent(d)};b.onmousemove=function(d){if(b.rail.drag&&1==b.rail.drag.pt){if(f.ischrome&&0==d.which)return b.onmouseup(d);b.cursorfreezed=!0;if(b.rail.drag.hr){b.scroll.x=b.rail.drag.sx+(d.clientX-
b.rail.drag.x);0>b.scroll.x&&(b.scroll.x=0);var c=b.scrollvaluemaxw;b.scroll.x>c&&(b.scroll.x=c)}else b.scroll.y=b.rail.drag.sy+(d.clientY-b.rail.drag.y),0>b.scroll.y&&(b.scroll.y=0),c=b.scrollvaluemax,b.scroll.y>c&&(b.scroll.y=c);b.synched("mousemove",function(){b.rail.drag&&1==b.rail.drag.pt&&(b.showCursor(),b.rail.drag.hr?b.doScrollLeft(Math.round(b.scroll.x*b.scrollratio.x),b.opt.cursordragspeed):b.doScrollTop(Math.round(b.scroll.y*b.scrollratio.y),b.opt.cursordragspeed))});return b.cancelEvent(d)}};
if(f.cantouch||b.opt.touchbehavior)b.onpreventclick=function(d){if(b.preventclick)return b.preventclick.tg.onclick=b.preventclick.click,b.preventclick=!1,b.cancelEvent(d)},b.bind(b.win,"mousedown",b.ontouchstart),b.onclick=f.isios?!1:function(d){return b.lastmouseup?(b.lastmouseup=!1,b.cancelEvent(d)):!0},b.opt.grabcursorenabled&&f.cursorgrabvalue&&(b.css(b.ispage?b.doc:b.win,{cursor:f.cursorgrabvalue}),b.css(b.rail,{cursor:f.cursorgrabvalue}));else{var p=function(d){if(b.selectiondrag){if(d){var c=
b.win.outerHeight();d=d.pageY-b.selectiondrag.top;0<d&&d<c&&(d=0);d>=c&&(d-=c);b.selectiondrag.df=d}0!=b.selectiondrag.df&&(b.doScrollBy(2*-Math.floor(b.selectiondrag.df/6)),b.debounced("doselectionscroll",function(){p()},50))}};b.hasTextSelected="getSelection"in document?function(){return 0<document.getSelection().rangeCount}:"selection"in document?function(){return"None"!=document.selection.type}:function(){return!1};b.onselectionstart=function(d){b.ispage||(b.selectiondrag=b.win.offset())};b.onselectionend=
function(d){b.selectiondrag=!1};b.onselectiondrag=function(d){b.selectiondrag&&b.hasTextSelected()&&b.debounced("selectionscroll",function(){p(d)},250)}}f.hasmstouch&&(b.css(b.rail,{"-ms-touch-action":"none"}),b.css(b.cursor,{"-ms-touch-action":"none"}),b.bind(b.win,"MSPointerDown",b.ontouchstart),b.bind(document,"MSPointerUp",b.ontouchend),b.bind(document,"MSPointerMove",b.ontouchmove),b.bind(b.cursor,"MSGestureHold",function(b){b.preventDefault()}),b.bind(b.cursor,"contextmenu",function(b){b.preventDefault()}));
this.istouchcapable&&(b.bind(b.win,"touchstart",b.ontouchstart),b.bind(document,"touchend",b.ontouchend),b.bind(document,"touchcancel",b.ontouchend),b.bind(document,"touchmove",b.ontouchmove));b.bind(b.cursor,"mousedown",b.onmousedown);b.bind(b.cursor,"mouseup",b.onmouseup);b.railh&&(b.bind(b.cursorh,"mousedown",function(d){b.onmousedown(d,!0)}),b.bind(b.cursorh,"mouseup",function(d){if(!(b.rail.drag&&2==b.rail.drag.pt))return b.rail.drag=!1,b.hasmoving=!1,b.hideCursor(),f.hasmousecapture&&document.releaseCapture(),
b.cancelEvent(d)}));if(b.opt.cursordragontouch||!f.cantouch&&!b.opt.touchbehavior)b.rail.css({cursor:"default"}),b.railh&&b.railh.css({cursor:"default"}),b.jqbind(b.rail,"mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=!0}),b.jqbind(b.rail,"mouseleave",function(){b.rail.active=!1;b.rail.drag||b.hideCursor()}),b.opt.sensitiverail&&(b.bind(b.rail,"click",function(d){b.doRailClick(d,!1,!1)}),b.bind(b.rail,"dblclick",function(d){b.doRailClick(d,!0,!1)}),b.bind(b.cursor,"click",
function(d){b.cancelEvent(d)}),b.bind(b.cursor,"dblclick",function(d){b.cancelEvent(d)})),b.railh&&(b.jqbind(b.railh,"mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=!0}),b.jqbind(b.railh,"mouseleave",function(){b.rail.active=!1;b.rail.drag||b.hideCursor()}),b.opt.sensitiverail&&(b.bind(b.railh,"click",function(d){b.doRailClick(d,!1,!0)}),b.bind(b.railh,"dblclick",function(d){b.doRailClick(d,!0,!0)}),b.bind(b.cursorh,"click",function(d){b.cancelEvent(d)}),b.bind(b.cursorh,
"dblclick",function(d){b.cancelEvent(d)})));!f.cantouch&&!b.opt.touchbehavior?(b.bind(f.hasmousecapture?b.win:document,"mouseup",b.onmouseup),b.bind(document,"mousemove",b.onmousemove),b.onclick&&b.bind(document,"click",b.onclick),!b.ispage&&b.opt.enablescrollonselection&&(b.bind(b.win[0],"mousedown",b.onselectionstart),b.bind(document,"mouseup",b.onselectionend),b.bind(b.cursor,"mouseup",b.onselectionend),b.cursorh&&b.bind(b.cursorh,"mouseup",b.onselectionend),b.bind(document,"mousemove",b.onselectiondrag)),
b.zoom&&(b.jqbind(b.zoom,"mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=!0}),b.jqbind(b.zoom,"mouseleave",function(){b.rail.active=!1;b.rail.drag||b.hideCursor()}))):(b.bind(f.hasmousecapture?b.win:document,"mouseup",b.ontouchend),b.bind(document,"mousemove",b.ontouchmove),b.onclick&&b.bind(document,"click",b.onclick),b.opt.cursordragontouch&&(b.bind(b.cursor,"mousedown",b.onmousedown),b.bind(b.cursor,"mousemove",b.onmousemove),b.cursorh&&b.bind(b.cursorh,"mousedown",
function(d){b.onmousedown(d,!0)}),b.cursorh&&b.bind(b.cursorh,"mousemove",b.onmousemove)));b.opt.enablemousewheel&&(b.isiframe||b.bind(f.isie&&b.ispage?document:b.win,"mousewheel",b.onmousewheel),b.bind(b.rail,"mousewheel",b.onmousewheel),b.railh&&b.bind(b.railh,"mousewheel",b.onmousewheelhr));!b.ispage&&(!f.cantouch&&!/HTML|BODY/.test(b.win[0].nodeName))&&(b.win.attr("tabindex")||b.win.attr({tabindex:L++}),b.jqbind(b.win,"focus",function(d){z=b.getTarget(d).id||!0;b.hasfocus=!0;b.canshowonmouseevent&&
b.noticeCursor()}),b.jqbind(b.win,"blur",function(d){z=!1;b.hasfocus=!1}),b.jqbind(b.win,"mouseenter",function(d){E=b.getTarget(d).id||!0;b.hasmousefocus=!0;b.canshowonmouseevent&&b.noticeCursor()}),b.jqbind(b.win,"mouseleave",function(){E=!1;b.hasmousefocus=!1;b.rail.drag||b.hideCursor()}))}b.onkeypress=function(d){if(b.locked&&0==b.page.maxh)return!0;d=d?d:window.e;var c=b.getTarget(d);if(c&&/INPUT|TEXTAREA|SELECT|OPTION/.test(c.nodeName)&&(!c.getAttribute("type")&&!c.type||!/submit|button|cancel/i.tp))return!0;
if(b.hasfocus||b.hasmousefocus&&!z||b.ispage&&!z&&!E){c=d.keyCode;if(b.locked&&27!=c)return b.cancelEvent(d);var g=d.ctrlKey||!1,n=d.shiftKey||!1,f=!1;switch(c){case 38:case 63233:b.doScrollBy(72);f=!0;break;case 40:case 63235:b.doScrollBy(-72);f=!0;break;case 37:case 63232:b.railh&&(g?b.doScrollLeft(0):b.doScrollLeftBy(72),f=!0);break;case 39:case 63234:b.railh&&(g?b.doScrollLeft(b.page.maxw):b.doScrollLeftBy(-72),f=!0);break;case 33:case 63276:b.doScrollBy(b.view.h);f=!0;break;case 34:case 63277:b.doScrollBy(-b.view.h);
f=!0;break;case 36:case 63273:b.railh&&g?b.doScrollPos(0,0):b.doScrollTo(0);f=!0;break;case 35:case 63275:b.railh&&g?b.doScrollPos(b.page.maxw,b.page.maxh):b.doScrollTo(b.page.maxh);f=!0;break;case 32:b.opt.spacebarenabled&&(n?b.doScrollBy(b.view.h):b.doScrollBy(-b.view.h),f=!0);break;case 27:b.zoomactive&&(b.doZoom(),f=!0)}if(f)return b.cancelEvent(d)}};b.opt.enablekeyboard&&b.bind(document,f.isopera&&!f.isopera12?"keypress":"keydown",b.onkeypress);b.bind(window,"resize",b.lazyResize);b.bind(window,
"orientationchange",b.lazyResize);b.bind(window,"load",b.lazyResize);if(f.ischrome&&!b.ispage&&!b.haswrapper){var s=b.win.attr("style"),g=parseFloat(b.win.css("width"))+1;b.win.css("width",g);b.synched("chromefix",function(){b.win.attr("style",s)})}b.onAttributeChange=function(d){b.lazyResize(250)};!b.ispage&&!b.haswrapper&&(!1!==A?(b.observer=new A(function(d){d.forEach(b.onAttributeChange)}),b.observer.observe(b.win[0],{childList:!0,characterData:!1,attributes:!0,subtree:!1}),b.observerremover=
new A(function(d){d.forEach(function(d){if(0<d.removedNodes.length)for(var c in d.removedNodes)if(d.removedNodes[c]==b.win[0])return b.remove()})}),b.observerremover.observe(b.win[0].parentNode,{childList:!0,characterData:!1,attributes:!1,subtree:!1})):(b.bind(b.win,f.isie&&!f.isie9?"propertychange":"DOMAttrModified",b.onAttributeChange),f.isie9&&b.win[0].attachEvent("onpropertychange",b.onAttributeChange),b.bind(b.win,"DOMNodeRemoved",function(d){d.target==b.win[0]&&b.remove()})));!b.ispage&&b.opt.boxzoom&&
b.bind(window,"resize",b.resizeZoom);b.istextarea&&b.bind(b.win,"mouseup",b.lazyResize);b.checkrtlmode=!0;b.lazyResize(30)}if("IFRAME"==this.doc[0].nodeName){var K=function(d){b.iframexd=!1;try{var c="contentDocument"in this?this.contentDocument:this.contentWindow.document}catch(g){b.iframexd=!0,c=!1}if(b.iframexd)return"console"in window&&console.log("NiceScroll error: policy restriced iframe"),!0;b.forcescreen=!0;b.isiframe&&(b.iframe={doc:e(c),html:b.doc.contents().find("html")[0],body:b.doc.contents().find("body")[0]},
b.getContentSize=function(){return{w:Math.max(b.iframe.html.scrollWidth,b.iframe.body.scrollWidth),h:Math.max(b.iframe.html.scrollHeight,b.iframe.body.scrollHeight)}},b.docscroll=e(b.iframe.body));!f.isios&&(b.opt.iframeautoresize&&!b.isiframe)&&(b.win.scrollTop(0),b.doc.height(""),d=Math.max(c.getElementsByTagName("html")[0].scrollHeight,c.body.scrollHeight),b.doc.height(d));b.lazyResize(30);f.isie7&&b.css(e(b.iframe.html),{"overflow-y":"hidden"});b.css(e(b.iframe.body),{"overflow-y":"hidden"});
f.isios&&b.haswrapper&&b.css(e(c.body),{"-webkit-transform":"translate3d(0,0,0)"});"contentWindow"in this?b.bind(this.contentWindow,"scroll",b.onscroll):b.bind(c,"scroll",b.onscroll);b.opt.enablemousewheel&&b.bind(c,"mousewheel",b.onmousewheel);b.opt.enablekeyboard&&b.bind(c,f.isopera?"keypress":"keydown",b.onkeypress);if(f.cantouch||b.opt.touchbehavior)b.bind(c,"mousedown",b.ontouchstart),b.bind(c,"mousemove",function(d){b.ontouchmove(d,!0)}),b.opt.grabcursorenabled&&f.cursorgrabvalue&&b.css(e(c.body),
{cursor:f.cursorgrabvalue});b.bind(c,"mouseup",b.ontouchend);b.zoom&&(b.opt.dblclickzoom&&b.bind(c,"dblclick",b.doZoom),b.ongesturezoom&&b.bind(c,"gestureend",b.ongesturezoom))};this.doc[0].readyState&&"complete"==this.doc[0].readyState&&setTimeout(function(){K.call(b.doc[0],!1)},500);b.bind(this.doc,"load",K)}};this.showCursor=function(d,c){b.cursortimeout&&(clearTimeout(b.cursortimeout),b.cursortimeout=0);if(b.rail){b.autohidedom&&(b.autohidedom.stop().css({opacity:b.opt.cursoropacitymax}),b.cursoractive=
!0);if(!b.rail.drag||1!=b.rail.drag.pt)"undefined"!=typeof d&&!1!==d&&(b.scroll.y=Math.round(1*d/b.scrollratio.y)),"undefined"!=typeof c&&(b.scroll.x=Math.round(1*c/b.scrollratio.x));b.cursor.css({height:b.cursorheight,top:b.scroll.y});b.cursorh&&(!b.rail.align&&b.rail.visibility?b.cursorh.css({width:b.cursorwidth,left:b.scroll.x+b.rail.width}):b.cursorh.css({width:b.cursorwidth,left:b.scroll.x}),b.cursoractive=!0);b.zoom&&b.zoom.stop().css({opacity:b.opt.cursoropacitymax})}};this.hideCursor=function(d){!b.cursortimeout&&
(b.rail&&b.autohidedom&&!(b.hasmousefocus&&"leave"==b.opt.autohidemode))&&(b.cursortimeout=setTimeout(function(){if(!b.rail.active||!b.showonmouseevent)b.autohidedom.stop().animate({opacity:b.opt.cursoropacitymin}),b.zoom&&b.zoom.stop().animate({opacity:b.opt.cursoropacitymin}),b.cursoractive=!1;b.cursortimeout=0},d||b.opt.hidecursordelay))};this.noticeCursor=function(d,c,g){b.showCursor(c,g);b.rail.active||b.hideCursor(d)};this.getContentSize=b.ispage?function(){return{w:Math.max(document.body.scrollWidth,
document.documentElement.scrollWidth),h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}}:b.haswrapper?function(){return{w:b.doc.outerWidth()+parseInt(b.win.css("paddingLeft"))+parseInt(b.win.css("paddingRight")),h:b.doc.outerHeight()+parseInt(b.win.css("paddingTop"))+parseInt(b.win.css("paddingBottom"))}}:function(){return{w:b.docscroll[0].scrollWidth,h:b.docscroll[0].scrollHeight}};this.onResize=function(d,c){if(!b||!b.win)return!1;if(!b.haswrapper&&!b.ispage){if("none"==
b.win.css("display"))return b.visibility&&b.hideRail().hideRailHr(),!1;!b.hidden&&!b.visibility&&b.showRail().showRailHr()}var g=b.page.maxh,f=b.page.maxw,e=b.view.w;b.view={w:b.ispage?b.win.width():parseInt(b.win[0].clientWidth),h:b.ispage?b.win.height():parseInt(b.win[0].clientHeight)};b.page=c?c:b.getContentSize();b.page.maxh=Math.max(0,b.page.h-b.view.h);b.page.maxw=Math.max(0,b.page.w-b.view.w);if(b.page.maxh==g&&b.page.maxw==f&&b.view.w==e){if(b.ispage)return b;g=b.win.offset();if(b.lastposition&&
(f=b.lastposition,f.top==g.top&&f.left==g.left))return b;b.lastposition=g}0==b.page.maxh?(b.hideRail(),b.scrollvaluemax=0,b.scroll.y=0,b.scrollratio.y=0,b.cursorheight=0,b.setScrollTop(0),b.rail.scrollable=!1):b.rail.scrollable=!0;0==b.page.maxw?(b.hideRailHr(),b.scrollvaluemaxw=0,b.scroll.x=0,b.scrollratio.x=0,b.cursorwidth=0,b.setScrollLeft(0),b.railh.scrollable=!1):b.railh.scrollable=!0;b.locked=0==b.page.maxh&&0==b.page.maxw;if(b.locked)return b.ispage||b.updateScrollBar(b.view),!1;!b.hidden&&
!b.visibility?b.showRail().showRailHr():!b.hidden&&!b.railh.visibility&&b.showRailHr();b.istextarea&&(b.win.css("resize")&&"none"!=b.win.css("resize"))&&(b.view.h-=20);b.cursorheight=Math.min(b.view.h,Math.round(b.view.h*(b.view.h/b.page.h)));b.cursorheight=b.opt.cursorfixedheight?b.opt.cursorfixedheight:Math.max(b.opt.cursorminheight,b.cursorheight);b.cursorwidth=Math.min(b.view.w,Math.round(b.view.w*(b.view.w/b.page.w)));b.cursorwidth=b.opt.cursorfixedheight?b.opt.cursorfixedheight:Math.max(b.opt.cursorminheight,
b.cursorwidth);b.scrollvaluemax=b.view.h-b.cursorheight-b.cursor.hborder;b.railh&&(b.railh.width=0<b.page.maxh?b.view.w-b.rail.width:b.view.w,b.scrollvaluemaxw=b.railh.width-b.cursorwidth-b.cursorh.wborder);b.checkrtlmode&&b.railh&&(b.checkrtlmode=!1,b.opt.rtlmode&&0==b.scroll.x&&b.setScrollLeft(b.page.maxw));b.ispage||b.updateScrollBar(b.view);b.scrollratio={x:b.page.maxw/b.scrollvaluemaxw,y:b.page.maxh/b.scrollvaluemax};b.getScrollTop()>b.page.maxh?b.doScrollTop(b.page.maxh):(b.scroll.y=Math.round(b.getScrollTop()*
(1/b.scrollratio.y)),b.scroll.x=Math.round(b.getScrollLeft()*(1/b.scrollratio.x)),b.cursoractive&&b.noticeCursor());b.scroll.y&&0==b.getScrollTop()&&b.doScrollTo(Math.floor(b.scroll.y*b.scrollratio.y));return b};this.resize=b.onResize;this.lazyResize=function(d){d=isNaN(d)?30:d;b.delayed("resize",b.resize,d);return b};this._bind=function(d,c,g,f){b.events.push({e:d,n:c,f:g,b:f,q:!1});d.addEventListener?d.addEventListener(c,g,f||!1):d.attachEvent?d.attachEvent("on"+c,g):d["on"+c]=g};this.jqbind=function(d,
c,g){b.events.push({e:d,n:c,f:g,q:!0});e(d).bind(c,g)};this.bind=function(d,c,g,e){var h="jquery"in d?d[0]:d;"mousewheel"==c?"onwheel"http://tnc.org.cn/js/in b.win?b._bind(h,"wheel",g,e||!1):(d="undefined"!=typeof document.onmousewheel?"mousewheel":"DOMMouseScroll",q(h,d,g,e||!1),"DOMMouseScroll"==d&&q(h,"MozMousePixelScroll",g,e||!1)):h.addEventListener?(f.cantouch&&/mouseup|mousedown|mousemove/.test(c)&&b._bind(h,"mousedown"==c?"touchstart":"mouseup"==c?"touchend":"touchmove",function(b){if(b.touches){if(2>b.touches.length){var d=
b.touches.length?b.touches[0]:b;d.original=b;g.call(this,d)}}else b.changedTouches&&(d=b.changedTouches[0],d.original=b,g.call(this,d))},e||!1),b._bind(h,c,g,e||!1),f.cantouch&&"mouseup"==c&&b._bind(h,"touchcancel",g,e||!1)):b._bind(h,c,function(d){if((d=d||window.event||!1)&&d.srcElement)d.target=d.srcElement;"pageY"in d||(d.pageX=d.clientX+document.documentElement.scrollLeft,d.pageY=d.clientY+document.documentElement.scrollTop);return!1===g.call(h,d)||!1===e?b.cancelEvent(d):!0})};this._unbind=
function(b,c,g,f){b.removeEventListener?b.removeEventListener(c,g,f):b.detachEvent?b.detachEvent("on"+c,g):b["on"+c]=!1};this.unbindAll=function(){for(var d=0;d<b.events.length;d++){var c=b.events[d];c.q?c.e.unbind(c.n,c.f):b._unbind(c.e,c.n,c.f,c.b)}};this.cancelEvent=function(b){b=b.original?b.original:b?b:window.event||!1;if(!b)return!1;b.preventDefault&&b.preventDefault();b.stopPropagation&&b.stopPropagation();b.preventManipulation&&b.preventManipulation();b.cancelBubble=!0;b.cancel=!0;return b.returnValue=
!1};this.stopPropagation=function(b){b=b.original?b.original:b?b:window.event||!1;if(!b)return!1;if(b.stopPropagation)return b.stopPropagation();b.cancelBubble&&(b.cancelBubble=!0);return!1};this.showRail=function(){if(0!=b.page.maxh&&(b.ispage||"none"!=b.win.css("display")))b.visibility=!0,b.rail.visibility=!0,b.rail.css("display","block");return b};this.showRailHr=function(){if(!b.railh)return b;if(0!=b.page.maxw&&(b.ispage||"none"!=b.win.css("display")))b.railh.visibility=!0,b.railh.css("display",
"block");return b};this.hideRail=function(){b.visibility=!1;b.rail.visibility=!1;b.rail.css("display","none");return b};this.hideRailHr=function(){if(!b.railh)return b;b.railh.visibility=!1;b.railh.css("display","none");return b};this.show=function(){b.hidden=!1;b.locked=!1;return b.showRail().showRailHr()};this.hide=function(){b.hidden=!0;b.locked=!0;return b.hideRail().hideRailHr()};this.toggle=function(){return b.hidden?b.show():b.hide()};this.remove=function(){b.stop();b.cursortimeout&&clearTimeout(b.cursortimeout);
b.doZoomOut();b.unbindAll();f.isie9&&b.win[0].detachEvent("onpropertychange",b.onAttributeChange);!1!==b.observer&&b.observer.disconnect();!1!==b.observerremover&&b.observerremover.disconnect();b.events=null;b.cursor&&b.cursor.remove();b.cursorh&&b.cursorh.remove();b.rail&&b.rail.remove();b.railh&&b.railh.remove();b.zoom&&b.zoom.remove();for(var d=0;d<b.saved.css.length;d++){var c=b.saved.css[d];c[0].css(c[1],"undefined"==typeof c[2]?"":c[2])}b.saved=!1;b.me.data("__nicescroll","");var g=e.nicescroll;
g.each(function(d){if(this&&this.id===b.id){delete g[d];for(var c=++d;c<g.length;c++,d++)g[d]=g[c];g.length--;g.length&&delete g[g.length]}});for(var h in b)b[h]=null,delete b[h];b=null};this.scrollstart=function(d){this.onscrollstart=d;return b};this.scrollend=function(d){this.onscrollend=d;return b};this.scrollcancel=function(d){this.onscrollcancel=d;return b};this.zoomin=function(d){this.onzoomin=d;return b};this.zoomout=function(d){this.onzoomout=d;return b};this.isScrollable=function(b){b=b.target?
b.target:b;if("OPTION"==b.nodeName)return!0;for(;b&&1==b.nodeType&&!/BODY|HTML/.test(b.nodeName);){var c=e(b),c=c.css("overflowY")||c.css("overflowX")||c.css("overflow")||"";if(/scroll|auto/.test(c))return b.clientHeight!=b.scrollHeight;b=b.parentNode?b.parentNode:!1}return!1};this.getViewport=function(b){for(b=b&&b.parentNode?b.parentNode:!1;b&&1==b.nodeType&&!/BODY|HTML/.test(b.nodeName);){var c=e(b);if(/fixed|absolute/.test(c.css("position")))return c;var g=c.css("overflowY")||c.css("overflowX")||
c.css("overflow")||"";if(/scroll|auto/.test(g)&&b.clientHeight!=b.scrollHeight||0<c.getNiceScroll().length)return c;b=b.parentNode?b.parentNode:!1}return!1};this.onmousewheel=function(d){if(b.locked)return b.debounced("checkunlock",b.resize,250),!0;if(b.rail.drag)return b.cancelEvent(d);"auto"==b.opt.oneaxismousemode&&0!=d.deltaX&&(b.opt.oneaxismousemode=!1);if(b.opt.oneaxismousemode&&0==d.deltaX&&!b.rail.scrollable)return b.railh&&b.railh.scrollable?b.onmousewheelhr(d):!0;var c=+new Date,g=!1;b.opt.preservenativescrolling&&
b.checkarea+600<c&&(b.nativescrollingarea=b.isScrollable(d),g=!0);b.checkarea=c;if(b.nativescrollingarea)return!0;if(d=t(d,!1,g))b.checkarea=0;return d};this.onmousewheelhr=function(d){if(b.locked||!b.railh.scrollable)return!0;if(b.rail.drag)return b.cancelEvent(d);var c=+new Date,g=!1;b.opt.preservenativescrolling&&b.checkarea+600<c&&(b.nativescrollingarea=b.isScrollable(d),g=!0);b.checkarea=c;return b.nativescrollingarea?!0:b.locked?b.cancelEvent(d):t(d,!0,g)};this.stop=function(){b.cancelScroll();
b.scrollmon&&b.scrollmon.stop();b.cursorfreezed=!1;b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y));b.noticeCursor();return b};this.getTransitionSpeed=function(c){var f=Math.round(10*b.opt.scrollspeed);c=Math.min(f,Math.round(c/20*b.opt.scrollspeed));return 20<c?c:0};b.opt.smoothscroll?b.ishwscroll&&f.hastransition&&b.opt.usetransition?(this.prepareTransition=function(c,e){var g=e?20<c?c:0:b.getTransitionSpeed(c),h=g?f.prefixstyle+"transform "+g+"ms ease-out":"";if(!b.lasttransitionstyle||
b.lasttransitionstyle!=h)b.lasttransitionstyle=h,b.doc.css(f.transitionstyle,h);return g},this.doScrollLeft=function(c,f){var g=b.scrollrunning?b.newscrolly:b.getScrollTop();b.doScrollPos(c,g,f)},this.doScrollTop=function(c,f){var g=b.scrollrunning?b.newscrollx:b.getScrollLeft();b.doScrollPos(g,c,f)},this.doScrollPos=function(c,e,g){var h=b.getScrollTop(),l=b.getScrollLeft();(0>(b.newscrolly-h)*(e-h)||0>(b.newscrollx-l)*(c-l))&&b.cancelScroll();!1==b.opt.bouncescroll&&(0>e?e=0:e>b.page.maxh&&(e=b.page.maxh),
0>c?c=0:c>b.page.maxw&&(c=b.page.maxw));if(b.scrollrunning&&c==b.newscrollx&&e==b.newscrolly)return!1;b.newscrolly=e;b.newscrollx=c;b.newscrollspeed=g||!1;if(b.timer)return!1;b.timer=setTimeout(function(){var g=b.getScrollTop(),h=b.getScrollLeft(),l,k;l=c-h;k=e-g;l=Math.round(Math.sqrt(Math.pow(l,2)+Math.pow(k,2)));l=b.newscrollspeed&&1<b.newscrollspeed?b.newscrollspeed:b.getTransitionSpeed(l);b.newscrollspeed&&1>=b.newscrollspeed&&(l*=b.newscrollspeed);b.prepareTransition(l,!0);b.timerscroll&&b.timerscroll.tm&&
clearInterval(b.timerscroll.tm);0<l&&(!b.scrollrunning&&b.onscrollstart&&b.onscrollstart.call(b,{type:"scrollstart",current:{x:h,y:g},request:{x:c,y:e},end:{x:b.newscrollx,y:b.newscrolly},speed:l}),f.transitionend?b.scrollendtrapped||(b.scrollendtrapped=!0,b.bind(b.doc,f.transitionend,b.onScrollEnd,!1)):(b.scrollendtrapped&&clearTimeout(b.scrollendtrapped),b.scrollendtrapped=setTimeout(b.onScrollEnd,l)),b.timerscroll={bz:new BezierClass(g,b.newscrolly,l,0,0,0.58,1),bh:new BezierClass(h,b.newscrollx,
l,0,0,0.58,1)},b.cursorfreezed||(b.timerscroll.tm=setInterval(function(){b.showCursor(b.getScrollTop(),b.getScrollLeft())},60)));b.synched("doScroll-set",function(){b.timer=0;b.scrollendtrapped&&(b.scrollrunning=!0);b.setScrollTop(b.newscrolly);b.setScrollLeft(b.newscrollx);if(!b.scrollendtrapped)b.onScrollEnd()})},50)},this.cancelScroll=function(){if(!b.scrollendtrapped)return!0;var c=b.getScrollTop(),e=b.getScrollLeft();b.scrollrunning=!1;f.transitionend||clearTimeout(f.transitionend);b.scrollendtrapped=
!1;b._unbind(b.doc,f.transitionend,b.onScrollEnd);b.prepareTransition(0);b.setScrollTop(c);b.railh&&b.setScrollLeft(e);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);b.timerscroll=!1;b.cursorfreezed=!1;b.showCursor(c,e);return b},this.onScrollEnd=function(){b.scrollendtrapped&&b._unbind(b.doc,f.transitionend,b.onScrollEnd);b.scrollendtrapped=!1;b.prepareTransition(0);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);b.timerscroll=!1;var c=b.getScrollTop(),e=b.getScrollLeft();
b.setScrollTop(c);b.railh&&b.setScrollLeft(e);b.noticeCursor(!1,c,e);b.cursorfreezed=!1;0>c?c=0:c>b.page.maxh&&(c=b.page.maxh);0>e?e=0:e>b.page.maxw&&(e=b.page.maxw);if(c!=b.newscrolly||e!=b.newscrollx)return b.doScrollPos(e,c,b.opt.snapbackspeed);b.onscrollend&&b.scrollrunning&&b.onscrollend.call(b,{type:"scrollend",current:{x:e,y:c},end:{x:b.newscrollx,y:b.newscrolly}});b.scrollrunning=!1}):(this.doScrollLeft=function(c,f){var g=b.scrollrunning?b.newscrolly:b.getScrollTop();b.doScrollPos(c,g,f)},
this.doScrollTop=function(c,f){var g=b.scrollrunning?b.newscrollx:b.getScrollLeft();b.doScrollPos(g,c,f)},this.doScrollPos=function(c,f,g){function e(){if(b.cancelAnimationFrame)return!0;b.scrollrunning=!0;if(p=1-p)return b.timer=v(e)||1;var c=0,d=sy=b.getScrollTop();if(b.dst.ay){var d=b.bzscroll?b.dst.py+b.bzscroll.getNow()*b.dst.ay:b.newscrolly,g=d-sy;if(0>g&&d<b.newscrolly||0<g&&d>b.newscrolly)d=b.newscrolly;b.setScrollTop(d);d==b.newscrolly&&(c=1)}else c=1;var f=sx=b.getScrollLeft();if(b.dst.ax){f=
b.bzscroll?b.dst.px+b.bzscroll.getNow()*b.dst.ax:b.newscrollx;g=f-sx;if(0>g&&f<b.newscrollx||0<g&&f>b.newscrollx)f=b.newscrollx;b.setScrollLeft(f);f==b.newscrollx&&(c+=1)}else c+=1;2==c?(b.timer=0,b.cursorfreezed=!1,b.bzscroll=!1,b.scrollrunning=!1,0>d?d=0:d>b.page.maxh&&(d=b.page.maxh),0>f?f=0:f>b.page.maxw&&(f=b.page.maxw),f!=b.newscrollx||d!=b.newscrolly?b.doScrollPos(f,d):b.onscrollend&&b.onscrollend.call(b,{type:"scrollend",current:{x:sx,y:sy},end:{x:b.newscrollx,y:b.newscrolly}})):b.timer=v(e)||
1}f="undefined"==typeof f||!1===f?b.getScrollTop(!0):f;if(b.timer&&b.newscrolly==f&&b.newscrollx==c)return!0;b.timer&&w(b.timer);b.timer=0;var h=b.getScrollTop(),l=b.getScrollLeft();(0>(b.newscrolly-h)*(f-h)||0>(b.newscrollx-l)*(c-l))&&b.cancelScroll();b.newscrolly=f;b.newscrollx=c;if(!b.bouncescroll||!b.rail.visibility)0>b.newscrolly?b.newscrolly=0:b.newscrolly>b.page.maxh&&(b.newscrolly=b.page.maxh);if(!b.bouncescroll||!b.railh.visibility)0>b.newscrollx?b.newscrollx=0:b.newscrollx>b.page.maxw&&
(b.newscrollx=b.page.maxw);b.dst={};b.dst.x=c-l;b.dst.y=f-h;b.dst.px=l;b.dst.py=h;var k=Math.round(Math.sqrt(Math.pow(b.dst.x,2)+Math.pow(b.dst.y,2)));b.dst.ax=b.dst.x/k;b.dst.ay=b.dst.y/k;var m=0,q=k;0==b.dst.x?(m=h,q=f,b.dst.ay=1,b.dst.py=0):0==b.dst.y&&(m=l,q=c,b.dst.ax=1,b.dst.px=0);k=b.getTransitionSpeed(k);g&&1>=g&&(k*=g);b.bzscroll=0<k?b.bzscroll?b.bzscroll.update(q,k):new BezierClass(m,q,k,0,1,0,1):!1;if(!b.timer){(h==b.page.maxh&&f>=b.page.maxh||l==b.page.maxw&&c>=b.page.maxw)&&b.checkContentSize();
var p=1;b.cancelAnimationFrame=!1;b.timer=1;b.onscrollstart&&!b.scrollrunning&&b.onscrollstart.call(b,{type:"scrollstart",current:{x:l,y:h},request:{x:c,y:f},end:{x:b.newscrollx,y:b.newscrolly},speed:k});e();(h==b.page.maxh&&f>=h||l==b.page.maxw&&c>=l)&&b.checkContentSize();b.noticeCursor()}},this.cancelScroll=function(){b.timer&&w(b.timer);b.timer=0;b.bzscroll=!1;b.scrollrunning=!1;return b}):(this.doScrollLeft=function(c,f){var g=b.getScrollTop();b.doScrollPos(c,g,f)},this.doScrollTop=function(c,
f){var g=b.getScrollLeft();b.doScrollPos(g,c,f)},this.doScrollPos=function(c,f,g){var e=c>b.page.maxw?b.page.maxw:c;0>e&&(e=0);var h=f>b.page.maxh?b.page.maxh:f;0>h&&(h=0);b.synched("scroll",function(){b.setScrollTop(h);b.setScrollLeft(e)})},this.cancelScroll=function(){});this.doScrollBy=function(c,f){var g=0,g=f?Math.floor((b.scroll.y-c)*b.scrollratio.y):(b.timer?b.newscrolly:b.getScrollTop(!0))-c;if(b.bouncescroll){var e=Math.round(b.view.h/2);g<-e?g=-e:g>b.page.maxh+e&&(g=b.page.maxh+e)}b.cursorfreezed=
!1;py=b.getScrollTop(!0);if(0>g&&0>=py)return b.noticeCursor();if(g>b.page.maxh&&py>=b.page.maxh)return b.checkContentSize(),b.noticeCursor();b.doScrollTop(g)};this.doScrollLeftBy=function(c,f){var g=0,g=f?Math.floor((b.scroll.x-c)*b.scrollratio.x):(b.timer?b.newscrollx:b.getScrollLeft(!0))-c;if(b.bouncescroll){var e=Math.round(b.view.w/2);g<-e?g=-e:g>b.page.maxw+e&&(g=b.page.maxw+e)}b.cursorfreezed=!1;px=b.getScrollLeft(!0);if(0>g&&0>=px||g>b.page.maxw&&px>=b.page.maxw)return b.noticeCursor();b.doScrollLeft(g)};
this.doScrollTo=function(c,f){f&&Math.round(c*b.scrollratio.y);b.cursorfreezed=!1;b.doScrollTop(c)};this.checkContentSize=function(){var c=b.getContentSize();(c.h!=b.page.h||c.w!=b.page.w)&&b.resize(!1,c)};b.onscroll=function(c){b.rail.drag||b.cursorfreezed||b.synched("scroll",function(){b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y));b.railh&&(b.scroll.x=Math.round(b.getScrollLeft()*(1/b.scrollratio.x)));b.noticeCursor()})};b.bind(b.docscroll,"scroll",b.onscroll);this.doZoomIn=function(c){if(!b.zoomactive){b.zoomactive=
!0;b.zoomrestore={style:{}};var h="position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),g=b.win[0].style,l;for(l in h){var k=h[l];b.zoomrestore.style[k]="undefined"!=typeof g[k]?g[k]:""}b.zoomrestore.style.width=b.win.css("width");b.zoomrestore.style.height=b.win.css("height");b.zoomrestore.padding={w:b.win.outerWidth()-b.win.width(),h:b.win.outerHeight()-b.win.height()};f.isios4&&(b.zoomrestore.scrollTop=e(window).scrollTop(),e(window).scrollTop(0));
b.win.css({position:f.isios4?"absolute":"fixed",top:0,left:0,"z-index":y+100,margin:"0px"});h=b.win.css("backgroundColor");(""==h||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(h))&&b.win.css("backgroundColor","#fff");b.rail.css({"z-index":y+101});b.zoom.css({"z-index":y+102});b.zoom.css("backgroundPosition","0px -18px");b.resizeZoom();b.onzoomin&&b.onzoomin.call(b);return b.cancelEvent(c)}};this.doZoomOut=function(c){if(b.zoomactive)return b.zoomactive=!1,b.win.css("margin",""),b.win.css(b.zoomrestore.style),
f.isios4&&e(window).scrollTop(b.zoomrestore.scrollTop),b.rail.css({"z-index":b.zindex}),b.zoom.css({"z-index":b.zindex}),b.zoomrestore=!1,b.zoom.css("backgroundPosition","0px 0px"),b.onResize(),b.onzoomout&&b.onzoomout.call(b),b.cancelEvent(c)};this.doZoom=function(c){return b.zoomactive?b.doZoomOut(c):b.doZoomIn(c)};this.resizeZoom=function(){if(b.zoomactive){var c=b.getScrollTop();b.win.css({width:e(window).width()-b.zoomrestore.padding.w+"px",height:e(window).height()-b.zoomrestore.padding.h+"px"});
b.onResize();b.setScrollTop(Math.min(b.page.maxh,c))}};this.init();e.nicescroll.push(this)},J=function(e){var c=this;this.nc=e;this.steptime=this.lasttime=this.speedy=this.speedx=this.lasty=this.lastx=0;this.snapy=this.snapx=!1;this.demuly=this.demulx=0;this.lastscrolly=this.lastscrollx=-1;this.timer=this.chky=this.chkx=0;this.time=function(){return+new Date};this.reset=function(e,l){c.stop();var k=c.time();c.steptime=0;c.lasttime=k;c.speedx=0;c.speedy=0;c.lastx=e;c.lasty=l;c.lastscrollx=-1;c.lastscrolly=
-1};this.update=function(e,l){var k=c.time();c.steptime=k-c.lasttime;c.lasttime=k;var k=l-c.lasty,t=e-c.lastx,b=c.nc.getScrollTop(),p=c.nc.getScrollLeft(),b=b+k,p=p+t;c.snapx=0>p||p>c.nc.page.maxw;c.snapy=0>b||b>c.nc.page.maxh;c.speedx=t;c.speedy=k;c.lastx=e;c.lasty=l};this.stop=function(){c.nc.unsynched("domomentum2d");c.timer&&clearTimeout(c.timer);c.timer=0;c.lastscrollx=-1;c.lastscrolly=-1};this.doSnapy=function(e,l){var k=!1;0>l?(l=0,k=!0):l>c.nc.page.maxh&&(l=c.nc.page.maxh,k=!0);0>e?(e=0,k=
!0):e>c.nc.page.maxw&&(e=c.nc.page.maxw,k=!0);k&&c.nc.doScrollPos(e,l,c.nc.opt.snapbackspeed)};this.doMomentum=function(e){var l=c.time(),k=e?l+e:c.lasttime;e=c.nc.getScrollLeft();var t=c.nc.getScrollTop(),b=c.nc.page.maxh,p=c.nc.page.maxw;c.speedx=0<p?Math.min(60,c.speedx):0;c.speedy=0<b?Math.min(60,c.speedy):0;k=k&&60>=l-k;if(0>t||t>b||0>e||e>p)k=!1;e=c.speedx&&k?c.speedx:!1;if(c.speedy&&k&&c.speedy||e){var f=Math.max(16,c.steptime);50<f&&(e=f/50,c.speedx*=e,c.speedy*=e,f=50);c.demulxy=0;c.lastscrollx=
c.nc.getScrollLeft();c.chkx=c.lastscrollx;c.lastscrolly=c.nc.getScrollTop();c.chky=c.lastscrolly;var s=c.lastscrollx,u=c.lastscrolly,d=function(){var e=600<c.time()-l?0.04:0.02;if(c.speedx&&(s=Math.floor(c.lastscrollx-c.speedx*(1-c.demulxy)),c.lastscrollx=s,0>s||s>p))e=0.1;if(c.speedy&&(u=Math.floor(c.lastscrolly-c.speedy*(1-c.demulxy)),c.lastscrolly=u,0>u||u>b))e=0.1;c.demulxy=Math.min(1,c.demulxy+e);c.nc.synched("domomentum2d",function(){c.speedx&&(c.nc.getScrollLeft()!=c.chkx&&c.stop(),c.chkx=
s,c.nc.setScrollLeft(s));c.speedy&&(c.nc.getScrollTop()!=c.chky&&c.stop(),c.chky=u,c.nc.setScrollTop(u));c.timer||(c.nc.hideCursor(),c.doSnapy(s,u))});1>c.demulxy?c.timer=setTimeout(d,f):(c.stop(),c.nc.hideCursor(),c.doSnapy(s,u))};d()}else c.doSnapy(c.nc.getScrollLeft(),c.nc.getScrollTop())}},B=e.fn.scrollTop;e.cssHooks.pageYOffset={get:function(k,c,h){return(c=e.data(k,"__nicescroll")||!1)&&c.ishwscroll?c.getScrollTop():B.call(k)},set:function(k,c){var h=e.data(k,"__nicescroll")||!1;h&&h.ishwscroll?
h.setScrollTop(parseInt(c)):B.call(k,c);return this}};e.fn.scrollTop=function(k){if("undefined"==typeof k){var c=this[0]?e.data(this[0],"__nicescroll")||!1:!1;return c&&c.ishwscroll?c.getScrollTop():B.call(this)}return this.each(function(){var c=e.data(this,"__nicescroll")||!1;c&&c.ishwscroll?c.setScrollTop(parseInt(k)):B.call(e(this),k)})};var C=e.fn.scrollLeft;e.cssHooks.pageXOffset={get:function(k,c,h){return(c=e.data(k,"__nicescroll")||!1)&&c.ishwscroll?c.getScrollLeft():C.call(k)},set:function(k,
c){var h=e.data(k,"__nicescroll")||!1;h&&h.ishwscroll?h.setScrollLeft(parseInt(c)):C.call(k,c);return this}};e.fn.scrollLeft=function(k){if("undefined"==typeof k){var c=this[0]?e.data(this[0],"__nicescroll")||!1:!1;return c&&c.ishwscroll?c.getScrollLeft():C.call(this)}return this.each(function(){var c=e.data(this,"__nicescroll")||!1;c&&c.ishwscroll?c.setScrollLeft(parseInt(k)):C.call(e(this),k)})};var D=function(k){var c=this;this.length=0;this.name="nicescrollarray";this.each=function(e){for(var h=
0,k=0;h<c.length;h++)e.call(c[h],k++);return c};this.push=function(e){c[c.length]=e;c.length++};this.eq=function(e){return c[e]};if(k)for(a=0;a<k.length;a++){var h=e.data(k[a],"__nicescroll")||!1;h&&(this[this.length]=h,this.length++)}return this};(function(e,c,h){for(var l=0;l<c.length;l++)h(e,c[l])})(D.prototype,"show hide toggle onResize resize remove stop doScrollPos".split(" "),function(e,c){e[c]=function(){var e=arguments;return this.each(function(){this[c].apply(this,e)})}});e.fn.getNiceScroll=
function(k){return"undefined"==typeof k?new D(this):this[k]&&e.data(this[k],"__nicescroll")||!1};e.extend(e.expr[":"],{nicescroll:function(k){return e.data(k,"__nicescroll")?!0:!1}});e.fn.niceScroll=function(k,c){"undefined"==typeof c&&("object"==typeof k&&!("jquery"in k))&&(c=k,k=!1);var h=new D;"undefined"==typeof c&&(c={});k&&(c.doc=e(k),c.win=e(this));var l=!("doc"in c);!l&&!("win"in c)&&(c.win=e(this));this.each(function(){var k=e(this).data("__nicescroll")||!1;k||(c.doc=l?e(this):c.doc,k=new Q(c,
e(this)),e(this).data("__nicescroll",k));h.push(k)});return 1==h.length?h[0]:h};window.NiceScroll={getjQuery:function(){return e}};e.nicescroll||(e.nicescroll=new D,e.nicescroll.options=I)})(jQuery);
/*! Hammer.JS - v1.0.3 - 2013-03-02
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */

(function(t){"use strict";function e(){if(!n.READY){n.event.determineEventTypes();for(var t in n.gestures)n.gestures.hasOwnProperty(t)&&n.detection.register(n.gestures[t]);n.event.onTouch(document,n.EVENT_MOVE,n.detection.detect),n.event.onTouch(document,n.EVENT_END,n.detection.endDetect),n.READY=!0}}var n=function(t,e){return new n.Instance(t,e||{})};n.defaults={stop_browser_behavior:{userSelect:"none",touchCallout:"none",touchAction:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},n.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled,n.HAS_TOUCHEVENTS="ontouchstart"in t,n.EVENT_TYPES={},n.DIRECTION_DOWN="down",n.DIRECTION_LEFT="left",n.DIRECTION_UP="up",n.DIRECTION_RIGHT="right",n.POINTER_MOUSE="mouse",n.POINTER_TOUCH="touch",n.POINTER_PEN="pen",n.EVENT_START="start",n.EVENT_MOVE="move",n.EVENT_END="end",n.plugins={},n.READY=!1,n.Instance=function(t,i){var r=this;return e(),this.element=t,this.enabled=!0,this.options=n.utils.extend(n.utils.extend({},n.defaults),i||{}),this.options.stop_browser_behavior&&n.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),n.event.onTouch(t,n.EVENT_START,function(t){r.enabled&&n.detection.startDetect(r,t)}),this},n.Instance.prototype={on:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.addEventListener(n[i],e,!1);return this},off:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.removeEventListener(n[i],e,!1);return this},trigger:function(t,e){var n=document.createEvent("Event");return n.initEvent(t,!0,!0),n.gesture=e,this.element.dispatchEvent(n),this},enable:function(t){return this.enabled=t,this}};var i=null,r=!1,o=!1;n.event={bindDom:function(t,e,n){for(var i=e.split(" "),r=0;i.length>r;r++)t.addEventListener(i[r],n,!1)},onTouch:function(t,e,s){var a=this;this.bindDom(t,n.EVENT_TYPES[e],function(c){var u=c.type.toLowerCase();return u.match(/mouseup/)&&o?(o=!1,void 0):((u.match(/touch/)||u.match(/mouse/)&&1===c.which||n.HAS_POINTEREVENTS&&u.match(/down/))&&(r=!0),u.match(/touch|pointer/)&&(o=!0),!r||o&&u.match(/mouse/)||(n.HAS_POINTEREVENTS&&e!=n.EVENT_END&&n.PointerEvent.updatePointer(e,c),e===n.EVENT_END&&null!==i?c=i:i=c,s.call(n.detection,a.collectEventData(t,e,c)),n.HAS_POINTEREVENTS&&e==n.EVENT_END&&n.PointerEvent.updatePointer(e,c)),u.match(/up|cancel|end/)&&(r=!1,i=null,n.PointerEvent.reset()),void 0)})},determineEventTypes:function(){var t;t=n.HAS_POINTEREVENTS?n.PointerEvent.getEvents():["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],n.EVENT_TYPES[n.EVENT_START]=t[0],n.EVENT_TYPES[n.EVENT_MOVE]=t[1],n.EVENT_TYPES[n.EVENT_END]=t[2]},getTouchList:function(t){return n.HAS_POINTEREVENTS?n.PointerEvent.getTouchList():t.touches?t.touches:[{identifier:1,pageX:t.pageX,pageY:t.pageY,target:t.target}]},collectEventData:function(t,e,i){var r=this.getTouchList(i,e),o=n.POINTER_TOUCH;return(i.type.match(/mouse/)||n.PointerEvent.matchType(n.POINTER_MOUSE,i))&&(o=n.POINTER_MOUSE),{center:n.utils.getCenter(r),timestamp:i.timestamp||(new Date).getTime(),target:i.target,touches:r,eventType:e,pointerType:o,srcEvent:i,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault&&this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return n.detection.stopDetect()}}}},n.PointerEvent={pointers:{},getTouchList:function(){var t=this.pointers,e=[];return Object.keys(t).sort().forEach(function(n){e.push(t[n])}),e},updatePointer:function(t,e){t==n.EVENT_END?delete this.pointers[e.pointerId]:(e.identifier=e.pointerId,this.pointers[e.pointerId]=e)},matchType:function(t,e){if(!e.pointerType)return!1;var i={};return i[n.POINTER_MOUSE]=e.pointerType==e.MSPOINTER_TYPE_MOUSE||e.pointerType==n.POINTER_MOUSE,i[n.POINTER_TOUCH]=e.pointerType==e.MSPOINTER_TYPE_TOUCH||e.pointerType==n.POINTER_TOUCH,i[n.POINTER_PEN]=e.pointerType==e.MSPOINTER_TYPE_PEN||e.pointerType==n.POINTER_PEN,i[t]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},n.utils={extend:function(t,e){for(var n in e)t[n]=e[n];return t},getCenter:function(t){for(var e=[],n=[],i=0,r=t.length;r>i;i++)e.push(t[i].pageX),n.push(t[i].pageY);return{pageX:(Math.min.apply(Math,e)+Math.max.apply(Math,e))/2,pageY:(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2}},getVelocity:function(t,e,n){return{x:Math.abs(e/t)||0,y:Math.abs(n/t)||0}},getAngle:function(t,e){var n=e.pageY-t.pageY,i=e.pageX-t.pageX;return 180*Math.atan2(n,i)/Math.PI},getDirection:function(t,e){var i=Math.abs(t.pageX-e.pageX),r=Math.abs(t.pageY-e.pageY);return i>=r?t.pageX-e.pageX>0?n.DIRECTION_LEFT:n.DIRECTION_RIGHT:t.pageY-e.pageY>0?n.DIRECTION_UP:n.DIRECTION_DOWN},getDistance:function(t,e){var n=e.pageX-t.pageX,i=e.pageY-t.pageY;return Math.sqrt(n*n+i*i)},getScale:function(t,e){return t.length>=2&&e.length>=2?this.getDistance(e[0],e[1])/this.getDistance(t[0],t[1]):1},getRotation:function(t,e){return t.length>=2&&e.length>=2?this.getAngle(e[1],e[0])-this.getAngle(t[1],t[0]):0},isVertical:function(t){return t==n.DIRECTION_UP||t==n.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(t,e){var n,i=["webkit","khtml","moz","ms","o",""];if(e&&t.style){for(var r=0;i.length>r;r++)for(var o in e)e.hasOwnProperty(o)&&(n=o,i[r]&&(n=i[r]+n.substring(0,1).toUpperCase()+n.substring(1)),t.style[n]=e[o]);"none"==e.userSelect&&(t.onselectstart=function(){return!1})}}},n.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,e){this.current||(this.stopped=!1,this.current={inst:t,startEvent:n.utils.extend({},e),lastEvent:!1,name:""},this.detect(e))},detect:function(t){if(this.current&&!this.stopped){t=this.extendEventData(t);for(var e=this.current.inst.options,n=0,i=this.gestures.length;i>n;n++){var r=this.gestures[n];if(!this.stopped&&e[r.name]!==!1&&r.handler.call(r,t,this.current.inst)===!1){this.stopDetect();break}}this.current&&(this.current.lastEvent=t)}},endDetect:function(t){this.detect(t),this.stopDetect()},stopDetect:function(){this.previous=n.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var e=this.current.startEvent;if(e&&(t.touches.length!=e.touches.length||t.touches===e.touches)){e.touches=[];for(var i=0,r=t.touches.length;r>i;i++)e.touches.push(n.utils.extend({},t.touches[i]))}var o=t.timestamp-e.timestamp,s=t.center.pageX-e.center.pageX,a=t.center.pageY-e.center.pageY,c=n.utils.getVelocity(o,s,a);return n.utils.extend(t,{deltaTime:o,deltaX:s,deltaY:a,velocityX:c.x,velocityY:c.y,distance:n.utils.getDistance(e.center,t.center),angle:n.utils.getAngle(e.center,t.center),direction:n.utils.getDirection(e.center,t.center),scale:n.utils.getScale(e.touches,t.touches),rotation:n.utils.getRotation(e.touches,t.touches),startEvent:e}),t},register:function(t){var e=t.defaults||{};return e[t.name]===void 0&&(e[t.name]=!0),n.utils.extend(n.defaults,e),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(t,e){return t.index<e.index?-1:t.index>e.index?1:0}),this.gestures}},n.gestures=n.gestures||{},n.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(t,e){switch(t.eventType){case n.EVENT_START:clearTimeout(this.timer),n.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==n.detection.current.name&&e.trigger("hold",t)},e.options.hold_timeout);break;case n.EVENT_MOVE:t.distance>e.options.hold_threshold&&clearTimeout(this.timer);break;case n.EVENT_END:clearTimeout(this.timer)}}},n.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,doubletap_distance:20,doubletap_interval:300},handler:function(t,e){if(t.eventType==n.EVENT_END){var i=n.detection.previous;if(t.deltaTime>e.options.tap_max_touchtime||t.distance>e.options.tap_max_distance)return;n.detection.current.name=i&&"tap"==i.name&&t.timestamp-i.lastEvent.timestamp<e.options.doubletap_interval&&t.distance<e.options.doubletap_distance?"doubletap":"tap",e.trigger(n.detection.current.name,t)}}},n.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.7},handler:function(t,e){if(t.eventType==n.EVENT_END){if(e.options.swipe_max_touches>0&&t.touches.length>e.options.swipe_max_touches)return;(t.velocityX>e.options.swipe_velocity||t.velocityY>e.options.swipe_velocity)&&(e.trigger(this.name,t),e.trigger(this.name+t.direction,t))}}},n.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1},triggered:!1,handler:function(t,e){if(n.detection.current.name!=this.name&&this.triggered)return e.trigger(this.name+"end",t),this.triggered=!1,void 0;if(!(e.options.drag_max_touches>0&&t.touches.length>e.options.drag_max_touches))switch(t.eventType){case n.EVENT_START:this.triggered=!1;break;case n.EVENT_MOVE:if(t.distance<e.options.drag_min_distance&&n.detection.current.name!=this.name)return;n.detection.current.name=this.name;var i=n.detection.current.lastEvent.direction;e.options.drag_lock_to_axis&&i!==t.direction&&(t.direction=n.utils.isVertical(i)?0>t.deltaY?n.DIRECTION_UP:n.DIRECTION_DOWN:0>t.deltaX?n.DIRECTION_LEFT:n.DIRECTION_RIGHT),this.triggered||(e.trigger(this.name+"start",t),this.triggered=!0),e.trigger(this.name,t),e.trigger(this.name+t.direction,t),(e.options.drag_block_vertical&&n.utils.isVertical(t.direction)||e.options.drag_block_horizontal&&!n.utils.isVertical(t.direction))&&t.preventDefault();break;case n.EVENT_END:this.triggered&&e.trigger(this.name+"end",t),this.triggered=!1}}},n.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,e){if(n.detection.current.name!=this.name&&this.triggered)return e.trigger(this.name+"end",t),this.triggered=!1,void 0;if(!(2>t.touches.length))switch(e.options.transform_always_block&&t.preventDefault(),t.eventType){case n.EVENT_START:this.triggered=!1;break;case n.EVENT_MOVE:var i=Math.abs(1-t.scale),r=Math.abs(t.rotation);if(e.options.transform_min_scale>i&&e.options.transform_min_rotation>r)return;n.detection.current.name=this.name,this.triggered||(e.trigger(this.name+"start",t),this.triggered=!0),e.trigger(this.name,t),r>e.options.transform_min_rotation&&e.trigger("rotate",t),i>e.options.transform_min_scale&&(e.trigger("pinch",t),e.trigger("pinch"+(1>t.scale?"in":"out"),t));break;case n.EVENT_END:this.triggered&&e.trigger(this.name+"end",t),this.triggered=!1}}},n.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1},handler:function(t,e){e.options.prevent_default&&t.preventDefault(),t.eventType==n.EVENT_START&&e.trigger(this.name,t)}},n.gestures.Release={name:"release",index:1/0,handler:function(t,e){t.eventType==n.EVENT_END&&e.trigger(this.name,t)}},"object"==typeof module&&"object"==typeof module.exports?module.exports=n:(t.Hammer=n,"function"==typeof t.define&&t.define.amd&&t.define("hammer",[],function(){return n}))})(this),function(t){"use strict";t&&(Hammer.event.bindDom=function(e,n,i){t(e).on(n,function(t){var e=t.originalEvent;e.pageX||(e.pageX=t.pageX,e.pageY=t.pageY),e.target||(e.target=t.target),e.which||(e.which=e.button),e.preventDefault||(e.preventDefault=t.preventDefault),e.stopPropagation||(e.stopPropagation=t.stopPropagation),i.call(this,e)})},Hammer.Instance.prototype.on=function(e,n){return t(this.element).on(e,n)},Hammer.Instance.prototype.off=function(e,n){return t(this.element).off(e,n)},Hammer.Instance.prototype.trigger=function(e,n){return t(n.srcEvent.target).trigger({type:e,gesture:n})},t.fn.hammer=function(e){return this.each(function(){var n=t(this),i=n.data("hammer");i?i&&e&&Hammer.utils.extend(i.options,e):n.data("hammer",Hammer(this,e||{}))})})}(window.jQuery||!1);

(function($){
// JavaScript Document;
var $win = $(window);
var $doc = $(document);
var maxscale = 1 ,minscale = 1;
var $FF = $.browser.mozilla;
var $webkit = $.browser.webkit;
var $safari = $.browser.safari;
var $msie = $.browser.msie,$ie8 = $msie&&parseFloat($.browser.version)<9,$ie9 = $msie&&parseFloat($.browser.version)<=9,$ie6= $msie&&parseFloat($.browser.version)<7;
var $winplatform = (navigator.platform.toLowerCase().indexOf("win")>-1)?true:false ;
var $ios = (!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/));
var _w,_h,_iw=1000,_ih=600,_all=6790,_cur=0,_step=!$ios?30:15;
var $t = true;
var _am,_ao,_new;
//try{document.domain = "http://tnc.org.cn/js/tnc.org.cn";}catch(e$$5){}
$f = window.$f || {
	init:function(){
		var self = this;
		self.cssInit();
		$doc.on('mousewheel', $f.wheelHandler);
		$win.on('resize', $f.resizeHandle).trigger('resize');
		//$f.resizeHandle();
		$doc.on("keydown",$f.keyHandler);
		self.loading();
		$win.on('load',function(){
			//alert('load');
		});
	},
	scrollInit:function(e){
		var timer,_OPEN = false,showMenu = function(_t){
			if(!!timer){clearTimeout(timer);timer = null;}
			timer = setTimeout(function(){$('.M_menu').css({top:$('body').scrollTop()-120,display:'block'}).stop(true,true).animate({top:$('body').scrollTop()},500,'easeOutExpo');},_t);
		};
		$('.M_body').data('_NS',$('.M_body').niceScroll($('.M_ul'),{
			autohidemode:true,cursorwidth:10,cursorcolor:"#388638",//595959
			horizrailenabled:false,railclass:"mscroll",cursorborderradius:'2px',
			cursorborder:"1px solid #585858",bouncescroll:false,boxzoom:false,hwacceleration:false
			,cursoropacitymin:0.35,preservenativescrolling:false
		}));
		$('.M_menu').bind('close',function(e){
			$('.nav_show').trigger('click',true);
			$('.M_menu').stop().hide();
			showMenu(750);
		});
		$doc.on('scroll',function(e){
			$('.M_menu').trigger('close');
		});
		
		$('#main')[0].addEventListener('touchmove',function(e){ 
			if(_OPEN){
				e.preventDefault();  
				e.stopPropagation();
			}else{
				$('.M_menu').trigger('close');
			}
		},true);
		$('#main')[0].addEventListener('touchstart',function(e){
			if(_OPEN){
				e.preventDefault();  
				e.stopPropagation();
				return false;
			}else{
				$('.M_menu').trigger('close');
			}
		},false);
		
		/*$('#main a').each(function(index, element) {
            $(this)[0].addEventListener('touchstart',function(e){ 
				//e.preventDefault();  
				e.stopPropagation();
			},false);
			$(this)[0].addEventListener('touchmove',function(e){ 
				$('.M_menu').trigger('close');
			},false);
        });*/
		
		$('.nav_show').bind('click',function(e,f){
			e.preventDefault();  
			e.stopPropagation();
			if(!$(this).hasClass('close')||!!f){
				$(this).stop().removeClass('open').addClass('close');
				_OPEN = false;
				$('.M_body').hide();
			}else{
				$(this).stop().removeClass('close').addClass('open');
				_OPEN = true;
				$('.M_body').show();
			}
			$('.M_body').data('_NS').resize();
		});
		$('.M_head')[0].addEventListener('touchmove',function(e){ 
			e.preventDefault();  
			e.stopPropagation();
		},true);
		
		
		$('.M_a').bind('click',function(){
			if($(this).hasClass('open')){
				$('.M_dl').hide();
				$(this).removeClass('open');
			}else{
				$('.M_dl').hide();
				$('.M_a').removeClass('open');
				$(this).addClass('open').parent().find('.M_dl').show();
			}
			$('.M_body').data('_NS').resize();
		});
		$('.M_menu')[0].addEventListener('touchmove',function(e){
			return false;
		},false);
	},
	
	dirSlide:function(tars,dir,call){
			var size = $(tars).size(),cur = $(tars).index($(tars).filter('.current')),tar = cur+dir<0?size-1:cur+dir>=size?0:cur+dir;
			$(tars).eq(cur).stop().removeClass('current').css({left:"0%"}).animate({left:dir>0?'-100%':'100%'},500,function(){
				$(this).hide();
			});
			$(tars).eq(tar).stop().addClass('current').css({left:dir>0?'100%':'-100%',display:'block'}).animate({left:'0%',opacity:1},500,call);
	},
	slideRender:function(tar,f,t,dur,flag,c,dir,show){
		var $tar = $(tar),t_start = {'display':'block','z-index':1},t_end={},f_end={};
		t_start[!dir?'left':'top']=!!flag?(f>t?"100%":"-100%"):(f>t?"-100%":"100%");
		t_end[!dir?'left':'top']='0%';
		f_end[!dir?'left':'top']=!!flag?(f>t?"-100%":"100%"):(f>t?"100%":"-100%");

		$tar.eq(t).stop(true,false).trigger("slideIn").css(t_start).animate(t_end,dur,"easeOutSine",c);

		$tar.eq(f).stop(true,false).trigger("slideOut").css({"display":"block","z-index":0}).animate(f_end,dur+50,"easeOutSine",function(){
			!show&&$(this).hide();
			$(this).trigger("slideOutEnd");
			$(tar).eq(t).trigger("slideInEnd");
		});
		$tar.eq(f).removeClass("current");$tar.eq(t).addClass("current");
	},
	keyHandler:function(e){
		if (e.keyCode >= 37 && e.keyCode <= 40){
			e.returnValue = false;
			e.preventDefault();
			$f.wheelHandler(e,(e.keyCode==37||e.keyCode==38)?1:-1,0,0,true);
		}
	},
	wheelHandler:function(e, delta, deltaX, deltaY , isKey){
	},
	cssInit:function(){
		var _ = this;
		_am = _AOM;_ao = _AObj;_new = New;
		
		//logo
		$('#logo').bind('click',function(){$('#nav_0').trigger('click');});
		//$('#v0_more').bind('click',function(){$('#nav_1').trigger('click');});
		//tips
		$('#tips').bind('start',function(){
			var _ = this,flash=function(){
				$(_).find('.t_unit').each(function(index, element) {
					var $chd = $(this).children(),cur = $chd.index($(this).find('.current'));
					$chd.eq(1-cur).css({'z-index':1}).fadeIn(!$ie8?500:0,function(){
						$(this).css({'z-index':0}).addClass('current');
					});
					$chd.eq(cur).removeClass('current').fadeOut(!$ie8?500:0);
				});
				$(_).data('timer',setTimeout(flash,1500));
			};
			$(_).data('timer',setTimeout(flash,1000)).css({display:'block'});
		}).bind('stop',function(){
			clearTimeout($(this).data('timer'));
			$(this).css({display:'none'});
		});
		
		//more
		$('.B_more').each(function(index, element) {
			var _this = this;
			$(_this).append('<div class="hover"></div><div class="area"></div>');
            $(_this).parent().bind('mouseenter',function(){
				$(_this).find('.hover').stop().animate({width:83},350,'easeOutExpo');
			}).bind('mouseleave',function(){
				$(_this).find('.hover').stop().animate({width:0},250,'easeOutQuint');
			});
        });
		
		//search
		
		//自愿者TNC活动
		$('#B_myjoin').bind('click',function(){
			$('#acount_links').children().eq(0).trigger('click').trigger('mouseenter',true);
		});
		
		//login 控制
		$('.B_login').bind('click',function(){
			_.Sc('_callback_url',escape(document.location.href),0.1);
		});
		
		//new_tip
		var _hasNew = false,_newObj = null,_curDate = new Date().getTime(),_offset = 24*60*60*1000*3,_newTpl = '<div id="v0_news" href="javascript:;"><a href="javascript:;" class="close"></a><p class="ncont"><span class="tit">{title}</span><span class="text">{text}</span></p></div><a id="v0_tip" href="javascript:;"></a';
		$('.news_content .view_li').each(function(index, element) {
            var _newDate = new Date($(this).find('.news_date').text().replace(/-/g,'/')).getTime();
			if(_curDate-_newDate<_offset){
				_hasNew = true;
				if(!_newObj||(_newObj.date&&_newObj.date<_newDate)){
					_newObj = {obj:$(this),date:_newDate};
				}
			}
        });
		if(_hasNew&&_newObj){
			$('#nav_4').data('tip','.nav_tip').data('tipfunc',function(){$('#v0_news').remove();$('#v0_tip').remove();}).find('.icon').append('<div class="nav_tip"><div class="bg"></div></div>');
			$(_newTpl.replace('{title}',_newObj.obj.find('.news_title').text()).replace('{text}',_newObj.obj.find('.news_text').text().substr(0,70)+'...')).appendTo($('#home'));
			$('#v0_news .close').bind('click',function(){
				$('#v0_news').stop().animate({right:-420},500,function(){
					$('#v0_tip').show();
				});
			});
			$('#v0_news .ncont').bind('click',function(){
				$('#nav_4').trigger('click');
			});
			$('#v0_tip').bind('click',function(){
				$(this).data('timer')&&(clearTimeout($(this).data('timer')),$(this).data('timer',setTimeout(function(){$('#v0_news .close').trigger('click');},5000)));
				$(this).hide();
				$('#v0_news').stop().animate({right:10},750);
			}).data('timer',setTimeout(function(){$('#v0_news .close').trigger('click');},5000));
		}
		//init
		var _arr = ['scroll','nav','share','feature','footLink','user','anim','audio'];
		//navinit
		$.each(_arr,function(i,v){
			$.isFunction(_[v+'Init'])&&_[v+'Init']();
		});
		_.renderPoint();
	 },
	 resizeHandle:function(e){
		_w = $win.width();
		_h = $win.height();
		//alert(_w+'-'+_h);
		//if(_w>_h){_h=1.6*_w;}
		$('.view').css({width:_w,height:_h});
		$('.feature').css({height:_h});
		//scroll
		$('.bscroll').height($win.height()).find('div').height(_all+$win.height());
		!!$f.ns&&$f.ns.resize();//&&$f.ns.setScrollTop(_cur);
		//bg
		$('.view_bg').each(function(index, element) {
			var _bw=$(this).data('width'),_bh=$(this).data('height'),_s = Math.max(_w/_bw,_h/_bh);
			$(this).css({width:_s*_bw,height:_s*_bh,marginLeft:-(_s*_bw)/2,marginTop:-(_s*_bh)/2,left:'50%',top:'50%'});
		});
		$('.view_links').width(_w>1280?1280:_w).css({left:'50%',marginLeft:-(_w>1280?1280:_w)/2});
		//view_body
		$('.view_h,.view_w').each(function(index, element){
			if($(this).hasClass('view_h')){
				$(this).height(_h-$(this).data('offset'));
				//$('iframe',this).height($(this).height());
			}else{
				$(this).width($(this).parent().width()-$(this).data('offset'));
			}
		});
		//view_center
		var $vpar = $('.view_content.current').eq(0).find('.view_list'),_vw = $vpar.width(),_vh = $vpar.height();
		$('.view_center').each(function(index, element) {
			//var $par = $(this).parents('.view_list');
            $(this).width(_vw).height(_vh);
        });
		//logo
		$('.logo').css({left:(_=(_w-532)/2)>258?(_-258)/2:_-258});
		//view_btn
		$('.B_left').css({marginLeft:-_w/2});
		$('.B_right').css({marginLeft:_w/2-65});
		//M_body
		$('.M_body').css({height:_h-120});
	},
	//load
	stime:0,
	loading:function(){
		var _ = this
		if(!!_.Gc('loaded')){
			_.loadComplete();
		}else{
			var module = $b.createModuleByS("body",_.loadHandle,_.loadComplete,3);
			//_.animPause(true);
			$b.loadModule(module);
			_.stime = new Date().getTime();
		}
	},
	loadHandle:function(_m){
		$('#loadbar').css({width:Math.round(_m.getLoadProgress()*100)+'%'});
		var time = new Date().getTime();
		if(time-$f.stime>15000){$('#loadtip').show();}
	},
	loadComplete:function(_m){
		var _ = this;
		$('#load').fadeOut(500,function(){
			$(this).remove();
		});
		$f.loaded();
	},
	loaded:function(){
		var _ = this;
		_.Sc('loaded','true',0.5);
		$('#v0_more').fadeIn();
		$('#main').css({height:'auto'});
		$('body,html').css({height:'auto'});
		//$('#tips').css('display','block');
		_.anchorHandler();
	},
	//point
	renderPoint:function(){
		var _ = this,_tpl = '<a href="javascript:;" class="v3_point" style="left:{l}px;top:{t}px" data-t="{t}">{y}</a>';
		var $b = $('<div class="v3_points"></div>').appendTo($('#v3_body'));
		for(var i in _P){
			var o = _P[i];
			$b.append(_tpl.replace('{l}',o.x).replace(/{t}/g,o.y).replace('{y}',i));
			if(o.r){
				$b.children().last().addClass('R');
			}
		}
		//points
		_.Ps = $b ;
		
		var $year = $('.v3_year'),$text = $('.v3_txt p'),_size = $('.v3_point').size(),$more = $('.v3_more');
		$('.v3_point').bind('click',function(){
			var _y = $(this).text(),_i =$('.v3_point').index(this);
			$year.data('index',_i);
			if(!!$E&&!!$E[_y]){
				var _t = $E[_y];
				$year.text(_y);
				$text.empty();
				if(!_.isObject(_t)){
					$text.append('<span>'+_t+'</span>');
					$more.hide();
					$year.data('o',0);
				}else{
					if(!_t.t)return;
					var _s = _t.s ,_a = _t.t;
					for(var i=0;i<_a.length;i++){
						$text.append('<span class="'+(_s==i?'':'hide')+'">'+_a[i]+'</span>');
					}
					$more.show();
					$year.data('o',1);
				}
			}
		}).eq(0).trigger('click');
		$('.v3_btn').bind('click',function(){
			var _dir = !$('.v3_btn').index(this)?-1:1,_cur = $year.data('index'),_tar = _cur+_dir<0?_size-1:_cur+_dir>=_size?0:_cur+_dir;
			$('.v3_point').eq(_tar).trigger('click');
		})
		$('.v3_txt').bind('mouseenter',function(){
			$(this).find('.hide').stop(true,true).css({display:'block'}).animate({color:"#5d4809"},1200);
			$more.hide();	
		}).bind('mouseleave',function(){
			$(this).find('.hide').stop(true,true).css({color:'#ffd148',display:'none'});
			if(!!$year.data('o')){
				$more.show();
			}
		});
	},
	//foot
	ellipsis:function(_sel,_w,_h,_ell){
		var _ = this;
		!_ell&&(_ell='...');
		$(_sel).each(function(index, element) {
			$temp = $(this).clone(false).css({width:_w,height:'auto',padding:'0px','font':$(this).css('font'),'text-indent':$(this).css('text-indent'),'letter-spacing':$(this).css('letter-spacing'),"visibility": "hidden"}).appendTo(document.body);
			if($temp.height()>_h){
				$temp.text($(this).text()+_ell);
				$(this).text(_.ellipsisHandle(_h,$temp,_ell,3));
			}
			$temp.remove();
		});
	},
	ellipsisHandle:function(_h,$t,_ell,_s){
		var _=this,_s = !!_s?_s:5,_t = $t.text();
		if($t.height()>_h){
			if(_t.length<_s+_ell.length){
				return _t;
			}else{
				$t.text(_t.substr(0,_t.length-_ell.length-_s)+_ell);
				return _.ellipsisHandle(_h,$t,_ell,_s);
			}
		}else{
			return _t;
		}
	},
	footLinkInit:function(){
		var _ = this ,resizeInline = function(){
			var $vpar = $('.view_content.current').eq(0).find('.view_list'),_vw = $vpar.width(),_vh = $vpar.height();
			$('.view_center').each(function(index, element) {
				$(this).width(_vw).height(_vh);
			});
		};
		//foot
		$('.foot_links').each(function(index, element) {
			var arrIndex = [4,5,6];
			var $links = $(this).find('.foot_link');//,$dds = $(arr[index]);
			$links.eq(0).addClass('current');
			$links.append('<img src="/img/visible.gif">');
			var _s = $links.size(),_d = 186,_o = -31,_w = (_s-1)*_d;
			var _timer = null;
			$links.bind('mouseenter',function(e,f){
				if(!$(this).hasClass('current')||f){
					//clearTimeout(_timer);
					var _t = $links.index(this);
				}
			}).bind('mouseleave',function(e){
				if(!$(this).hasClass('current')){
						var _t = $links.index($links.filter('.current'));
				}
			}).bind('click',function(_e,_f){
				var $par = $(this).parent(),_id = $par.attr('id');
				if($(this).hasClass('current')||!!_CLICK[_id])return;
				var t = $links.index(this),f = $links.index($links.filter('.current'));
				_CLICK[_id] = 1;
				_.slideRender($par.parents('.view').find('.view_content'),f,t,500,_f,function(){_CLICK[_id] = 0;},null,true);
				$links.removeClass('current');
				$(this).addClass('current');
				if($(_._Links[_id]).hasClass('current')){
					var $$ = $(_._Links[_id]);
					var anc = (_anc=$$.find('dd').eq(t).attr('anchor'))?_anc:'';
					window.location.hash = !!$$.attr('anchor')?$$.attr('anchor')+anc:'';
					//tracking
					_tPage('/'+(!!$$.attr('anchor')?$$.attr('anchor')+anc:''));
				}
			}).eq(0).trigger('mouseenter',true);
		});
		var _CLICK = {'news_links':0,'interactive_links':0,'acount_links':0};
		
		//view_a
		$('.view_a').live('mouseenter',function(e){
			$(this).addClass('hover');
			$('.view_text',this).stop(true,true).fadeIn(150);
		}).live('mouseleave',function(e){
			$(this).removeClass('hover');
			$('.view_text',this).stop(true,true).fadeOut(150);
		});
		
		//loading new news
		//_TPL_0 [url , tpl ] 
		$('.view_content:not(".static")').each(function(index,e) {
			var $list = $('.view_list',this),$btn = $('.view_btn',this),$load = $('.B_loading',this),url = _TPL_0[index].url,tpl=_TPL_0[index].tpl,__page = 1,__hasnext = $list.attr('hasnext') === undefined?false:true,_cur = 0,_all = $list.children().size(),_CLICK={f:0};
			if(!__hasnext&&$list.children('.view_ul').size()==1){$btn.eq(1).css({display:'none'});}
			//dirSlide : function(tars,dir,call)
			$btn.bind('click',function(e){
				if(!!_CLICK.f)return;
				var _dir = !$btn.index(this)?-1:1,_cur = $list.children('.view_ul').index($list.find('.view_ul.current'));
				if(_dir+_cur>=0&&_dir+_cur<_all){
					_CLICK.f = 1;
					_.dirSlide($list.children('.view_ul'),_dir,function(){_CLICK.f=0;},null,true);
					$btn.eq(0).css({display:_dir+_cur==0?'none':'block'});
					$btn.eq(1).css({display:_dir+_cur==_all-1&&!__hasnext?'none':'block'});
				}else if(_dir>0&&__hasnext){
					_CLICK.f = 1;$load.show();
					_.ax(url,{page:++__page,rows:12},function(json){
						if(json.ret==0){
							var _arr = json.data;
							for(var i=0;i<Math.ceil(_arr.length/4);i++){
								var $ul = $('<ul class="view_ul"><div class="view_center"><div class="view_inline"></div></div></ul>');
								for(var k=i*4;k<((i+1)*4>_arr.length?_arr.length:(i+1)*4);k++){
									$ul.find('.view_inline').append(_.TPL(tpl,_arr[k]));
								}
								$ul.appendTo($list);
								resizeInline();
								ellipsis($ul);
							}
							_all = $list.children().size();
							_.dirSlide($list.children('.view_ul'),_dir,function(){_CLICK.f=0;});
						}else{
							_CLICK.f = 0;
						}
						$load.hide();__hasnext = json.hasnext;
						if(!__hasnext){$btn.eq(1).hide();}
						if(_all>1){$btn.eq(0).show();}
					},function(){
						_CLICK.f = 0;$load.hide();
						__hasnext = false;
						$btn.eq(1).hide();
					},'GET')
				}
			}).eq(0).css({display:'none'});
		});
		ellipsis = function($tar){
			_.ellipsis($('.view_text p',!!$tar?$tar:'body'),194,132);
			_.ellipsis($('.active_txt p',!!$tar?$tar:'body'),214,152);
			_.ellipsis($('.mytnc_p',!!$tar?$tar:'body'),214,145);
		};
		ellipsis();
		
		//foot
		$('.foot_btn').bind('click',function(){
			var to = $(this).data('to');
			$('.M_a[anchor="'+to+'"],.M_k[anchor="'+to+'"]').trigger('click');
		});
	},
	ax:function(tar,option,call,error,type,noCache){
		//!noCache&&this.isObject(option)&&(option.r = Math.random());
		$.ajax({
			//url:(this.t?this.thead:"")+this.url[tar],
			url:_URL[tar][$t?0:1],//+(this.t?"?seed="+Math.random:+"")
			data:option,
			type:!type?"POST":type,dataType:"json",
			success:call,error:error,cache:!noCache?true:false
		});
	},
	//user
	userInit:function(){
		$('.user_logout').bind('click',function(){
			$f.ax('logout',{},function(){},function(){});
			$('.user_ul').hide();
			$('.user_login').fadeIn(300);
		});
		this.updateUser = function(data){
			if(!!data){
				data.area&&$('.user_area').text(data.area);
				data.sexy&&$('.user_sexy').text(data.sexy);
				data.birthday&&$('.user_birthday').text(data.birthday);
				data.email&&$('.user_email').text(data.email);
				data.nick&&$('.user_name').text(data.nick).attr('title',data.nick);
			}
		};
	},
	//feature
	featureInit:function(){
		var _ = this;
		$('.fea_btn,.map_btn').live('click',function(){
			var _cfg = _IFRAME[$(this).data('pro')];
			_.jumpTo(_cfg.link);
		});
		
		$('.view_a').live('click',function(){
			_.jumpTo($(this).data('url'));
		});
	},
	jumpTo:function(_url){
		document.location.href = _url;
	},
	iframeURL:function(){
		return escape(window.location.href+'#iframe'+(!!(_view=$('.fea_view').text())?'^view->'+_view:'')+(!!(_sec=$('.fea_sec').text())?'^sec->'+_sec:'')+'^link->'+$('.fea_body iframe').attr('src'));
	},
	_TOP_HASH:'',
	//shareinit
	shareInit:function(){
		var link = "../index.htm"/*tpa=http://tnc.org.cn/*/,title = "大自然保护协会（TNC）",content = 'TNC（The Nature Conservancy  大自然保护协会）成立于1951年，是国际上最大的非营利性的自然环境保护组织之一。一直致力于在全球保护具有重要生态价值的陆地和水域，维护自然环境、提升人类福祉。';
		$('.s_sina').bind('click',function(){
			window.open('http://v.t.sina.com.cn/share/share.php?appkey=&url='+encodeURIComponent(link)+'&title='+encodeURIComponent(content),'_blank','scrollbars=no,width=600,height=450,left=75,top=20,status=no,resizable=yes');
		});
		$('.s_qq').bind('click',function(){
			window.open('http://share.v.t.qq.com/index.php?c=share&a=index&url='+encodeURIComponent(link)+'&title='+encodeURIComponent(content),'_blank','scrollbars=no,width=600,height=450,left=75,top=20,status=no,resizable=yes');
		});
		$('.s_douban').bind('click',function(){
			window.open('http://shuo.douban.com/!service/share?href='+encodeURIComponent(link)+'&text='+encodeURIComponent(content)+'&name='+encodeURIComponent(title),'_blank','scrollbars=no,width=600,height=450,left=75,top=20,status=no,resizable=yes');
		});
	},
	//nav
	navInit:function(){
		var _ = this,$view = $('.view');
		_.$nk.bind('click',function(){
			var _this = this;
			if(!$(this).hasClass('ni')){
				var _i = _.$ni.index($(this).parents('.M_li').find('.ni'));
				$('html,body').stop().animate({scrollTop:$view.eq(_i).offset().top},500,'easeOutExpo');
				var $par = $(this).parent(),_id = $par.attr('id'),__i = $par.children().index(this);
				$(_._Links[_id]).children().eq(__i).trigger('click');
			}else{
				var _i = _.$ni.index(this);
				$('html,body').stop().animate({scrollTop:$view.eq(_i).offset().top},500,'easeOutExpo');
			}
			$('.nav_show').trigger('click',true);
		});
	},
	_Links:{
		"nav_4":"#news_links",
		"nav_5":"#interactive_links",
		"nav_6":"#acount_links",
		"news_links":"#nav_4",
		"interactive_links":"#nav_5",
		"acount_links":"#nav_6"
	},
	navPos:[],
	$ni:$('.ni'),
	$nk:$('.M_k'),
	$nav:$('.M_a:not(.M_o)'),
	navCur:0,
	navRender:function(_cur){
		var _ = this;
	},
	anchorHandler:function(){
		var _=this;
		if(_.Gc('_callback_url')){
			var href = unescape(_.Gc('_callback_url'));
			_.Dc('_callback_url');
			window.location.href = href;
		}
		var _hash = window.location.hash,_arr = [],_if,_ifObj={},_ihref;
		if(/^#.+$/.test(_hash)){
			_arr = _hash.replace('#','').split('#');
			var _i = _.findArrIndex(_arr,/^iframe.+$/);
			//#iframe^view->最新项目^sec->滇金丝猴保护项目^link->project.html
			if(_i>-1){
				_if = _arr.splice(_i,1);
				_if = _if[0].split('^');
				if(_if.length>1){
					for(var i=1;i<_if.length;i++){
						var __a = _if[i].split('->');
						_ifObj[__a[0]] = __a[1];
					}
				}else{
					_ihref = _.decrypt(_if[0].replace('iframe',''),'http://tnc.org.cn/js/tnc.org.cn');
					log('||'+_ihref);
					//if(_ihref.indexOf(document.location.host)==-1){_ihref = '';}
				}
				
			}
			!_arr[0]&&(_arr[0]='Home');
			var $li = $('.M_a[anchor="#'+_arr[0]+'"]'),$dd,_pos;
			if(!$li.get(0))return;
			if(_arr.length>1&&!!_arr[1]){$dd = $li.parent().find('.M_k[anchor="#'+_arr[1]+'"]');}
			if($li.hasClass('ni')){
				if(_arr.length>1&&$dd.get(0)){
					$dd.trigger('click');
				}
			}else{
				if($li.parent().find('.M_k[anchor="#'+_arr[1]+'"]')[0]){
					$li.parent().find('.M_k[anchor="#'+_arr[1]+'"]').trigger('click');
				}else{
					$li.parent().find('.M_k').eq(0).trigger('click');
				}
			}
			window.location.hash = '';
			if(!!_ihref){
				setTimeout(function(){window.location.href = _ihref;},300);
			}else if(!!_ifObj.link){
				setTimeout(function(){window.location.href = _ifObj.link;},300);
			}
		}else{
			//_.animGoto(0,true);
		}
	},
	navFlag:false,
	hideNav:function(){
		$('.menu').stop().animate({top:-150},500,'easeOutQuint');
	},
	showNav:function(){
		if(!this.canMove)return;
		$('.menu').stop().animate({top:0},500);
	},
	
	//tools 
	CSS3:function(a,b){
		var property = {};
		property[a]=property["-moz-"+a]=property["-webkit-"+a]=property["-ms-"+a]=property["-o-"+a]=b;
		return property;
	},
	pxToInt:function(str){
		return str.toString().indexOf("px")>-1?Math.round(parseFloat(str.split('px')[0])):str;
	},
	shuffleArray: function(arr){
		for(var j, x, i = arr.length; i; j = parseInt(Math.random()* i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
		return arr;
	},
	sizeOf:function(o){
		var counter = 0;for(var i in o)counter++;
		return counter;
	},
	objString:function(obj,f) {
		if(f == undefined){f = true;}
        var str = f?'{':'';for (var i in obj) {str += i + ':' + obj[i] + ';' ;}return str + (f?'}':'');
    },
	arraySuffix:function(arr,suff){
		for(var i=0;i<arr.length;/^-?\d+$/.test(arr[i])?arr[i]+=suff:arr[i]=arr[i],i++);
		return arr;
	},
	findArrIndex:function(_arr,reg){
		for(var i=0;i<_arr.length;i++){
			if(reg.test(_arr[i])){return i;}
		}
		return -1;
	},
	findArrIndexEx:function(_arr,val){
		var s = _arr.length;
		for(var i=0;i<_arr.length;i++){
			if(val==_arr[i]||(i+1<=s&&val<_arr[i+1])){return i;}
		}
		return -1;
	},
	TPL:function(template, data) {
	  return template.replace(/\{([\w\.]*)\}/g, function(str, key) {
		var keys = key.split("."), v = data[keys.shift()];
		for (var i = 0, l = keys.length; i < l; i++) v = v[keys[i]];
		return (typeof v !== "undefined" && v !== null) ? v : "";
	  });
	},
	is: function(A, _) {
		var $ = Object.prototype.toString.call(_).slice(8, -1).toLowerCase();
		return _ !== undefined && _ !== null && $ === A.toLowerCase()
	},
	isObject:function(o){return this.is('object',o);},
	//cookie
	Ac : function(){
		var str = document.cookie ;
		//alert(unescape(str));
	},
	Sc : function(objName,objValue,objHours){
		var str = objName + "=" + escape(objValue);
		!!(objHours==undefined)&&(objHours=24);
		if(objHours > 0){
			var date = new Date();
			var ms = objHours*3600*1000;
			date.setTime(date.getTime() + ms);
			str += "; expires=" + date.toGMTString();
		}
		document.cookie = str;
	},
	Gc : function(objName){
		var arrStr = document.cookie.split("; ");
		for(var i = 0;i < arrStr.length;i ++){
			var temp = arrStr[i].split("=");
			if(temp[0] == objName) return unescape(decodeURIComponent(temp[1]));
		}
   	},
   	Dc:function(name){
		var date = new Date();
		date.setTime(date.getTime() - 10000);
		document.cookie = name + "=; expires=" + date.toGMTString();
   	},
	encrypt:function(str, pwd) {
		if(pwd == null || pwd.length <= 0) {
			return '';
		}
		var prand = "";
		for(var i=0;i<pwd.length;i++){
			prand += pwd.charCodeAt(i).toString();
		}
		var sPos = Math.floor(prand.length / 5);
		var mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos*2) + prand.charAt(sPos*3) + prand.charAt(sPos*4) + prand.charAt(sPos*5));
		var incr = Math.ceil(pwd.length / 2);
		var modu = Math.pow(2, 31) - 1;
		if(mult < 2) {
			return '';
		}
		//var salt = Math.round(Math.random() * 1000000000) % 100000000;
		var salt = 87654321;
		prand += salt;
		while(prand.length > 10) {
			prand = (parseInt(prand.substring(0, 10)) + parseInt(prand.substring(10, prand.length))).toString();
		}
		prand = (mult * prand + incr) % modu;
		var enc_chr = "";
		var enc_str = "";
		for(var i=0;i<str.length;i++) {
			enc_chr = parseInt(str.charCodeAt(i) ^ Math.floor((prand / modu) * 255));
			if(enc_chr < 16) {
				enc_str += "0" + enc_chr.toString(16);
			}
			else enc_str += enc_chr.toString(16);
			prand = (mult * prand + incr) % modu;
		}
		salt = salt.toString(16);
		while(salt.length < 8)salt = "0" + salt;
		enc_str += salt;
		return enc_str;
	},
	decrypt:function(str, pwd) {
		if(str == null || str.length < 8) {
			return '';
		}
		if(pwd == null || pwd.length <= 0) {
			return '';
		}
		var prand = "";
		for(var i=0;i<pwd.length;i++){
			prand += pwd.charCodeAt(i).toString();
		}
		var sPos = Math.floor(prand.length / 5);
		var mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos*2) + prand.charAt(sPos*3) + prand.charAt(sPos*4) + prand.charAt(sPos*5));
		var incr = Math.round(pwd.length / 2);
		var modu = Math.pow(2, 31) - 1;
		var salt = parseInt(str.substring(str.length - 8, str.length), 16);
		str = str.substring(0, str.length - 8);
		prand += salt;
		while(prand.length > 10) {
			prand = (parseInt(prand.substring(0, 10)) + parseInt(prand.substring(10, prand.length))).toString();
		}
		prand = (mult * prand + incr) % modu;
		var enc_chr = "";
		var enc_str = "";
		for(var i=0;i<str.length;i+=2) {
			enc_chr = parseInt(parseInt(str.substring(i, i+2), 16) ^ Math.floor((prand / modu) * 255));
			enc_str += String.fromCharCode(enc_chr);
			prand = (mult * prand + incr) % modu;
		}
		return enc_str;
	}
};
function log(msg){
	if(!$t){return};
	if (window.console && window.console.log)
		window.console.log(msg);//+"|date:"+new Date().getTime()
	else if (window.opera && window.opera.postError)
		window.opera.postError(msg);
};
/*
window.requestAnimationFrame = (function(w, r) { 
	w['r'+r] = w['r'+r] || w['webkitR'+r] || w['mozR'+r] || w['msR'+r] || w['oR'+r] || function(c){ w.setTimeout(c, 100); };
	return w['r'+r];
})(window, 'equestAnimationFrame');
*/
(function () {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame =
  window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame)
		window.requestAnimationFrame = function (callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function () { callback(currTime + timeToCall); },
	  timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};

	if (!window.cancelAnimationFrame)
		window.cancelAnimationFrame = function (id) {
			clearTimeout(id);
		};
} ());

window._hmt = window._hmt || [];
var _tEvent = function(a,b,c){
		//window._hmt.push(['_trackEvent',a,b,c]);
	},_tPage = function(a){
		//window._hmt.push(['_trackPageview',a]);
	};
(function(){
	$('.nav_li').bind('click',function(){
		_tEvent($(this).attr('anchor'),'click','MENU');
	}).find('dd').bind('click',function(){
		_tEvent($(this).parents('.nav_li').attr('anchor')+$(this).attr('anchor'),'click','MENU');
	}).find('a').bind('click',function(){
		var _href = $(this).attr('href');
		!!_href&&(_href=_href.replace(document.location.origin,''))&&(_href=_href.replace(document.location.protocol+'//'+document.location.host,''))&&!/^javascript.+/i.test(_href)&&_tPage(_href);
	});
	
	$('.view_a').live('click',function(){
		var _url = $(this).data('url');
		!!_url&&_tPage(_url);
	});
	$('.view_links .B').not('.fea_btn').bind('click',function(){
		var _href = $(this).attr('href');
		!!_href&&(_href=_href.replace(document.location.origin,''))&&(_href=_href.replace(document.location.protocol+'//'+document.location.host,''))&&!/^javascript.+/i.test(_href)&&_tPage(_href);
	});
	$('.fea_btn,.map_btn').bind('click',function(){
		!!(_pro=_IFRAME[$(this).data('pro')])&&!!_pro['link']&&_tPage(_pro['link']);
	});
})();

var _TPL_0 = [{
			'url':'schedule',
			'tpl':'<a href="javascript:;" data-url="{link}" class="view_a news_a" title="{title}"><span class="news_title">{title}</span><div class="news_img"><img onload="resizeImg(this,234,142,\'.view\')"  src="{pic}"></div><span class="news_date">{date}</span><div class="view_text news_text"><p>{describe}</p></div></a>'
		},{
			'url':'news',
			'tpl':'<a href="javascript:;" data-url="{link}" class="view_a news_a" title="{title}"><span class="news_title">{title}</span><div class="news_img"><img onload="resizeImg(this,234,142,\'.view\')"  src="{pic}"></div><span class="news_date">{date}</span><div class="view_text news_text"><p>{describe}</p></div></a>'
		},{
			'url':'worldschedule',
			'tpl':'<a href="javascript:;" data-url="{link}" class="view_a news_a" title="{title}"><span class="news_title">{title}</span><div class="news_img"><img onload="resizeImg(this,234,142,\'.view\')"  src="{pic}"></div><span class="news_date">{date}</span><div class="view_text news_text"><p>{describe}</p></div></a>'
		},{
			'url':'story',
			'tpl':'<a href="javascript:;" data-url="{link}" class="view_a active_a" title="{title}"><span class="active_title">{title}</span><div class="active_img"><img onload="resizeImg(this,234,172,\'.view\')"  src="{pic}"></div><div class="view_text active_text"><p>{describe}</p></div></a>'	
		},{
			'url':'video',
			'tpl':'<a href="javascript:;" data-url="{link}" class="view_a active_a" title="{title}"><span class="active_title">{title}</span><div class="active_img"><img onload="resizeImg(this,234,172,\'.view\')"  src="{pic}"></div><div class="view_text active_text"><p>{describe}</p></div></a>'	
		},{
			'url':'card',
			'tpl':'<a href="javascript:;" data-url="{link}" class="view_a active_a" title="{title}"><span class="active_title">{title}</span><div class="active_img"><img onload="resizeImg(this,234,172,\'.view\')"  src="{pic}"></div><div class="view_text active_text"><p>{describe}</p></div></a>'	
		},{
			'url':'q&a',
			'tpl':'<a href="javascript:;" class="view_a active_a QA_a" data-url="{link}" title="{title}"><span class="active_title">Q:{title}</span><div class="active_txt"><p title="点击查看更多">A:&nbsp;&nbsp;&nbsp;{describe}</p></div></a>'	
		},{
			'url':'join',
			'tpl':'<a href="javascript:;" data-url="{link}" class="view_a active_a" title="{title}"><span class="mytnc_title">{title}</span><div class="mytnc_img"><img onload="resizeImg(this,234,172,\'.view\')"  src="{pic}"></div><div class="view_text mytnc_text"><p>{describe}</p></div></a>'	
		},{
			'url':'withtnc',
			'tpl':'<a href="javascript:;" data-url="{link}" class="view_a active_a" title="{title}"><span class="mytnc_title">{title}</span><div class="mytnc_img"><img onload="resizeImg(this,234,172,\'.view\')"  src="{pic}"></div><div class="view_text mytnc_text"><p>{describe}</p></div></a>'	
		}];
		/*,{
			'url':'lib',
			'tpl':'<li class="view_li"><a href="javascript:;" data-url="{link}" class="view_a active_a" title="{title}"><span class="active_title">{title}</span><div class="active_img"><img onload="resizeImg(this,234,172,\'.view\')"  src="{pic}"></div><div class="view_text active_text"><p>{describe}</p></div></a></li>'	
		}*/
var _URL = {
	'schedule':['/home/pageSchedule?type=1',''],//项目进度
	'news':['/home/pageNews',''],//媒体报道
	'worldschedule':['/home/pageSchedule?type=2',''],//全球项目进度
	'story':['/home/pageStory',''],//图片故事
	'video':['/home/pageVideo',''],//影像记录
	'card':['/home/pageCard',''],//自然贺卡
	'q&a':['/home/pageAsk',''],//每周一问
	'join':['/home/pageActivity',''],
	'withtnc':['/home/pageItnc',''],
	'logout':['/home/logout','']
};
var _IFRAME = {
	tncMore:{view:'了解TNC',link:'/home/more/1'},
	tncChina:{view:'TNC在中国',sec:'查看更多',link:'/home/tncmore'},
	tncWorld:{view:'TNC在全球',sec:'查看更多',link:'/home/more/39'},
	tncPlace:{view:'保护地',sec:'查看更多',link:'/home/more/41'},
	tncWater:{view:'淡水',sec:'查看更多',link:'/home/more/25'},
	tncFunc:{view:'保护科学',sec:'查看更多',link:'/home/more/11'},
	newpro:{view:'了解TNC',sec:'最新项目',link:'/home/latest',ul:'#fea_china'},
	oldpro:{view:'了解TNC',sec:'以往项目',link:'/home/past',ul:'#fea_china'},
	team:{view:'了解TNC',sec:'认识我们',link:'/home/aboutUs',ul:'#fea_china'},
	tncNA:{view:'TNC在全球',sec:'TNC在北美洲',link:'/home/more/52',ul:'#fea_world'},
	tncEU:{view:'TNC在全球',sec:'TNC在欧洲',link:'/home/more/53',ul:'#fea_world'},
	tncNAsia:{view:'TNC在全球',sec:'TNC在亚太',link:'/home/more/54',ul:'#fea_world'},
	tncCSea:{view:'TNC在全球',sec:'TNC在加勒比海',link:'/home/more/55',ul:'#fea_world'},
	tncCA:{view:'TNC在全球',sec:'TNC在中美洲',link:'/home/more/55',ul:'#fea_world'},
	tncAF:{view:'TNC在全球',sec:'TNC在非洲',link:'/home/more/56',ul:'#fea_world'},
	tncSA:{view:'TNC在全球',sec:'TNC在中南美洲',link:'/home/more/55',ul:'#fea_world'},
	tncAsia:{view:'TNC在全球',sec:'TNC在亚太区',link:'/home/more/54',ul:'#fea_world'},
	schedule:{view:'项目进度'},
	worldschedule:{view:'全球项目进度'},
	news:{view:'媒体报道'},
	story:{view:'图片故事'},
	video:{view:'影像记录'},
	card:{view:'自然贺卡'},
	'q&a':{view:'有问有答'},
	'lib':{view:'TNC阅览室'},
	'join':{view:'我要参与'},
	'withtnc':{view:'志愿者故事'},
	'message':{view:'我要留言'},
	'user':{view:'修改资料'},
	'hr':{view:'工作机会',link:'/home/hr'},
	/*'itnc':{view:'我与TNC',link:'/home/itnc'},*/
	'partner':{view:'合作伙伴',link:'/home/more/49'},
	'declare':{view:'法律声明',link:'/home/more/50'},
	'contact':{view:'联系我们',link:'/home/more/51'},
	'feeback':{view:'问题反馈',link:'http://tnc.org.cn/feedback.html'}
};
var _P = {1915:{x:262,y:343},1917:{x:194,y:366,r:true},1926:{x:335,y:395},1946:{x:215,y:430,r:true},1950:{x:302,y:462},1951:{x:306,y:506,r:true},1954:{x:424,y:527},1955:{x:390,y:560,r:true},1961:{x:483,y:576},1965:{x:409,y:610,r:true},1966:{x:494,y:650},1970:{x:417,y:691,r:true},1974:{x:471,y:716},1980:{x:335,y:729,r:true},1988:{x:424,y:761},1989:{x:291,y:775,r:true},1990:{x:342,y:833},1991:{x:246,y:867,r:true},1994:{x:357,y:902},1995:{x:352,y:949,r:true},1998:{x:518,y:959},1999:{x:459,y:1001,r:true},2000:{x:627,y:1027},2001:{x:615,y:1081,r:true},2002:{x:878,y:1112},2003:{x:741,y:1151},2004:{x:559,y:1167,r:true},2005:{x:626,y:1204},2006:{x:522,y:1219,r:true},2007:{x:552,y:1256},2008:{x:421,y:1277,r:true},2009:{x:543,y:1327},2010:{x:478,y:1365,r:true},2011:{x:680,y:1393},2012:{x:644,y:1430,r:true},2013:{x:747,y:1464}};

/*baidu tongji*/

$(document).ready(function(e){$f.init();})

})(jQuery);

