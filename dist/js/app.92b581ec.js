(function(t){function e(e){for(var s,o,a=e[0],c=e[1],u=e[2],d=0,b=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&b.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(b.length)b.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],s=!0,a=1;a<r.length;a++){var c=r[a];0!==i[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=r[0]))}return t}var s={},i={app:0},n=[];function o(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=s,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(r,s,function(e){return t[e]}.bind(null,s));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var s=r("64a9"),i=r.n(s);i.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var s=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"table"}},[r("div",{attrs:{id:"upperRows"}},[r("div",{attrs:{id:"zero"},on:{click:function(e){return t.addOther("zero")}}},[r("div",[r("div",[t._v(" 0\n          ")]),r("div",{staticClass:"winnable"},[r("div",{staticClass:"winnableNumber",attrs:{sty:""}},[t._v("\n                "+t._s(t.otherTypes.zero.winnable)+"\n              ")])]),r("div",{staticClass:"number_bet"},[r("bet",{attrs:{times:t.otherTypes.zero.coins}})],1)])]),r("div",{attrs:{id:"rows"}},t._l(t.cols,(function(e,s){return r("div",{key:s,staticClass:"col"},t._l(e,(function(e,s){return r("div",{key:s,staticClass:"number",style:t.styleForNumber(e)},[r("div",[t._v(t._s(e.number))]),r("div",{staticClass:"winnable"},[r("div",{staticClass:"winnableNumber"},[t._v("\n                "+t._s(e.winnable)+"\n              ")])]),r("div",{staticClass:"number_top"},[r("div",{staticClass:"number_full number_bet",on:{click:function(r){return t.addCoin(e,"full",r)}}},[r("bet",{attrs:{times:e.bets.full}})],1),r("div",{staticClass:"number_half number_bet",on:{click:function(r){return t.addCoin(e,"half",r)}}},[r("bet",{attrs:{times:e.bets.half}})],1),s<2?r("div",{staticClass:"number_fourth number_bet",on:{click:function(r){return t.addCoin(e,"fourth",r)}}},[r("bet",{attrs:{times:e.bets.fourth}})],1):t._e(),0==s?r("div",{staticClass:"number_sixth number_bet",on:{click:function(r){return t.addCoin(e,"sixth",r)}}},[r("bet",{attrs:{times:e.bets.sixth}})],1):t._e()])])})),0)})),0),r("div",{attrs:{id:"rowBets"}},[r("div",{staticClass:"rowField",on:{click:function(e){return t.addOther("row3",e)}}},[r("div",[t._v(" 2 in 1\n          ")]),r("div",{staticClass:"number_top"},[r("div",{staticClass:"number_bet rowBet"},[r("bet",{attrs:{times:t.otherTypes.row3.coins}})],1)])]),r("div",{staticClass:"rowField",on:{click:function(e){return t.addOther("row2",e)}}},[r("div",[t._v(" 2 in 1\n          ")]),r("div",{staticClass:"number_top"},[r("div",{staticClass:"number_bet rowBet"},[r("bet",{attrs:{times:t.otherTypes.row2.coins}})],1)])]),r("div",{staticClass:"rowField",on:{click:function(e){return t.addOther("row1",e)}}},[r("div",[t._v(" 2 in 1\n          ")]),r("div",{staticClass:"number_top"},[r("div",{staticClass:"number_bet rowBet"},[r("bet",{attrs:{times:t.otherTypes.row1.coins}})],1)])])])]),r("div",{staticClass:"lowerRows"},[r("div",{staticClass:"colField",on:{click:function(e){return t.addOther("col1",e)}}},[r("div",[t._v(" 1st 12\n        ")]),r("div",{staticClass:"number_top"},[r("div",{staticClass:"number_bet colBet"},[r("bet",{attrs:{times:t.otherTypes.col1.coins}})],1)])]),r("div",{staticClass:"colField",on:{click:function(e){return t.addOther("col2",e)}}},[r("div",[t._v(" 2nd 12\n        ")]),r("div",{staticClass:"number_top"},[r("div",{staticClass:"number_bet colBet"},[r("bet",{attrs:{times:t.otherTypes.col2.coins}})],1)])]),r("div",{staticClass:"colField",on:{click:function(e){return t.addOther("col3",e)}}},[r("div",[t._v(" 3rd 12th\n        ")]),r("div",{staticClass:"number_top"},[r("div",{staticClass:"number_bet colBet"},[r("bet",{attrs:{times:t.otherTypes.col3.coins}})],1)])]),r("div",{staticStyle:{flex:"10vw 0 0"}})]),r("div",{staticClass:"lowerRows",staticStyle:{height:"5vw"}},[r("div",{staticClass:"otherField",on:{click:function(e){return t.addOther("lower",e)}}},[r("div",[t._v("lower\n\n        ")]),r("div",{staticClass:"number_top"},[r("div",{staticClass:"number_bet otherBet"},[r("bet",{attrs:{times:t.otherTypes.lower.coins}})],1)])]),r("div",{staticClass:"otherField",on:{click:function(e){return t.addOther("odd",e)}}},[r("div",[t._v("odd\n        ")]),r("div",{staticClass:"number_top"},[r("div",{staticClass:"number_bet otherBet"},[r("bet",{attrs:{times:t.otherTypes.odd.coins}})],1)])]),r("div",{staticClass:"otherField",on:{click:function(e){return t.addOther("black",e)}}},[r("div",[t._v("black\n\n        ")]),r("div",{staticClass:"number_top"},[r("div",{staticClass:"number_bet otherBet"},[r("bet",{attrs:{times:t.otherTypes.black.coins}})],1)])]),r("div",{staticClass:"otherField",on:{click:function(e){return t.addOther("red",e)}}},[r("div",[t._v("red\n        ")]),r("div",{staticClass:"number_top"},[r("div",{staticClass:"number_bet otherBet"},[r("bet",{attrs:{times:t.otherTypes.red.coins}})],1)])]),r("div",{staticClass:"otherField",on:{click:function(e){return t.addOther("even",e)}}},[r("div",[t._v("even\n        ")]),r("div",{staticClass:"number_top"},[r("div",{staticClass:"number_bet otherBet"},[r("bet",{attrs:{times:t.otherTypes.even.coins}})],1)])]),r("div",{staticClass:"otherField",on:{click:function(e){return t.addOther("upper",e)}}},[r("div",[t._v("upper\n        ")]),r("div",{staticClass:"number_top"},[r("div",{staticClass:"number_bet otherBet"},[r("bet",{attrs:{times:t.otherTypes.upper.coins}})],1)])]),r("div",{staticStyle:{flex:"10vw 0 0"}})])]),r("div",{attrs:{id:"results"}},[r("div",[r("h2",[t._v("\n        Info:\n      ")]),r("div",[t._v(" Credits: "+t._s(t.credits))]),r("h2",[t._v(" Actions:\n      ")]),r("div",[t._v("Simulate "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.simulations,expression:"simulations"}],attrs:{type:"number"},domProps:{value:t.simulations},on:{input:function(e){e.target.composing||(t.simulations=e.target.value)}}}),t._v(" Games "),r("button",{on:{click:t.simulateN}},[t._v("Go!")])])]),t._v("\n    Profit: "+t._s(t.result.profit)),r("br"),t._v("\n\n    Profit (%): "+t._s(t.result.profit_perc)+"%"),r("br"),r("button",{on:{click:function(e){t.result.show=!t.result.show}}},[t.result.show?[t._v("Hide")]:[t._v("Show")],t._v(" Details\n    ")],2),t.result.show?r("div",[r("table",[t._m(0),t._l(t.result.history,(function(e,s){return r("tr",{key:s},[r("td",[t._v(t._s(e.before))]),r("td",[t._v(t._s(e.profit))]),r("td",[t._v(t._s(e.won))]),r("td",[t._v(t._s(e.after))]),r("td",[t._v(t._s(e.number))])])}))],2)]):t._e()])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th",[t._v("Before")]),r("th",[t._v("Profit")]),r("th",[t._v("Won")]),r("th",[t._v("After")]),r("th",[t._v("Number")])])}],o=(r("8e6e"),r("456d"),r("2fdb"),r("6762"),r("ac6a"),r("75fc")),a=r("bd86"),c=(r("20d6"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"coins"}},t._l(t.times,(function(e){return r("div",{key:e,staticClass:"coin",style:t.styleForCoin(e)})})),0)}),u=[],l={name:"coins",props:["times"],methods:{styleForCoin:function(t){return{left:2*(t-1)+"px",top:2*(t-1)+"px","z-index":10+t}}}},d=l,b=(r("cd35"),r("2877")),h=Object(b["a"])(d,c,u,!1,null,null,null),v=h.exports;function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var m={name:"app",components:{bet:v},data:function(){return{numbers:[],cols:[],bets:[],credits:5,otherTypes:{},simulations:1e3,result:{history:[],end:0,profit:0,profit_perc:0,done:!1,show:!1}}},methods:{addOther:function(t,e){var r=this.otherTypes[t],s="other-".concat(t);if(e&&(e.ctrlKey||e.altKey)&&r.coins>0){this.credits++,r.coins--;var i=this.bets.findIndex((function(t){return t.betType==s}));this.bets.splice(i,1)}else this.credits--,r.coins++,this.bets.push(f({},r,{betType:s}));this.calculateWinnable()},addCoin:function(t,e,r){var s=[t.number],i="number-".concat(t.number,"-").concat(e);if(r&&(r.ctrlKey||r.altKey)&&t.bets[e]>0){this.credits++,t.bets[e]--;var n=this.bets.findIndex((function(t){return t.betType==i}));this.bets.splice(n,1)}else{this.credits--,t.bets[e]++;var o=0;switch(e){case"full":o=36;break;case"half":s.push(Math.max(0,t.number-3)),o=18;break;case"fourth":s.push(Math.max(0,t.number-3),Math.max(0,t.number-2),Math.max(0,t.number+1)),o=9;break;case"sixth":for(var a=0;a<6;a++)s.push(Math.max(0,t.number+a-3));o=6;break}this.bets.push({numbers:s,payout:o,betType:i})}this.calculateWinnable()},styleForNumber:function(t){return{"background-color":t.color,color:"white"}},initializeOthers:function(){var t=this,e=["zero","col1","col2","col3","row1","row2","row3","upper","lower","red","black","even","odd"];e.forEach((function(e){var r,s={numbers:[],coins:0,payout:0},i=1,n=1;switch(e){case"zero":s.numbers=[0],s.payout=36,s.winnable=0;break;case"col3":i+=12;case"col2":i+=12;case"col1":for(var a=i;a<i+12;a++)s.numbers.push(a);s.payout=3;break;case"row3":n+=1;case"row2":n+=1;case"row1":console.log(n);for(a=n;a<=36;a+=3)s.numbers.push(a);s.payout=3;break;case"lower":for(a=1;a<=18;a++)s.numbers.push(a);s.payout=2;break;case"upper":for(a=19;a<=36;a++)s.numbers.push(a);s.payout=2;break;case"odd":for(a=1;a<=36;a+=2)s.numbers.push(a);s.payout=2;break;case"even":for(a=2;a<=36;a+=2)s.numbers.push(a);s.payout=2;break;case"black":case"red":(r=s.numbers).push.apply(r,Object(o["a"])(t.numbers.filter((function(t){return t.color==e})).map((function(t){return t.number})))),s.payout=2;break}t.$set(t.otherTypes,e,s)}))},calculateWinnable:function(){var t=this;this.numbers.forEach((function(e){e.winnable=t.winnableN(e.number)})),this.otherTypes.zero.winnable=this.winnableN(0)},initializeNumbers:function(){for(var t=[10,18,28],e="red",r=1;r<=36;r++){var s={number:r,color:e,bets:{full:0,half:0,fourth:0,sixth:0},winnable:0},i=!t.includes(r);e=i?"red"==e?"black":"red":e,this.numbers.push(s);var n=Math.floor((r-1)/3);this.cols[n]||this.$set(this.cols,n,[]),this.cols[n].push(s)}},winnableN:function(t){var e=0;return this.bets.forEach((function(r){r.numbers.includes(t)&&(e+=r.payout)})),e},simulateN:function(){this.result.done=!1;for(var t=this.bets.length,e=this.credits+=t,r=0;r<this.simulations;r++){var s={before:e},i=Math.floor(37*Math.random()),n=this.winnableN(i),o=n-t;e+=o,s.after=e,s.profit=o,s.won=n,s.number=i,this.result.history.push(s)}this.result.profit=e-this.credits,this.result.profit_perc=100*(e/this.credits-1),this.credits=e,this.result.done=!0}},created:function(){this.initializeNumbers(),this.initializeOthers()}},_=m,y=(r("034f"),Object(b["a"])(_,i,n,!1,null,null,null)),w=y.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(w)}}).$mount("#app")},"64a9":function(t,e,r){},cd35:function(t,e,r){"use strict";var s=r("d83c"),i=r.n(s);i.a},d83c:function(t,e,r){}});
//# sourceMappingURL=app.92b581ec.js.map