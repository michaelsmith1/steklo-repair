!function(){var e,t,o,n,r={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},a=r,l=!1,i=!1,c={x:0,y:0},u=!1,s=document.documentElement,d=[],m=/^Mac/.test(navigator.platform),f={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},h={37:1,38:1,39:1,40:1};function w(){if(!u&&document.body){u=!0;var n=document.body,r=document.documentElement,c=window.innerHeight,d=n.scrollHeight;if(s=document.compatMode.indexOf("CSS")>=0?r:n,e=n,a.keyboardSupport&&Y("keydown",S),top!=self)i=!0;else if(Z&&d>c&&(n.offsetHeight<=c||r.offsetHeight<=c)){var m,f=document.createElement("div");f.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+s.scrollHeight+"px",document.body.appendChild(f),o=function(){m||(m=setTimeout(function(){l||(f.style.height="0",f.style.height=s.scrollHeight+"px",m=null)},500))},setTimeout(o,10),Y("resize",o);if((t=new j(o)).observe(n,{attributes:!0,childList:!0,characterData:!1}),s.offsetHeight<=c){var h=document.createElement("div");h.style.clear="both",n.appendChild(h)}}a.fixedBackground||l||(n.style.backgroundAttachment="scroll",r.style.backgroundAttachment="scroll")}}var p=[],v=!1,y=Date.now();function b(e,t,o){var n,r;if(r=o,n=(n=t)>0?1:-1,r=r>0?1:-1,(c.x!==n||c.y!==r)&&(c.x=n,c.y=r,p=[],y=0),1!=a.accelerationMax){var l=Date.now()-y;if(l<a.accelerationDelta){var i=(1+50/l)/2;i>1&&(i=Math.min(i,a.accelerationMax),t*=i,o*=i)}y=Date.now()}if(p.push({x:t,y:o,lastX:t<0?.99:-.99,lastY:o<0?.99:-.99,start:Date.now()}),!v){var u=q(),s=e===u||e===document.body;null==e.$scrollBehavior&&function(e){var t=M(e);if(null==B[t]){var o=getComputedStyle(e,"")["scroll-behavior"];B[t]="smooth"==o}return B[t]}(e)&&(e.$scrollBehavior=e.style.scrollBehavior,e.style.scrollBehavior="auto");var d=function(n){for(var r=Date.now(),l=0,i=0,c=0;c<p.length;c++){var u=p[c],m=r-u.start,f=m>=a.animationTime,h=f?1:m/a.animationTime;a.pulseAlgorithm&&(h=F(h));var w=u.x*h-u.lastX>>0,y=u.y*h-u.lastY>>0;l+=w,i+=y,u.lastX+=w,u.lastY+=y,f&&(p.splice(c,1),c--)}s?window.scrollBy(l,i):(l&&(e.scrollLeft+=l),i&&(e.scrollTop+=i)),t||o||(p=[]),p.length?R(d,e,1e3/a.frameRate+1):(v=!1,null!=e.$scrollBehavior&&(e.style.scrollBehavior=e.$scrollBehavior,e.$scrollBehavior=null))};R(d,e,0),v=!0}}function g(t){u||w();var o=t.target;if(t.defaultPrevented||t.ctrlKey)return!0;if(N(e,"embed")||N(o,"embed")&&/\.pdf/i.test(o.src)||N(e,"object")||o.shadowRoot)return!0;var r=-t.wheelDeltaX||t.deltaX||0,l=-t.wheelDeltaY||t.deltaY||0;m&&(t.wheelDeltaX&&K(t.wheelDeltaX,120)&&(r=t.wheelDeltaX/Math.abs(t.wheelDeltaX)*-120),t.wheelDeltaY&&K(t.wheelDeltaY,120)&&(l=t.wheelDeltaY/Math.abs(t.wheelDeltaY)*-120)),r||l||(l=-t.wheelDelta||0),1===t.deltaMode&&(r*=40,l*=40);var c=z(o);return c?!!function(e){if(!e)return;d.length||(d=[e,e,e]);e=Math.abs(e),d.push(e),d.shift(),clearTimeout(n),n=setTimeout(function(){try{localStorage.SS_deltaBuffer=d.join(",")}catch(e){}},1e3);var t=e>120&&$(e);return!$(120)&&!$(100)&&!t}(l)||(Math.abs(r)>1.2&&(r*=a.stepSize/120),Math.abs(l)>1.2&&(l*=a.stepSize/120),b(c,r,l),t.preventDefault(),void C()):!i||!U||(Object.defineProperty(t,"target",{value:window.frameElement}),parent.wheel(t))}function S(t){var o=t.target,n=t.ctrlKey||t.altKey||t.metaKey||t.shiftKey&&t.keyCode!==f.spacebar;document.body.contains(e)||(e=document.activeElement);var r=/^(button|submit|radio|checkbox|file|color|image)$/i;if(t.defaultPrevented||/^(textarea|select|embed|object)$/i.test(o.nodeName)||N(o,"input")&&!r.test(o.type)||N(e,"video")||function(e){var t=e.target,o=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do{if(o=t.classList&&t.classList.contains("html5-video-controls"))break}while(t=t.parentNode);return o}(t)||o.isContentEditable||n)return!0;if((N(o,"button")||N(o,"input")&&r.test(o.type))&&t.keyCode===f.spacebar)return!0;if(N(o,"input")&&"radio"==o.type&&h[t.keyCode])return!0;var l=0,c=0,u=z(e);if(!u)return!i||!U||parent.keydown(t);var s=u.clientHeight;switch(u==document.body&&(s=window.innerHeight),t.keyCode){case f.up:c=-a.arrowScroll;break;case f.down:c=a.arrowScroll;break;case f.spacebar:c=-(t.shiftKey?1:-1)*s*.9;break;case f.pageup:c=.9*-s;break;case f.pagedown:c=.9*s;break;case f.home:u==document.body&&document.scrollingElement&&(u=document.scrollingElement),c=-u.scrollTop;break;case f.end:var d=u.scrollHeight-u.scrollTop-s;c=d>0?d+10:0;break;case f.left:l=-a.arrowScroll;break;case f.right:l=a.arrowScroll;break;default:return!0}b(u,l,c),t.preventDefault(),C()}function x(t){e=t.target}var k,D,M=(k=0,function(e){return e.uniqueID||(e.uniqueID=k++)}),E={},T={},B={};function C(){clearTimeout(D),D=setInterval(function(){E=T=B={}},1e3)}function H(e,t,o){for(var n=o?E:T,r=e.length;r--;)n[M(e[r])]=t;return t}function z(e){var t=[],o=document.body,n=s.scrollHeight;do{var r=(!1?E:T)[M(e)];if(r)return H(t,r);if(t.push(e),n===e.scrollHeight){var a=O(s)&&O(o)||X(s);if(i&&L(s)||!i&&a)return H(t,q())}else if(L(e)&&X(e))return H(t,e)}while(e=e.parentElement)}function L(e){return e.clientHeight+10<e.scrollHeight}function O(e){return"hidden"!==getComputedStyle(e,"").getPropertyValue("overflow-y")}function X(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function Y(e,t){window.addEventListener(e,t,!1)}function A(e,t){window.removeEventListener(e,t,!1)}function N(e,t){return e&&(e.nodeName||"").toLowerCase()===t.toLowerCase()}if(window.localStorage&&localStorage.SS_deltaBuffer)try{d=localStorage.SS_deltaBuffer.split(",")}catch(e){}function K(e,t){return Math.floor(e/t)==e/t}function $(e){return K(d[0],e)&&K(d[1],e)&&K(d[2],e)}var P,R=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)},j=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,q=(P=document.scrollingElement,function(){if(!P){var e=document.createElement("div");e.style.cssText="height:10000px;width:1px;",document.body.appendChild(e);var t=document.body.scrollTop;document.documentElement.scrollTop,window.scrollBy(0,3),P=document.body.scrollTop!=t?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(e)}return P});function V(e){var t,o;return(e*=a.pulseScale)<1?t=e-(1-Math.exp(-e)):(e-=1,t=(o=Math.exp(-1))+(1-Math.exp(-e))*(1-o)),t*a.pulseNormalize}function F(e){return e>=1?1:e<=0?0:(1==a.pulseNormalize&&(a.pulseNormalize/=V(1)),V(e))}var I,_=window.navigator.userAgent,W=/Edge/.test(_),U=/chrome/i.test(_)&&!W,G=/safari/i.test(_)&&!W,J=/mobile/i.test(_),Q=/Windows NT 6.1/i.test(_)&&/rv:11/i.test(_),Z=G&&(/Version\/8/i.test(_)||/Version\/9/i.test(_)),ee=(U||G||Q)&&!J;function te(e){for(var t in e)r.hasOwnProperty(t)&&(a[t]=e[t])}"onwheel"in document.createElement("div")?I="wheel":"onmousewheel"in document.createElement("div")&&(I="mousewheel"),I&&ee&&(Y(I,g),Y("mousedown",x),Y("load",w)),te.destroy=function(){t&&t.disconnect(),A(I,g),A("mousedown",x),A("keydown",S),A("resize",o),A("load",w)},window.SmoothScrollOptions&&te(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define(function(){return te}):"object"==typeof exports?module.exports=te:window.SmoothScroll=te}();