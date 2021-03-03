module.exports=function(e){"use strict";var t=e("html"),i=e(window),n=e(document),o=e.fancybox=function(){o.open.apply(this,arguments)},a=navigator.userAgent.match(/msie/i),r=null,s=void 0!==document.createTouch,l=function(t){return t&&t.hasOwnProperty&&t instanceof e},c=function(t){return t&&"string"===e.type(t)},d=function(e){return c(e)&&e.indexOf("%")>0},p=function(e,t){var i=parseInt(e,10)||0;return t&&d(e)&&(i=o.getViewport()[t]/100*i),Math.ceil(i)},h=function(e,t){return p(e,t)+"px"};e.extend(o,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(a?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',loading:'<div id="fancybox-loading"><div></div></div>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:e.noop,beforeLoad:e.noop,afterLoad:e.noop,beforeShow:e.noop,afterShow:e.noop,beforeChange:e.noop,beforeClose:e.noop,afterClose:e.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(t,i){if(t&&(e.isPlainObject(i)||(i={}),!1!==o.close(!0)))return e.isArray(t)||(t=l(t)?e(t).get():[t]),e.each(t,function(n,a){var r,s,d,p,h,f,u,g={};"object"===e.type(a)&&(a.nodeType&&(a=e(a)),l(a)?(g={href:a.data("fancybox-href")||a.attr("href"),title:e("<div/>").text(a.data("fancybox-title")||a.attr("title")||"").html(),isDom:!0,element:a},e.metadata&&e.extend(!0,g,a.metadata())):g=a),r=i.href||g.href||(c(a)?a:null),s=void 0!==i.title?i.title:g.title||"",!(p=(d=i.content||g.content)?"html":i.type||g.type)&&g.isDom&&((p=a.data("fancybox-type"))||(p=(h=a.prop("class").match(/fancybox\.(\w+)/))?h[1]:null)),c(r)&&(p||(o.isImage(r)?p="image":o.isSWF(r)?p="swf":"#"===r.charAt(0)?p="inline":c(a)&&(p="html",d=a)),"ajax"===p&&(r=(f=r.split(/\s+/,2)).shift(),u=f.shift())),d||("inline"===p?r?d=e(c(r)?r.replace(/.*(?=#[^\s]+$)/,""):r):g.isDom&&(d=a):"html"===p?d=r:p||r||!g.isDom||(p="inline",d=a)),e.extend(g,{href:r,type:p,content:d,title:s,selector:u}),t[n]=g}),o.opts=e.extend(!0,{},o.defaults,i),void 0!==i.keys&&(o.opts.keys=!!i.keys&&e.extend({},o.defaults.keys,i.keys)),o.group=t,o._start(o.opts.index)},cancel:function(){var e=o.coming;e&&!1===o.trigger("onCancel")||(o.hideLoading(),e&&(o.ajaxLoad&&o.ajaxLoad.abort(),o.ajaxLoad=null,o.imgPreload&&(o.imgPreload.onload=o.imgPreload.onerror=null),e.wrap&&e.wrap.stop(!0,!0).trigger("onReset").remove(),o.coming=null,o.current||o._afterZoomOut(e)))},close:function(t){o.cancel(),!1!==o.trigger("beforeClose")&&(o.unbindEvents(),o.isActive&&(o.isOpen&&!0!==t?(o.isOpen=o.isOpened=!1,o.isClosing=!0,e(".fancybox-item, .fancybox-nav").remove(),o.wrap.stop(!0,!0).removeClass("fancybox-opened"),o.transitions[o.current.closeMethod]()):(e(".fancybox-wrap").stop(!0).trigger("onReset").remove(),o._afterZoomOut())))},play:function(e){var t=function(){clearTimeout(o.player.timer)},i=function(){t(),o.current&&o.player.isActive&&(o.player.timer=setTimeout(o.next,o.current.playSpeed))},a=function(){t(),n.unbind(".player"),o.player.isActive=!1,o.trigger("onPlayEnd")};!0===e||!o.player.isActive&&!1!==e?o.current&&(o.current.loop||o.current.index<o.group.length-1)&&(o.player.isActive=!0,n.bind({"onCancel.player beforeClose.player":a,"onUpdate.player":i,"beforeLoad.player":t}),i(),o.trigger("onPlayStart")):a()},next:function(e){var t=o.current;t&&(c(e)||(e=t.direction.next),o.jumpto(t.index+1,e,"next"))},prev:function(e){var t=o.current;t&&(c(e)||(e=t.direction.prev),o.jumpto(t.index-1,e,"prev"))},jumpto:function(e,t,i){var n=o.current;n&&(e=p(e),o.direction=t||n.direction[e>=n.index?"next":"prev"],o.router=i||"jumpto",n.loop&&(e<0&&(e=n.group.length+e%n.group.length),e%=n.group.length),void 0!==n.group[e]&&(o.cancel(),o._start(e)))},reposition:function(t,i){var n,a=o.current,r=a?a.wrap:null;r&&(n=o._getPosition(i),t&&"scroll"===t.type?(delete n.position,r.stop(!0,!0).animate(n,200)):(r.css(n),a.pos=e.extend({},a.dim,n)))},update:function(e){var t=e&&e.originalEvent&&e.originalEvent.type,i=!t||"orientationchange"===t;i&&(clearTimeout(r),r=null),o.isOpen&&!r&&(r=setTimeout(function(){var n=o.current;n&&!o.isClosing&&(o.wrap.removeClass("fancybox-tmp"),(i||"load"===t||"resize"===t&&n.autoResize)&&o._setDimension(),"scroll"===t&&n.canShrink||o.reposition(e),o.trigger("onUpdate"),r=null)},i&&!s?0:300))},toggle:function(t){o.isOpen&&(o.current.fitToView="boolean"===e.type(t)?t:!o.current.fitToView,s&&(o.wrap.removeAttr("style").addClass("fancybox-tmp"),o.trigger("onUpdate")),o.update())},hideLoading:function(){n.unbind(".loading"),e("#fancybox-loading").remove()},showLoading:function(){var t,i;o.hideLoading(),t=e(o.opts.tpl.loading).click(o.cancel).appendTo("body"),n.bind("keydown.loading",function(e){27===(e.which||e.keyCode)&&(e.preventDefault(),o.cancel())}),o.defaults.fixed||(i=o.getViewport(),t.css({position:"absolute",top:.5*i.h+i.y,left:.5*i.w+i.x})),o.trigger("onLoading")},getViewport:function(){var e=o.current&&o.current.locked||!1,t={x:i.scrollLeft(),y:i.scrollTop()};return e&&e.length?(t.w=e[0].clientWidth,t.h=e[0].clientHeight):(t.w=s&&window.innerWidth?window.innerWidth:i.width(),t.h=s&&window.innerHeight?window.innerHeight:i.height()),t},unbindEvents:function(){o.wrap&&l(o.wrap)&&o.wrap.unbind(".fb"),n.unbind(".fb"),i.unbind(".fb")},bindEvents:function(){var t,a=o.current;a&&(i.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),o.update),(t=a.keys)&&n.bind("keydown.fb",function(i){var n=i.which||i.keyCode,r=i.target||i.srcElement;if(27===n&&o.coming)return!1;i.ctrlKey||i.altKey||i.shiftKey||i.metaKey||r&&(r.type||e(r).is("[contenteditable]"))||e.each(t,function(t,r){return a.group.length>1&&void 0!==r[n]?(o[t](r[n]),i.preventDefault(),!1):e.inArray(n,r)>-1?(o[t](),i.preventDefault(),!1):void 0})}),e.fn.mousewheel&&a.mouseWheel&&o.wrap.bind("mousewheel.fb",function(t,i,n,r){for(var s,l=t.target||null,c=e(l),d=!1;c.length&&!(d||c.is(".fancybox-skin")||c.is(".fancybox-wrap"));)d=(s=c[0])&&!(s.style.overflow&&"hidden"===s.style.overflow)&&(s.clientWidth&&s.scrollWidth>s.clientWidth||s.clientHeight&&s.scrollHeight>s.clientHeight),c=e(c).parent();0===i||d||o.group.length>1&&!a.canShrink&&(r>0||n>0?o.prev(r>0?"down":"left"):(r<0||n<0)&&o.next(r<0?"up":"right"),t.preventDefault())}))},trigger:function(t,i){var a,r=i||o.coming||o.current;if(r){if(e.isFunction(r[t])&&(a=r[t].apply(r,Array.prototype.slice.call(arguments,1))),!1===a)return!1;r.helpers&&e.each(r.helpers,function(i,n){n&&o.helpers[i]&&e.isFunction(o.helpers[i][t])&&o.helpers[i][t](e.extend(!0,{},o.helpers[i].defaults,n),r)})}n.trigger(t)},isImage:function(e){return c(e)&&e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(e){return c(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(t){var i,n,a,r,l,c={};if(t=p(t),!(i=o.group[t]||null))return!1;if(r=(c=e.extend(!0,{},o.opts,i)).margin,l=c.padding,"number"===e.type(r)&&(c.margin=[r,r,r,r]),"number"===e.type(l)&&(c.padding=[l,l,l,l]),c.modal&&e.extend(!0,c,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),c.autoSize&&(c.autoWidth=c.autoHeight=!0),"auto"===c.width&&(c.autoWidth=!0),"auto"===c.height&&(c.autoHeight=!0),c.group=o.group,c.index=t,o.coming=c,!1!==o.trigger("beforeLoad")){if(a=c.type,n=c.href,!a)return o.coming=null,!(!o.current||!o.router||"jumpto"===o.router)&&(o.current.index=t,o[o.router](o.direction));if(o.isActive=!0,"image"!==a&&"swf"!==a||(c.autoHeight=c.autoWidth=!1,c.scrolling="visible"),"image"===a&&(c.aspectRatio=!0),"iframe"===a&&s&&(c.scrolling="scroll"),c.wrap=e(c.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+a+" fancybox-tmp "+c.wrapCSS).appendTo(c.parent||"body"),e.extend(c,{skin:e(".fancybox-skin",c.wrap),outer:e(".fancybox-outer",c.wrap),inner:e(".fancybox-inner",c.wrap)}),e.each(["Top","Right","Bottom","Left"],function(e,t){c.skin.css("padding"+t,h(c.padding[e]))}),o.trigger("onReady"),"inline"===a||"html"===a){if(!c.content||!c.content.length)return o._error("content")}else if(!n)return o._error("href");"image"===a?o._loadImage():"ajax"===a?o._loadAjax():"iframe"===a?o._loadIframe():o._afterLoad()}else o.coming=null},_error:function(t){e.extend(o.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:t,content:o.coming.tpl.error}),o._afterLoad()},_loadImage:function(){var e=o.imgPreload=new Image;e.onload=function(){this.onload=this.onerror=null,o.coming.width=this.width/o.opts.pixelRatio,o.coming.height=this.height/o.opts.pixelRatio,o._afterLoad()},e.onerror=function(){this.onload=this.onerror=null,o._error("image")},e.src=o.coming.href,!0!==e.complete&&o.showLoading()},_loadAjax:function(){var t=o.coming;o.showLoading(),o.ajaxLoad=e.ajax(e.extend({},t.ajax,{url:t.href,error:function(e,t){o.coming&&"abort"!==t?o._error("ajax",e):o.hideLoading()},success:function(e,i){"success"===i&&(t.content=e,o._afterLoad())}}))},_loadIframe:function(){var t=o.coming,i=e(t.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":t.iframe.scrolling).attr("src",t.href);e(t.wrap).bind("onReset",function(){try{e(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}}),t.iframe.preload&&(o.showLoading(),i.one("load",function(){e(this).data("ready",1),s||e(this).bind("load.fb",o.update),e(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),o._afterLoad()})),t.content=i.appendTo(t.inner),t.iframe.preload||o._afterLoad()},_preloadImages:function(){var e,t,i=o.group,n=o.current,a=i.length,r=n.preload?Math.min(n.preload,a-1):0;for(t=1;t<=r;t+=1)"image"===(e=i[(n.index+t)%a]).type&&e.href&&((new Image).src=e.href)},_afterLoad:function(){var t,i,n,a,r,s,c=o.coming,d=o.current,p="fancybox-placeholder";if(o.hideLoading(),c&&!1!==o.isActive){if(!1===o.trigger("afterLoad",c,d))return c.wrap.stop(!0).trigger("onReset").remove(),void(o.coming=null);switch(d&&(o.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),o.unbindEvents(),t=c,i=c.content,n=c.type,a=c.scrolling,e.extend(o,{wrap:t.wrap,skin:t.skin,outer:t.outer,inner:t.inner,current:t,previous:d}),r=t.href,n){case"inline":case"ajax":case"html":t.selector?i=e("<div>").html(i).find(t.selector):l(i)&&(i.data(p)||i.data(p,e('<div class="'+p+'"></div>').insertAfter(i).hide()),i=i.show().detach(),t.wrap.bind("onReset",function(){e(this).find(i).length&&i.hide().replaceAll(i.data(p)).data(p,!1)}));break;case"image":i=t.tpl.image.replace(/\{href\}/g,r);break;case"swf":i='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+r+'"></param>',s="",e.each(t.swf,function(e,t){i+='<param name="'+e+'" value="'+t+'"></param>',s+=" "+e+'="'+t+'"'}),i+='<embed src="'+r+'" type="application/x-shockwave-flash" width="100%" height="100%"'+s+"></embed></object>"}l(i)&&i.parent().is(t.inner)||t.inner.append(i),o.trigger("beforeShow"),t.inner.css("overflow","yes"===a?"scroll":"no"===a?"hidden":a),o._setDimension(),o.reposition(),o.isOpen=!1,o.coming=null,o.bindEvents(),o.isOpened?d.prevMethod&&o.transitions[d.prevMethod]():e(".fancybox-wrap").not(t.wrap).stop(!0).trigger("onReset").remove(),o.transitions[o.isOpened?t.nextMethod:t.openMethod](),o._preloadImages()}},_setDimension:function(){var t,i,n,a,r,s,l,c,f,u,g,m,y,x,v,w,b,k=o.getViewport(),C=0,O=o.wrap,W=o.skin,_=o.inner,S=o.current,T=S.width,E=S.height,L=S.minWidth,H=S.minHeight,P=S.maxWidth,R=S.maxHeight,j=S.scrolling,M=S.scrollOutside?S.scrollbarWidth:0,A=S.margin,I=p(A[1]+A[3]),D=p(A[0]+A[2]);if(O.add(W).add(_).width("auto").height("auto").removeClass("fancybox-tmp"),r=I+(n=p(W.outerWidth(!0)-W.width())),s=D+(a=p(W.outerHeight(!0)-W.height())),l=d(T)?(k.w-r)*p(T)/100:T,c=d(E)?(k.h-s)*p(E)/100:E,"iframe"===S.type){if(w=S.content,S.autoHeight&&1===w.data("ready"))try{w[0].contentWindow.document.location&&(_.width(l).height(9999),b=w.contents().find("body"),M&&b.css("overflow-x","hidden"),c=b.outerHeight(!0))}catch(e){}}else(S.autoWidth||S.autoHeight)&&(_.addClass("fancybox-tmp"),S.autoWidth||_.width(l),S.autoHeight||_.height(c),S.autoWidth&&(l=_.width()),S.autoHeight&&(c=_.height()),_.removeClass("fancybox-tmp"));if(T=p(l),E=p(c),g=l/c,L=p(d(L)?p(L,"w")-r:L),P=p(d(P)?p(P,"w")-r:P),H=p(d(H)?p(H,"h")-s:H),f=P,u=R=p(d(R)?p(R,"h")-s:R),S.fitToView&&(P=Math.min(k.w-r,P),R=Math.min(k.h-s,R)),x=k.w-I,v=k.h-D,S.aspectRatio?(T>P&&(E=p((T=P)/g)),E>R&&(T=p((E=R)*g)),T<L&&(E=p((T=L)/g)),E<H&&(T=p((E=H)*g))):(T=Math.max(L,Math.min(T,P)),S.autoHeight&&"iframe"!==S.type&&(_.width(T),E=_.height()),E=Math.max(H,Math.min(E,R))),S.fitToView)if(_.width(T).height(E),O.width(T+n),m=O.width(),y=O.height(),S.aspectRatio)for(;(m>x||y>v)&&T>L&&E>H&&!(C++>19);)E=Math.max(H,Math.min(R,E-10)),(T=p(E*g))<L&&(E=p((T=L)/g)),T>P&&(E=p((T=P)/g)),_.width(T).height(E),O.width(T+n),m=O.width(),y=O.height();else T=Math.max(L,Math.min(T,T-(m-x))),E=Math.max(H,Math.min(E,E-(y-v)));M&&"auto"===j&&E<c&&T+n+M<x&&(T+=M),_.width(T).height(E),O.width(T+n),m=O.width(),y=O.height(),t=(m>x||y>v)&&T>L&&E>H,i=S.aspectRatio?T<f&&E<u&&T<l&&E<c:(T<f||E<u)&&(T<l||E<c),e.extend(S,{dim:{width:h(m),height:h(y)},origWidth:l,origHeight:c,canShrink:t,canExpand:i,wPadding:n,hPadding:a,wrapSpace:y-W.outerHeight(!0),skinSpace:W.height()-E}),!w&&S.autoHeight&&E>H&&E<R&&!i&&_.height("auto")},_getPosition:function(e){var t=o.current,i=o.getViewport(),n=t.margin,a=o.wrap.width()+n[1]+n[3],r=o.wrap.height()+n[0]+n[2],s={position:"absolute",top:n[0],left:n[3]};return t.autoCenter&&t.fixed&&!e&&r<=i.h&&a<=i.w?s.position="fixed":t.locked||(s.top+=i.y,s.left+=i.x),s.top=h(Math.max(s.top,s.top+(i.h-r)*t.topRatio)),s.left=h(Math.max(s.left,s.left+(i.w-a)*t.leftRatio)),s},_afterZoomIn:function(){var t=o.current;t&&(o.isOpen=o.isOpened=!0,o.wrap.css("overflow","visible").addClass("fancybox-opened").hide().show(0),o.update(),(t.closeClick||t.nextClick&&o.group.length>1)&&o.inner.css("cursor","pointer").bind("click.fb",function(i){e(i.target).is("a")||e(i.target).parent().is("a")||(i.preventDefault(),o[t.closeClick?"close":"next"]())}),t.closeBtn&&e(t.tpl.closeBtn).appendTo(o.skin).bind("click.fb",function(e){e.preventDefault(),o.close()}),t.arrows&&o.group.length>1&&((t.loop||t.index>0)&&e(t.tpl.prev).appendTo(o.outer).bind("click.fb",o.prev),(t.loop||t.index<o.group.length-1)&&e(t.tpl.next).appendTo(o.outer).bind("click.fb",o.next)),o.trigger("afterShow"),t.loop||t.index!==t.group.length-1?o.opts.autoPlay&&!o.player.isActive&&(o.opts.autoPlay=!1,o.play(!0)):o.play(!1))},_afterZoomOut:function(t){t=t||o.current,e(".fancybox-wrap").trigger("onReset").remove(),e.extend(o,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),o.trigger("afterClose",t)}}),o.transitions={getOrigPosition:function(){var e=o.current,t=e.element,i=e.orig,n={},a=50,r=50,s=e.hPadding,c=e.wPadding,d=o.getViewport();return!i&&e.isDom&&t.is(":visible")&&((i=t.find("img:first")).length||(i=t)),l(i)?(n=i.offset(),i.is("img")&&(a=i.outerWidth(),r=i.outerHeight())):(n.top=d.y+(d.h-r)*e.topRatio,n.left=d.x+(d.w-a)*e.leftRatio),("fixed"===o.wrap.css("position")||e.locked)&&(n.top-=d.y,n.left-=d.x),n={top:h(n.top-s*e.topRatio),left:h(n.left-c*e.leftRatio),width:h(a+c),height:h(r+s)}},step:function(e,t){var i,n,a=t.prop,r=o.current,s=r.wrapSpace,l=r.skinSpace;"width"!==a&&"height"!==a||(i=t.end===t.start?1:(e-t.start)/(t.end-t.start),o.isClosing&&(i=1-i),n=e-("width"===a?r.wPadding:r.hPadding),o.skin[a](p("width"===a?n:n-s*i)),o.inner[a](p("width"===a?n:n-s*i-l*i)))},zoomIn:function(){var t=o.current,i=t.pos,n=t.openEffect,a="elastic"===n,r=e.extend({opacity:1},i);delete r.position,a?(i=this.getOrigPosition(),t.openOpacity&&(i.opacity=.1)):"fade"===n&&(i.opacity=.1),o.wrap.css(i).animate(r,{duration:"none"===n?0:t.openSpeed,easing:t.openEasing,step:a?this.step:null,complete:o._afterZoomIn})},zoomOut:function(){var e=o.current,t=e.closeEffect,i="elastic"===t,n={opacity:.1};i&&(n=this.getOrigPosition(),e.closeOpacity&&(n.opacity=.1)),o.wrap.animate(n,{duration:"none"===t?0:e.closeSpeed,easing:e.closeEasing,step:i?this.step:null,complete:o._afterZoomOut})},changeIn:function(){var e,t=o.current,i=t.nextEffect,n=t.pos,a={opacity:1},r=o.direction;n.opacity=.1,"elastic"===i&&(e="down"===r||"up"===r?"top":"left","down"===r||"right"===r?(n[e]=h(p(n[e])-200),a[e]="+=200px"):(n[e]=h(p(n[e])+200),a[e]="-=200px")),"none"===i?o._afterZoomIn():o.wrap.css(n).animate(a,{duration:t.nextSpeed,easing:t.nextEasing,complete:o._afterZoomIn})},changeOut:function(){var t=o.previous,i=t.prevEffect,n={opacity:.1},a=o.direction;"elastic"===i&&(n["down"===a||"up"===a?"top":"left"]=("up"===a||"left"===a?"-":"+")+"=200px"),t.wrap.animate(n,{duration:"none"===i?0:t.prevSpeed,easing:t.prevEasing,complete:function(){e(this).trigger("onReset").remove()}})}},o.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:e("html"),create:function(t){var i;t=e.extend({},this.defaults,t),this.overlay&&this.close(),i=o.coming?o.coming.parent:t.parent,this.overlay=e('<div class="fancybox-overlay"></div>').appendTo(i&&i.length?i:"body"),this.fixed=!1,t.fixed&&o.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(t){var n=this;t=e.extend({},this.defaults,t),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(t),this.fixed||(i.bind("resize.overlay",e.proxy(this.update,this)),this.update()),t.closeClick&&this.overlay.bind("click.overlay",function(t){if(e(t.target).hasClass("fancybox-overlay"))return o.isActive?o.close():n.close(),!1}),this.overlay.css(t.css).show()},close:function(){i.unbind("resize.overlay"),this.el.hasClass("fancybox-lock")&&(e(".fancybox-margin").removeClass("fancybox-margin"),this.el.removeClass("fancybox-lock"),i.scrollTop(this.scrollV).scrollLeft(this.scrollH)),e(".fancybox-overlay").remove().hide(),e.extend(this,{overlay:null,fixed:!1})},update:function(){var e,t="100%";this.overlay.width(t).height("100%"),a?(e=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth),n.width()>e&&(t=n.width())):n.width()>i.width()&&(t=n.width()),this.overlay.width(t).height(n.height())},onReady:function(t,i){var n=this.overlay;e(".fancybox-overlay").stop(!0,!0),n||this.create(t),t.locked&&this.fixed&&i.fixed&&(i.locked=this.overlay.append(i.wrap),i.fixed=!1),!0===t.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(t,n){n.locked&&!this.el.hasClass("fancybox-lock")&&(!1!==this.fixPosition&&e("*").filter(function(){return"fixed"===e(this).css("position")&&!e(this).hasClass("fancybox-overlay")&&!e(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin"),this.scrollV=i.scrollTop(),this.scrollH=i.scrollLeft(),this.el.addClass("fancybox-lock"),i.scrollTop(this.scrollV).scrollLeft(this.scrollH)),this.open(t)},onUpdate:function(){this.fixed||this.update()},afterClose:function(t){this.overlay&&!o.coming&&this.overlay.fadeOut(t.speedOut,e.proxy(this.close,this))}},o.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(t){var i,n,r=o.current,s=r.title,l=t.type;if(e.isFunction(s)&&(s=s.call(r.element,r)),c(s)&&""!==e.trim(s)){switch(i=e('<div class="fancybox-title fancybox-title-'+l+'-wrap">'+s+"</div>"),l){case"inside":n=o.skin;break;case"outside":n=o.wrap;break;case"over":n=o.inner;break;default:n=o.skin,i.appendTo("body"),a&&i.width(i.width()),i.wrapInner('<span class="child"></span>'),o.current.margin[2]+=Math.abs(p(i.css("margin-bottom")))}i["top"===t.position?"prependTo":"appendTo"](n)}}},e.fn.fancybox=function(t){var i,a=e(this),r=this.selector||"",s=function(n){var s,l,c=e(this).blur(),d=i;n.ctrlKey||n.altKey||n.shiftKey||n.metaKey||c.is(".fancybox-wrap")||(s=t.groupAttr||"data-fancybox-group",(l=c.attr(s))||(s="rel",l=c.get(0)[s]),l&&""!==l&&"nofollow"!==l&&(d=(c=(c=r.length?e(r):a).filter("["+s+'="'+l+'"]')).index(this)),t.index=d,!1!==o.open(c,t)&&n.preventDefault())};return i=(t=t||{}).index||0,r&&!1!==t.live?n.undelegate(r,"click.fb-start").delegate(r+":not('.fancybox-item, .fancybox-nav')","click.fb-start",s):a.unbind("click.fb-start").bind("click.fb-start",s),this.filter("[data-fancybox-start=1]").trigger("click"),this},n.ready(function(){var i,n,a,r;void 0===e.scrollbarWidth&&(e.scrollbarWidth=function(){var t=e('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),i=t.children(),n=i.innerWidth()-i.height(99).innerWidth();return t.remove(),n}),void 0===e.support.fixedPosition&&(e.support.fixedPosition=(a=e('<div style="position:fixed;top:20px;"></div>').appendTo("body"),r=20===a[0].offsetTop||15===a[0].offsetTop,a.remove(),r)),e.extend(o.defaults,{scrollbarWidth:e.scrollbarWidth(),fixed:e.support.fixedPosition,parent:e("body")}),i=e(window).width(),t.addClass("fancybox-lock-test"),n=e(window).width(),t.removeClass("fancybox-lock-test"),e("<style type='text/css'>.fancybox-margin{margin-right:"+(n-i)+"px;}</style>").appendTo("head")})};