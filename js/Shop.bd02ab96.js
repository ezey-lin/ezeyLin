(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Shop"],{"0fa5":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shop"},[n("transition",{attrs:{name:t.direction>0?"banner":"banner_reverse"}},[t.currentlist?n("ShopView",{key:t.currentlist.name,attrs:{currentlist:t.currentlist}}):t._e()],1),t.currentlist?n("ShopControl",{attrs:{"banner-list":t.bannerList,currentlist:t.currentlist,"current-index":t.currentIndex,"list-index":t.listIndex,direction:t.direction},on:{"update:listIndex":function(e){t.listIndex=e},"update:list-index":function(e){t.listIndex=e},"update:direction":function(e){t.direction=e}}}):t._e()],1)},i=[],c=(n("d3b7"),n("96cf"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shop_view",style:t.backgroundSrc},[n("div",{staticClass:"item_introduction"},[n("h2",[t._v("New Collection")]),n("p",[t._v(t._s(t.productContent))]),t._m(0)])])}),a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"./mall.html"}},[n("button",[t._v("Shop")])])}],u=(n("5319"),n("750b")),o={name:"ShopView",props:{currentlist:{type:Object,required:!0}},setup:function(t){var e=Object(u["a"])((function(){var e=t.currentlist.src[1];return{backgroundImage:"url(".concat(e,")")}})),n=Object(u["a"])((function(){var e=t.currentlist.content.replace(/<li>/g,"").replace(/<\/li>/g,"\n");return e}));return{backgroundSrc:e,productContent:n}}},s=o,l=(n("25b5"),n("2877")),f=Object(l["a"])(s,c,a,!1,null,null,null),d=f.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shop_control"},[r("div",{staticClass:"item_img"},[r("transition",{attrs:{name:t.direction>0?"slider_banner":"slider_banner_reverse"}},[r("img",{key:t.currentlist.name,attrs:{src:t.backgroundSrc,alt:"item"}})])],1),r("div",{staticClass:"control"},[r("div",{staticClass:"control_dots"},[r("div",{staticClass:"info"},[r("svg",{attrs:{height:"50",width:"60"}},[r("text",{attrs:{x:"50%",y:"50%"}},[t._v(t._s(t.currentIndex<10?"0"+(t.currentIndex+1):t.currentIndex))])]),r("p",[t._v(t._s(t.currentlist.name))])]),r("div",{staticClass:"dots"},t._l(t.bannerList,(function(e,n){return r("span",{key:e.name,class:{active:n===t.currentIndex},on:{click:function(e){t.index=n}}})})),0)]),r("div",{staticClass:"control_btn"},[r("button",{on:{click:function(e){t.index++}}},[r("img",{attrs:{src:n("4e5c"),alt:"right"}}),r("img",{attrs:{src:n("ef52"),alt:"right"}})]),r("button",{on:{click:function(e){t.index--}}},[r("img",{attrs:{src:n("a78c"),alt:"left"}}),r("img",{attrs:{src:n("15c0"),alt:"left"}})])])])])},v=[],h=(n("a9e3"),{name:"ShopControl",props:{bannerList:{type:Array,required:!0},currentIndex:{type:Number,required:!0},currentlist:{type:Object,required:!0},listIndex:{type:Number,required:!0},direction:{type:Number,required:!0}},setup:function(t,e){var n=e.emit,r=Object(u["f"])(!1),i=Object(u["f"])(null),c=Object(u["f"])(null),a=Object(u["a"])({get:function(){return t.listIndex},set:function(e){r.value||(n("update:direction",t.listIndex-e),e=(e+t.bannerList.length)%t.bannerList.length,n("update:listIndex",e),l()),r.value=!0}}),o=Object(u["a"])((function(){return t.currentlist.src[2]})),s=function(){f(i.value),i.value=setTimeout((function(){r.value=!1}),1200)},l=function(){f(c.value),c.value=setTimeout((function(){a.value++}),5e3)},f=function(t){return clearTimeout(t)};return Object(u["g"])(r,(function(t){t&&s()})),Object(u["e"])((function(){return l()})),Object(u["c"])((function(){return l()})),Object(u["d"])((function(){return f(c.value)})),{index:a,backgroundSrc:o}}}),b=h,g=(n("50e0"),Object(l["a"])(b,p,v,!1,null,null,null)),x=g.exports,m={name:"Shop",components:{ShopView:d,ShopControl:x},setup:function(){var t=Object(u["f"])(null),e=Object(u["f"])(0),n=Object(u["f"])(0),r=Object(u["a"])((function(){return t.value?e.value%t.value.length:0})),i=Object(u["a"])((function(){return t.value?t.value[r.value]:null}));return Object(u["e"])((function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(fetch("./php/mall/getMallAd.php").then((function(t){return t.json()})).then((function(t){if("success"===t.status)return t.data})).catch((function(t){return console.log(t)})));case 2:t.value=e.sent;case 3:case"end":return e.stop()}}))})),{bannerList:t,listIndex:e,currentIndex:r,currentlist:i,direction:n}}},I=m,_=(n("a6b9"),Object(l["a"])(I,r,i,!1,null,null,null));e["default"]=_.exports},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var c=n.call(t,e);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},2140:function(t,e,n){},"25b5":function(t,e,n){"use strict";var r=n("2140"),i=n.n(r);i.a},"50e0":function(t,e,n){"use strict";var r=n("972b"),i=n.n(r);i.a},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),c=n("7b0b"),a=n("50c4"),u=n("a691"),o=n("1d80"),s=n("8aa5"),l=n("14c3"),f=Math.max,d=Math.min,p=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,b=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n){return[function(n,r){var i=o(this),c=void 0==n?void 0:n[t];return void 0!==c?c.call(n,i,r):e.call(String(i),n,r)},function(t,c){var o=n(e,t,this,c);if(o.done)return o.value;var p=i(t),v=String(this),h="function"===typeof c;h||(c=String(c));var g=p.global;if(g){var x=p.unicode;p.lastIndex=0}var m=[];while(1){var I=l(p,v);if(null===I)break;if(m.push(I),!g)break;var _=String(I[0]);""===_&&(p.lastIndex=s(v,a(p.lastIndex),x))}for(var y="",S=0,E=0;E<m.length;E++){I=m[E];for(var O=String(I[0]),j=f(d(u(I.index),v.length),0),N=[],w=1;w<I.length;w++)N.push(b(I[w]));var C=I.groups;if(h){var k=[O].concat(N,j,v);void 0!==C&&k.push(C);var A=String(c.apply(void 0,k))}else A=r(O,v,j,N,C,c);j>=S&&(y+=v.slice(S,j)+A,S=j+O.length)}return y+v.slice(S)}];function r(t,n,r,i,a,u){var o=r+t.length,s=i.length,l=h;return void 0!==a&&(a=c(a),l=v),e.call(u,l,(function(e,c){var u;switch(c.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(o);case"<":u=a[c.slice(1,-1)];break;default:var l=+c;if(0===l)return e;if(l>s){var f=p(l/10);return 0===f?e:f<=s?void 0===i[f-1]?c.charAt(1):i[f-1]+c.charAt(1):e}u=i[l-1]}return void 0===u?"":u}))}}))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),i=n("5899"),c="["+i+"]",a=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),o=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(u,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},"63c3":function(t,e,n){},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=RegExp.prototype.exec,c=String.prototype.replace,a=i,u=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),o=void 0!==/()??/.exec("")[1],s=u||o;s&&(a=function(t){var e,n,a,s,l=this;return o&&(n=new RegExp("^"+l.source+"$(?!\\s)",r.call(l))),u&&(e=l.lastIndex),a=i.call(l,t),u&&a&&(l.lastIndex=l.global?a.index+a[0].length:e),o&&a&&a.length>1&&c.call(a[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)})),a}),t.exports=a},"972b":function(t,e,n){},a6b9:function(t,e,n){"use strict";var r=n("63c3"),i=n.n(r);i.a},a9e3:function(t,e,n){"use strict";var r=n("83ab"),i=n("da84"),c=n("94ca"),a=n("6eeb"),u=n("5135"),o=n("c6b6"),s=n("7156"),l=n("c04e"),f=n("d039"),d=n("7c73"),p=n("241c").f,v=n("06cf").f,h=n("9bf2").f,b=n("58a8").trim,g="Number",x=i[g],m=x.prototype,I=o(d(m))==g,_=function(t){var e,n,r,i,c,a,u,o,s=l(t,!1);if("string"==typeof s&&s.length>2)if(s=b(s),e=s.charCodeAt(0),43===e||45===e){if(n=s.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(s.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+s}for(c=s.slice(2),a=c.length,u=0;u<a;u++)if(o=c.charCodeAt(u),o<48||o>i)return NaN;return parseInt(c,r)}return+s};if(c(g,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var y,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(I?f((function(){m.valueOf.call(n)})):o(n)!=g)?s(new x(_(e)),n,S):_(e)},E=r?p(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;E.length>O;O++)u(x,y=E[O])&&!u(S,y)&&h(S,y,v(x,y));S.prototype=m,m.constructor=S,a(i,g,S)}},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,n){"use strict";var r=n("9112"),i=n("6eeb"),c=n("d039"),a=n("b622"),u=n("9263"),o=a("species"),s=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=!c((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var d=a(t),p=!c((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),v=p&&!c((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!p||!v||"replace"===t&&!s||"split"===t&&!l){var h=/./[d],b=n(d,""[t],(function(t,e,n,r,i){return e.exec===u?p&&!i?{done:!0,value:h.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),g=b[0],x=b[1];i(String.prototype,t,g),i(RegExp.prototype,d,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)}),f&&r(RegExp.prototype[d],"sham",!0)}}}}]);